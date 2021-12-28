import { useRouter } from 'next/router'
import React from 'react'
import { Button } from '../../atoms'
import Card from '../../atoms/Card'
import H1 from '../../atoms/H1'
import Input from '../../atoms/Input'

export default function Login() {
  const { push } = useRouter()
  const loginHandler = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    /**
     * Make Some API Call and backend will tell what application a user can acccess
     * There maybe a chance a user(login) has multiple app access (Portal, Portal-Vue and more), 
     * In this case we can give user a dripdown to switch the user
     */
    const someRandomValue = (new Date()).getTime()
    console.log(someRandomValue % 2)
    switch (someRandomValue % 2) {
      /**
       * We can use Switch case here to jump the user to repective screen
       */
      case 0:
        push('portal/page1')
        break;
      case 1:
        push('portal-scf/page1')
        break;
      default:
        push('')
    }
  }
  return (
    <Card className='flex flex-col w-3/12 mx-auto mt-12'>
      <H1 clasName='mx-auto my-8 text-primary'>
        Welcome to login Page
      </H1>
      <Input fullWidth wrapperClass={'my-2'} onChange={() => { }} value={''} labelText='User Name' />
      <Input fullWidth wrapperClass={'my-2'} onChange={() => { }} value={''} labelText='Password' />
      <Button variant='outlined' color='secondary' className='my-4' onClick={loginHandler}>
        Login
      </Button>
    </Card>
  )
}
