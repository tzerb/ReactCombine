
// TODO TZ - I couldn't make this work w/o using require.  It did work when set up with es5 but hot reloading didnt'
///<reference path="..\typings\globals\require\index.d.ts" />

// import * as injectTapEventPlugin from 'react-tap-event-plugin';
let injectTapEventPlugin = require('react-tap-event-plugin');

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import Main from './Main'; // Our custom react component

try
{
    injectTapEventPlugin();
}
catch(e)
{
    alert('error injectTapEventPlugin')
}

ReactDOM.render(
    <Main/>,
    document.getElementById("example")
);