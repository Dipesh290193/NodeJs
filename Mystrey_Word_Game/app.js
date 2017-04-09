const 
	inquirer = require('inquirer')
	path = require('path')

module.exports.run=(level)=>{
	const game = new WordGame(level)
}

class WordGame{
	constructor(level)
	{
		this.choices = ['Guess a letter','Get a hint', 'View the letters guessed', 'View how many guess until game ends']
		this.word = ""
		this.wordGuess = ""
		this.guess = []
		this.level = level
		this.hint = 0
		this.getWord(level,(callback)=>{
			this.word = callback
			for(let i =0 ; i<this.word.length;i++)
			{
				this.wordGuess += '_'
			}
			this.init()
		})
	}

	init()
	{
		inquirer.prompt([{
			type: 'rawlist',
			name: 'option',
			message: this.display(),
			choices: this.choices,
		}]).then((input) =>{
			switch(input.option)
			{
				case 'Guess a letter': 
					this.guessLetter()
					break
				case 'Get a hint':
					this.getHint()
					break
				case 'View the letters guessed':
					 console.log('\x1b[34m','\nThe letters guessed wrong : '+this.guess+'\n')
					 this.init()
					 break
				case'View how many guess until game ends':
					console.log('\x1b[34m','\nNumber of guess remaning : '+(4 - this.guess.length)+'\n')
					this.init()
					break
			}
		})
	}

	getHint()
	{
		let flag = true
		let temp =""
		if(this.hint === this.word.length)
		{
			temp = this.wordGuess.indexOf('_')
		}
		else
		{
			while(flag)
			{
				let found = false
				temp = this.word[this.hint]
				for(let i = 0;i < this.word.length;i++)
				{
					if(this.word[i] === temp && i !== this.hint)
					{	
						this.hint++
						found = true
						break
					}
				}
				if(found)
					flag= true
				else
					flag= false
			}
		}
		this.hint++
		this.insertLetter(temp)
	}

	guessLetter()
	{
		let temp = this.wordGuess.split('')
		 inquirer.prompt([{
			type: 'input',
			name: 'letter',
			message: 'Enter a letter: ',
			filter: (input) =>{
				return input[0].toLowerCase()
			}
		}]).then((input) =>{
			if(this.word.indexOf(input.letter) === -1)
				this.guess.push(input.letter)
			this.insertLetter(input.letter)
		})	
	}

	insertLetter(letter)
	{
		let temp = this.wordGuess.split('')
		for(let i = 0 ;i < this.word.length;i++)
			{
				if(this.word[i] === letter)
					temp[i] = letter
			}
			this.wordGuess = temp.join('').toString()
			if(!this.isGameOver())
				this.init()
			else
				this.winOrLose()
	}

	isGameOver()
	{
		if(this.guess.length >= 4 )
			return true
		for(let i =0; i<this.wordGuess.length;i++)
		{
			if(this.wordGuess[i] == '_')
				return false
		}
		return true
	}

	winOrLose()
	{
		console.log('\x1b[33m','\nThe correct answere is : '+this.word)
		if(this.wordGuess.indexOf('_') > -1)
		{
			console.log('\x1b[31m','\n Sorry, you lose...Bad luck\n')
			console.log('\x1b[31m',' you can try another time')
		}
		else
		{
			console.log('\x1b[32m','\n Congradulations..! You won..\n')
			console.log('\x1b[32m',' you guessed correct\n')
		}
		inquirer.prompt([{
			type: 'input',
			name: 'again',
			message: 'Do you want to play again?(Yes/No)'
		}]).then((input) =>{
			if(input.again.toLowerCase() === 'yes' || input.again.toLowerCase() === 'y')
			{
				new WordGame(this.level)
			}
		})
	}
	
	getWord(level,callback)
	{
		fs.readFile('hw4_words.js','utf8',(err,data)=>{
			if(err)
				console.log(err)
			const words = JSON.parse(data)[level]
			const index = Math.floor(Math.random()* words.length)
			callback('amazon')//words[index].toLowerCase())
		})
	} 

	display()
	{
		let result  = '\x1b[33m\n' + this.wordGuess + "\n"
		return result
	}
}
//For color the console
//https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script