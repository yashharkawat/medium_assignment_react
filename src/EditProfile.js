import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const editProfileSchema=yup.object().shape({
    name:yup.string().required('enter valid name'),
    age:yup.string(),
    username:yup.string().required('enter valid username'),
    bio:yup.string(),
    email:yup.string().email('Enter valid email')

})
const EditProfile=()=>{
    const navigate=useNavigate();
                
    return (
        <div>
            <h2>Hii</h2>
            <Formik initialValues={{username:'',email:'',name:'',age:'',bio:''}} validationSchema={editProfileSchema} onSubmit={(values)=>{
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
                        <input name='age' type='number' placeholder="age" value={values.age} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.age&&errors.age && <div>{errors.age}</div>}
                        <br />
                        <input name='username' type='text' placeholder="username" value={values.username} onChange={handleChange} onBlur={handleBlur}/>
                        <br />
                        {touched.username&&errors.username && <div>{errors.username}</div>}
                        <input name='bio' type='text' placeholder="bio" value={values.bio} onChange={handleChange} onBlur={handleBlur}/>
                        <br />
                        <input name='email' type='email' placeholder="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                        <br />
                        
                        <button type="submit">Edit Profile</button>
                    </form>
                )
            }
            </Formik>
            <Link to='/profile'><button>Profile</button></Link>
        </div>
    );
}
export default EditProfile;