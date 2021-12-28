import React from 'react'

interface ICard {
  children: React.ReactChild | React.ReactChild[];
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string
}
export default function Card(props: ICard) {
  const { children, className, shadow = 'xl' } = props
  return (
    <div className={`${className} rounded-md shadow-${shadow} py-8 px-12 `}>
      {children}
    </div>
  )
}
