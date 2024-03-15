import * as React from "react";

function InputField({ label, type = "text" }) {
  return (
    <div className="flex flex-col justify-center mt-6 w-full">
      <div className="justify-center items-start py-4 pr-16 pl-6 w-full bg-white rounded-3xl border border-black border-solid">
        {label}
      </div>
    </div>
  );
}

function RegisterForm() {
  return (
    <center>
      <div className="flex flex-col text-lg text-black whitespace-nowrap max-w-[447px]">
        <h1 className="self-center text-4xl tracking-[2px]">Create account</h1>
        <form>
          <InputField label="First name" />
          <InputField label="Last name" />
          <InputField label="Email" type="email" />
          <InputField label="Password" type="password" />
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

export default RegisterForm;
