import React, { useState } from 'react';

function ProgramB() {
  const [text, setText] = useState('');

  return (
    <div className="program-card">
      <h2>Program B: Two-Way Form Data Binding</h2>
      <p>Tracks standard input text fields and mirrors values instantly onto DOM layers.</p>
      
      <input 
        type="text"
        placeholder="Type something here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '15px' }}
      />
      
      <div style={{ padding: '12px', background: '#f0fdf4', borderRadius: '6px', color: '#166534' }}>
        <strong>Live Output:</strong> {text || 'Awaiting entry...'}
      </div>
    </div>
  );
}

export default ProgramB;