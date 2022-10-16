import React from "react";
import packageJson from '../package.json';
import './App.scss'

const App = () =>{
    return <><h1 className="app-headline">
            React app template without CRA.
        </h1>
        <p>
            This react template is not built using <strong>Create-React-App (CRA)</strong>.
            Use this template for creating react applications for your production ready application.
            The template has below dependencies and I would be updating the dependencies as and when latest compatible
            versions are released for latest react library. 
        </p>
        <p>Production dependencies-</p>
        <ul>
            { Object.entries(packageJson.dependencies).map((dependency, index)=>{
                return <li key={`${dependency[0]}-${dependency[1]}-${index}`}>
                    {dependency[0]} - {dependency[1]}
                </li>
            }) }
        </ul>
        <p>Development dependencies</p>
        <ul>
            {Object.entries(packageJson.devDependencies).map((dependency, index)=>{
                return <li key={`${dependency[0]}-${dependency[1]}-${index}`}>
                    {dependency[0]} - {dependency[1]}
                </li>
            })}
        </ul>
        <p>
            This template has the strict node and npm lockdowns to :
        </p>
        <ul>
            {Object.entries(packageJson.engines).map((engine, index)=>{
                return <li key={`${engine[0]}-${engine[1]}-${index}`}>
                    {engine[0]} - {engine[1]}
                </li>
            })}
        </ul>
        <p>
            This was essentially done due to issue with node-sass loader which doesnot yet have a compatible version
            for node ^18.
        </p>
    
    </>;
}
export default App;