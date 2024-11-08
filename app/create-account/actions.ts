/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { z } from 'zod';

const checkUsername = (username: string) => !username.includes('sibal');

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: 'Username must be string!',
        required_error: 'Where is my username?!',
      })
      .min(3, 'way to short!')
      .max(18, 'toooo long!')
      .refine(checkUsername, 'No sibal allowed!'),
    email: z.string().email(),
    password: z.string().min(10),
    confirm_password: z.string().min(10),
  })
  .refine(checkPasswords, {
    message: 'Both passwords should be matched',
    path: ['confirm_password'],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password'),
  };

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
