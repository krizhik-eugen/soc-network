import React, {useEffect, useState} from 'react';
import {ChatMessageType} from '../../api/chat-api';
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

    useEffect(() => {
        dispatch(startMessaging())
        return () => {
            dispatch(stopMessaging())
    }}, [])


    return <div>
        <Messages />
        <AddMessageForm />
    </div>
}

const Messages: React.FC<{ }> = ({}) => {
    const messages = useSelector((state:AppStateType) => state.chat.messages)

    return <div style={{
        height: '400px',
        overflowY: 'auto'
    }}>
        {messages && messages.map((m, index) => <Message key={index} message={m}/>)}
    </div>
}


const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    // const message: ChatMessageType = {
    //     userId: 1,
    //     photo: 'https://i.pravatar.cc/50',
    //     userName: 'user',
    //     message: 'Hello world!'
    // }

    return <div>

        <img src={message.photo}/>
        <b>{message.userName}</b>
        <br/>
        {message.message}
    </div>
}

const AddMessageForm: React.FC<{ }> = ({}) => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    const onOpenStatusHandler = () => {
        setReadyStatus('ready')
    }

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
            <button disabled={false} onClick={sendMessageHandler}>Send</button>
        </div>
    </div>
}


