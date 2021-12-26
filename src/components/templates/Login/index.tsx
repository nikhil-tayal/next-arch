import React from 'react'
import { Button } from '../../atoms'

export default function Login() {
  return (
    <div className='flex column'>
      <input type="text" className='border'/>
      <input type="text" className='border'/>
      <Button variant='outlined' color='primary'>
        Login 
      </Button>
    </div>
  )
}
