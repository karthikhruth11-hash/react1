import React, { useState } from 'react';
import ProgramA from './components/ProgramA';
import ProgramB from './components/ProgramB';
import ProgramC from './components/ProgramC';
import ProgramD from './components/ProgramD';
import ProgramE from './components/ProgramE';

function App() {
  const [activeTab, setActiveTab] = useState('A');

  const renderComponent = () => {
    switch(activeTab) {
      case 'A': return <ProgramA />;
      case 'B': return <ProgramB />;
      case 'C': return <ProgramC />;
      case 'D': return <ProgramD />;
      case 'E': return <ProgramE />;
      default: return <ProgramA />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Core Concepts Workbench</h1>
        <nav className="tab-navigation">
          {['A', 'B', 'C', 'D', 'E'].map((tab) => (
            <button 
              key={tab} 
              className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              Program {tab}
            </button>
          ))}
        </nav>
      </header>
      
      <main className="component-display-area">
        {renderComponent()}
      </main>
    </div>
  );
}

export default App;
