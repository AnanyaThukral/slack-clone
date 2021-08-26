import React from 'react'
import styled from 'styled-components'
import {auth, provider} from '../Firebase'

const Login = ({setUser}) => {

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            let newUser= {
                name:result.user.displayName,
                photo:result.user.photoURL
            }
            //saving user in local storage and converting to string for browser to read
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <Container>
            <Content>
                <SlackImg src = "https://toppng.com/uploads/preview/slack-new-logo-icon-11609376883z32jbkf8kg.png"/>
                <h1>Sign In Slack</h1>
                <SingInButton onClick = {signIn}>
                    Sign In With Google
                </SingInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width:100%;
    height:100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    background-color: white;
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 /24%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SlackImg = styled.img`
    height: 100px;
`

const SingInButton = styled.button`
    margin-top: 50px;
    background-color: #0a8d48;
    color:white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    padding: 10px;
`