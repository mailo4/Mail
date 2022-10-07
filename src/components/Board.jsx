import React from 'react';

import './Board.css'
import Square from './Square';

const Board = ({ squares, click }) => {
    console.log(squares)

    return (
        <div className="board">
            {
                squares.map((square, i) => (
                   <div key={i}>
                    <Square  id={i} value={square} onClick={() => click(i)} />
                    </div>
                ))
            }


        </div>
    )
}
export default Board