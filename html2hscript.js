/**
 * Run manually
 * convert hmlt templates to hscript
 * TODO: is not complete
 */
var parser = require('html2hscript');

var  fs = require('fs');

var p = require('path');

var baseDir = './templates';

function endsWitHtml(path){
    return /\.html$/.exec(path)
}

fs.readdir(baseDir, function(err,files){

    if(err){
        throw err;
    }

    files.forEach(function(path)
    {
        var info = p.parse(path);

        path = baseDir + '/' + info.base;

        if( !endsWitHtml(path)){
           return;
        }

        fs.readFile(path, function (err, html) {

            if (err) {
                throw err;
            }

            parser(html, function(err, hscript) {

                if (err) {
                    throw err;
                }

                fs.writeFile(baseDir + '/'+ info.name + '.ts',
                    "import h = require('virtual-dom/h');\n" +
                    hscript + "\n"+
                    "export default h;");
            });

        });

    });

});



