import axios from "axios";
import { useState } from "react";

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
      .post("http://localhost:8000/login", params)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
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
