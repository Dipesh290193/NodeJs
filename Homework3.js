function countDown(n,callback){
	console.log('Question 1\n')
	const id = setInterval(()=>{
		if(n === 0)
		{
			clearInterval(id)
			callback(true)
		}
		else
			console.log(n)
		n --;
	},100)
}



function LowerOrUpper(letter){
	const promis= new Promise((resolve,reject)=>{
		if(letter >= 'a' && letter <= 'z')
			resolve(`this letter was resolved: ${letter}`)
		else
			reject(`this letter was rejected: ${letter}`)
	})
	return promis	
}

const sortLetters = (letters,callback)=>{
	const promises = letters.map((letter)=>{
		return LowerOrUpper(letter).catch((err) =>{
			return err
		})
	})
	console.log('\nQuestion 2\n')
	Promise.all(promises)
		.then((results)=>{
			results.forEach((result)=>{
				console.log(result)
			})

			callback(true)
		})
	
}

function reverseWord(string, str)
{
	str(string.split("").reverse().join(""))
}

function compare(string,result,callback)
{
		if(result === string)
			callback(true)
		else
			callback(false)
}

function print(string)
{
	reverseWord(string,(result)=>{
		compare(string,result,(callback)=>{
			console.log(callback)
		})
	})
}

const letters = ['A','b','c','D','e']


function extraCredit()
{
	countDown(5,(result)=>{
		if(result)
		{
			sortLetters(letters,(result)=>{
				if(result)
				{
					console.log("\nQuestion 3\n")
					print('kyayk')
					print('canoe')
				}
			})
		}
	})
}

extraCredit()