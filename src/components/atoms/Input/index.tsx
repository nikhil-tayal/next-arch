import React from 'react'
import LabelText from '../LabelText'

interface IInput {
  labelText?: string;
  id?: string;
  value: string;
  type?: 'text' | 'number' | 'file' | 'password' | 'email';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => {} | void;
  placeHolder?: string,
  className?: string;
  required?: boolean;
  fullWidth?: boolean;
  name?: string;
  maxLength?: number;
  wrapperClass?: string;
  error?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => {} | void;
  nonEditable?: boolean;
}
export default function Input(props: IInput) {
  const {
    labelText = '',
    id,
    value,
    type,
    onChange,
    placeHolder,
    className,
    required,
    fullWidth,
    name,
    maxLength,
    wrapperClass,
    error,
    onBlur,
    nonEditable = false,
  } = props;
  return (
    <div className={`${wrapperClass}`}>
      <LabelText id={labelText}>{labelText}</LabelText>
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        placeholder={placeHolder}
        className={`
                px-4 py-2 relative 
                bg-white bg-white 
                text-sm  
                rounded-xl
                border border-outlineGray 
                outline-none focus:outline-none 
                focus:shadow-md 
                mt-2
                ${fullWidth && 'w-full'} 
                ${className}
                ${error ? 'border-red' : null}`}
        onBlur={onBlur}
        disabled={nonEditable}
      />
    </div>
  )
}
