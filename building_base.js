player.onItemInteracted(IRON_SHOVEL, function () {
    blocks.fill(
    PLANKS_OAK,
    world(42, 12, -78),
    world(26, 4, -86),
    FillOperation.Replace
    )
})