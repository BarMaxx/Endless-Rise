onEvent('recipes', event => {
	
	
  event.remove({output: 'fluxnetworks:flux_core'})	
  event.shaped('2x fluxnetworks:flux_core', [
    'FOF',
    'OBO',
    'FOF'
  ], {
    F: 'fluxnetworks:flux_dust',
	O: 'minecraft:obsidian',
	B: 'powah:crystal_blazing'
  })
  
  
})