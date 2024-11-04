'use client';

import { useFormStatus } from 'react-dom';

interface FormatButtonProps {
  text: string;
}

export default function FormBtn({ text }: FormatButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className='primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed'
    >
      {pending ? 'Loading..' : text}
    </button>
  );
}
