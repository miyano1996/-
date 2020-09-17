import React from 'react';
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
const Register = Loadable({
  loader: () => import('./pages/loginAndRegister/Register.js'),
  loading: () => <div>加载中...</div>
})
const Login = Loadable({
  loader: () => import('./pages/loginAndRegister/Login.js'),
  loading: () => <div>加载中...</div>
})

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Redirect exact path="/" to="/Home"></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/adminLogin" component={AdminLogin}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route path="/Login" component={Login}></Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
