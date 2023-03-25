import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
  const [loginError,setLoginError] = useState('');
  const { register,handleSubmit,formState:{errors} } = useForm("");
  const {signIn,googleLogin} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation() ;
  const googleProvider = new GoogleAuthProvider();


  const from = location.state?.from?.pathName || '/';

  const handleLogin = (data) => {
    setLoginError('')
    signIn(data.email,data.password)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace : true});
    })
    .catch(err => {
      console.log(err)
      setLoginError(err.message)
    })
  };

  const handleGoogleLogin = () =>{
    googleLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate('/')
    })
    .catch(err => console.error(err.message))
  }



    return (
      <div className="h-[600px] flex justify-center items-center bg-gray-200">
      <div className="w-96 px-7 rounded-lg shadow-2xl ">
        <h2 className="text-3xl text-center font-bold text-pink-600 my-6">Log In</h2>
        <form onSubmit={handleSubmit(handleLogin)}>

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
            value="Login"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="my-4">
         Don't have an Account??{" "}
          <Link to="/signup" className="text-secondary">
            Please register
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

export default Login;