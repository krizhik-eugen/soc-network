let subscribers = [] as SubscriberType[]

let ws: WebSocket | null = null;

const closeEventHandler = () => {
    setTimeout(createConnection, 3000)
}

const onMessageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages))
}

function createConnection() {
    ws?.removeEventListener('close', closeEventHandler)
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeEventHandler)
    ws.addEventListener('message', onMessageHandler)
}

export const chatAPI = {
    start() {
        createConnection()
    },
    stop() {
        ws?.close()
        ws?.removeEventListener('close', closeEventHandler)
        ws?.removeEventListener('message', onMessageHandler)
        subscribers = []
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }

}

type SubscriberType = (messages: ChatMessageType[]) => void

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
