const 
	yargs = require('yargs')
	game = require('./app')
	fs = require('fs')


const flags= yargs.usage('$0: use --difficulty level')
	.options('h',{
		alias : 'help',
		describe: 'display help'
	})
	.options('d',{
		alias: 'difficulty',
		describe: 'difficulty level easy or hard'
	})
	.argv

if(flags.help)
	yargs.showHelp()
if(flags.difficulty)
{
	if(flags.difficulty === 'easy' || flags.difficulty === 'hard' )
		game.run(flags.difficulty)
	else
		console.log('Wrong input make sure you pass difficulty level easy or hard')
}