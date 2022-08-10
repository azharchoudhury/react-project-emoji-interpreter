import "./styles.css";
import React from "react";

var welcome = "Welcome";
var color = "blue";
var user = "Azhar";
var username = prompt("Can we please have your name?");
// var username = prompt("Hello! May we know your name please");
// var welcomeMessage = "Welcome to react class " +username;
// alert(welcomeMessage);

export default function App() {
  return (
    <div className="App">
      <h1>
        {" "}
        {welcome} <span style={{ color: color }}>{username}</span>
      </h1>
    </div>
  );
}
