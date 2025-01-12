'use server'
import { getFirestore } from "firebase-admin/firestore";

export const getDecks = async () => {
  const firestore = getFirestore();
  const decksSnapshot = await firestore.collection("decks").get();
  const documents = decksSnapshot.docs.map((deck) => ({
    id: deck.id,
    name: deck.data().name,
    deckList: deck.data().deckList,
    lastUpdated: deck.data().desc,
  }));

  return documents;
};