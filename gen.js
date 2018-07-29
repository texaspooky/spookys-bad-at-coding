<!DOCTYPE html>
<html>
<body>

<center>
<h1>FR COLI PORTRAIT GENERATOR</h1>

<p>Paste your dragon's image url where it says INSERTURL. Please remove the string of numbers after .png.</p>
<p>EXAMPLE:</p>
<sub><p>http://flightrising.com/rendern/350/302946/30294592_350.png<font color="red">?mtime=W1fNgQADPp8</font></p>
<p>http://flightrising.com/rendern/350/302946/30294592_350.png</p></sub>
-----
<font color="blue"><p id="demo">INSERTURL</p></font>
-----
<p>Then click the green "Run" button above, and then press the button. Then just copy the new image code and you're done!</p>

<button onclick="myFunction()">Generate!</button>

<script>
function myFunction() {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("_350", "");
    document.getElementById("demo").innerHTML = res;
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("/350", "/coliseum/portraits");
    document.getElementById("demo").innerHTML = res;
}
</script>

</body>
</html>
