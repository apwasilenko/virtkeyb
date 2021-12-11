window.onload = function () {
  myvirtkeyb = document.getElementById("virtkeyb");
  document.onclick = function(e){
    if (e.target.attributes.data != undefined && e.target.attributes.data.value != undefined){
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
          myvirtkeyb.rows[0].cells[0].innerHTML = myvirtkeyb.rows[0].cells[0].innerHTML + e.target.attributes.data.value;
          break;

          default:
            console.log("Нет таких значений" );
      }
    }
  }
}