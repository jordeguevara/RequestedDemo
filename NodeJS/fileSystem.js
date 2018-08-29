var fs = require('fs')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var content = "//Very important file JS information ";

fs.writeFile('index.js', content , (err) => {
	if (err) 
		throw err;
});

var vaildFileTypes = ['js','py','html','css','rb'];

rl.question('Enter file name: ', (file) => {
  

  var devFile = file.split(".");
  
    function isValidFile(devFile){ // the extension of the file ex: index.js - ['index','js']
    	for(let i =0; i < vaildFileTypes.length; i++){  //if extension is any of the accepted ones return true
    		if(devFile[1] === vaildFileTypes[i])
    			return true;
    	}
    		return false;
    }
    if(isValidFile(devFile)){
    	console.log("Accepted file!");
  	}
    else{
  	console.log("Invalid file!" + '\n' + "Valid files are: .js, .py, .html, .css, .rb only");
  	}
  
  fs.readFile(file, (err, data) => {
	if (err) 
		throw err;
		
	console.log("content: " + data);
});
			


   rl.close();
});


