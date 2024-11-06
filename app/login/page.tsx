/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import FormInput from '@/components/form-input';
import FormBtn from '@/components/form-btn';
import SocialLogin from '@/components/social-login';
import { useFormState } from 'react-dom';
import { handleForm } from './action';

export default function Login() {
  const [state, dispatch] = useFormState(handleForm, null);
  return (
    <div className='flex flex-col gap-10 py-8 px-6'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>Hello! 👋</h1>
        <h2 className='text-xl'>Log in with email and password</h2>
      </div>
      <form action={dispatch} className='flex flex-col gap-3'>
        <FormInput name='email' type='email' placeholder='Email' required />
        <FormInput
          name='password'
          type='password'
          placeholder='Password'
          required
        />
        <FormBtn text='Create Account' />
      </form>
      <SocialLogin />
    </div>
  );
}
