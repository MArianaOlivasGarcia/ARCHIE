import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReactCodeInput from 'react-verification-code-input';
import Swal from 'sweetalert2';


export const ResetPasswordPage = () => {

  const { handleSubmit,
          getFieldProps } = useFormik({
    initialValues: {
        userName: '',
    },
    onSubmit: ( {userName} ) => {   
      console.log({userName})
    }
  })

  


  return (
    <div className='p-md-5 animate__animated animate__fadeIn'>

      <h2 className='text-secondary'>Reset Password</h2>

      <p className='text-center text-md-start'>We will send you a verification code.</p>

      <form noValidate 
            autoComplete='off'
            onSubmit={ handleSubmit }>

        <div>
          <label className='fw-bold'>Email or phone number</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder='Your email or phone number'
          />
        </div>


        <div className='mt-3 text-center'>
          <button 
            type='submit'
            className='btn btn-primary px-5'>SEND CODE</button>
        </div>

      </form>

      {/* <div className='mt-3 text-center'>
        <label className='fw-bold'>Confirmation Code</label>
        <ReactCodeInput 
          onComplete={ handleOnComplete }
        />
        <a href="">Resend Code</a>
      </div> */}

        <Link to="/auth/login"><i className="fa-solid fa-arrow-left me-2"></i> Back to Sign In</Link>

      
    </div>
  )
}
