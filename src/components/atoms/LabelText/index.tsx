import React from 'react'

interface ILabelText {
  children: string;
  required?: true | false;
  id: string
}

export default function LabelText(props: ILabelText) {
  const { children, required, id } = props
  return (
    <label htmlFor={id} className='text-sm font-medium'>
      {children} {required && <span className='text-red'>*</span>}
    </label>
  )
}
