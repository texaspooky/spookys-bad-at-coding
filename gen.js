<!DOCTYPE html>
<html>
<body>
<h1>Hey binches</h1>
<sub>round 2</sub>

<p>Click the button to replace "Microsoft" with "W3Schools" in the paragraph below:</p>

<p id="demo">Visit Microsoft!</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace("Microsoft", "W3Schools");
    document.getElementById("demo").innerHTML = res;
}
</script>

</body>
</html>
