import React from 'react';
import './assets/style/index.scss';
import { Provider } from 'react-redux';
import store from '../src/store/index';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
// 懒加载
//管理员登录页面
const AdminLogin = Loadable({
  loader: () => import('./pages/loginAndRegister/AdminLogin.js'),
  loading: () => <div>加载中...</div>
})
const Home = Loadable({
  loader: () => import('./pages/Home.js'),
  loading: () => <div>加载中...</div>
})

const FirstPage = Loadable({
  loader: () => import('./pages/FirstPage.js'),
  loading: () => <div>加载中...</div>
})

function App() {
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Redirect exact path="/" to="/home"></Redirect>
            <Route path="/firstPage" component={FirstPage}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/adminLogin" component={AdminLogin}></Route>
          </Switch>
        </HashRouter>
      </Provider>
    </>
  );
}

export default App;
