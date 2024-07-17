onEvent('recipes', event => {
	
	
  event.remove({output: 'ironjetpacks:basic_coil'})	
  event.shaped('ironjetpacks:basic_coil', [
    ' IR',
    'ISI',
    'RI '
  ], {
    S: '#forge:rods/wooden',
	R: 'minecraft:redstone',
	I: '#forge:plates/iron'
  })
  

})