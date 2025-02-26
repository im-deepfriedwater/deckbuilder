"use client"

import { postDeck } from "@/app/lib/firebase/firestore";
import { Button } from "@mui/material";
import { useState } from "react";

export default function UploadModal() {

  const [name, setName] = useState('')
  const [deckList, setDeckList] = useState('')
  const onUpload = async () => {
    if (name && deckList) {
      const resultError = await postDeck({ name, deckList })
      if (resultError) {
        alert(`error while uploading deck ${resultError}. try again`)
        return
      }

      alert('successful!')
    } else {
      alert('invalid name and decklist')
    }
  }
  return (
    <div className='flex'>
      <div>
        <div>
          <label>name:
            <input name={'Name'} onChange={e => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>deck list:
            <input name={'Decklist'} onChange={e => setDeckList(e.target.value)} />
          </label>
        </div>
        <Button variant={'contained'} onClick={onUpload} disabled={!name || !deckList}>Upload</Button>
      </div>
    </div>
  )
}