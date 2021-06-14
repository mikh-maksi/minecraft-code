player.onChat("downstairs", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 2; index2++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 3)
        agent.move(FORWARD, 1)
        agent.move(DOWN, 1)
    }
})
player.onChat("upstairs", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 2; index2++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 3)
        agent.move(FORWARD, 1)
        agent.move(UP, 1)
    }
})
player.onChat("track", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 2; index2++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 3)
        agent.move(FORWARD, 1)
    }
})
