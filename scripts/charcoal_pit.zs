craftingTable.removeRecipe(<item:charcoal_pit:brick_tuyere>);
craftingTable.addShaped("ct_charcoal_pit_01", <item:charcoal_pit:brick_tuyere>, [
    [<item:minecraft:brick>, <tag:items:forge:ingots/copper>, <item:minecraft:brick>],
	[<tag:items:forge:ingots/copper>, <tag:items:forge:coal_coke>, <tag:items:forge:ingots/copper>],
	[<item:minecraft:brick>, <tag:items:forge:ingots/copper>, <item:minecraft:brick>]], null);
craftingTable.removeRecipe(<item:charcoal_pit:bellows>);
craftingTable.addShaped("ct_charcoal_pit_02", <item:charcoal_pit:bellows>, [
    [<item:the_bumblezone:beehive_beeswax>, <item:minecraft:leather>, <item:the_bumblezone:beehive_beeswax>],
	[<tag:items:minecraft:planks>, <item:minecraft:leather>, <tag:items:minecraft:planks>],
	[<item:the_bumblezone:beehive_beeswax>, <item:minecraft:leather>, <item:the_bumblezone:beehive_beeswax>]], null);
craftingTable.removeRecipe(<item:charcoal_pit:fire_starter>);
craftingTable.addShapeless("ct_charcoal_pit_03", <item:charcoal_pit:fire_starter>, 
[<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>], null);