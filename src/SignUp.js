import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const signUpSchema=yup.object().shape({
    name:yup.string().required('enter valid name'),
    age:yup.string().required('enter valid age'),
    username:yup.string().required('enter valid username'),
    password:yup.string().required('password dalo')
})
const SignUp=()=>{
    const navigate=useNavigate();
                
    return (
        <div>
            <h2>Hii</h2>
            <Formik initialValues={{username:'',password:'',name:'',age:''}} validationSchema={signUpSchema} onSubmit={(values)=>{
                //console.log(values);
                //localStorage.setItem('demo_user',true);
                //navigate('/');
            }}>
            {({values,handleBlur,handleChange,handleSubmit,errors,touched})=>
                (
                    <form noValidate onSubmit={handleSubmit}>
                        <input name='name' type='text' placeholder="Enter name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                        <br />
                        {touched.name&&errors.name && <div>{errors.name}</div>}
                        <input name='age' type='text' placeholder="age" value={values.age} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.age&&errors.age && <div>{errors.age}</div>}
                        <br />
                        <input name='username' type='text' placeholder="username" value={values.username} onChange={handleChange} onBlur={handleBlur}/>
                        <br />
                        {touched.username&&errors.username && <div>{errors.username}</div>}
                        <input name='password' type='text' placeholder="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        <br />
                        {touched.password&&errors.password && <div>{errors.password}</div>}
                        <button type="submit">Sign up</button>
                    </form>
                )
            }
            </Formik>
            <Link to='/'><button>Home</button></Link>
        </div>
    );
}
export default SignUp;