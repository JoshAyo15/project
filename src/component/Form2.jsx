import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const Form2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const passwordStatus = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: formData.username,
      password: formData.password,
    };
    // const res = await axios.post('endpoint', userData)

    console.log(userData);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="text-4xl mb-2">Form 2</div>
      <form
        onClick={handleSubmit}
        className="flex flex-col gap-3 min-w-md md:min-w-lg"
      >
        <input
          type="text"
          placeholder="Enter Username"
          className="rounded-lg py-2 px-4 ring-1 ring-amber-500"
          value={formData.username}
          onChange={handleChange}
          name="username"
        />
        <div className="relative w-full flex items-center justify-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="********"
            className="rounded-lg py-2 px-4 ring-1 ring-amber-500 min-w-md md:min-w-lg"
            value={formData.password}
            onChange={handleChange}
            name="password"
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
          className="bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-md py-2 px-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form2;
