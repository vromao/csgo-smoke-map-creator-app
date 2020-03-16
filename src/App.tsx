import React from 'react';
import Map from './components/Map/Map';
import Header from './pages/Header';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="App">
      <Header/>
      <DndProvider backend={Backend}>
        <Map /> 
			</DndProvider>
    </div>
  );
}

export default App;
