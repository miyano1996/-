import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
// 懒加载
const Login = Loadable({
  loader: () => import('./pages/Login.js'),
  loading: () => <div>加载中...</div>
})
const Home = Loadable({
  loader: () => import('./pages/Home.js'),
  loading: () => <div>加载中...</div>
})
const Register = Loadable({
  loader:()=>import('./pages/Register.js'),
  loading:()=><div>加载中...</div>
})

function App() {
  return (
    <>
     <HashRouter>
<Switch>
    <Redirect exact path="/" to="/home"></Redirect>
    <Route path="/home" component={Home}></Route>
    <Route path="/Login" component={Login}></Route>
    <Route path="/Register" component={Register}></Route>
</Switch>
</HashRouter>
    </>
  );
}

export default App;
