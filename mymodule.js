var fs = require('fs')

module.exports = function (pathname,ending,callback) {
	fs.readdir(pathname, function (err, list) {
		if (err) return callback(err);
		var extension="."+ending;
		var filtered=[];
		for(var i=0;i<list.length;i++){
			if(list[i].indexOf(extension)!=-1){
				filtered.push(list[i]);
			}
		}
		callback(null,filtered);
	});
}

/*
fs.readdir(pathname, function (err, list) {
		console.log("hi");
	}
if(err){
			return callback(err);
		}
		var filesArray=[];
		for(var i=0;i<list.length;i++){
			if(list[i].indexOf(ending)!=-1){
				callback(list[i]);
			}
		}
		*/
