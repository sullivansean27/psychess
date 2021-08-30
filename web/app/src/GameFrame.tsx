import React from 'react'

import useGame from './chess/useGame.ts'
import ChessBoard from './ChessBoard.tsx'

function Connecting(): JSX.Element {
  return (
    <span>Connecting...</span>
  )
}

export default function GameFrame(): JSX.Element {
  const game = useGame()

  return (
    <div className="frame">
      {game.status === 'connected'
        ? (
            <ChessBoard
              pieces={game.handle.pieces}
              lastMove={game.handle.lastMove}
              movePiece={game.handle.movePiece}
              myColor={game.handle.myColor}
              turn={game.handle.turn}
            />
          )
        : <Connecting />
      }
    </div>
  )
}