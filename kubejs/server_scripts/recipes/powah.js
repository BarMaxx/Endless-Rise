onEvent('recipes', event => {
	
	
  event.remove({output: 'powah:energizing_orb'})	
  event.shaped('powah:energizing_orb', [
    'GAG',
    'GCG',
    'DED'
  ], {
    D: 'powah:dielectric_rod_horizontal',
	G: '#forge:glass',
	C: 'powah:dielectric_casing',
	E: 'appliedenergistics2:engineering_processor',
	A: 'pneumaticcraft:advanced_pcb'
  })
  
  
  event.remove({output: 'powah:dielectric_paste'})	
  event.shaped('8x powah:dielectric_paste', [
    'FCF',
    'CBC',
    'FCF'
  ], {
    F: 'appliedenergistics2:purified_fluix_crystal',
	C: '#forge:dusts/coal',
	B: 'minecraft:blaze_powder'
  })
  
  
})