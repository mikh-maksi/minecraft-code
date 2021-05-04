let points = 0
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    points += 2
    player.say(points)
    if (points % 4 == 0) {
        mobs.spawn(FIREWORKS_ROCKET, pos(0, 0, 0))
    }
})