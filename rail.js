player.onChat("rail", function () {
    agent.setItem(POWERED_RAIL, 1, 1)
    agent.setItem(DETECTOR_RAIL, 1, 2)
    for (let index = 0; index <= 100; index++) {
        if (index % 5 == 0) {
            agent.setSlot(2)
        } else {
            agent.setSlot(1)
        }
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
