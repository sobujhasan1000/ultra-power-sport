import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import GoogleLogIn from "../../SocialLoging/GoogleLogIn";
import Swal from "sweetalert2";
import logImg from "../../../src/assets/BannerImg/loging.png";

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const { singIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    singIn(data.email, data.password).then((result) => {
      const user = result.user;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "LogIn successful",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(user);
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-green-200 py-10 px-4 md:px-10 rounded-md">
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0">
        <img src={logImg} alt="Login" className="w-full max-w-xs md:max-w-sm" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-sm text-center gap-4"
        >
          <input
            className="p-2 bg-emerald-400 rounded-md"
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          <input
            className="p-2 bg-emerald-400 rounded-md"
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          <input className="btn bg-emerald-400" type="submit" value="Log In" />
        </form>
        <div className="divider">OR</div>
        <GoogleLogIn />
        <Link
          className="bg-emerald-400 text-center p-2 rounded-md mt-4 w-full max-w-sm"
          to="/singin"
        >
          Don't have an account? Sign up here
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
