import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [validated, setValidated] = useState(false);

  const inputFields = [
    { label: "Email", type: "email", id: "email" },
    { label: "Password", type: "password", id: "password" },
  ];

  const handleInputChange = (e, fieldId) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldId]: sanitizeInput(value),
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/user/login`,
        formData
      );

      if (response.data !== null) {
        const { access_token, refresh_token } = response.data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        setValidated(true);
      } else {
        console.error("have error");
        setValidated(false);
      }
    } catch (error) {
      setValidated(false);
      console.error("Error:", error);
    }
    setFormData({ email: "", password: "" });
  };

  const sanitizeInput = (input) => {
    return input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  };

  if (validated) {
    return <Navigate to="/" />;
  }
  return (
    <center>
      <div className="flex flex-col max-w-[447px]">
        <h1 className="self-center text-4xl text-black tracking-[2px]">
          Login
        </h1>
        <form className="mt-10" onSubmit={handleFormSubmit}>
          {inputFields.map((field) => (
            <InputField
              key={field.id}
              {...field}
              value={formData[field.id]}
              onChange={(e) => handleInputChange(e, field.id)}
            />
          ))}
          <div className="mt-3.5 w-full text-base tracking-wider text-black underline">
            Forgot password?
          </div>
          <div className="mt-8 w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-0.5 text-base tracking-wider text-black whitespace-nowrap">
                  <div className="shrink-0 self-end mt-28 bg-black border border-black border-solid h-[7px] w-[150px]" />
                  <div className="flex flex-col flex-1 px-5">
                    <button
                      type="submit"
                      className="flex flex-col justify-center text-white px-10 py-4 bg-black rounded-3xl border border-black border-solid"
                    >
                      Sign in
                    </button>
                    <div className="mt-4 underline">
                      <a href={`/register`}>Create account</a>
                    </div>
                    <div className="self-center mt-8">OR</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                <div className="shrink-0 mx-auto mt-32 bg-black border border-black border-solid h-[7px] w-[150px]" />
              </div>
            </div>
          </div>
        </form>
        <button className="flex justify-center items-center px-16 py-3 mt-11 w-full text-lg text-black whitespace-nowrap bg-white rounded-3xl border border-black border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8f47a17ad7f8a0a09584de79fccd4f4bb56cc4429e30672c0847ef4f260c1a?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt="Google logo"
            className="shrink-0 aspect-square w-[25px] mr-3"
          />
          Google
        </button>
      </div>
    </center>
  );
}

function InputField({ label, type, id, value, onChange }) {
  return (
    <div className="flex flex-col justify-center mb-6 w-full text-lg text-black whitespace-nowrap">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={label}
        className="justify-center items-start py-4 pr-16 pl-6 w-full bg-white rounded-3xl border border-black border-solid"
        aria-label={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default LoginForm;
