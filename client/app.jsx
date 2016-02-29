import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderCard from './components/bases/headerCard/headerCard.jsx';
import PlainCard from './components/bases/plainCard/plainCard.jsx';
import Header from './components/containers/header/header.jsx';
import Content from './components/containers/content/content.jsx';
import Login from './components/Login/login.jsx';
import Signup from './components/Signup/signup.jsx';

import './app.less';

class App extends Component {

  render() {
    if (this.props.loggedIn) {
      return (<HeaderCard
              className='got-app'
              headerContent={<Header/>}
              bodyContent={<Content/>}
            />);
    }

    if (this.props.authDisplay === 'LOGIN') {
      return (<PlainCard bodyContent={<Login/>}/>);
    } else {
      return (<PlainCard bodyContent={<Signup/>}/>);
    }
  }
}

const select = (state) => {
  return {
    loggedIn: state.ui.loggedIn,
    authDisplay: state.ui.authDisplay
  }
}

export default connect(select)(App);