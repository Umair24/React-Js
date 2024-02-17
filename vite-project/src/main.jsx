import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// let ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google!'
// }

let anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

let anotherUser = "Umair2423"

let ReactElement = React.createElement(
    'a',
    {href: 'https://youtube.com', target: '_blank'},
    'Click here to visit the google! ',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    ReactElement
)
