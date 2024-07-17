import mods.artisanworktables.Recipe;
import mods.artisanworktables.Type;
import mods.artisanworktables.Tier;


craftingTable.removeRecipe(<item:toughasnails:empty_canteen>);
Recipe.type(Type.TANNER)
  .shaped([
    [<item:minecraft:air>, <tag:items:forge:leather>, <item:minecraft:air>],
    [<tag:items:forge:leather>, <item:minecraft:air>, <tag:items:forge:leather>],
    [<tag:items:forge:leather>, <tag:items:forge:leather>, <tag:items:forge:leather>]])
  .output(<item:toughasnails:empty_canteen>)
  .register();