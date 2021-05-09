player.onChat("roadmarkingspoints", function () {
    agent.setItem(GRAY_CONCRETE, 1, 1)
    agent.setItem(WHITE_CONCRETE, 1, 2)
    for (let індекс = 0; індекс <= 4; індекс++) {
        if (індекс % 3 == 0) {
            center = 1
        } else {
            center = 2
        }
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 == 2) {
                agent.setSlot(center)
            } else {
                agent.setSlot(1)
            }
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(RIGHT, 1)
        }
        agent.move(FORWARD, 1)
        agent.move(LEFT, 5)
    }
})