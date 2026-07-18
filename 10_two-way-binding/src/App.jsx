import { useState } from "react";

export const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by", userName);
  };

  const [userName, setUserName] = useState("");

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-600 p-10 mt-10 rounded-lg text-amber-50">
        <div className="flex flex-col justify-center items-center gap-3 text-center mb-6">
          <img
            className="w-20 h-20 rounded-full border border-amber-600 p-1"
            src="https://img.magnific.com/free-vector/gradient-hub-logo-template_23-2149847151.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Company Logo"
          />

          <h1>Welcome Back</h1>
        </div>

        <div>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            action=""
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="flex items-center justify-between gap-4">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                id="userName"
                placeholder="Enter UserName"
                className="border border-amber-50 rounded-lg pl-1"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <label htmlFor="pass">Password</label>
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={""}
                type="text"
                id="pass"
                placeholder="Enter PassWord"
                className="border border-amber-50 rounded-lg pl-1"
              />
            </div>
            <button className="bg-gray-300 text-black py-1 px-4 rounded-full cursor-pointer mt-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
