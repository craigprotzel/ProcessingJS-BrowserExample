var processingInstance;
var state = false;

function switchSketchState(curState) {
	if (!processingInstance) {
		processingInstance = Processing.getInstanceById('sketch');
	}
	if (curState == true) {
		processingInstance.loop();  // call Processing loop() function
	} else {
		processingInstance.noLoop(); // stop animation, call noLoop()
	}
}


$(document).ready(function() {

	processingInstance = Processing.getInstanceById('sketch');

	$("#toggle").click(function(){
		switchSketchState(state);
		state = !state;
		if (state){
			$('#toggle').html("START");
		} else { 
			$('#toggle').html("STOP");
		}
	});

});