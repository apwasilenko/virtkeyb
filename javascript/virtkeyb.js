let myinput = document.getElementById('myintut');

document.onclick = function(e){
  if (typeof(e.target.attributes.name.value) != "undefined" && typeof(e.target.attributes.data.value) != "undefined") {
    console.log("name.value - " + e.target.attributes.name.value);
    console.log("data.value - " + e.target.attributes.data.value);
    if (e.target.attributes.name.value == "bt") {
      switch (e.target.attributes.data.value){
          case "7":
            console.log("Нажата клавиша - " + e.target.attributes.data.value);
            break;

          case "8":
            console.log("Нажата клавиша - " + e.target.attributes.data.value);
            break;
            
          case "9":
            console.log("Нажата клавиша - " + e.target.attributes.data.value);
            break;

          default:
            console.log("Нет таких значений" );
      }
    }
  }
}