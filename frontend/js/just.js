
var data=[];
var arrc=[];
function myfunction()
{
    
    var x=document.getElementById("box").value;
    data = JSON.parse(localStorage["datas"]);
    if(x.length>1)
    data.push(x);
    localStorage["datas"] = JSON.stringify(data);
    data = JSON.parse(localStorage["datas"]);
    console.log(data);
    for(var i of data)
    //console.log(i);
  var mytable = "<table id='customers'>";
  var i=0;
  for (var CELL of data){  mytable += "<tr><td><input type='checkbox' id="+i+" onclick='checkeds()' >" + CELL + "</td></tr>"; i++;}
   mytable += "</table>";
  document.getElementById("mytable").innerHTML = mytable;
}
function checkeds()
{
 var n=data.length;
 console.log(n);
 for(var j=0;j<n-1;j++)
 {
     var s=document.getElementById(j);
     if(s.checked)
    {
        arrc = JSON.parse(localStorage["elements"]);
        arrc.push(data[j]);
        localStorage["elements"] = JSON.stringify(arrc);
        arrc = JSON.parse(localStorage["datas"]);
    }
 }
 console.log(arrc);
}

