player.onChat("light-simple", function () {
    agent.setItem(SPRUCE_FENCE, 1, 1)
    agent.setItem(GLOWSTONE, 1, 2)
    agent.setSlot(1)
    agent.move(LEFT, 1)
    for (let index = 0; index < 4; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    for (let index = 0; index < 2; index++) {
        agent.place(FORWARD)
        agent.move(RIGHT, 1)
    }
    agent.move(DOWN, 1)
    agent.move(LEFT, 1)
    agent.setSlot(2)
    agent.place(FORWARD)
    agent.move(DOWN, 3)
})