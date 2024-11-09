/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import FormInput from '@/components/input';
import FormBtn from '@/components/button';
import SocialLogin from '@/components/social-login';
import { useFormState } from 'react-dom';
import { login } from './action';
import { PASSWORD_MIN_LENGTH } from '@/lib/constants';

export default function Login() {
  const [state, dispatch] = useFormState(login, null);
  return (
    <div className='flex flex-col gap-10 py-8 px-6'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>Hello! 👋</h1>
        <h2 className='text-xl'>Log in with email and password</h2>
      </div>
      <form action={dispatch} className='flex flex-col gap-3'>
        <FormInput
          name='email'
          type='email'
          placeholder='Email'
          required
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name='password'
          type='password'
          placeholder='Password'
          minLength={PASSWORD_MIN_LENGTH}
          required
          errors={state?.fieldErrors.password}
        />
        <FormBtn text='Create Account' />
      </form>
      <SocialLogin />
    </div>
  );
}
