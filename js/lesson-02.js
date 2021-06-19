player.onChat("mod5", function (n) {
	if (n % 5 == 0){
        player.say(n+ " - кратно 5")
    } else{
        player.say(n+" - не кратно 5")
    }
})

player.onChat("ask",function(){
    player.say("После слова пример напиши результат сложения 17 и 4")
})

player.onChat("пример", function(n) {
    if (n ==  21){
        player.say("Ты дал правильный ответ!")
    } else{
        player.say("Ты дал не правильный ответ!")       
    }
    
})