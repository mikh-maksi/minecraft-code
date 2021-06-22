mobs.onMobKilled(mobs.monster(SKELETON), function () {
    points += 3
    player.say(points)
    check()
})
mobs.onMobKilled(mobs.monster(CREEPER), function () {
    points += 4
    player.say(points)
    check()
})
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    points += 2
    player.say(points)
    check()
})
let points = 0

function check () {
    if (points > 10) {
        gameplay.setGameMode(
        CREATIVE,
        mobs.target(LOCAL_PLAYER)
        )
        gameplay.title(mobs.target(LOCAL_PLAYER), "Вы победили!", "")
    }
}