$(document).ready(function(){
    var au=[new Audio("crash.mp3"),new Audio("kick-bass.mp3"),new Audio("snare.mp3"),new Audio("tom-1.mp3"),new Audio("tom-2.mp3"),new Audio("tom-3.mp3"),new Audio("tom-4.mp3")]
    var alp=$(".drum").first();
for(let i=0;i<au.length;++i){
alp.click(function(){
    au[i].play();
})
    alp=alp.next();
}
 $(document).keypress(function(event){
    if(event.key=='w')au[0].play()
    if(event.key=='a')au[1].play()
    if(event.key=='s')au[2].play()
    if(event.key=='d')au[3].play()
    if(event.key=='j')au[4].play()
    if(event.key=='k')au[5].play()
    if(event.key=='l')au[6].play()
 })


})
