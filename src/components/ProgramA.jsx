import React, { useState } from 'react';

function ProgramA() {
  const [count, setCount] = useState(0);

  return (
    <div className="program-card">
      <h2>Program A: State Management Basics</h2>
      <p>Demonstrating simple variable mutation flows using standard functional Hooks.</p>
      
      <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '15px' }}>{count}</h3>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button className="action-btn" onClick={() => setCount(count + 1)}>Increment</button>
          <button className="action-btn" style={{ background: '#ef4444' }} onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default ProgramA;