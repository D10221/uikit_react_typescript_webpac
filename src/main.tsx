import * as React from 'react';

import MyComponent  from './components/welcome' ; 
import Appfooter from './components/appFooter';
import TopNavBar from './components/topNavBar';
import OffCanvasBar from './components/offCanvasBar';
React.render(
	<div>
		<TopNavBar/>
		<MyComponent />	
		<Appfooter />
		<OffCanvasBar/>
	</div>
	, document.body);
