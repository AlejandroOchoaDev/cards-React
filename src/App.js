import React from 'react';

import Navbar from './components/navbar';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      < Navbar />
      <section className="row custom-row">
        <div clasName="row custom-row">
        <Card  className="col-3" photo="https://www.dogalize.com/wp-content/uploads/2016/11/Alaskan-Malamute-perro.jpg" races="Alaska Malamute
" name="Perejil"/>
        </div>
      </section>
    </div>
  );
}

export default App;
