let input = document.getElementById('myintut');

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
            input.innerHTML = input.innerHTML + e.target.attributes.data.value;
            break;

            default:
              console.log("Нет таких значений" );
        }
      }
    }
  }