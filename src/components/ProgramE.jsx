import React, { useState, useEffect } from 'react';

function ProgramE() {
  const [quote, setQuote] = useState('Loading daily knowledge quote...');

  const fetchQuote = async () => {
    try {
      const res = await fetch('https://dummyjson.com/quotes/random');
      const data = await res.json();
      setQuote(`"${data.quote}" — ${data.author}`);
    } catch {
      setQuote('Failed to dynamically fetch new quote asset.');
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="program-card">
      <h2>Program E: Side Effects Framework (`useEffect`)</h2>
      <p>Fires asynchronous network request channels automatically when the module loads.</p>
      
      <blockquote style={{ padding: '20px', background: '#faf5ff', borderLeft: '4px solid #a855f7', fontStyle: 'italic', marginBottom: '20px', borderRadius: '4px' }}>
        {quote}
      </blockquote>
      
      <button className="action-btn" style={{ background: '#a855f7' }} onClick={fetchQuote}>Refresh Quote</button>
    </div>
  );
}

export default ProgramE;