import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {Route} from "react-router-dom";
import ContainerDialogs from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path='/profile/:userId?' render={() => 
            <ProfileContainer />}
              />

          <Route path='/dialogs' render={() => 
            <ContainerDialogs 
              store={props.store}
              dispatch={props.dispatch}/>}
            />

          <Route path='/news' 
            component={News}/>
          <Route path='/music' 
            component={Music}/>

          <Route path='/users' component={UsersContainer} />

          <Route path='/setting' 
            component={Setting}/>
        </div>
      </div>
    
  );
};

export default App;

