import { useRouter } from 'next/router'
import React from 'react'

export default function Architecture() {
  const { locale } = useRouter()
  return (
    <div>
      This is {locale} region
    </div>
  )
}
