onEvent('recipes', event => {
	
	
  event.remove({output: 'powah:energizing_orb'})	
  event.shaped('powah:energizing_orb', [
    'GGG',
    'GCG',
    'DED'
  ], {
    D: 'powah:dielectric_rod_horizontal',
	G: '#forge:glass',
	C: 'powah:dielectric_casing',
	E: 'appliedenergistics2:engineering_processor'
  })
  
  
})