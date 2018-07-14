export default class Employee{
  constructor(){
      this.name = "Affixus";
      this.id = 1;
      this.style = "Action";
      this.class = "First Class";
      this.desc = "Affixus Systems Pvt Ltd";
  }

  getEmpDetail() {
    let strResponse = this.name;
    strResponse += `-${this.id}`;
    strResponse += `-${this.style}`;

    return strResponse;
  }
}
