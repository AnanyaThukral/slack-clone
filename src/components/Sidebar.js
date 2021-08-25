import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import {sidebarItems} from '../data/SidebarData'

const Sidebar = () => {


    return (
       <Container>
           <WorkSpaceContainer>
               <Name>
                   Ananya's Workspace
               </Name>
               <NewMessage>
                   <AddCircleOutline/>
               </NewMessage>
           </WorkSpaceContainer>
           <MainChannels>
           {sidebarItems.map(data=>(
               <MainChannelItem>
                    {data.icon}
                    {data.text}
               </MainChannelItem>
           ))}
           </MainChannels>
       </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background-color: #3f0E40;
    color:white;
`

const WorkSpaceContainer = styled.div`
    display:flex;
    height:64px;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const Name = styled.div``

const NewMessage = styled.div`
    width: 36px;
    background-color: white;
    height:36px;
    color:#3f0E40;
    fill:#3f0E40;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius: 50%;
    margin-right:20px;
    cursor:pointer;
`

const MainChannels = styled.div``

const MainChannelItem = styled.div`
    color:rgb(188,171,188);
    display: grid;
    grid-template-columns:15% auto;
    height:28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
`