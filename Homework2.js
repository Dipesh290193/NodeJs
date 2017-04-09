console.log("Question 1")

function reverseWord(string)
{
	console.log(string.split("").reverse().join(""))
}

reverseWord('hello')
reverseWord('world')

console.log("\n")

console.log("Question 2")

function replaceVowels(string)
{
	console.log(string.replace(/a|e|i|o|u/g,'*'))
}

replaceVowels('javascript')
replaceVowels('angular')

console.log("\n")

console.log("Question 3")


class Calculator
{
	constructor(total=0)
	{
		this.total = total
	}

	add(b=0)
	{
		this.total += b
		return this
	}

	substract(b=0)
	{
		this.total -= b
		return this
	}

	multiply(b=1)
	{
		this.total *= b
		return this
	}

	divide(b=1)
	{
		this.total /= b
		return this
	}

	clear()
	{
		this.total = 0
		return this
	}

	get print()
	{
		console.log(this.total)
		return this
	}
}

const calculator_v1 = new Calculator(2)
calculator_v1
	.multiply(3)
	.add(10)
	.divide(2)
	.substract(4)
	.print
	.clear()
	.print
const calculator_v2 = new Calculator()
calculator_v2
	.multiply(3)
    .add(10)
    .divide(2)
    .substract(4)
    .print
    .clear()
    .print

console.log("\n")

console.log("Question 4")

function convertToObject(list)
{
	const obj = list.map((item)=>{
		return {[item[0]]:item[1]}
	})

	console.log(obj)
}

const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]
convertToObject(media_arr)

console.log("\n")

console.log("Question 5")

function convertToArray(media_obj)
{
	const arr=[]
	Object.keys(media_obj).forEach((i)=>{
		arr.push([i,media_obj[i]])
	})
	console.log(arr)
}

const media_obj = { media: 'facebook', company: 'github', likes: 58445 }
convertToArray(media_obj)

