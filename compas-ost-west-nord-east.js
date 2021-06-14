player.onChat("west", function () {
    agent.setItem(BLUE_CONCRETE, 1, 1)
    agent.teleport(world(10, 4, 10), WEST)
    agent.setSlot(1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 4; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
player.onChat("south", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    agent.teleport(world(10, 4, 10), SOUTH)
    agent.setSlot(1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 4; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
player.onChat("nord", function () {
    agent.setItem(RED_CONCRETE, 1, 1)
    agent.teleport(world(10, 4, 10), NORTH)
    agent.setSlot(1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 4; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
player.onChat("ost", function () {
    agent.setItem(YELLOW_CONCRETE, 1, 1)
    agent.teleport(world(10, 4, 10), SOUTH)
    agent.setSlot(1)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 4; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
