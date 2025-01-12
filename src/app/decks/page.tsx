'use server'

import Grid from '@mui/material/Grid2'
import Paper from '@mui/material/Paper';
import { initAdmin } from '../lib/firebase/firebaseAdmin';
import { getDecks } from '../lib/firebase/firestore';
import { Deck } from '@/types';
import DeckCard from '@/components/DeckCard';

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const decompressed = decompress(compressed)
// // console.log(decompressed, Buffer.byteLength(decompressed))
export default async function Decks() {
  await initAdmin();
  const decks = await getDecks();

  const renderDeck = () => decks.map(({ name, deckList, lastUpdated, id }: Deck) => (
    <DeckCard key={id ?? undefined} name={name} deckList={deckList} lastUpdated={lastUpdated} />
  ))

  return (
    <Paper className='m-12 h-[80vh]'>
      <Grid container spacing={8}>
        { renderDeck() }
      </Grid>
    </Paper>
  )
}
