/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    errors: ['wrong password!', 'password is too short'],
  };
}
