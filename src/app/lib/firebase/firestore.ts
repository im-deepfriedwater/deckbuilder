'use server'
import { FieldValue, getFirestore } from "firebase-admin/firestore"

export const getDecks = async () => {
  const firestore = getFirestore();
  const decksSnapshot = await firestore.collection("decks").get()
  const documents = decksSnapshot.docs.map((deck) => ({
    id: deck.id,
    name: deck.data().name,
    deckList: deck.data().deckList,
    lastUpdated: deck.data().desc,
  }));

  return documents
};

interface TPostDeckPayload {
  name: string;
  deckList: string;
}
export const postDeck = async (payload: TPostDeckPayload): Promise<string | null> => {
  const firestore = getFirestore();

  try {
    await firestore.collection('decks').add({ ...payload, lastUpdated: FieldValue.serverTimestamp() })
    return null
  } catch (e) {
    return 'Error while uploading' + e
  }
};