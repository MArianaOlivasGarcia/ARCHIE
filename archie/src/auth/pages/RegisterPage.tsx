
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { awsSignUp } from '../providers/auth_providers';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { startSingUp } from '../../store/auth/thunks';


export const RegisterPage = () => {

  const navigate = useNavigate();
  
  const dispatch = useDispatch<AppDispatch>();

  const { errorMessage, tempUsername } = useSelector((state: RootState ) => state.auth);

  const [phone, setPhone] = useState('');
  const [tou, setTou] = useState(false);


  const handleOnChange = (number: string) => {
    setTou(true);
    setPhone(number);
  }

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    onSubmit: ( {email, password} ) => {   
      
      if (!isValidPhoneNumber(phone)) return;

      dispatch( startSingUp({email, password, phone_number: phone }) )

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


  useEffect(() => {
    if ( tempUsername ) {
      navigate('/auth/confirm-register')
    }
  }, [ tempUsername ])

  return (
    <div className='p-md-5 animate__animated animate__fadeIn'>
      
      <h2 className='text-secondary'>Sign up for Archie</h2>

      <p>Meet Archie, a selfservice portal that seamlessly provisions ready-to-use Well-Architected Cloud Resources and Infrastructures.</p>

      <div className='text-end'>
        <a href='https://www.youtube.com/watch?v=J5XJ4t8GrW4' target='_blank' className="btn btn-outline-primary">
          Watch our demo
          <i className="fa-solid fa-arrow-right ms-1"></i>
        </a>
      </div>

      <form noValidate 
            autoComplete='off'
            onSubmit={ handleSubmit }>

        
        <div className='mt-3'>
          <label className='fw-bold'>Email</label>
          <input 
            className="form-control"
            type="text" 
            placeholder="example@example.com"
            { ...getFieldProps('email') }
          />
          { touched.email && errors.email && <span className="text-danger">{ errors.email }</span> }
        </div>


        <div className='mt-3'>
          <label className='fw-bold'>Phone number</label>
          <PhoneInput
            defaultCountry="US"
            placeholder="Enter your phone number"
            value={phone}
            onChange={ handleOnChange }
            // error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
          />
          { (tou && phone && !isValidPhoneNumber(phone)) && <span className="text-danger">Is not a valid phone number.</span>}
          { (tou && !phone) && <span className="text-danger">This field is required.</span>}
        </div>

        <div className='mt-3'>
          <label className='fw-bold'>Password</label>
          <input 
            className="form-control"
            type="password" 
            placeholder="Enter your password"
            { ...getFieldProps('password') }
          />
          { touched.password && errors.password && <span className="text-danger">{ errors.password }</span> }
        </div>

        { 
          errorMessage
            && <p className='text-center mt-3 text-danger'>{ errorMessage }</p>
        }


        <div className='mt-3 text-center'>
          <button 
            type='submit'
            className='btn btn-primary px-5'>SING UP</button>
        </div>


        <p className='text-center mt-3'>Already a Member? <Link to="/auth/login">Sign in</Link></p>

      </form>




    </div>
  )
}
