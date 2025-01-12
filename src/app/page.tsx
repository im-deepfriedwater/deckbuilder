'use server'

import { compressToEncodedURIComponent as compress, decompressFromEncodedURIComponent as decompress } from 'lz-string'

import { auth } from '@/auth'
import { SignInButton } from '@/components/SignInButton'
import { SignOutButton } from '@/components/SignOutButton'

export default async function Home() {
  const session = await auth()
  console.log(session, 'session testing')
  const compressed = compress(`4xEB01-012
    4xEB01-015
    3xOP01-051
    2xOP04-021
    4xOP04-031
    4xOP04-032
    4xOP05-030
    4xOP05-034
    3xOP05-037
    4xOP06-035
    1xOP07-019
    1xOP07-026
    3xOP07-029
    4xOP08-023
    2xST02-004
    4xST02-007`)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const decompressed = decompress(compressed)
  // console.log(decompressed, Buffer.byteLength(decompressed))
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Deckbuilder
        </h1>

        <div>
          <label>
            { session ? 'signed in' : 'nope'}
          </label>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row self-center">
          <SignInButton authLabel='Google'/>
          <SignOutButton />
        </div>
      </main>
    </div>
  );
}
