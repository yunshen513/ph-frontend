import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import "./LoginForm.css"

interface User {
  username: string;
  password: string;
} 

const validateUser = (user: User) => {
    let error: string | null = "incorrect username or passord";
    if (user.username === "yunshen513" && user.password === "123456"){
        error = null;
    }
    console.log(error);
    return error;
}

interface Props {
  closeModal: () => void;
}

export const LoginForm: React.FC<Props> = ({closeModal}) => {
    return (
        <Formik
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
              <button className="CancelButton" onClick={closeModal}>Cancel</button>
            </Form>
          )}
        </Formik>
    )
}
