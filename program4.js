var fs = require('fs')

var pathname=process.argv[2];
var ending="."+process.argv[3];

fs.readdir(pathname, function callback (err, list) {
	for(var i=0;i<list.length;i++){
		if(list[i].indexOf(ending)!=-1){
			console.log(list[i]);
		}
	}
});