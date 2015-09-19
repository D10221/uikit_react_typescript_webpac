import * as React from 'react';

interface iOffCanvasBarProps{
    what?: any;
}

export default class OffCanvasBar extends React.Component<iOffCanvasBarProps,{}>{
    constructor(props?:iOffCanvasBarProps){
        super(props);
    }
    render(){return <div id="tm-offcanvas" className="uk-offcanvas">

    <div className="uk-offcanvas-bar">

        <ul className="uk-nav uk-nav-offcanvas uk-nav-parent-icon" data-uk-nav="{ multiple: true }">
            <li className="uk-parent"><a href="#">Documentation</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Get started</a></li>
                    <li><a href="#">How to customize</a></li>
                    <li><a href="#">Layout examples</a></li>
                    <li><a href="#">Core</a></li>
                    <li><a href="#">Components</a></li>
                    <li><a href="#">Project structure</a></li>
                    <li><a href="#">Less &amp; Sass files</a></li>
                    <li><a href="#">Create a theme</a></li>
                    <li><a href="#">Create a style</a></li>
                    <li><a href="#">Customizer.json</a></li>
                    <li><a href="#">Javascript</a></li>
                    <li><a href="#">Custom prefix</a></li>
                </ul>
            </li>
            <li className="uk-nav-header">Core</li>
            <li className="uk-parent"><a href="#"><i className="uk-icon-wrench"></i> Defaults</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Base</a></li>
                    <li><a href="#">Print</a></li>
                </ul>
            </li>
            <li className="uk-parent"><a href="#"><i className="uk-icon-th-large"></i> Layout</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Grid</a></li>
                    <li><a href="#">Panel</a></li>
                    <li><a href="#">Block</a></li>
                    <li><a href="#">Article</a></li>
                    <li><a href="#">Comment</a></li>
                    <li><a href="#">Utility</a></li>
                    <li><a href="#">Flex</a></li>
                    <li><a href="#">Cover</a></li>
                </ul>
            </li>
            <li className="uk-parent"><a href="#"><i className="uk-icon-bars"></i> Navigations</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Nav</a></li>
                    <li><a href="#">Navbar</a></li>
                    <li><a href="#">Subnav</a></li>
                    <li><a href="#">Breadcrumb</a></li>
                    <li><a href="#">Pagination</a></li>
                    <li><a href="#">Tab</a></li>
                    <li><a href="#">Thumbnav</a></li>
                </ul>
            </li>
            <li className="uk-parent"><a href="#"><i className="uk-icon-check"></i> Elements</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">List</a></li>
                    <li><a href="#">Description list</a></li>
                    <li><a href="#">Table</a></li>
                    <li><a href="#">Form</a></li>
                </ul>
            </li>
            <li className="uk-parent"><a href="#"><i className="uk-icon-folder-open"></i> Common</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Button</a></li>
                    <li><a href="#">Icon</a></li>
                    <li><a href="#">Close</a></li>
                    <li><a href="#">Badge</a></li>
                    <li><a href="#">Alert</a></li>
                    <li><a href="#">Thumbnail</a></li>
                    <li><a href="#">Overlay</a></li>
                    <li><a href="#">Text</a></li>
                    <li><a href="#">Animation</a></li>
                    <li><a href="#">Contrast</a></li>
                </ul>
            </li>
            <li className="uk-parent"><a href="#"><i className="uk-icon-magic"></i> JavaScript</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Dropdown</a></li>
                    <li><a href="#">Modal</a></li>
                    <li><a href="#">Off-canvas</a></li>
                    <li><a href="#">Switcher</a></li>
                    <li><a href="#">Toggle</a></li>
                    <li><a href="#">Scrollspy</a></li>
                    <li><a href="#">Smooth scroll</a></li>
                </ul>
            </li>
            <li className="uk-nav-header">Components</li>
            <li className="uk-parent"><a href="#"><i className="uk-icon-th-large"></i> Layout</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Dynamic Grid</a></li>
                </ul>
            </li>
            <li className="uk-parent"><a href="#"><i className="uk-icon-bars"></i> Navigations</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Dotnav</a></li>
                    <li><a href="#">Slidenav</a></li>
                    <li><a href="#">Dynamic Pagination</a></li>
                </ul>
            </li>
            <li className="uk-parent"><a href="#"><i className="uk-icon-folder-open"></i> Common</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Form advanced</a></li>
                    <li><a href="#">Form file</a></li>
                    <li><a href="#">Form password</a></li>
                    <li><a href="#">Form select</a></li>
                    <li><a href="#">Placeholder</a></li>
                    <li><a href="#">Progress</a></li>
                </ul>
            </li>
            <li className="uk-parent"><a href="#"><i className="uk-icon-magic"></i> JavaScript</a>
                <ul className="uk-nav-sub">
                    <li><a href="#">Lightbox</a></li>
                    <li><a href="#">Autocomplete</a></li>
                    <li><a href="#">Datepicker</a></li>
                    <li><a href="#">HTML editor</a></li>
                    <li><a href="#">Slider</a></li>
                    <li><a href="#">Slideset</a></li>
                    <li><a href="#">Slideshow</a></li>
                    <li><a href="#">Parallax</a></li>
                    <li><a href="#">Accordion</a></li>
                    <li><a href="#">Notify</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Nestable</a></li>
                    <li><a href="#">Sortable</a></li>
                    <li><a href="#">Sticky</a></li>
                    <li><a href="#">Timepicker</a></li>
                    <li><a href="#">Tooltip</a></li>
                    <li><a href="#">Upload</a></li>
                </ul>
            </li>
            <li className="uk-nav-divider"></li>
            <li><a href="#">Showcase</a></li>
            <li><a href="#">Tutorials</a></li>
        </ul>

    </div>
</div>;}
}