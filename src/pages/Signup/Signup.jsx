import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import './Signup.css'




const Signup = () => {
  const { register,handleSubmit,formState:{errors} } = useForm("");
  const [signUpError,setSignUpError] = useState('');
  const {createUser,updateUser,googleLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();



const handleSignUp =(data) => {

  console.log(data);
  setSignUpError('')
  createUser(data.email, data.password)
  .then(result => {
    const user = result.user;
    console.log(user);
    toast.success('User created successfully');
    navigate('/')
    const userInfo = {displayName : data.name}
    updateUser(userInfo)
    .then(()=> {
      saveUser(data.name,data.email)
    })
    .catch(err => console.log(err))
  })
  .catch(err => {
    console.log(err)
   setSignUpError(err.message)
  })
};

const saveUser = (name,email)=>{
  const user = {name,email};
  fetch('https://perlour-app-server.vercel.app/users',{
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
    console.log("saveuser",data)
    navigate('/')
  })
}

const handleGoogleLogin = () =>{
  googleLogin(googleProvider)
  .then(result =>{
    const user = result.user;
    console.log(user);
    toast.success('User created successfully');
    navigate('/')
  })
  .catch(err => console.error(err.message))
}
  


    return (
      <div className="h-[600px] flex justify-center items-center bg-gray-200">
      <div className="w-96 px-7 rounded-lg shadow-2xl ">
        <h2 className="text-3xl text-center font-bold text-pink-600  my-6">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text"  {...register("name",{required:"name is required"})} className="input input-bordered" />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}

          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email",{required:'email is required'})} className="input input-bordered" />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}

          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password",{required:"Password is required",
        minLength:{value:6,message:"Password must be at least 6 characters"},
        })} className="input input-bordered" />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          <input
            type="submit"
            className="btn bg-pink-500 border-none hover:bg-pink-600 w-full text-white mt-5"
            value="signup"
          />
          <div>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </div>
        </form>
        <p className="my-4">
          Already have an Account??{" "}
          <Link to="/login" className="text-secondary">
            Please Login
          </Link>
        </p>
        <div className="text-center mb-4 divider">OR</div>
        <input
          type="submit"
          className="btn bg-pink-600 hover:bg-pink-700 border-none mb-6 w-full"
          value="CONTINUE WITH GOOGLE"
          onClick={handleGoogleLogin}
        />
      </div>
    </div>
    );
};

export default Signup;