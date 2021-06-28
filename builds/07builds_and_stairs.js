player.onItemInteracted(GOLDEN_SHOVEL, function () {
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
        PLANKS_SPRUCE,
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
player.onChat("lst1", function () {
    agent.teleport(world(101, 4, 101), EAST)
    for (let index = 0; index < 4; index++) {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
        agent.move(UP, 1)
        agent.place(DOWN)
    }
})
player.onChat("lst", function () {
    agent.teleport(world(101, 4, 101), EAST)
})
player.onItemInteracted(STONE_SHOVEL, function () {
    for (let index = 0; index <= 3; index++) {
        agent.teleport(world(101, index * 4 + 4, 101), EAST)
        for (let index2 = 0; index2 < 4; index2++) {
            agent.destroy(FORWARD)
            agent.move(FORWARD, 1)
            agent.destroy(UP)
            agent.move(UP, 1)
            agent.place(DOWN)
        }
    }
})
player.onChat("l", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("stairs", function () {
    agent.setItem(OAK_WOOD_STAIRS, 1, 1)
    for (let index = 0; index < 10; index++) {
        agent.move(UP, 1)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.turn(RIGHT_TURN)
    }
})
player.onChat("stairs_up", function () {
    agent.setItem(PLANKS_OAK, 1, 1)
    for (let index = 0; index < 10; index++) {
        agent.destroy(UP)
        agent.move(UP, 1)
        agent.destroy(UP)
        player.say(agent.inspect(AgentInspection.Block, FORWARD) == PLANKS_SPRUCE)
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        player.say(agent.inspect(AgentInspection.Block, FORWARD) == PLANKS_OAK)
        agent.destroy(UP)
        agent.destroy(FORWARD)
        agent.destroy(LEFT)
        agent.destroy(RIGHT)
        agent.place(DOWN)
        agent.turn(RIGHT_TURN)
    }
})
player.onItemInteracted(DIAMOND_SHOVEL, function () {
    agent.teleport(world(102, 4, 109), WEST)
})
player.onChat("shaft", function () {
    blocks.fill(
    AIR,
    world(101, 4, 108),
    world(102, 13, 109),
    FillOperation.Replace
    )
})
