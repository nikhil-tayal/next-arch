import { useRouter } from 'next/router'
import React from 'react'
import { Button } from '../../atoms'
import { Footer, Header } from '../../molecules'


export default function Index() {
  const { push } = useRouter()
  return (
    <div>
      <Header />
      Feature A
      <Button onClick={() => push('page2')} variant='outlined' color='primary'>
        Go to Feature b
      </Button>
      <Footer />
    </div>
  )
}
