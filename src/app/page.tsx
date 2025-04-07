'use client'

import { useEffect } from 'react'
import { sdk } from '@farcaster/frame-sdk'

export default function Home() {
  useEffect(() => {
    // Hide the splash screen when the app is ready
    sdk.actions.ready()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Hello, World!</h1>
    </main>
  )
}
