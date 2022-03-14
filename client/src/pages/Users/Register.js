import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";

//Form Validation
const FormValidation =   Yup.object({
    fname : Yup.string().required("First Name is required"),
    lname : Yup.string().required("Last Name is required"),
    email : Yup.string().required("Email is required"),
    password : Yup.string().required("Password is required"),
})

const Register = () => {
    const formik = useFormik({
        initialValues:{
            fname : "",
            lname : "",
            email : "",
            password : "",
        },
        onSubmit : (values)=>{
            console.table(values);
        },
        validationSchema : FormValidation
    })
    return (
        <div className="bg_2">
            <br/>
            <h1>Keep track of what you are spending.</h1>
            <br/>
            <form className="form-signin" onSubmit={formik.handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
                <label htmlFor="inputFname" className="sr-only">First Name</label>
                <input 
                    value = {formik.values.fname}
                    onChange = {formik.handleChange("fname")}
                    onBlur = {formik.handleBlur("fname")}
                    type="text" 
                    id="inputFname" 
                    className="form-control" 
                    placeholder="First Name" 
                />
                <br/>
                <p className="alert-danger">
                    {formik.touched.fname && formik.errors.fname}
                </p>
                
                <label htmlFor="inputLname" className="sr-only">Last Name</label>
                <input 
                    value = {formik.values.lname}
                    onChange = {formik.handleChange("lname")}
                    onBlur = {formik.handleBlur("lname")}
                    type="text" 
                    id="inputLname"
                    className="form-control" 
                    placeholder="Last Name" 
                />
                <br/>
                <p className="alert-danger">
                    {formik.touched.lname && formik.errors.lname}
                </p>
                
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input
                    value = {formik.values.email}
                    onChange = {formik.handleChange("email")}
                    onBlur = {formik.handleBlur("email")}
                    type="email" 
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Email address"
                />
                <br/>
                <p className="alert-danger">
                    {formik.touched.email && formik.errors.email}
                </p>
                
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input 
                    value = {formik.values.password}
                    onChange = {formik.handleChange("password")}
                    onBlur = {formik.handleBlur("password")}
                    type="password" 
                    id="inputPassword" 
                    className="form-control"
                    placeholder="Password"  
                />
                <br/>
                <p className="alert-danger">
                    {formik.touched.password && formik.errors.password}
                </p>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Register