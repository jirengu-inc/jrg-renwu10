var click = document.getElementsByTagName("button")[0],
    cover = document.getElementsByClassName("cover")[0],
    modal = document.getElementsByClassName("modal")[0],
    x = document.getElementsByClassName("x")[0],
    cancle = document.getElementsByClassName("cancle")[0];
function remove() {
    cover.className = cover.className.replace("active","");
    modal.className = modal.className.replace("active","");
}
click.addEventListener("click",function () {
    cover.className += " " + "active";
    modal.className += " " + "active";
})
x.addEventListener("click",remove);
cancle.addEventListener("click",remove);
cover.addEventListener("click",remove);