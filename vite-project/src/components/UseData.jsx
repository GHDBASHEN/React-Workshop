import  React from 'react'
import { useState } from 'react'




export default function UseData() {
    const [articles, setArticles] = useState(10);

    function SetArticalvalue() {
        setArticles(prev => prev + 1);
    
    }
   

  return (
    <>
    <h1>count = {articles}</h1>
    <button onClick={SetArticalvalue}>Click me</button>

    </>
  )
}


