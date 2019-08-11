import React from 'react';
import './App.css';
import './assets/css/common.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import router from './router';
import GuardRouter from './router/GuardRouter';
import 'antd/dist/antd.css';

import AnimatedSwitch from './AnimatedSwitch';

function App() {
  return (
    <div className="App">
        <Router>
          <AnimatedSwitch>
            {
              router.map((v,i)=>{
                return (
                  <Route key={i} path={v.path} exact={v.exact} render={()=><GuardRouter {...v} />}></Route>
                )
                
              })
            }

          </AnimatedSwitch>
        </Router>
    </div>
  );
}

export default App;
