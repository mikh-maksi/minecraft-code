player.onItemInteracted(IRON_SHOVEL, function () {
    player.teleport(world(105, 4, 120))
    blocks.fill(
    PLANKS_OAK,
    world(110, 14, 110),
    world(100, 4, 100),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(109, 13, 109),
    world(101, 4, 101),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(105, 5, 110),
    world(104, 4, 110),
    FillOperation.Replace
    )
})
