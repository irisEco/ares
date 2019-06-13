import React, { Component } from 'react';
import Header from './common/header/index.js'
import Footer from './common/footer/index.js'
import Home from './pages/home'
import Note from  './pages/matter'
import Login from './pages/login'
import { GlobalStyle } from './style'
import { GlobalFont } from './statics/icon-font/iconfont'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalStyle />
          <GlobalFont />
          <BrowserRouter>
          <Route path='/login' exact component={Login}></Route>
          </BrowserRouter>
        </div>
        <BrowserRouter>
          <div>
          <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/note/:id' exact component={Note}></Route>
          </div>
        </BrowserRouter>
        <Footer></Footer>
      </Provider>
    );
  }
}

export default App;
