player.onChat("s", function () {
    agent.setItem(EMERALD_BLOCK, 1, 1)
    agent.setSlot(1)
    agent.move(UP, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(LEFT_TURN)
    }
    agent.move(FORWARD, 1)
    agent.move(LEFT, 1)
})