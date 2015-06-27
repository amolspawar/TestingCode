$(document).ready(function(){
$("button").click(function(){
$.post("https://data.sparkfun.com/input/XGNmx3D2WjIK8OzwMpOr?private_key=1JA1PmBbnduMgoYdVqox",
{
temp: $("#test").val()
},
function(data){
alert("Data: " + $("#test").val() + " sent to sparkfun");
});
});
});
