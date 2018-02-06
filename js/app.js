// var filtrarLab = document.getElementById("sede");
// filtrarLab.addEventListener("change",clicOpcion);
// function clicOpcion() {
// 	var sedes = filtrarLab.value;
// 	//console.log(sedes)
// 	//console.log(filtrarLab.options[filtrarLab.selectedIndex].dataset.generacion);
//  	var generation = filtrarLab.options[filtrarLab.selectedIndex].dataset.generacion;
//  	// console.log( "Generacion selecionada "+ generation)
//  	var totalStudents = data[sedes][generation]["students"].length;
//  	var totalStudents2 = data[sedes][generation]["students"];
//  	// console.log("Estudiantes selecionadas "+ totalStudents)

//  	var totalStudentsRatings = data[sedes][generation]["ratings"].length;
//  	// console.log("Ratings selecionados " + totalStudentsRatings)
//  	// console.log(totalStudentsGlobal);
//  }
 var select = document.getElementById("sede");
select.addEventListener('change', filter);
function filter (){
 var selectedIndex =  event.target.selectedIndex;
 var selectedOption = event.target[selectedIndex];
 var office= selectedOption.dataset.sede;
 var generation = selectedOption.dataset.generation;
}