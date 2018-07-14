import Employee from './Employee';

export default class Main {
    static main(){
      console.log("Hello");
      console.log("Helloo");

      let emp1 = new Employee;
      console.log(emp1);

      let output = emp1.getEmpDetail();
      console.log(output);
    }
}

Main.main();
