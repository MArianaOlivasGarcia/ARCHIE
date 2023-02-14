
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ReactCodeInput from 'react-verification-code-input';
import Swal from 'sweetalert2';
import { AppDispatch, RootState } from '../../store';
import { startConfirmSingUp } from '../../store/auth/thunks';
import { awsResendConfirmationCode } from '../providers/auth_providers';


export const ConfirmSignUpPage = () => {

  const navigate = useNavigate();

  const { errorMessage, tempUsername } = useSelector( (state: RootState) => state.auth );

  const dispatch = useDispatch<AppDispatch>();

  const handleOnComplete = ( code: string ) => {
    dispatch( startConfirmSingUp({ username: tempUsername!, code }) )
  }


  const handleResendCode = () => {
    awsResendConfirmationCode( tempUsername! )
  }


  return (
    <div className='p-md-5 animate__animated animate__fadeIn'>

      <h2 className='text-secondary'>Confirm Sign Up</h2>

      <p className='text-center text-md-start'>We have sent an email to <span className='fw-bold'>{ tempUsername }</span> with a verification code.</p>


      <div className='mt-3 text-center'>
        <label className='fw-bold'>Confirmation Code</label>
        <ReactCodeInput 
          onComplete={ handleOnComplete }
        />

      {     
        errorMessage && (<p className='text-center mt-3'><span className='text-danger'>{errorMessage}</span></p>)
      }

        <button 
          className='btn text-primary mt-3'
          onClick={ handleResendCode }>Resend Code</button>
      </div>

      
      
    </div>
  )
}
