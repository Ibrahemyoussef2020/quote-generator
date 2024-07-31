import './App.css';
import React, {useState} from 'react';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';

const App = () => {
  const shareUrl = "https://api.quotable.io/random";

  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(shareUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

 
  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>


      <div className='social-media-sharing'>
        <FacebookShareButton url={shareUrl} quote={quote.title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={quote.title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={quote.title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    
    </>
  )
}


export default App;
