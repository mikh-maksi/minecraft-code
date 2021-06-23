player.onItemInteracted(GOLDEN_SHOVEL, function () {
    player.teleport(world(105, 4, 120))
    blocks.fill(
    PLANKS_OAK,
    world(110, 4, 110),
    world(100, 15, 100),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(109, 14, 109),
    world(101, 4, 101),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(105, 5, 110),
    world(104, 4, 110),
    FillOperation.Replace
    )
    agent.teleport(world(105, 4, 111), NORTH)
    agent.setSlot(1)
    agent.place(FORWARD)
    agent.move(LEFT, 1)
    agent.place(FORWARD)
    for (let index = 0; index <= 2; index++) {
        blocks.fill(
        PLANKS_OAK,
        world(110, 7 + index * 4, 110),
        world(100, 7 + index * 4, 100),
        FillOperation.Replace
        )
        blocks.fill(
        GLASS_PANE,
        world(101, 5 + index * 4, 110),
        world(102, 6 + index * 4, 110),
        FillOperation.Replace
        )
    }
})
player.onItemInteracted(IRON_SHOVEL, function () {
    player.teleport(world(105, 4, 120))
    blocks.fill(
    PLANKS_OAK,
    world(110, 4, 110),
    world(100, 14, 100),
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
    agent.teleport(world(105, 4, 111), NORTH)
    agent.setSlot(1)
    agent.place(FORWARD)
    agent.move(LEFT, 1)
    agent.place(FORWARD)
    for (let index2 = 0; index2 <= 3; index2++) {
        blocks.fill(
        PLANKS_OAK,
        world(110, 3 + index2 * 4, 110),
        world(100, 3 + index2 * 4, 100),
        FillOperation.Replace
        )
        blocks.fill(
        GLASS_PANE,
        world(101, 1 + index2 * 4, 110),
        world(102, 2 + index2 * 4, 110),
        FillOperation.Replace
        )
    }
})
