import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Avatar } from '@material-ui/core';

const Header = () => {
    return (
        <Container>
            <Main>
                <AccessTimeIcon/>
                <SearchContainer>
                    <Search>
                        <input type = "text" placeholder="Search..."></input>
                    </Search>
                </SearchContainer>
            </Main>
            <UserContainer>
                <Name>
                    Ananya
                </Name>
                <Avatar style= {{height:'30px', width:'30px'}} src="/static/images/avatar/1.jpg">
                    A
                </Avatar>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    background:#350d36;
    color:white;
    justify-content: space-between;
    align-items:center;
`

const Main = styled.div`
    display: flex;
`

const UserContainer = styled.div`
    display: flex;
    align-items:center;
    padding-right:16px;
`

const SearchContainer = styled.div`
    min-width:400px;
`

const Search = styled.div`
    width:100%;
    box-shadow:inset 0 0 0 1px rgb(104 74 104);
    border-radius: 6px;

    input{
        width:100%;
        background-color:transparent;
        border:none;
        padding: 4px 8px;
        color:white;
    }
    input:focus{
        outline:none;
    }
`

const Name = styled.div`
padding-right: 16px;
`

