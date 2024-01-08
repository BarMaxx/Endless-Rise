craftingTable.addShapeless("ct_vanilla_01", <item:minecraft:wooden_hoe>, 
[<item:minecraft:stick>, <item:minecraft:stick>], null);
craftingTable.removeRecipe(<item:craftingstation:crafting_station>);
craftingTable.addShapeless("ct_vanilla_02", <item:craftingstation:crafting_station>, 
[<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>], null);
craftingTable.removeRecipe(<item:minecraft:crafting_table>);
craftingTable.removeRecipe(<item:minecraft:bricks>);
craftingTable.addShaped("ct_vanilla_03", <item:minecraft:bricks>, [
    [<item:minecraft:brick>, <item:the_bumblezone:pollen_puff>, <item:minecraft:brick>],
	[<item:the_bumblezone:pollen_puff>, <item:minecraft:clay_ball>, <item:the_bumblezone:pollen_puff>],
	[<item:minecraft:brick>, <item:the_bumblezone:pollen_puff>, <item:minecraft:brick>]], null);
craftingTable.removeRecipe(<item:minecraft:flint>);
craftingTable.removeRecipe(<item:minecraft:furnace>);
craftingTable.removeRecipe(<item:minecraft:hopper>);
craftingTable.removeRecipe(<item:minecraft:stonecutter>);
craftingTable.addShaped("ct_vanilla_05", <item:minecraft:campfire>, [
    [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
	[<item:minecraft:stick>, <item:minecraft:flint>, <item:minecraft:stick>],
	[<tag:items:minecraft:logs>, <tag:items:minecraft:logs>, <tag:items:minecraft:logs>]], null);
craftingTable.removeRecipe(<item:minecraft:crafting_table>);
craftingTable.addShaped("ct_vanilla_06", <item:minecraft:crafting_table>, [
    [<tag:items:minecraft:planks>, <tag:items:minecraft:logs>, <tag:items:minecraft:planks>],
	[<tag:items:minecraft:logs>, <item:minecraft:iron_block>, <tag:items:minecraft:logs>],
	[<tag:items:minecraft:planks>, <tag:items:minecraft:logs>, <tag:items:minecraft:planks>]], null);
craftingTable.removeRecipe(<item:minecraft:netherite_ingot>);
craftingTable.addShaped("ct_vanilla_07", <item:minecraft:netherite_ingot>, [
    [<item:atum:nebu_drop>, <item:savageandravage:blast_proof_plating>, <item:atum:nebu_drop>],
	[<item:minecraft:netherite_scrap>, <item:minecraft:netherite_scrap>, <item:minecraft:netherite_scrap>],
	[<item:atum:nebu_drop>, <item:savageandravage:blast_proof_plating>, <item:atum:nebu_drop>]], null);
craftingTable.addShapeless("ct_vanilla_08", <item:minecraft:ender_pearl>, 
[<tag:items:forge:slimeballs>], null);
craftingTable.removeRecipe(<item:minecraft:diamond_pickaxe>);
craftingTable.addShaped("ct_vanilla_09", <item:minecraft:diamond_pickaxe>, [
    [<item:minecraft:diamond>, <item:create:brass_sheet>, <item:minecraft:diamond>],
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>],
	[<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]], null);