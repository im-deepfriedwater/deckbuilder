/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'

import { initAdmin } from '../lib/firebase/firebaseAdmin'
import { getDecks } from '../lib/firebase/firestore'
import { Deck } from '@/types'
import DeckCard from '@/components/DeckCard'
import UploadModal from '@/components/UploadModal'

export default async function Decks() {
  await initAdmin()
  const decks = await getDecks()

  const renderDecks = () => decks.map(({ name, deckList, lastUpdated, id }: Deck) => (
    <DeckCard key={id ?? undefined} name={name} deckList={deckList} lastUpdated={lastUpdated} />
  ))

  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      {renderDecks()}
      <div className='fixed '>
        button
      </div>
    </div>
  )
}
