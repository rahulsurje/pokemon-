function fnsetTimeout() {
    var name = "edyst"
    setTimeout(function() {
        console.log(name)
        
    }, 5000);
    setTimeout(function() {
        console.log("rahul")
    },3000)
    setTimeout(function() {
        console.log("yogita")
    },2000)
}
fnsetTimeout()