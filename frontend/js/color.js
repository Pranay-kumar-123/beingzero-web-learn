function updateSlider()
{
var i=document.getElementById("1").value;
var j=document.getElementById("2").value;
var k=document.getElementById("3").value;
console.log(i+" "+" "+j+" " +k);
var sl = document.getElementById("slideAmount").style.backgroundColor="rgb("+i+","+j+","+k+")";
}