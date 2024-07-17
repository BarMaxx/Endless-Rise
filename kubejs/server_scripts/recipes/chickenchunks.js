onEvent('recipes', event => {
	
	
  event.remove({output: 'chickenchunks:chunk_loader'})	
  event.shaped('chickenchunks:chunk_loader', [
    'PEP',
    'GDG',
    'ITI'
  ], {
    P: 'create:polished_rose_quartz',
	E: 'minecraft:ender_pearl',
	G: 'minecraft:gold_ingot',
	I: 'minecraft:iron_block',
	T: 'minecraft:enchanting_table',
	D: 'minecraft:diamond_block'
  })
  
  
})