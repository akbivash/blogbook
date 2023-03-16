import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { NextPage } from "next";
import Link from "next/link";
import { AuthContext } from '../../context/AuthContext';
// import { async } from "@firebase/util";

export type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp: NextPage = (props): JSX.Element => {
const{signUp, errorMsg, isLoading, signInWithGoogle} = useContext(AuthContext)

  const validationSchema = Yup.object().shape({
 
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Confirm Password does not match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data:FormData) => {
  signUp(data.email, data.password)
  };

  return (
      <form
          onSubmit={handleSubmit( onSubmit)}
        className="grid gap-4 place-items-center py-10"
    
      
      >
        {errorMsg && <span className="text-red-500">{errorMsg}</span>}
       
        <div className="form_control">
          <label>Email</label>
          <input
            type="text"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <span className="error">
            {" "}
            {errors.email && <p>{errors.email.message}</p>}
          </span>
        </div>
        <div className="form_control">
          <label>Password</label>
          <input type="password" {...register("password")} />
          <span className="error">
            {" "}
            {errors.password && <p>{errors.password.message}</p>}
          </span>
        </div>
        <div className="form_control">
          <label>Confirm Password</label>
          <input type="password" {...register("confirmPassword")} />
          <span className="error">
            {" "}
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </span>
        </div>
        <div className="form_control">
          <input
            type="submit"
            value="submit"
            className="cursor-pointer bg-green-300 w-fit mx-auto  disabled:opacity-[0.5]"
            disabled={isLoading}
       
          />
        </div>
       
          <span>Or</span>

         <div className="form_control">
         <button className="bg-green-300 rounded-sm p-2 disabled:opacity-[0.5]" disabled={isLoading} onClick={signInWithGoogle}>Sign in with Google</button>
         </div>
          <div className="form_control">
          <span className="text-center">
            Already have an account ?{" "}
            <Link href="/user/signin" className="font-bold text-green-600">
              Login
            </Link>
          </span>
          </div>
      </form>
   
     
  );
};

export default SignUp;
