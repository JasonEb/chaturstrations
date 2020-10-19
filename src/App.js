import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import teleWords from './words.js'

const App = () => {
  const [words, setWords] = useState([])
  const [idx, setIdx] = useState(0)
  
  useEffect( () => {
    let data = teleWords.split('\n')
    setWords(data)
  }, [])

  const shuffle = (e) => {
    e.preventDefault()
    let n = Math.floor(Math.random() * (words.length-1) )
    setIdx(n)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {words[idx]}
        </p>
        <button style={{height: '3em', width:'8em'}} onClick={shuffle}>Shuffle</button>
      </header>
    </div>
  );
}

export default App;
