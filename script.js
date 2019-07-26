

function light(ws) {
    var pic;

    if (ws == 0) {
        pic = "img/pic_bulboff.gif"
    }else{
        pic = "img/pic_bulbon.gif"
    }
    document.getElementById('myImage').src= pic ;
}