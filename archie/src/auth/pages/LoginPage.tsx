
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import * as Yup from 'yup';
import { AppDispatch } from '../../store';
import { startSignOut, startSingIn } from '../../store/auth/thunks';

import 'react-phone-number-input/style.css'

export const LoginPage = () => {

  const dispatch = useDispatch<AppDispatch>()

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
        email: localStorage.getItem('email') || '',
        password: '',
        remember: false
    },
    onSubmit: ( {email, password, remember} ) => {   
      if ( remember ) {
        localStorage.setItem('email', email)
      } else {
        localStorage.removeItem('email')
      }
      dispatch( startSingIn({ username: email, password}) )
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('It is not a valid email.')
        .required('This field is required.'),
      password: Yup.string()
        .min( 8, 'At least 8 characters.')
        .required('This field is required.')
    })
  })


  return (
    <div className='p-md-5 animate__animated animate__fadeIn'>
      
      <h2 className='text-secondary'>Sign in to Archie</h2>

      <p>Welcome back! Sing in to continue.</p>


      <div className='text-center d-grid px-md-5 mt-5'>
          <button 
            className='btn btn-google'
            onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>
            <img 
              className='me-2'
              src="https://img.icons8.com/color/30/google-logo.png" 
              alt="Google" 
              /> 
            Sing in with Google
          </button>
      </div>


      <div className='d-flex align-items-center justify-content-center mt-4'>
        <div className="linea">&nbsp;</div>
        <div className="leyenda">or sing in with email</div>
        <div className="linea">&nbsp;</div>
      </div>




      <form noValidate 
            autoComplete='off'
            onSubmit={ handleSubmit }>
        
        <div className='mt-3'>
          <label className='fw-bold'>Email or phone number</label>
          <input 
            className="form-control"
            type="text" 
            placeholder="Email or phone number"
            { ...getFieldProps('email') }
          />
          { touched.email && errors.email && <span className="text-danger">{ errors.email }</span> }
        </div>


        <div className='mt-3'>
          <div className='d-flex justify-content-between'>
            <label className='fw-bold'>Password</label>
            <Link to='/auth/reset-password'>Forgot your password?</Link>
          </div>
          <input 
            className="form-control"
            type="password" 
            placeholder="Enter your password"
            { ...getFieldProps('password') }
          />
          { touched.password && errors.password && <span className="text-danger">{ errors.password }</span> }
        </div>


        <div className="form-check mt-3">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="remember"
            { ...getFieldProps('remember') }/>
          <label className="form-check-label" htmlFor="remember">
            Remember me
          </label>
        </div>


        <div className='mt-4 text-center'>
          <button 
            type='submit'
            className='btn btn-primary px-5'>SING IN</button>
        </div>


        <p className='text-center mt-3'>Not registered yet? <Link to="/auth/register">Sign up for a free account</Link></p>

      </form>

      {/* <button onClick={() => dispatch( startSignOut() )} >SingOut</button> */}

    </div>
  )
}
