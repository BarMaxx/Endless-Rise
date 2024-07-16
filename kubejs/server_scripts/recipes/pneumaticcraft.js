onEvent('recipes', event => {
	
	
  event.remove({output: 'pneumaticcraft:reinforced_stone'})	
  event.shaped('4x pneumaticcraft:reinforced_stone', [
    'ISI',
    'STS',
    'ISI'
  ], {
    S: '#forge:stone',
	I: 'pneumaticcraft:ingot_iron_compressed',
	T: '#forge:ingots/steel'
  })
  
  
})