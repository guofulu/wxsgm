import React from 'react';
import './App.css';
import './assets/css/common.css'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import router from './router';
import GuardRouter from './router/GuardRouter';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
        <Router>
            {
              router.map((v,i)=>{
                return (
                  <Route key={i} path={v.path} exact={v.exact} render={()=><GuardRouter {...v} />}></Route>
                )
                
              })
            }
        </Router>
    </div>
  );
}

export default App;
