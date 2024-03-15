import React, { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [RegisComplete, setRegisComplete] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  //SET OF ERROR
  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e, fieldId) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldId]: sanitizeInput(value),
    }));
    validateField(fieldId, value);
  };

  const sanitizeInput = (input) => {
    // Replace special characters with HTML entities
    return input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  };

  const validateField = (fieldId, value) => {
    let errors = { ...validationErrors };

    switch (fieldId) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value)) {
          errors[fieldId] = "Invalid email address.";
        } else {
          errors[fieldId] = "";
        }
        break;
      case "password":
        const capitalRegex = /[A-Z]/;
        const nonCapitalRegex = /[a-z]/;
        const specialCharRegex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
        const numberRegex = /[0-9]/;
        const spaceRegex = /\s/;

        errors[fieldId] = "";

        if (!capitalRegex.test(value)) {
          errors[fieldId] +=
            "Password must contain at least 1 capital letter.\n";
        }
        if (!nonCapitalRegex.test(value)) {
          errors[fieldId] +=
            "Password must contain at least 1 non-capital letter.\n";
        }
        if (!specialCharRegex.test(value)) {
          errors[fieldId] +=
            "Password must contain at least 1 special character.\n";
        }
        if (!numberRegex.test(value)) {
          errors[fieldId] += "Password must contain at least 1 number.\n";
        }
        if (value.length < 8) {
          errors[fieldId] += "Password must be at least 8 characters long.\n";
        }
        if (spaceRegex.test(value)) {
          errors[fieldId] += "Password must not contain any spaces.\n";
        }
        break;
      default:
        errors[fieldId] = "";
        break;
    }

    setValidationErrors(errors);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    //AXIOS
    try {
      const response = await axios.post(
        `http://localhost:5000/user/register`,
        formData
      );
      if (response.data !== null) {
        console.log(response.data);
        setRegisComplete(true);
      }
    } catch (error) {
      setRegisComplete(false);
      console.error("Error:", error);
    }
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
    setValidationErrors({});
  };

  const hasErrors =
    Object.values(validationErrors).some((error) => error !== "") ||
    Object.values(formData).some((value) => value === "");

  return (
    <center>
      <div className="flex flex-col text-lg text-black whitespace-nowrap max-w-[447px]">
        <h1 className="self-center text-4xl tracking-[2px]">Create account</h1>
        <form onSubmit={handleFormSubmit}>
          <InputField
            label="First name"
            value={formData.firstname}
            onChange={(e) => handleInputChange(e, "firstname")}
          />
          <InputField
            label="Last name"
            value={formData.lastname}
            onChange={(e) => handleInputChange(e, "lastname")}
          />
          <InputField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
            errorMessage={validationErrors["email"]}
          />
          <InputField
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
            errorMessage={validationErrors["password"]}
          />
          <div className="flex flex-col justify-center self-center mt-6 max-w-full text-base tracking-wider text-white w-[120px]">
            <button
              type="submit"
              className="justify-center px-10 py-4 bg-black rounded-3xl border border-black border-solid"
              disabled={hasErrors}
            >
              Create
            </button>
          </div>
        </form>
      </div>
      {RegisComplete && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
          <p>Your account has been created.</p>
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => setRegisComplete(false)}
          >
            Close
          </button>
        </div>
      </div>
    )}
    </center>
  );
}

function InputField({ label, type = "text", value, onChange, errorMessage }) {
  const [isValid, setIsValid] = useState(true);

  const handleValidation = () => {
    if (errorMessage) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className="flex flex-col justify-center mt-6 w-full">
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        onBlur={handleValidation}
        className={`justify-center items-start py-4 pr-16 pl-6 w-full bg-${
          isValid ? "white" : "gray-200"
        } rounded-3xl border border-black border-solid`}
      />
      {errorMessage && (
        <div className="text-red-500 mt-1 text-sm">
          {errorMessage.split("\n").map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
