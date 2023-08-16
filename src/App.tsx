import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axioInstance from "./config/axiosInstance";
import { AxiosResponse } from "axios";

function App() {
  const [email, setEmail] = React.useState<string>("superadmin@example.com");
  const [password, setPassword] = React.useState<string>("password");
  const [response, setResponse] = React.useState<AxiosResponse<any, any>>();
  const onSubmit = React.useCallback(async () => {
    await axioInstance
      .post("/api/login", { email, password })
      .then((res) => setResponse(res))
      .catch((err) => console.log(err));
  }, [email, password]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onSubmit}>Login</button>
        {JSON.stringify(response?.data)}
      </header>
    </div>
  );
}

export default App;
