'use client'
import { Deck } from "@/types"
import { Box, Card, CardContent, ClickAwayListener, Grid2 as Grid } from "@mui/material"
import { useState } from "react"

type DeckProps = Omit<Deck, 'id'>

const DeckCard = ({ name, deckList, lastUpdated }: DeckProps) => {

  const [open, setOpen] = useState(false)

  const handleClick = async () => {
    const formattedDeckList = deckList.replaceAll(' ', '\n')
    await navigator.clipboard.writeText(formattedDeckList)
    setOpen((prev) => !prev)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  if (!name || !deckList) return (<></>)

  return (
    <div className="w-16">
      <label> {name} </label>
      <label> {lastUpdated} </label>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box sx={{ position: 'relative' }}>
          <button type="button" onClick={handleClick}>
            Copy
          </button>
          {open && (
            <Box>
              Copy successful!
            </Box>
          )}
        </Box>
      </ClickAwayListener>
    </div>
  )
}

export default DeckCard