var count = 8;
// var redirect = "https://www.ankitray1github.io";
 
function countDown(){
    var timer = document.getElementById("timer");
    if(count > 0){
        count--;
        timer.innerHTML = "This page will redirect in "+count+" seconds.";
        setTimeout("countDown()", 1000);
    }
    // else{
    //     window.location.href = alert("Please click on the  redirecting  link...");
    // }
}
