player.onChat("compas", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    agent.setItem(RED_CONCRETE, 1, 2)
    agent.setItem(YELLOW_CONCRETE, 1, 3)
    agent.setItem(BLUE_CONCRETE, 1, 4)
    agent.setItem(BLACK_CONCRETE, 1, 5)
    agent.teleport(world(0, 4, 0), NORTH)
    agent.setSlot(1)
    for (let index = 0; index < 4; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.setSlot(5)
    for (let index = 0; index < 1; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.setSlot(2)
    for (let index = 0; index < 4; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.move(BACK, 5)
    agent.turn(LEFT_TURN)
    agent.move(BACK, 4)
    agent.setSlot(3)
    for (let index = 0; index < 4; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.move(FORWARD, 1)
    agent.setSlot(4)
    for (let index = 0; index < 4; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})