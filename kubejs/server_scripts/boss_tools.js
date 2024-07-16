onEvent('recipes', event => {
	
	
  event.remove({output: 'boss_tools:hammer'})	
  event.shaped('boss_tools:hammer', [
    'SES',
    ' P ',
    ' P '
  ], {
    S: '#forge:plates/steel',
	E: 'powah:steel_energized',
	P: '#forge:rods/wooden'
  })
  
  
  event.remove({output: 'boss_tools:blast_furnace'})
  

})