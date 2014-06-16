<?php
if(isset($_POST['guess'])){ $a=$_POST['guess'];
if(!empty($a)){
if($a=="Victoria Memorial") {$b="Congratulations correct";}
else $b="Wrong Answer";
}}
?>


<html>
<head>
<title>Play Game</title>
<script type="text/javascript" src="java.js"></script>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<div id="full">
<img src="1a.jpg"id="pi1">
<img src="1b.jpg"id="pi2">
<img src="1a.jpg"id="pi3">
<img src="1b.jpg"id="pi4">
<img src="1a.jpg"id="pi5">
<img src="1b.jpg"id="pi6">
<img src="1a.jpg"id="pi7">
<img src="1b.jpg"id="pi8">
<img src="1a.jpg"id="pi9">
<img src="1b.jpg"id="pi10">
<img src="1a.jpg"id="pi11">
<img src="1b.jpg"id="pi12">
<img src="1a.jpg"id="pi13">
<img src="1b.jpg"id="pi14">
<img src="1a.jpg"id="pi15">
<img src="1b.jpg"id="pi16">
<img src="1a.jpg"id="pi17">
<img src="1b.jpg"id="pi18">
<img src="1a.jpg"id="pi19">
<img src="1b.jpg"id="pi20">
<img src="1a.jpg"id="pi21">
<img src="1b.jpg"id="pi22">
<img src="1a.jpg"id="pi23">
<img src="1b.jpg"id="pi24">
<img src="1a.jpg"id="pi25">
<img src="1b.jpg"id="pi26">
<img src="1a.jpg"id="pi27">
<img src="1b.jpg"id="pi28">
<img src="1a.jpg"id="pi29">
<img src="1b.jpg"id="pi30">



<img src="1.jpg"id="pic1">
<img src="2.jpg"id="pic2">
<img src="3.jpg" id="pic3">
<img src="4.jpg"id="pic4">
<img src="5.jpg"id="pic5">
<img src="6.jpg"id="pic6">
<img src="7.jpg"id="pic7">
<img src="8.jpg"id="pic8">
<img src="9.jpg"id="pic9">
<img src="10.jpg"id="pic10">
<img src="11.jpg"id="pic11">
<img src="12.jpg"id="pic12">
<img src="13.jpg"id="pic13">
<img src="14.jpg"id="pic14">
<img src="15.jpg"id="pic15">
<img src="16.jpg"id="pic16">
<img src="17.jpg"id="pic17">
<img src="18.jpg"id="pic18">
<img src="19.jpg"id="pic19">
<img src="20.jpg"id="pic20">
<img src="21.jpg"id="pic21">
<img src="22.jpg"id="pic22">
<img src="23.jpg"id="pic23">
<img src="24.jpg"id="pic24">
<img src="25.jpg"id="pic25">
<img src="26.jpg"id="pic26">
<img src="27.jpg"id="pic27">
<img src="28.jpg"id="pic28">
<img src="29.jpg"id="pic29">
<img src="30.jpg"id="pic30">

<p id="scorebutton">score:</p>
<p id="score">100</p>

<form><input type="button" value="show" onclick="score4()" id="change"></form>
<form method="POST" action="index4.php" >
<input name="guess"id="guess" placeholder="guess who's this?" type="text">
<input type="submit" value="submit" id="submit">
<p id="place"><?php if(isset($b)) echo $b;?></p>
</div>
</form>
<a href="index.html"><img src="restart.png" class="restart"></a>
</body>
</html>
