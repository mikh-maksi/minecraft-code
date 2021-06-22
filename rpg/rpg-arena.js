player.onChat("start", function () {
    player.teleport(world(0, 4, 0))
    blocks.fill(
    OAK_FENCE,
    world(10, 10, 10),
    world(-10, 4, -10),
    FillOperation.Destroy
    )
    blocks.fill(
    AIR,
    world(9, 9, 9),
    world(-9, 4, -9),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    world(9, 3, 9),
    world(-9, 3, -9),
    FillOperation.Destroy
    )
})