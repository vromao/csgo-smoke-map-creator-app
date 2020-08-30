import React from 'react';
import Home from './pages/Home';
import Map from './components/Map/Map';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <DndProvider backend={Backend}>
        <Map /> 
			</DndProvider> */}
    </div>
  );
}

export default App;
