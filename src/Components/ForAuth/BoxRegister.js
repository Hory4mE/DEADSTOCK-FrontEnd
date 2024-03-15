import React, { useState } from "react";

function RegisterForm() {
  const [encrypted, setEncrypted] = useState(null); // State to store encrypted data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }); // State to store form data

  const handleInputChange = (e, fieldId) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldId]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Encrypt the form data and store it in encrypted state
    const encryptedData = JSON.stringify(formData);
    console.log("Encrypted data:", encryptedData);
    setEncrypted(encryptedData);
    // Clear form data after encryption
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <center>
      <div className="flex flex-col text-lg text-black whitespace-nowrap max-w-[447px]">
        <h1 className="self-center text-4xl tracking-[2px]">Create account</h1>
        <form onSubmit={handleFormSubmit}>
          <InputField
            label="First name"
            value={formData.firstName}
            onChange={(e) => handleInputChange(e, "firstName")}
          />
          <InputField
            label="Last name"
            value={formData.lastName}
            onChange={(e) => handleInputChange(e, "lastName")}
          />
          <InputField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <InputField
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
          <div className="flex flex-col justify-center self-center mt-6 max-w-full text-base tracking-wider text-white w-[120px]">
            <button
              type="submit"
              className="justify-center px-10 py-4 bg-black rounded-3xl border border-black border-solid"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </center>
  );
}

function InputField({ label, type = "text", value, onChange }) {
  return (
    <div className="flex flex-col justify-center mt-6 w-full">
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        className="justify-center items-start py-4 pr-16 pl-6 w-full bg-white rounded-3xl border border-black border-solid"
      />
    </div>
  );
}

export default RegisterForm;
