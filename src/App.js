import React from "react";
import Counter from "./components/Counter/counter"
import LoginForm from "./components/LoginForm/login-form"
import UnmouthingTracker from "./components/UnmouthingTracker/unmouthing-tracker"
import Search from "./components/Search/search"
import './App.css';

function App() {
  return (
        <div>
          <Counter />
          <LoginForm />
          <UnmouthingTracker />
          <Search />
        </div>
      );
    }


export default App;
