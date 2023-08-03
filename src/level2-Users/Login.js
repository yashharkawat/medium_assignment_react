import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";

const SignInSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("Password ke bina login?"),
});

const Login = () => {
  return (
    <div>
      <h3>Sign In</h3>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log({ values });
          // Add submit logic here
          //localStorage.setItem("demo_user", true);
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="username"
                placeholder="janesmith"
              />
              {touched.username && !!errors.username && (
                <span>{errors.username}</span>
              )}
            </div>
            <div>
              <input
                type="text"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="password"
                placeholder="password"
              />
              {touched.password && !!errors.password && (
                <span>{errors.password}</span>
              )}
            </div>
            <button type="submit">Login</button>
          </form>
        )}
      </Formik>
      <Link to='/'><button>Home</button></Link>
    </div>
  );
};
export default Login;