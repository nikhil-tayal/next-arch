import { useRouter } from 'next/router'
import React from 'react'
import { Button } from '../../atoms'
import { Footer, Header } from '../../molecules'

export default function Index() {
  const { push } = useRouter()
  return (
    <div>
      <Header />
      Feature B
      <Button onClick={() => push('/login')} variant='outlined' color='secondary'>
        Go To Login
      </Button>
      <Footer />
    </div>
  )
}
