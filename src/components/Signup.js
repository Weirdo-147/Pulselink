import React from 'react'
import { useState } from 'react';
import Visible from './img/Icons/visible.png'
import Invisible from './img/Icons/invisible.png'
import Lock from './img/Icons/lock-50.png'
import Email from './img/Icons/email.png'
import User from './img/Icons/user.png'
import addImage from './img/Icons/add-image.png'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage,db} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [showPassword1, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = new useNavigate();

  const togglePasswordVisibility1 = () => {
    setShowPassword(!showPassword1);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    const file = e.target[4].files[0];
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    try
    {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      

      const storageRef = ref(storage, 'images/' + username);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setErr(true);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user,{
              displayName: username,
              photoURL: downloadURL,
            });
            console.log("User profile updated!");
            await setDoc(doc(db,"users",res.user.uid),{
              uid:res.user.uid,
              username,
              email,
              photoURL:downloadURL,
            })
            console.log("User added to database!");
            await setDoc(doc(db,"userChats",res.user.uid),{});
            navigate('/');
          });
        }
        
      );
        
    }
    catch(error)
    {
      setErr(true);
    }
   
  

  };

  return (
    <div>
      <div className='bg-[#E4C5FB] bg-signupbg2 relative flex items-center justify-center space-x-16 ' style={{ height: "100vh",backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
        <div className='bg-[#4cb69b] bg-opacity-50 w-60 rounded-lg mb-20' style={{ height: "75vh" }}>
        <div className="description px-4 py-2 font-bold">
          <span>Welcome to</span>
          <p className="text-4xl text text-pink-500 pl-8 font-custom1"> PulseLink</p>
          <img src='https://cdn.onplo.com/onplo/images/site/handshake.gif' alt='' className=''/>
          <p className=' font-custom text-lg text-center text-purple-700'>
          Your one-stop platform for efficient collaboration and communication. We provide a unified space for idea sharing, task management, and staying connected. 
          </p>
          <p className=' mt-1 font-serif text-sm text-center'>
          Join us and experience productivity at its best.
          </p>
        </div>
        </div>
        <div className='bg-[#4cb69b]  bg-opacity-50 w-72 rounded-2xl mt-16 flex flex-col justify-center' style={{ height: "70vh" }}>
          <div className='bg-[#b4e7da] bg-opacity-50 w-full rounded-2xl mt-auto' style={{ height: "62vh" }}>
            <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
              <h1 className='text-3xl font-bold mt-6'>Sign Up</h1>
              <div className='flex flex-col justify-center items-center mt-6'>
                <div className='relative'>
                  <input className='w-60 h-8 rounded-lg mb-4 pl-8' placeholder='Username'></input>
                  <img src={User} className='absolute left-2 top-2 h-4 w-4'/>
                </div>
                
                <div className='relative'>
                  <input className='w-60 h-8 rounded-lg mb-4 pl-8' placeholder='Email'></input>
                  <img src={Email} className='absolute left-2 top-2 h-4 w-4'/>
                </div>
                
                <div className='relative'>
                  <input className='w-60 h-8 rounded-lg mb-4 pl-8' placeholder='Password' type={showPassword1 ? 'text' : 'password'}></input>
                  <img
                    src={showPassword1 ? Invisible : Visible}
                    alt=''
                    className='absolute right-2 top-2 h-4 w-4 cursor-pointer'
                    onClick={togglePasswordVisibility1}
                  />
                  <img src={Lock} className='absolute left-2 top-2 h-4 w-4'/>
                </div>
                <div className='relative'>
                  <input className='w-60 h-8 rounded-lg mb-4 pl-8' placeholder='Confirm Password' type={showPassword2 ? 'text' : 'password'}></input>
                  <img
                    src={showPassword2 ? Invisible : Visible}
                    alt=''
                    className='absolute right-2 top-2 h-4 w-4 cursor-pointer'
                    onClick={togglePasswordVisibility2}
                  />
                  <img src={Lock} className='absolute left-2 top-2 h-4 w-4'/>
                </div>
                <div className='mb-4'>
                  <label htmlFor='fileUpload' className='cursor-pointer'>
                    <img src={addImage} alt='Upload Icon' className='inline-block mr-2 h6 w-6'/>
                  </label>
                  <span className='text-sm text-gray-700'>Upload Profile Picture</span>
                  <input
                    id='fileUpload'
                    type='file'
                    src=''
                    alt=''
                    className='hidden'
                    accept='image/*'
                  />
                </div>
                <button className='w-60 h-10 rounded-lg mb-2 bg-[#4cb69b] text-white'  onSubmit={handleSubmit}>Sign Up</button>
                {err && <span className='text-red-500'>Something went wrong!</span>}
              </div>
              <div className='text-sm text-gray-500 mt-2'>
                Already registered? <Link to='/Login' className='text-blue-600 underline  '>Login</Link>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Signup