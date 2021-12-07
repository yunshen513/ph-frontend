import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import "./LoginForm.css"

function validateUser({username, password}) {
    let error = "incorrect username or passord";
    if (username === "yunshen513" && password === "123456"){
        error = null;
    }
    console.log(error);
    return error;
}

function LoginForm(props) {
    return (
        <Formik className="Formik"
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={Yup.object({
            username: Yup.string().required('username required'),
            password: Yup.string().required('password required'),
          })}
          onSubmit={(values,{ setSubmitting, resetForm}) => {
            console.log(values);
            if (validateUser(values)) {
                alert('incorrect username or passord')
            }
            else{
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                    setSubmitting(false);
                }, 3000)
            }
        }}    
        >
          {({ errors, touched }) => (
            <Form className="Form">
              <Field className="Input" name="username" />
              {errors.username && touched.username ? (<div className="ErrorMessage">{errors.username}</div>) : null}
              
              <Field className="Input" name="password" />
              {errors.password && touched.password ? (<div className="ErrorMessage">{errors.password}</div>) : null}
              
              <button className="SubmitButton" type="submit">Submit</button>
              <button className="CancelButton" onClick={props.closeModal}>Cancel</button>
            </Form>
          )}
        </Formik>
    )
}

export default LoginForm;