'use client';

import React, { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const input = tv({
  base: `
    w-full
    border-b-[1px]
    border-[#8E8E8E]
    pb-[14px]
    pl-4
    text-[20px]
    leading-[30px]
    text-cod-gray
    outline-none
  `,
});

/* FOCUS IN INPUT - CHANGE THE BORDER */

type InputProps = ComponentProps<'input'> & VariantProps<typeof input>;

export function Input({ className, ...props }: InputProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <input {...props} className={input({ className })} />
  );
}