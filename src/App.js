import React, { Component } from 'react';
import Header from './common/header/index.js'
import Footer from './common/footer/index.js'
import Home from './pages/home'
import Note from  './pages/matter/loadable.js'
import Login from './pages/login'
import Writer from './pages/writeArticle'
import { GlobalStyle } from './style'
import { GlobalFont } from './statics/icon-font/iconfont'
import { Provider } from 'react-redux'
import store from './store'
import {BrowserRouter as Router,HashRouter,
  Route, Switch,withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <GlobalStyle />
          <GlobalFont />
          <Router>
          </Router>
        </div>
        <Router>
        {/* <HashRouter history={Router}> */}
          <withRouter>
            <Switch>
            <Route path='/login' exact component={Login} ></Route>
          <Route path='/writer' exact component={Writer}></Route>
          <Header/>
            </Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/note/:id' exact component={Note}></Route>
          </withRouter>
          </Router>
          {/* </HashRouter> */}
        <Footer></Footer>
      </Provider>
    );
  }
}

export default App;
