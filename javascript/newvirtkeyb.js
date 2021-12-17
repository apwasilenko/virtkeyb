
class myUser {
  constructor(props) {
    this.name = props.name;
    this.dateOfdob = props.dob;
  }
  
  firstName = 'w';
  lastName = 'q';
  mob = '';
  dob = '';
  yob = '';
  
  set name(newName) {
    const nameRow = newName.split (' ');
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  get age() {
    return new Date(Date.parse(new Date())-Date.parse(this.yob, this.mob - 1, this.dob)).getFullYear() - 1971;
  }

  set dateOfdob(date) {
      const dateRow = date.split('-');
      this.dob = Number(dateRow[0]);
      this.mob = Number(dateRow[1]);
      this.yob = Number(dateRow[2]);
  }

  get dateOfdob() {
    return `${this.mob}-${this.dob}-${this.yob}`;
  }

}




const reg1User = new myUser({
  name: 'Anton Vasilenko',
  dob: '12-12-1977',
});

console.dir(reg1User);
console.dir(reg1User.age);