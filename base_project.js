let x = 0
let y = 0
let z = 0
player.onChat("base", function () {
	
})
player.onItemInteracted(GOLDEN_SHOVEL, function () {
    blocks.fill(
    AIR,
    world(-19, 4, -19),
    world(19, 19, 19),
    FillOperation.Replace
    )
})
player.onItemInteracted(STONE_PICKAXE, function () {
    agent.teleportToPlayer()
})
player.onItemInteracted(IRON_SHOVEL, function () {
    blocks.fill(
    GRASS,
    world(-30, 0, -30),
    world(30, 3, 30),
    FillOperation.Replace
    )
})
player.onItemInteracted(WOODEN_SHOVEL, function () {
    blocks.fill(
    PLANKS_OAK,
    world(-20, 4, -20),
    world(20, 20, 20),
    FillOperation.Replace
    )
})
player.onItemInteracted(DIAMOND_SHOVEL, function () {
    x = 556
    y = 70
    z = 0
    blocks.fill(
    COBBLESTONE,
    world(x, y, z),
    world(x + 12, y + 20, z - 17),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(x + 1, y + 1, z - 1),
    world(x + 11, y + 19, z - 16),
    FillOperation.Replace
    )
    for (let index = 0; index <= 4; index++) {
        blocks.fill(
        PLANKS_OAK,
        world(x, index * 5 + y, z),
        world(x + 12, index * 5 + y, z - 17),
        FillOperation.Replace
        )
    }
})
