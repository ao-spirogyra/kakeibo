import React from 'react';
import '../css/App.css';

function Fetch () {
  console.log('fetch');
  fetch('http://localhost:5000/api/expenses', {
    method: 'GET',
    mode: 'cors'
  }).then( async (res) => {
    console.log(await res.json());
  }, (e) => {
    console.log(e);
  });
}

export const App: React.FC = () => {
  Fetch();
  return (
    <div>
      <p>Hello React.</p>
    </div>
  );
};

export default App;
