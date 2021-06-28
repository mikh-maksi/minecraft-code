player.onItemInteracted(STONE_SHOVEL, function () {
    agent.setItem(OAK_WOOD_STAIRS, 1, 2)
    for (let index = 0; index <= 3; index++) {
        agent.teleport(world(101, index * 4 + 4, 101), EAST)
        for (let index2 = 0; index2 < 4; index2++) {
            agent.destroy(UP)
            agent.move(UP, 1)
            agent.destroy(UP)
            agent.destroy(FORWARD)
            agent.move(FORWARD, 1)
            agent.destroy(UP)
            agent.destroy(DOWN)
            agent.place(DOWN)
        }
    }
})