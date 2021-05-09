player.onChat("bridge", function () {
    agent.move(UP, 1)
    agent.setItem(BLACK_CONCRETE, 1, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(UP, 1)
        agent.move(LEFT, 5)
        agent.move(FORWARD, 1)
    }
    agent.move(DOWN, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 5)
        agent.move(FORWARD, 1)
    }
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 5)
        agent.move(FORWARD, 1)
        agent.move(DOWN, 1)
    }
})