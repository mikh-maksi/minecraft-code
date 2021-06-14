player.onChat("qb", function () {
    agent.setItem(SPRUCE_FENCE, 1, 1)
    agent.setItem(END_ROD, 1, 2)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 1; index++) {
            agent.place(FORWARD)
            agent.move(LEFT, 1)
        }
        agent.move(LEFT, 1)
        agent.turn(RIGHT_TURN)
        agent.move(LEFT, 1)
    }
    agent.setSlot(2)
    agent.turn(LEFT_TURN)
})
player.onChat("q", function () {
    agent.setItem(SPRUCE_FENCE, 1, 2)
    agent.setItem(WHITE_STAINED_GLASS_PANE, 1, 4)
    agent.setSlot(4)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            agent.place(FORWARD)
            agent.move(LEFT, 1)
        }
        agent.move(LEFT, 1)
        agent.turn(RIGHT_TURN)
        agent.move(LEFT, 1)
    }
    agent.setSlot(2)
    agent.turn(LEFT_TURN)
})