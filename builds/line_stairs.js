player.onItemInteracted(WOODEN_SHOVEL, function () {
    agent.setItem(OAK_WOOD_STAIRS, 1, 2)
    agent.teleport(world(101, 4, 101), EAST)
    for (let index = 0; index < 4; index++) {
        agent.destroy(UP)
        agent.move(UP, 1)
        agent.destroy(UP)
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.destroy(UP)
        agent.destroy(DOWN)
        agent.place(DOWN)
    }
})