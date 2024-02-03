import React from 'react'
import { useState } from 'react';
import Visible from './img/Icons/visible.png'
import Invisible from './img/Icons/invisible.png'
import Lock from './img/Icons/lock-50.png'
import Email from './img/Icons/email.png'
import Register from './Signup';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState(false);
  const [invalidmail, setInvalidMail] = useState(false);
  const [invalidpass, setInvalidPass] = useState(false);
  const [loginattemps, setLoginAttemps] = useState(false);
  const [missingpassword, setMissingPassword] = useState(false);
  const navigate = new useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target.elements.password.value;
    try
    {
      const res =await signInWithEmailAndPassword(auth,email,password);
      console.log(res.user);
      navigate('/');
    }
    catch(err)
    {
      err.code === "auth/user-not-found" ? setInvalidMail(true) : setInvalidMail(false);
      err.code === "auth/invalid-credential" ? setInvalidPass(true) : setInvalidPass(false);
      err.code === "auth/missing-password" ? setMissingPassword(true) : setMissingPassword(false); 
      err.code === "auth/too-many-requests" ? setLoginAttemps(true) : setLoginAttemps(false);
      err.code !== "auth/invalid-email" && err.code !== "auth/invalid-credential" && err.code !== "auth/too-many-requests" && err.code !=="auth/missing-password"? setErr(true) : setErr(false);
      console.log(err);
    }
  };
  return (
    <div>
      <div className='bg-[#E4C5FB] bg-loginbg relative flex items-center justify-center space-x-16 ' style={{ height: "100vh",backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
        <div className='bg-[#4cb69b]  bg-opacity-50 w-72 rounded-2xl mt-16 flex flex-col justify-center' style={{ height: "55vh" }}>
          <div className='bg-[#8ec0ce] bg-opacity-50 w-full rounded-2xl mt-auto' style={{ height: "55vh" }}>
            <div className='flex flex-col justify-center items-center'>
              <form onSubmit={handleSubmit}>
                <div className="description px-4 py-2 font-bold">
                  <span>Welcome back, to</span>
                  <p className="text-4xl text text-pink-500 pl-8 font-custom1"> PulseLink</p>
                </div>
                  <h1 className='text-3xl font-bold mt-2'>Login</h1>
                  <div className='flex flex-col justify-center items-center mt-6'>
                    <div className='relative'>
                      <input className='w-60 h-8 rounded-lg mb-4 pl-8' placeholder='Email' type='email'></input>
                      <img src={Email} className='absolute left-2 top-2 h-4 w-4'/>
                    </div>
                    <div className='relative'>
                      <input className='password w-60 h-8 rounded-lg mb-4 pl-8' placeholder='Password' type={showPassword ? 'text' : 'password'} id='password' name='password'></input>
                      <img
                        src={showPassword ? Invisible : Visible}
                        alt=''
                        className='absolute right-2 top-2 h-4 w-4 cursor-pointer'
                        onClick={togglePasswordVisibility}
                      />
                      <img src={Lock} className='absolute left-2 top-2 h-4 w-4'/>
                    </div>
                    <button className='w-60 h-10 rounded-lg mb-2 bg-[#4cb69b] text-white' type='submit'>Login</button>

                    {err && <span className='text-red-500'>Something went wrong!</span>}
                    {invalidmail && <span className='text-red-500'>User mail not registered</span>}
                    {invalidpass && <span className='text-red-500'>Incorrect password</span>}
                    {missingpassword && <span className='text-red-500'>Missing password!!!</span>}
                    {loginattemps && <span className='text-red-500'>Too many login attempts, try again later!</span>}
                  </div>
                  <div className='text-sm  text-gray-800 mt-4 text-center'>
                    Not registered? <Link to='/Signup' className='text-blue-600 underline  '>Register</Link>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login