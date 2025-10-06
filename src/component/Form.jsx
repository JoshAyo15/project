import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const handleUsernameChange = (e)=> {
  // setUsername(e.target.value)
  // }

  // const handlePasswordChange =(e)=> {
  //     setPassword(e.target.value)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password,
    };
    // const res = await axios.post('endpoint', userData)

    console.log(userData);
  };

  const passwordStatus = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="size-20 bg-blue-700 sm:bg-purple-500 md:bg-black 1g:bg-red-700 rounded-md sm:rounded-2xl md:rounded-4xl 1g-rounded-full"></div>
      <form
        onClick={handleSubmit}
        className="flex flex-col gap-3 min-w-md md:min-w-lg"
      >
        <input
          type="text"
          placeholder="Enter Username"
          className="rounded-lg py-2 px-4 ring-1 ring-amber-500"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <div className="relative w-full flex items-center justify-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="********"
            className="rounded-lg py-2 px-4 ring-1 ring-amber-500 min-w-md md:min-w-lg"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="absolute right-3 text-neutral-400">
            {showPassword ? (
              <EyeOff onClick={passwordStatus} />
            ) : (
              <Eye onClick={passwordStatus} />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-md py-2 px-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
