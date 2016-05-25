 var mymodule = require('./mymodule.js')

 var pathname=process.argv[2];
 var ending=process.argv[3];

 var callback=function(err, data) {
	if (err) throw err;
	for(var i=0;i<data.length;i++){
		console.log(data[i]);
	}
}

mymodule(pathname,ending,callback);