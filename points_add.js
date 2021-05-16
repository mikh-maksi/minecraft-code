mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    бали += 1
    points()
})
mobs.onMobKilled(mobs.monster(SLIME), function () {
    бали += 1
    points()
})
mobs.onMobKilled(mobs.monster(SKELETON), function () {
    бали += 2
    points()
})
mobs.onMobKilled(mobs.monster(SPIDER), function () {
    бали += 2
    points()
})
function points () {
    player.say(бали)
    if (бали % 10 == 0) {
        gameplay.title(mobs.target(LOCAL_PLAYER), "Checkpoint", String.fromCharCode(бали))
    }
}
mobs.onMobKilled(mobs.monster(CREEPER), function () {
    бали += 2
    points()
})
mobs.onMobKilled(mobs.monster(PILLAGER), function () {
    бали += 3
    points()
})
let бали = 0
бали = 0
