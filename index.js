var random1 = Math.ceil(Math.random()*6);
var dice_random1 = "images/dice"+random1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", dice_random1);

var random2 = Math.ceil(Math.random()*6);
var dice_random2 = "images/dice"+random2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", dice_random2);

if (dice_random1>dice_random2)
{
    document.querySelector("h1").innerHTML = "👇🏼 Player 1 Wins";
}
else if (dice_random1<dice_random2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins 👇🏼";
}
else
{
    document.querySelector("h1").innerHTML = "It's a Draw";
}