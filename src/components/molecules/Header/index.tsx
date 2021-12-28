import { useRouter } from 'next/router'
import React from 'react'
import { Button } from '../../atoms'

export default function Header() {
  const { push } = useRouter()
  return (
    <div className='shadow-lg py-4 px-20'>
      <div className="flex justify-between">
        <div>
          Header Logo
        </div>
        <Button variant='outlined' color='primary' onClick={() => push('/login')}>
          Sign out
        </Button>
      </div>
    </div>
  )
}
