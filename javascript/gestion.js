var playerList = [];
console.log("huitre");

function updatePlayers(datalist){
	datalist.innerHTML = '';

	for (player of playerList){
		const option = document.createElement('option');
		option.innerText = player;
		datalist.appendChild(option);
	}
}

var addPlayer = function (event) {

	console.log("aaaa");

    if (event.type = "keydown"){
    	if (event.key == 'Enter'){
    		if (event.target.value != ""){
    			playerList.push(event.target.value);
    			updatePlayers(document.getElementById("player_1"));
    			updatePlayers(document.getElementById("player_2"));
    			event.target.value = "";
    		}
    		else{
    			event.target.focus();
    		}
    	}
    	if (event.key == 'Backspace' || event.key == 'Delete'){
    		event.target.value = "";
    	}
    }
};

document.addEventListener("DOMContentLoaded", function() {
 	document.getElementById("playerInput").addEventListener("keydown", addPlayer);
});
