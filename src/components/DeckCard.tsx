'use client'
import { Deck } from "@/types"
import { Box, Card, CardContent, ClickAwayListener, Grid2 as Grid } from "@mui/material"
import { useState } from "react"

type DeckProps = Omit<Deck, 'id'>

const DeckCard = ({ name, deckList, lastUpdated }: DeckProps) => {

  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText(deckList)
    setOpen((prev) => !prev)
  };

  const handleClickAway = () => {
    setOpen(false)
  };

  if (!name || !deckList || !lastUpdated) return (<></>)

  return (
    <Grid size={8}>
      <Card>
        <CardContent>
          <div>
            <label> {name}</label>
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
        </CardContent>
      </Card>
    </Grid >
  )
}

export default DeckCard