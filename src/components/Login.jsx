import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function Login1() {
    console.log(username, password);
  }
  return (
    <>
      <section className="">
        <div className="container pt-10">
          <form className=" bg-slate-400 p-8 w-[40%] m-auto rounded-2xl " onSubmit={(e) => e.preventDefault()}>
            <label className="block font-semibold text-blue-800 my-1" htmlFor="username">
              User Name <span className=" text-red-600">*</span>
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="outline-none border-2 border-solid border-blue-500 rounded-md w-full py-1 placeholder:p-1"
              placeholder="Enter Your Username"
              type="text"
              required
              autoFocus
              id="username"
            />
            <label className="block font-semibold text-blue-800 my-1" htmlFor="password">
              Password <span className=" text-red-600">*</span>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-2 border-solid border-blue-500 rounded-md w-full py-1 placeholder:p-1 "
              placeholder="Enter Your Password"
              type="password"
              required
              id="password"
            />
            <button onClick={Login1} className=" bg-blue-900 rounded-md w-full text-lg text-white my-6 py-2">
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
