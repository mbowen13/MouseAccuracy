
	var createdTime; var clickedTime; var reactionTime;
	var time = Math.random() * 5000;
	var shape;
	var top;var bottom;var left;var right;
	
	//dislay the box after 3 seconds
	function showBox(time){
		setTimeout(function() {
			shape = getShape();
			//does both of these things at the indicated time
			createdTime = Date.now();
			document.getElementById(shape).style.top=Math.random() * 350+"px";
			document.getElementById(shape).style.bottom=Math.random() * 350+"px";
			document.getElementById(shape).style.left=Math.random() * 800+"px";
			document.getElementById(shape).style.right=Math.random() * 800+"px";
			document.getElementById(shape).style.backgroundColor=getRandomColor();
			document.getElementById(shape).style.display="block";
		}, time);

	}
	var shapeNumber;
	//circle or square
	function getShape(){
		shapeNumber = Math.floor(Math.random() * 2);
		if(shapeNumber == 0){
			return "circle";
		}
		else{
			return "box";
		}
	}
	//randomColor
	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}
	
	//change size of element


	document.getElementById("box").onclick=function(){
		clickedTime = Date.now();
		//in seconds
		reactionTime = (clickedTime - createdTime) / 1000;
		this.style.display="none";
		document.getElementById("time").innerHTML=reactionTime;
		time = Math.random() * 5000;
		showBox(time);
	}

	document.getElementById("circle").onclick=function(){
		clickedTime = Date.now();
		//in seconds
		reactionTime = (clickedTime - createdTime) / 1000;
		this.style.display="none";
		document.getElementById("time").innerHTML=reactionTime;
		time = Math.random() * 5000;
		showBox(time);
	}

	showBox(time);


