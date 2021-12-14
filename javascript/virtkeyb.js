let input_line = String(mytable.rows[0].cells[0].innerHTML);
function invert_input_line(){
  console.log(input_line);
  if (input_line.indexOf("|") != -1){
    input_line = input_line.slice(0, input_line.length -1);
    console.log("Убрал");
  }
  else{
    console.log("Добавил");
    input_line = input_line + "|";
  }
  console.log(input_line);
  mytable.rows[0].cells[0].innerHTM = input_line;
  
}

document.onclick = function(e){
  if (e.target.attributes.data != undefined){
    if (e.target.attributes.data.value != undefined){
      switch (e.target.attributes.data.value){
        case "0":
        case "1":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":          
        case "8":
        case "9":
          console.log("Нажата клавиша - " + e.target.attributes.data.value);
          console.log(mytable.rows[0].cells[0].innerHTML);

          mytable.rows[0].cells[0].innerHTML = mytable.rows[0].cells[0].innerHTML + e.target.attributes.data.value;
          break;

          default:
            console.log("Нет таких значений" );
      }
    }
  } 
}

document.onload = function () {

}

setInterval(invert_input_line(),500);

