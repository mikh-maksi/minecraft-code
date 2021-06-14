player.onChat("road", function () {
    agent.teleport(world(0, 4, 0), EAST)
    agent.setItem(GRAY_CONCRETE, 1, 1)
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 3; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(LEFT, 1)
        }
        agent.move(FORWARD, 1)
        agent.move(RIGHT, 3)
    }
})