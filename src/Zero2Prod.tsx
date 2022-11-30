import axios from "axios";
import { useState } from "react";

const SERVER_URL =
  process.env.REACT_APP_SERVER_URL ?? "http://localhost:3000";

const Zero2Prod = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const changePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const changeUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const login = () => {
    const params = new URLSearchParams();

    params.append("password", password);
    params.append("username", username);

    axios
      .post(SERVER_URL + "/login", params)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <p>
        Server URL: <a href={SERVER_URL}>{SERVER_URL}</a>
      </p>
      <label>
        Username{" "}
        <input
          type="text"
          onChange={changeUsername}
          placeholder="Enter Username"
          name="username"
        />{" "}
      </label>
      <label>
        Password{" "}
        <input
          type="password"
          onChange={changePassword}
          placeholder="Enter Password"
          name="password"
        />{" "}
      </label>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Zero2Prod;
