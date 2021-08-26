import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import db, {auth} from './Firebase'
import {useEffect, useState} from 'react'

function App() {

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))) //converting the string to object

  const getChannels = () =>{
    db.collection('rooms').onSnapshot(snapshot=>{
      setRooms(snapshot.docs.map(doc=>(
         {
           id:doc.id,
           name:doc.data().name
         }
      )))
    })
  }

  //signout
  const signOut = ()=>{
    auth.signOut()
    .then(()=>{
      localStorage.removeItem('user')
      setUser(null)
    })
  }

  //on mount
  useEffect(()=>{
    getChannels()
  }, [])

  return (
    <div className="App">
     <Router>
       {
         !user? (
         <Login setUser={setUser}/>
         ) : (
        <Container>
          <Header username = {user.name} photo = {user.photo} signOut = {signOut}/>
          <Main>
            <Sidebar rooms = {rooms}/>
            <Switch>
              <Route path = "/room/:channelId"> {/*expecting a channel id*/}
                <Chat user = {user}/>
              </Route>
              <Route path = "/">
                Select or Create Channel
              </Route>
            </Switch>
          </Main>
        </Container>
         )}
     </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px  minmax(0,1fr);
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`