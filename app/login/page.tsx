import FormInput from '@/components/form-input';
import FormBtn from '@/components/form-btn';
import SocialLogin from '@/components/social-login';

export default function Login() {
  return (
    <div className='flex flex-col gap-10 py-8 px-6'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>Hello! 👋</h1>
        <h2 className='text-xl'>Log in with email and password</h2>
      </div>
      <form className='flex flex-col gap-3'>
        <FormInput type='email' placeholder='Email' required errors={[]} />
        <FormInput
          type='password'
          placeholder='Password'
          required
          errors={[]}
        />
        <FormBtn loading={false} text='Create Account' />
      </form>
      <SocialLogin />
    </div>
  );
}
