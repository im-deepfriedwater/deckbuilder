'use server'

import { auth } from '@/auth'
import { SignInButton } from '@/components/SignInButton'
import { SignOutButton } from '@/components/SignOutButton'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await auth()

  if (session) redirect('/decks')

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Deckbuilder
        </h1>

        <div className="flex gap-4 items-center flex-col sm:flex-row self-center">
          <SignInButton authLabel='Google'/>
          <SignOutButton />
        </div>
      </main>
    </div>
  )
}
