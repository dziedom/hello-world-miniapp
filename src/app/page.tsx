'use client'

import { useEffect } from 'react'
import { sdk } from '@farcaster/frame-sdk'

export default function Home() {
  useEffect(() => {
    // Hide the splash screen when the app is ready
    sdk.actions.ready()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Hello, World!</h1>
      <p className="text-xl">This is a Farcaster Mini App</p>
      <p className="mt-4">Current time: {new Date().toLocaleTimeString()}</p>
    </main>
  )
}
