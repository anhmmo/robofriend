import React from 'react';
import Card from './Card';
import 'tachyons';
import { robots } from './robots';

function App() {
  return (
    <div className="App">

          <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
          <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
          <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
    </div>
  );
}

export default App;
