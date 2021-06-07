player.onChat("flowers", function (num1, num2) {
    agent.setItem(OXEYE_DAISY, 1, 1)
    for (let index = 0; index < num1; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    for (let index = 0; index < num2; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
