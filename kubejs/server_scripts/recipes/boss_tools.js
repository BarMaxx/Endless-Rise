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
  
  
  event.remove({output: 'boss_tools:nasa_workbench'})	
  event.shaped('boss_tools:nasa_workbench', [
    'SWS',
    'OQO',
    'SCS'
  ], {
    Q: 'appliedenergistics2:quantum_entangled_singularity',
	W: 'artisanworktables:worktable_basic',
	S: 'pneumaticcraft:printed_circuit_board',
	O: 'createaddition:overcharged_alloy',
	C: 'boss_tools:compressed_steel'
  })
  

})