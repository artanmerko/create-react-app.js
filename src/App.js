import React, { Component } from "react";
import './App.css';
// import  Greet  from './components/Greet';
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Hello from "./components/Hello";
// import Counter from "./components/Counter";
//import FunctionClick from "./components/FunctionClick";
//import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";

class App extends Component{
  render() {
    return (
      <div className="App">
      {/* <Greet name="Bruce" heroName="Batman"> */}
          {/* <p>This is children props</p></Greet> */}
         {/* <Greet name="Clark" heroName="Superman"> */}
           {/* <button>Action</button></Greet>*/}
        {/* <Greet name="Diana" heroName="Wonder Women"/> */}
        {/* <Welcome name="Bruce" heroName="Batman"/> */}
        {/* <Welcome name="Clark" heroName="Superman"/> */}
       {/* <Welcome name="Diana" heroName="Wonder Women"/> */}
         {/* <Hello /> */}
        {/* <Message /> */}
         {/* <Counter />  */}
         {/* <FunctionClick /> */}
         {/* <ClassClick /> */}
         {/* <EventBind /> */}
         {/* <ParentComponent /> */}
         <UserGreeting />
      </div>
    );
  }
}

export default App;