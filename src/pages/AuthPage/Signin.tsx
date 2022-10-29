import React, { SyntheticEvent } from "react";
import { login } from "../../services/api/auth";

const Signin = () => {
  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    login({
      username: "sanders",
      password: "olufemi123",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form
      className="flex flex-col mx-auto border-2 w-[50%]"
      onSubmit={handleLogin}
    >
      <input
        placeholder="Username"
        type={"text"}
        className="border-2 h-[40px]"
      />

      <input
        placeholder="Password"
        type="password"
        className="my-4 border-2 h-[40px]"
      />
      <button className="bg-purple h-[40px] p-2 text-white">submit</button>
    </form>
  );
};

export default Signin;
