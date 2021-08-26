import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput.js'
import ChatMessage from './ChatMessage.js'
import db from '../Firebase'
import {useParams} from 'react-router-dom'
import firebase from 'firebase'

const Chat = ({user}) => {

    let {channelId} = useParams();
    const [channel, setChannel] = useState() //store each channels data
    const [messages, setMessages] = useState([]) //save messages

    const getMessages = ()=>{
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map(message=>(
                message.data()
            ))
            console.log(messages)
            setMessages(messages)
        })
    }

    const getChannel = () =>{

        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data())
        })
    }

    //send messages to database
    const sendMessage = (text) =>{
        if(channelId){
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo
            }
            // console.log(payload)
            db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .add(payload)
        }
    }

    //when channel id changes
    useEffect(()=>{
        getChannel()
        getMessages()
    }, [channelId] )

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                           # {channel && channel.name} 
                    </ChannelName>   
                    <ChannelInfo>
                        Post Graduate Work Permit Questions
                    </ChannelInfo>
                </Channel>
            </Header>
            <MessageContainer>
                {
                    //if message>0 then (&&) create a component for that message
                    messages.length > 0 && 
                    messages.map((message, index)=>(
                        <ChatMessage 
                        user = {message.user} 
                        photo = {message.userImage} 
                        timestamp = {message.timestamp} 
                        text = {message.text}/>
                    ))
                }
            </MessageContainer>
            <ChatInput sendMessage = {sendMessage}/>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display:grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
`
const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83, .13);

`
const MessageContainer = styled.div`
    display:flex;
    flex-direction: column;
    overflow-y: scroll;
`
const Channel = styled.div``

const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight:400;
    color:#606060;
    font-size: 13px;
    margin-top: 8px;
`

const ChannelDetails = styled.div``