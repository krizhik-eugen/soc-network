import React, {useEffect, useRef, useState} from 'react';
import {ChatMessageAPIType} from '../../api/chat-api';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage, startMessaging, stopMessaging} from '../../redux/chatReducer';
import {AppStateType} from '../../redux/redux-store';


const ChatPage: React.FC = () => {
    return <div>
        <Chat/>
    </div>
}

export default ChatPage

const Chat: React.FC = () => {
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessaging())
        return () => {
            dispatch(stopMessaging())
        }
    }, [])


    return <div>
        {status === 'error' && <div>Some error occurred! Refresh the page.</div>}
        <Messages/>
        <AddMessageForm/>
    </div>
}

const Messages: React.FC<{}> = React.memo(({}) => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const lastMessageAnchor = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    useEffect(() => {
        isAutoScroll && lastMessageAnchor.current?.scrollIntoView({behavior: 'smooth'})
    }, [messages])

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 250) {
            !isAutoScroll && setIsAutoScroll(true)
        }
        isAutoScroll && setIsAutoScroll(false)
    }

    return <div style={{
        height: '400px',
        overflowY: 'auto'
    }} onScroll={scrollHandler}>
        {messages && messages.map(m => <Message key={m.id} message={m}/>)}
        <div ref={lastMessageAnchor}></div>
    </div>
})


const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {
    console.log('====>>>>> Message rendered')
    return <div>

        <img src={message.photo}/>
        <b>{message.userName}</b>
        <br/>
        {message.message}
    </div>
})

const AddMessageForm: React.FC<{}> = ({}) => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const status = useSelector((state: AppStateType) => state.chat.status)

    const sendMessageHandler = () => {
        if (!message) return
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button disabled={status === 'pending'} onClick={sendMessageHandler}>Send</button>
        </div>
    </div>
}


