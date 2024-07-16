onEvent('recipes', event => {
	
	
  event.remove({output: 'immersiveengineering:hammer'})	
  event.shaped('immersiveengineering:hammer', [
    ' BT',
    ' SB',
    'S  '
  ], {
    S: '#forge:rods/wooden',
	T: '#forge:string',
	B: '#forge:plates/brass'
  })
  
  
})