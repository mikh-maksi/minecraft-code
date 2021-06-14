player.onChat("nord", function () {
    agent.setItem(RED_CONCRETE, 1, 1)
    agent.teleport(world(0, 4, 0), NORTH)
    agent.setSlot(1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 4; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})