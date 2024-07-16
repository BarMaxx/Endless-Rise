onEvent('recipes', event => {
	
	
  event.remove({output: 'create:andesite_alloy'})	
  event.shaped('4x create:andesite_alloy', [
    'APA',
    'PIP',
    'APA'
  ], {
    A: '#chipped:andesite',
	P: 'the_bumblezone:pollen_puff',
	I: '#forge:dusts/iron'
  })
  
  
  event.remove({output: 'create:mechanical_press'})	
  event.shaped('create:mechanical_press', [
    ' A ',
    'WCW',
    ' B '
  ], {
    A: 'create:andesite_alloy',
	W: 'create:cogwheel',
	C: 'create:andesite_casing',
	B: 'tconstruct:tinkers_bronze_block'
  })
  
  
  event.remove({output: 'create:sand_paper'})	
  event.shaped('create:sand_paper', [
    'SSS',
    'SPS',
    'SSS'
  ], {
    S: 'atum:sand',
	P: 'minecraft:paper'
  })
  
  
})