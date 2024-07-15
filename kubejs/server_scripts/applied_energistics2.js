onEvent('recipes', event => {
	
	
  event.remove({output: 'appliedenergistics2:grindstone'})	
  event.shaped('appliedenergistics2:grindstone', [
    'SGS',
    'OSO',
    'CIC'
  ], {
    S: '#forge:stone',
	C: '#forge:cobblestone',
	G: 'appliedenergistics2:wooden_gear',
	I: '#forge:ingots/iron',
	O: '#forge:ingots/copper'
  })
  
  
})