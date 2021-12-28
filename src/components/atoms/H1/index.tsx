import React from 'react'

interface IH1 {
  children: React.ReactChild | React.ReactChild[];
  clasName?: string
}
export default function H1(props: IH1) {
  const { children, clasName } = props
  return <h1 className={`${clasName} text-3xl`}>{children}</h1>;
}
