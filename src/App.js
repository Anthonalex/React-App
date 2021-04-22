import React from "react";
import Counter from "./components/Counter/counter";
import LoginForm from "./components/LoginForm/login-form";
import UnmountingCountTracker from "./components/UnmouthingTracker/UnmountingCountTracker";
import Search from "./components/Search/search";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />
      <br></br>
      <br></br>
      <br></br>
      <LoginForm />
      <br></br>
      <br></br>
      <br></br>
      <UnmountingCountTracker />
      <br></br>
      <br></br>
      <br></br>
      <Search />
    </div>
  );
}

export default App;
