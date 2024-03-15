import * as React from "react";

function Header() {
  return (
    <header>
      <div className="justify-center items-center px-16 py-3 w-full text-sm tracking-wider text-white whitespace-nowrap bg-black max-md:px-5 max-md:max-w-full">
        welcome you to our world. 🌎
      </div>
      <nav className="flex justify-center items-center px-16 py-8 w-full text-sm tracking-wider text-black whitespace-nowrap bg-white shadow-sm max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1147px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between items-center my-auto max-md:flex-wrap max-md:max-w-full">
            <h1 className="grow self-stretch text-3xl font-bold tracking-widest">
              DEADSTOCK
            </h1>
            <div className="flex gap-2 self-stretch my-auto">
              <div className="my-auto">clothing</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca9a5e45fd2df9e49e64483dc0f5a809255417ad46f565b20f629cbe90d5b1d4?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                alt=""
                className="shrink-0 aspect-square w-[18px]"
              />
            </div>
            <div className="self-stretch my-auto">Shoes</div>
            <div className="grow self-stretch my-auto">Accessorires</div>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <div className="flex flex-col flex-1 justify-center self-stretch">
              <div className="flex gap-5 justify-between px-5 py-1.5 bg-white rounded-2xl border border-black border-solid">
                <div className="my-auto">Search</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c0aa996fc4584d547a77379de1f22e4cb30e4900b5b7d1f5c7ceed493d66ec8?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
                  alt=""
                  className="shrink-0 aspect-square w-[18px]"
                />
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/958a286ffd0e768cef7c402512f9df78b2526d5adad0c72e0dfb55b20703ff4c?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt=""
              className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3be0dbe071019cdd38d2d5fea243d0b5d03b797052b9cb7708b862fd40b2671?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
              alt=""
              className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

function LoginForm() {
  return (
    <form className="flex flex-col grow max-md:max-w-full">
      <h2 className="self-center text-4xl text-black tracking-[2px]">Login</h2>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        aria-label="Email"
        className="justify-center items-start py-4 pr-16 pl-6 mt-10 text-lg text-black whitespace-nowrap bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:max-w-full"
      />
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        aria-label="Password"
        className="justify-center items-start py-4 pr-16 pl-6 mt-6 text-lg text-black whitespace-nowrap bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:max-w-full"
      />
      <div className="mt-14 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-0.5 text-base tracking-wider text-black whitespace-nowrap max-md:mt-6">
              <div className="shrink-0 self-end mt-28 bg-black border border-black border-solid h-[7px] w-[150px] max-md:mt-10" />
              <div className="flex flex-col flex-1">
                <button
                  type="submit"
                  className="flex flex-col px-10 pt-4 pb-1 text-white bg-black rounded-3xl border border-black border-solid max-md:px-5"
                >
                  <span className="z-10">Sign in</span>
                  <span className="self-start ml-3 max-md:ml-2.5">
                    Sign in
                  </span>
                </button>
                <a href="#" className="mt-4 underline">
                  Create account
                </a>
                <div className="self-center mt-8">OR</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <div className="shrink-0 mx-auto mt-28 bg-black border border-black border-solid h-[7px] w-[150px] max-md:mt-10" />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="flex justify-center items-center px-16 py-3 mt-11 text-lg text-black whitespace-nowrap bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        <div className="flex gap-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8f47a17ad7f8a0a09584de79fccd4f4bb56cc4429e30672c0847ef4f260c1a?apiKey=c3d84cbd0c3a42f4a1616e4ea278d805&"
            alt=""
            className="shrink-0 aspect-square w-[25px]"
          />
          <span>Google</span>
        </div>
      </button>
    </form>
  );
}

function HeroSection() {
  return (
    <section className="self-center px-5 mt-14 max-w-full w-[702px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
          <div className="self-stretch my-auto text-3xl font-bold tracking-widest text-white max-md:mt-10">
            <h2 className="text-white">ขายเสื้อผ้ามือสองออนไลน์</h2>
            <p className="text-xs text-white">
              ขายเสื้อผ้า / รองเท้า มือสอง​ จากทั่วทุกมุมโลก
            </p>
            <p className="text-xs text-white">การันตีความสปลอดภัยระดับ A+</p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

export default function DeadstockLoginPage() {
  return (
    <div className="flex flex-col pb-20 bg-white">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}