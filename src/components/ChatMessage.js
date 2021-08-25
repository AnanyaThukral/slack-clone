import React from 'react'
import styled from 'styled-components'

const ChatMessage = () => {
    return (
        <Container>
            <UserAvatar>
                <img src = "https://marvel-b1-cdn.bc0a.com/f00000000209359/www.recruitguelph.ca/cecs/sites/default/files/Ananya%20Thukral_Headshot%20%281%29%20%281%29_1.jpg"/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Ananya Thukral
                    <span>25/08/2021 03:22:55 AM</span>
                </Name>
                <Text>
                    This is great! Lets goooo!
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding:8px 20px;
    display:flex;
    align-items: center;
`
const MessageContent= styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    span{
        margin-left: 8px;
        font-weight: 400;
        color:  rgba(97,96,97);
        font-size: 13px;
    }
`

const Text = styled.span`
`

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 2px;
    margin-right: 8px;
    overflow: hidden;
    img{
        width: 100%;
    }
`