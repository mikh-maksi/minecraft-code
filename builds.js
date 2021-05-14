player.onItemInteracted(IRON_SHOVEL, function () {
    blocks.fill(
    PLANKS_OAK,
    world(4, 4, -23),
    world(-4, 9, -34),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(3, 4, -24),
    world(-3, 8, -33),
    FillOperation.Replace
    )
})