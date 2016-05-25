var fs = require('fs')

function main(){
	var str=fs.readFileSync(process.argv[2]).toString();
	var arr=str.split('\n');
	console.log(arr.length-1);
}

main();
