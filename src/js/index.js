//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import TodoListApi from "./component/TodoLisApi.jsx";

//render your react application
ReactDOM.render(<TodoListApi/>, document.querySelector("#app"));
