import React from "react";
import ReactDOM from "react-dom/client";
/***
 *
 * <div id="parent"> 
 *  <div id ="child 1"> 
 *  <h1>I'm Chandan Kushwaha </h1>
 * <h2>I'm Chandan Kushwaha </h2>
 * </div>
 * 
 * <div id ="child 2"> 
 *  <h1>I'm Chandan Kushwaha </h1>
 * <h2>I'm Chandan Kushwaha </h2>
 * </div>
 * </div>
 *
 *  ReactElement(Objects) => HTML(Browser Understand)
 */
const parent = React.createElement("div", {id: "parent"},
    [ React.createElement("div", {id: "child1"},
   [React.createElement("h1", {}, "I'm Chandan Kushwaha"),
     React.createElement("h2", {}, "I'm Sintu Kushwaha")]
    ),
    React.createElement("div", {id: "child1"},
   [React.createElement("h1", {}, "I'm Chandan Kushwaha"),
     React.createElement("h2", {}, "I'm Sintu Kushwaha")]
    )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

