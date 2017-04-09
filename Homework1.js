console.log("Question 1")
function reverseWord(string)
{
	let result=""
	for(let i =string.length-1; i>=0 ; i--)
	{
		result += string[i]
	}
	console.log(result)
}

reverseWord('hello')
reverseWord('world')

console.log("\n")

console.log("Question 2")
function replaceVowels(string)
{
	let result = "";
	for(let i=0;i<string.length;i++)
	{
		let ch = string[i]
		if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
		{
			result += '*' 
		}
		else
		{
			result += ch
		}
	}
	console.log(result)
}

replaceVowels('javascript')
replaceVowels('angular')

console.log("\n")

console.log("Question 3")

function countLetters(arr)
{
	const result={}
	for(let i =0;i<arr.length;i++)
	{
		if(result[arr[i]] == undefined)
		{
			result[arr[i]] = 1
		}
		else
		{
			result[arr[i]]++
		}
	}
	console.log(result)
}


countLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y'])

console.log("\n")

console.log("Question 4")

function oddsAndEvens(arr)
{
	const odds=[]
	const evens=[]
	for(let i =0;i<arr.length;i++)
	{
		if(arr[i] % 2 == 0)
		{
			evens.push(arr[i])
		}
		else
		{
			odds.push(arr[i])
		}
	}
	console.log("odds = " +odds)
	console.log("evens = " +evens)
}

oddsAndEvens([ 21, 99, 43, 1, 8, 2, 48, 82 ])

console.log("\n")

console.log("Question 5")

function averageArray(arr)
{
	let total=0;
	let sum = 0;
	for(let i =0;i<arr.length;i++)
	{
		if(!isNaN(parseInt(arr[i])))
		{
			sum += parseInt(arr[i])
			total++
		}

	}
	console.log(sum/total)
}

averageArray([3,9,'hello',4,'95','abc','1',8,{key:'value'}])
console.log("\n")

console.log("Question 6")

function markupValue(car,percent)
{
	const cars=[]
	let total=0;
	for(let i =0;i<car.length;i++)
	{
		let value = car[i].wholesale * percent/100
		total += value 
		cars.push({[car[i].type]:value + car[i].wholesale})
	}
	result = {cars:cars, total}
	console.log(result)
}

const cars = [
  { type: 'hybrid', wholesale: 25000 },
  { type: 'minivan', wholesale: 28000 },
  { type: 'sedan', wholesale: 31500 },
  { type: 'convertible', wholesale: 45750 }
]

markupValue(cars,10.5)

