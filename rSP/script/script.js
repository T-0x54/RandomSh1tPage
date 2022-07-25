let pF = document.querySelector(".infiltrator");
window.onload = () => pF.addEventListener("click", () => setTimeout(() => pF.click(), 3e3));
let Axel = document.querySelector("#Axel"), 
Gena = document.querySelector("#Gena"), 
BDJoe = document.querySelector("#BDJoe"), 
AxelV = document.querySelector(".AxelV"), 
GenaV = document.querySelector(".GenaV"), 
BDJoeV = document.querySelector(".BDJoeV");
Axel.onmouseover = () => AxelV.play(), 
Axel.onmouseout = function()
{
    AxelV.pause();
    if (AxelV.currentTime !== 0)
        AxelV.currentTime = 0;
}, 
Gena.onmouseover = () => GenaV.play(), 
Gena.onmouseout = function()
{
    GenaV.pause();
    if (GenaV.currentTime !== 0)
        GenaV.currentTime = 0;
}, 
BDJoe.onmouseover = () => BDJoeV.play(), 
BDJoe.onmouseout = function()
{
    BDJoeV.pause();
    if (BDJoeV.currentTime !== 0)
        BDJoeV.currentTime = 0;
};
/*let characters = document.querySelectorAll('.portfolio .portfolio-content .card img');
let theSound = document.querySelector('.theSound');
characters.forEach(function(e)
{
    e.onmouseover = function()
{
        theSound.play();
}
    e.onmouseout = function()
{
        theSound.pause();
        if (theSound.currentTime != 0)
             theSound.currentTime = 0;
}
})*/