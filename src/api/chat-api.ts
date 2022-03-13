
const subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[]
}

let ws: WebSocket | null = null;

type EventsType = 'messages-received' | 'status-changed'

const closeEventHandler = () => {
    setTimeout(createConnection, 3000)
}

const onMessageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers['messages-received'].forEach(s => s(newMessages))
}

const onOpenHandler = () => {
    sendStatusToSubscribers('ready')
}

const onErrorHandler = () => {
    sendStatusToSubscribers('error')
    console.error('REFRESH PAGE!')
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeEventHandler)
    ws?.removeEventListener('message', onMessageHandler)
    ws?.removeEventListener('open', onOpenHandler)
    ws?.removeEventListener('error', onErrorHandler)
}

const sendStatusToSubscribers = (status: StatusType) => {
    subscribers['status-changed'].forEach(s => s(status))
}

function createConnection() {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    sendStatusToSubscribers('pending')
    ws.addEventListener('close', closeEventHandler)
    ws.addEventListener('message', onMessageHandler)
    ws.addEventListener('open', onOpenHandler)
    ws.addEventListener('error', onErrorHandler)
}

export const chatAPI = {
    start() {
        createConnection()
    },
    stop() {
        cleanUp()
        ws?.close()
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
            }
    ,
    subscribe(event: EventsType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[event].push(callback)
        return () => {
            // @ts-ignore
            subscribers[event] = subscribers[event].filter(s => s !== callback)
        }
    },
    unsubscribe(event: EventsType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[event] = subscribers[event].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }

}

type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void
type StatusChangedSubscriberType = (status: StatusType) => void
export type StatusType = 'pending' | 'ready' | 'error'

export type ChatMessageAPIType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export type ChatMessageType = ChatMessageAPIType & {id: string}
