let evHand = function(e){
    console.log("You have clicked the heading");
    let xAxis = e.offsetX;
    let yAxis = e.offsetY;
    console.log("You have clicked your mouse on " + xAxis + " and " + yAxis);
}
let ele = document.getElementById("heading");
ele.addEventListener("click", evHand);