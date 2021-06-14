player.onChat("rail", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    agent.setItem(POWERED_RAIL, 1, 2)
    for (let index = 0; index <= 4; index++) {
        for (let index = 0; index <= 2; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            if (index == 1) {
                agent.setSlot(2)
                agent.place(DOWN)
                agent.setSlot(1)
            }
            agent.setSlot(1)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 3)
        agent.move(FORWARD, 1)
    }
})
player.onChat("uprail", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    agent.setItem(POWERED_RAIL, 1, 2)
    for (let index = 0; index <= 4; index++) {
        for (let index = 0; index <= 2; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            if (index == 1) {
                agent.setSlot(2)
                agent.place(DOWN)
                agent.setSlot(1)
            }
            agent.setSlot(1)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 3)
        agent.move(FORWARD, 1)
        agent.move(UP, 1)
    }
})
player.onChat("downrail", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    agent.setItem(POWERED_RAIL, 1, 2)
    for (let index = 0; index <= 4; index++) {
        for (let index = 0; index <= 2; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            if (index == 1) {
                agent.setSlot(2)
                agent.place(DOWN)
                agent.setSlot(1)
            }
            agent.setSlot(1)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 3)
        agent.move(FORWARD, 1)
    }
})