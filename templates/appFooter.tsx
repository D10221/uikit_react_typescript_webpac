import * as React from 'react';

interface iAppfooterProps {
    what?:any;
}

export default class Appfooter extends React.Component<iAppfooterProps, {}>
{
    constructor(props?: iAppfooterProps) {
        super(props);
    }
    render() {        
     return <div className="tm-footer">
            <div className="uk-container uk-container-center uk-text-center" >
                <ul className="uk-subnav uk-subnav-line uk-flex-center" >
                    <li><a href="#"> One </a></li >
                    <li><a href="#"> Two </a></li >
                    <li><a href="#"> 11 </a></li >
                    <li><a href="#"> four </a></li >
                </ul>
                    
                <div className="uk-panel">        
                    <a href= "index.html"> 
                        <img src="images/devbot_logo.svg" width= "90" height= "30" title= "UIkit" alt= "UIkit" /> 
                    </a>
                </div>
            </div>
        </div>;
    }
}