player.onItemInteracted(IRON_SHOVEL, function () {
    player.teleport(world(105, 4, 120))
    blocks.fill(
    PLANKS_OAK,
    world(110, 14, 110),
    world(100, 4, 100),
    FillOperation.Replace
    )
})
