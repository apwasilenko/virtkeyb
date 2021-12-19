const myinputline = {
  inLine   : 0,              //входные данные number
  outLine  : '',             //выходные данные String
  position : 0,              //позиция курсора
  flag     : true,           //тип указателя текущей позиции

  getLine : function() {     //преабразуем число в форматированную строку

    let input_line = String(this.inLine);
    if (this.flag == true) {
      input_line = input_line.slice(0, this.position) + ':' + input_line.slice(this.position, input_line.length);
    }
    else {
      input_line = input_line.slice(0, this.position) + '|' + input_line.slice(this.position, input_line.length);
    }
    this.outLine = String(input_line);
    return String(input_line);
  },

  setLine : function(num){   //Считывает число.
    this.inLine = num;
    this.position = String(num).length;
  },

  addChar : function(newChar){   //Добавляем символ в строку.
    let strLine = String(this.inLine);
    this.inLine = Number(strLine.slice(0, this.position) + newChar + strLine.slice(this.position, strLine.length));
    this.position = this.position + 1;
  },
}



  document.onclick = function(e){//обработка нажатия на объект в HTML станице
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
            myinputline1.setLine(e.target.attributes.data.value);
            mytable.rows[0].cells[0].innerHTML = myinputline1.getLine();
            break;

          case ">>":
            if (myinputline1.position < myinputline1.getLine().length){
              myinputline1.position = myinputline1.position + 1;
              mytable.rows[0].cells[0].innerHTML = myinputline1.getLine();
            }
            break;
          
          case "<<":
            if (myinputline1.position > 0) {
              myinputline1.position = myinputline1.position - 1;
              mytable.rows[0].cells[0].innerHTML = myinputline1.getLine();
            }
            break;
          
          case "del":
            if (myinputline1.position > 0) {
              myinputline1.position = myinputline1.position - 1;
              mytable.rows[0].cells[0].innerHTML = myinputline1.getLine();
            }
            break;

            default:
            console.log("Нет таких значений", e.target.attributes.data.value);
            break;
        }
      }
    }
}


const myinputline1 = { ...myinputline};
myinputline1.setLine(12345);
mytable.rows[0].cells[0].innerHTML = myinputline1.getLine();

const my_invert = () => {
  if (myinputline1.flag == true){
    myinputline1.flag = false;
  }
  else {
    myinputline1.flag = true;
  }
  mytable.rows[0].cells[0].innerHTML = myinputline1.getLine();
}

setInterval(my_invert, 1000);