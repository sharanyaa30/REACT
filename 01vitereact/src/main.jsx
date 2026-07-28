import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
        
    },
    children: 'Click me to visit google '
}
const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Click me to visit google 
  </a>
)

const anotherUser = "chai aur code"
const reactElement = React.createElement(
  'a', 
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click me to visit google ',
   anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
