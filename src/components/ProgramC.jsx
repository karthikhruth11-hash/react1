import React, { useState } from 'react';

function ProgramC() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="program-card">
      <h2>Program C: Conditional Element Rendering</h2>
      <p>Uses simple boolean operators to show or hide distinct chunks of code content.</p>
      
      <button className="action-btn" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Secrets' : 'Reveal Hidden Info'}
      </button>

      {isVisible && (
        <div style={{ marginTop: '20px', padding: '20px', background: '#fffbeb', borderLeft: '4px solid #f59e0b', borderRadius: '4px' }}>
          <h4>🔒 Protected Content Block</h4>
          <p style={{ margin: '8px 0 0 0' }}>This segment only renders when your visibility state flags evaluate to true.</p>
        </div>
      )}
    </div>
  );
}

export default ProgramC;