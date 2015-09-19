import * as React from "react";
interface iTopNavBarProps {
    what?: any;
}

export default class TopNavBar extends React.Component<iTopNavBarProps, {}>
{
    
    constructor(props: iTopNavBarProps) {
        super(props);
    }
    
    render() {        
    return <nav className="tm-navbar uk-navbar uk-navbar-attached" >
                <div className="uk-container uk-container-center" >
            
                    <a href="#tm-offcanvas" 
                        className= "uk-navbar-toggle"
                        data-uk-offcanvas >        
                    </a>
                    
                    <a className= "uk-navbar-brand uk-hidden-small"
                        href = "index.html">
                        <img className="uk-margin uk-margin-remove"
                        src = "images/devbot_logo.svg" width= "90"
                        height = "30" title= "UIkit" alt= "UIkit"/>
                    </a>
                
                    <ul className= "uk-navbar-nav uk-hidden-small" >
                        <li><a href="#" > Get Started</a></li>
                        <li><a href="#" > Core </a></li >
                        <li><a href="#" > Components </a></li>
                        <li><a href="#" > Customizer </a></li>
                        <li><a href="#" > Showcase </a></li>
                        <li><a href="#" > Tutorials </a></li>
                    </ul>
                
                
                    <div className= "uk-navbar-brand uk-navbar-center uk-visible-small" >
                    devBot
                    </div>        
                </div>
            </nav>;
    }
}