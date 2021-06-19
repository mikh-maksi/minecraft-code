player.onChat("downrail1", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    agent.setItem(POWERED_RAIL, 1, 2)
    for (let index3 = 0; index3 <= 10; index3++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.setSlot(2)
        agent.place(DOWN)
        agent.setSlot(1)
        agent.move(FORWARD, 1)
        agent.move(DOWN, 1)
    }
})
player.onChat("rail1", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    agent.setItem(POWERED_RAIL, 1, 2)
    for (let index3 = 0; index3 <= 10; index3++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.setSlot(2)
        agent.place(DOWN)
        agent.setSlot(1)
        agent.move(FORWARD, 1)
    }
})
player.onChat("uprail1", function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    agent.setItem(POWERED_RAIL, 1, 2)
    for (let index3 = 0; index3 <= 10; index3++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.setSlot(2)
        agent.place(DOWN)
        agent.setSlot(1)
        agent.move(FORWARD, 1)
        agent.move(UP, 1)
    }
})
