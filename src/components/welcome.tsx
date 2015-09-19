import * as React from "react";
 
interface Props {
    foo?: string;
}

export default class MyComponent extends React.Component<Props, {} >
{
    constructor(props:Props) {
        super(props);    
    }
    
    render(){
        return <div className="tm-section tm-section-color-1 tm-section-colored">

            <div className="uk-container uk-container-center uk-text-center">

            <img className="tm-logo"
        src="images/devBot_logo_large.svg"
        width="281"
        height="217"
        title="UIkit"
        alt="UIkit" />

         <p className="uk-text-large">
            simple, light, fast web apps.
        </p>

        <a className="uk-button tm-button-download"
        on-click="ok"
        data-uikit-download>
    ...Ok ?
        </a>

        <ul className="tm-subnav uk-subnav uk-flex-center">
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Get Started</a></li>
        <li data-uikit-version></li>
        </ul>

        <ul className="tm-subnav uk-subnav uk-flex-center">
        <li><a href="#"><i className="uk-icon-star"></i> <span
                data-uikit-stargazers>4894</span> Stargazers</a></li>
        <li><a href="#"><i className="uk-icon-code-fork"></i> <span
                data-uikit-forks>940</span> Forks</a></li>
        <li><a href="#"><i className="uk-icon-twitter"></i> @getuikit</a></li>
        <li><a href="#"><i className="uk-icon-google-plus"></i>
            Community</a></li>
        </ul>

        </div>
        </div>;
    }
}
