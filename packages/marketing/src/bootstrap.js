
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';


//Mount function to start up the app
const mount = (el) => {
    ReactDom.render(
        <App />,
        el
    )
};

//if we are running in development
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector("#_marketing-dev-root");

    if(devRoot){
        mount(devRoot);
    }
}


export { mount };