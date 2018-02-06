var select = document.getElementById("sede"); //Variable para guardar la selección del usuario
select.addEventListener('change', filter);//Creo el evento
function filter (){
 var selectedIndex =  event.target.selectedIndex;//devuelve el indice del elemento 
 var option = event.target[selectedIndex];
 var location = option.dataset.sede;//accediendo a la data para obtener la sede 
 var generation = option.dataset.generacion;//accediendo a la data para obtener la generación
 var students = data[location][generation]['students'];
 console.log(students)
}
