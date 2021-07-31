import React,{useState,useEffect} from 'react';
import Square from './Square';
import './style.css';

const initialState = ["","","","","","","","","",""];

const Main=()=>{
    const[gameState,updateState] =useState(initialState);
    const [isXchance,updatexchance] = useState(false);
    
    const Squareclicked=(index)=>{
     let strings= Array.from(gameState);
     strings[index]=isXchance ? "X" : "O"
     updateState(strings);
     updatexchance(!isXchance);
    }

    useEffect(() => {
        const winner= checkwinner();
        if(winner){
            alert(`Winner ${winner}`);
            updateState(initialState); 
        }

    }, [gameState])
    
    const checkwinner=()=> {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
          }
        }
        return null;
      }

    return(
        <>
        <div className="main">
            <p>Tic tac toe</p>
            <div className="row jc-content">
            <Square state={gameState[0]} onClick={()=>Squareclicked(0)}/>
            <Square state={gameState[1]} onClick={()=>Squareclicked(1)}/>
            <Square state={gameState[2]} onClick={()=>Squareclicked(2)}/>  
            </div>
            <div className="row jc-content">
            <Square state={gameState[3]} onClick={()=>Squareclicked(3)}/>
            <Square state={gameState[4]} onClick={()=>Squareclicked(4)}/>
            <Square state={gameState[5]} onClick={()=>Squareclicked(5)}/>  
            </div>
            <div className="row jc-content">
            <Square state={gameState[6]} onClick={()=>Squareclicked(6)}/>
            <Square state={gameState[7]} onClick={()=>Squareclicked(7)}/>
            <Square state={gameState[8]} onClick={()=>Squareclicked(8)}/>  
            </div>

            <button className="btn-style" onClick={()=>updateState(initialState)}>Clear Game</button>
            </div>
        </>
    )
}

export default Main;