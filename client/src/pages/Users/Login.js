import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";

import "./Style.css";

//Form Validation
const FormSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required")
})
const Login = () => {

  const formik = useFormik({
    initialValues:{
      email: "",
      password: "",
    },
    onSubmit : values => {
      console.log(values);
    },
    validationSchema : FormSchema
  })
  return (
    <div className="bg">
        <br/>
        <h1>Keep track of what you are spending.</h1>
        <br/>
        <form className="form-signin" onSubmit={formik.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Please Sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input 
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              type="email" 
              className="form-control" 
              placeholder="Email address" 
              
            />
            {/* Error Email */}
            <br/>
            <p className="alert-danger">
              {formik.touched.email && formik.errors.email}
            </p>
            <br/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input 
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              type="password" 
              className="form-control" 
              placeholder="Password" 
              required 
              autoComplete='off'
            />
            {/* Error Password */}
            <br/>
            <p className="alert-danger">
              {formik.touched.password && formik.errors.password}
            </p>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default Login