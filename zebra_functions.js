player.onItemInteracted(IRON_SHOVEL, function () {
    agent.setItem(BLACK_CONCRETE, 1, 1)
    agent.setItem(WHITE_CONCRETE, 1, 2)
    for (let index = 0; index < 3; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(RIGHT, 1)
    }
    agent.move(LEFT, 3)
    agent.move(FORWARD, 1)
})
function zebra () {
    for (let index = 0; index < 3; index++) {
        agent.setSlot(1)
        for (let index = 0; index < 3; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 3)
        agent.move(FORWARD, 1)
        agent.setSlot(2)
        for (let index = 0; index < 3; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 3)
        agent.move(FORWARD, 1)
    }
}
player.onChat("road", function (num1) {
    agent.setItem(BLACK_CONCRETE, 1, 1)
    agent.setItem(WHITE_CONCRETE, 1, 2)
    for (let index = 0; index <= num1; index++) {
        if (index == 1) {
            zebra()
        } else {
            agent.setSlot(1)
        }
        for (let index2 = 0; index2 < 3; index2++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 3)
        agent.move(FORWARD, 1)
    }
})
player.onChat("zebra", function () {
    agent.setItem(BLACK_CONCRETE, 1, 1)
    agent.setItem(WHITE_CONCRETE, 1, 2)
    for (let index = 0; index < 3; index++) {
        agent.setSlot(1)
        for (let index = 0; index < 3; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 3)
        agent.move(FORWARD, 1)
        agent.setSlot(2)
        for (let index = 0; index < 3; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(LEFT, 3)
        agent.move(FORWARD, 1)
    }
})
