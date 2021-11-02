function fn(){
    var name = "chotu"
    var interval;

    interval=setInterval(function(){
        console.log(name)
    },2000)
    setTimeout(function(){
        clearInterval(interval)
    },10000)
}
fn()