import React from 'react';
import data from './data.json'
import './App.css';
import { SocialIcon } from 'react-social-icons';
function App() {
  return (
    <div className="App">
    <div className="navigation"></div>
    <div className='fullPage'>
      <div>
        <h1>{data.title}</h1>
      </div>
      <div>
      <h2>{data.subtitle}</h2>
      </div>
      {
      Object.keys(data.links).map(key=>
        {
          return(<SocialIcon url={data.links[key]} />)
        })
      }
    </div>
    <div className='fullPage'>
      <h3>
        {data.sections[0].title}
      </h3>
      <p>
      {data.sections[0].items[0].content} 
      </p>
    </div>
    <div className='fullPage'></div>
    </div>
  );
}

export default App;
