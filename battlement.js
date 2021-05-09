player.onChat("battlement", function () {
    agent.setItem(PLANKS_OAK, 1, 1)
    agent.move(UP, 1)
    for (let індекс = 0; індекс <= 10; індекс++) {
        if (індекс % 2 == 0) {
            agent.place(DOWN)
            agent.move(UP, 1)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
            agent.move(DOWN, 1)
        } else {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
    }
})
