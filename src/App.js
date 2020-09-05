import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  // The Initial State of The Quote Once The App Launched
  const [quote, setQuote] = useState(
    { quote: "The Quote Will Be HERE", author: "The Author Name Will Be HERE" },
  );

  // Defining Helper Method Of Fetching New Quote from Fake Server
  const getNewQuote = async () => {
    const allQuotes = await axios.get('https://my-json-server.typicode.com/Zo3rb/fake-quotes-server/quotes');
    const randomNumberFromQuotes = Math.floor(Math.random() * allQuotes.data.length);
    setQuote(allQuotes.data[randomNumberFromQuotes]);
  }


  // Once The App Mounted Will Get New Quote From Fake Server
  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className="bg-dark text-white text-center p-2" style={{ minHeight: "100vh" }}>
      <h2 className="my-5">Random Quotes App</h2>
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-sm-12 mt-5 text-dark">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p className="font-weight-bold"><i className="fas fa-quote-left text-primary"></i> {quote.quote}  <i className="fas fa-quote-right text-primary"></i></p>
                  <footer className="card-blockquote text-right font-italic text-muted">{quote.author}</footer>
                </blockquote>
              </div>
            </div>
            <div className="d-flex justify-content-between p-3">
              <button className="btn btn-success my-2" onClick={getNewQuote}><i className="fas fa-sync-alt"></i> New Quote</button>
              <a href={`https://twitter.com/intent/tweet?text="${quote.quote}" - ${quote.author}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary my-2"><i className="fab fa-twitter"></i> Tweet It</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
