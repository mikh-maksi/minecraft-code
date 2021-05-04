let points = 0
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    points += 2
    player.say(points)
})