import React from 'react'
import { render } from "react-dom"
import App from "./app"

const mount = (target: Element) => {
    render(<App />, target)
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#products')
    if(devRoot) {
        mount(devRoot)
    }
}

export { mount }
