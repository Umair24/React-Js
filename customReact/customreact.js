function customRender(reactElement, container){
    /*
    let domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */


    let domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(let prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

let reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google!'
}

let mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)