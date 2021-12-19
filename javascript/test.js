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


const myinputline1 = { ...myinputline};
myinputline1.setLine(12345);