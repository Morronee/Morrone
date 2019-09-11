import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {Route} from "react-router-dom";
import ContainerDialogs from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';


const App = (props) => {
  debugger;
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path='/profile' render={() => 
            <Profile  />}
              />

          <Route path='/dialogs' render={() => 
            <ContainerDialogs />}
            />
          <Route path='/users' render={() => 
            <Users />}
            />

          <Route path='/news' 
            component={News}/>
          <Route path='/music' 
            component={Music}/>

          <Route path='/setting' 
            component={Setting}/>
        </div>
      </div>
    
  );
};

export default App;

