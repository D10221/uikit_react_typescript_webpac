#DevBot;
==============

UiKit, React, Typescript, Webpack, Hack font

UiKit stolen from their own site , loaded locally with bower, removed links , changed logo, added hack font (dowloaded and edited uikit css)

Setup is currently static , no props, no state , to be used as boiler plate to get started hacking(learning) with react and stop tooling in a more or less "real life scenario"

Tsx (Typescript jsx) support is weak,  
	Webstorm (: No Ts 1.6 so.. no tsconfig, no annotations, no tsx...  EAP version currently 11 brings support for 1.5 but that's not enough , no Tsx and too buggy , did also tried using the locally installed typescript compiler lib, its a pity, as it is(was) my favorite tool;  I wish they fix it soon ;
	
Visual studio: didn't tried;

Atom: Typescript support  looks quite good , but I didn't like it,

I'm no sublime user. 

VSCode that was working quite well, until started using TSX, only syntax highlighting seems to be working.. but using the following task (tasks.json) help to get webpack build errors back to the editor (Ctrl+B)	
	

VSCode build Webpack build task:

    // A task runner that calls WebPack 
    // Compiles whatever is specified in tsconfig.json
    {
    	"name": "webpack",
    	
    	"version": "0.1.0",
    
    	// The command is webpack. Assumes that webpack has been installed using npm install -g webpack
    	"command": "webpack",
    
    	// The command is a shell script
    	"isShellCommand": true,
    
    	// Show the output window only if unrecognized errors occur.
    	"showOutput": "silent",
    
    	// args passed to webpack Note: it does not honnor --quiet not --silent, still outputs more than the error 
    	// might be related to webpack.config.js where ts-loader?silent=true  , dont know
    	"args": ["--quiet"],
    
    	// use 2 regex to find 1st the file and then the problem 
    	// in the output.
    	"problemMatcher": {
    		"owner": "webpack",
    		"severity": "error",
    		"fileLocation": "relative", 
    		"pattern": [
    			{
    			"regexp": "ERROR in (.*)",	
    			"file" : 1 
    			},
    			{
    			"regexp": "\\((\\d+),(\\d+)\\):(.*)",
    			"line":1,
    			"column": 2,
    			"message": 3
    			}			
    			]
    	}
    }