import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'

function App(){
  return <Card/> 
}

function Card(){
  return <div className='card'>
    <Avatar />
    <Intro />
    <SkillList />
  </div>
}

function Avatar(){
  return <img className='avatar' src="profile-photo.jpg" alt="img"></img>
}

function Intro(){
  return <div>
    <h1>Prahadeep</h1>
    <p>Full Stack Developer & Machine Learning Engineer</p>
  </div>
}

function SkillList(){
  return <div className='skill-list'>
    <Skill skill="Java" emoji="💪" color="brown"></Skill>
    <Skill skill="React.js" emoji="💪" color="cyan"></Skill>
    <Skill skill="Tensorflow" emoji="💪" color="red"></Skill>
  </div>
}

function Skill(props){
  return <div className='skill' style={{backgroundColor: props.color}}>
    <span>{props.skill}</span>
    <span>{props.emoji}</span>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)