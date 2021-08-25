import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

const ChatInput = () => {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type = "text" placeholder = "Message here..."></input>
                    <SendButton>
                        <Send/>
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding: 0 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form{
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input{
            flex: 1;
            outline: none;
            border:none;
            font-size:13px;
        }
    }
    
`

const SendButton = styled.div`
    background-color: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;
    .MuiSvgIcon-root{
        width: 18px;
    }
    :hover{
        background-color: #148567;
    }
`

const Send = styled(SendIcon)`
    color:#D9D9D9
`