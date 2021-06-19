player.onItemInteracted(IRON_SHOVEL, function () {
    agent.setItem(WHITE_CONCRETE, 1, 1)
    agent.move(UP, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 10; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(LEFT_TURN)
    }
})
