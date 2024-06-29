import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ]
];
function App() {
  const [select, isSelected]=useState(0);

  return (
   <>
   <ul className="nav nav-tabs">
  <li class="nav-item">
    <button className={select===0?"active":""} onClick={()=>isSelected(0)} aria-current="page">Home</button>
  </li>
  <li class="nav-item">
    <button className={select===1?"active":""}  onClick={()=>isSelected(1)} >Career</button>
  </li>
  <li class="nav-item">
    <button class={select===2?"active":""}  onClick={()=>isSelected(2)}>About</button>
  </li>
  <li class="nav-item">
    <button class={select===3?"active":""}  onClick={()=>isSelected(3)}>Help</button>
  </li>
</ul>
<div>
<ul>{content[select].map((item)=>(<li key={item}>{item}</li>))}</ul>
</div>
</>
  );
}

export default App;
