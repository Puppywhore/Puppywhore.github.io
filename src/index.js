import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route } from "react-router-dom";
import {Provider} from "react-redux";
import Store from "./redux/Redux";
import Sidebar from "./containers/Sidebar"
import Main from "./containers/Mainbody"

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={Sidebar}/>
                <Route path="/" component={Main}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();    
