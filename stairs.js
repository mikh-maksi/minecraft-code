player.onChat("stairs", function () {
    agent.setItem(PLANKS_OAK, 1, 1)
    for (let index = 0; index < 10; index++) {
        agent.move(UP, 1)
        agent.move(FORWARD, 1)
        agent.place(DOWN)
        agent.turn(RIGHT_TURN)
    }
})