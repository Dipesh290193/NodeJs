const dir = require('node-dir')
const crypto = require('crypto')
const treeify  =  require('treeify')
const args = process.argv
const hashes = {}

dir.readFiles(args[2], function(err, content, filename, next) {
		const hash  = crypto.createHash('sha256')
		hash.update(content)
		const sha = hash.digest('hex')
		if([sha] in hashes)
			hashes[sha].push(filename)
		else
			Object.assign(hashes,{[sha]:[filename]})
		next();
	    },
	    function()
	    {
	    	const display ={}
	    	Object.values(hashes).forEach((arr)=>{
	    		if(arr.length > 1)
	    		{
		    		const temp ={[arr[0]]:{[arr[1]]:null}}
			    	for(let i = 2 ;i<arr.length;i++)
			    	{
			    		Object.assign(temp[[arr[0]]],{[arr[i]]:null})
			    	}
			    	Object.assign(display,temp)
		    	}
	    	})
	    	console.log("The following duplicates were founds: \n")
	    	console.log(treeify.asTree(display))
	    });