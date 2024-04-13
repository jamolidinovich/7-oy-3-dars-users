import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UserTable from "./UserTable";
import "./App.css";
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <h1 className="user">Users</h1>
          <UserTable />
        </div>
      </div>
    </Provider>
  );
};

export default App;
