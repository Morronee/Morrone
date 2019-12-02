import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {Route, withRouter} from "react-router-dom";
import ContainerDialogs from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login';
import { connect } from 'react-redux';

import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader';




class App extends React.Component  {

  componentDidMount() {
    this.props.initializeApp()
    console.log('app')
  }
  
  render(){
    if (!this.props.initialized) {
      return <Preloader />
    }


  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path='/profile/:userId?' render={() => 
            <ProfileContainer />}
              />
          <Route path='/login' 
            component={Login}/>

          <Route path='/dialogs' render={() => 
            <ContainerDialogs 
            
              />}
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
    
  );}
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

