import React from 'react';

function ProgramD() {
  const itemsList = [
    { id: 1, name: 'Component Props Architecture', complexity: 'Core' },
    { id: 2, name: 'Lifecycle Synchronization Hooks', complexity: 'Intermediate' },
    { id: 3, name: 'Context Global Management Solutions', complexity: 'Advanced' }
  ];

  return (
    <div className="program-card">
      <h2>Program D: Rendering Dynamic Data Lists</h2>
      <p>Demonstrates how to iterate through structural data arrays using the standard `.map()` method.</p>
      
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {itemsList.map(item => (
          <li key={item.id} style={{ padding: '12px 16px', background: '#f8fafc', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', border: '1px solid #e2e8f0' }}>
            <span><strong>{item.id}.</strong> {item.name}</span>
            <span style={{ fontSize: '0.8rem', background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold' }}>{item.complexity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramD;