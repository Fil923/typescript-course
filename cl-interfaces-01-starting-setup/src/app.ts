abstract class Department {
  //   private name: string;
  protected employees: string[] = [];

  // this will e executed when the department is created
  //   constructor(n: string) {
  //     this.name = n;
  //   }

  // shortcut for code above
  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  // this method can be executed without creating a new object type Department
  public static Main() {
    console.log("This is the Main Static Method of: " + this.name);
  }
}

class ITDeparment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Reports found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Pass a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    return (this.instance = new AccountingDepartment("d2", []));
  }

  describe() {
    console.log("Accounting department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// static method doesn't need an instance of the class in which are declared
const employee1 = Department.createEmployee("Mario");
console.log(employee1);

const it = new ITDeparment("d1", ["Filippo"]);

// Department.Main();

it.addEmployee("Filippo");
it.addEmployee("Marika");

console.log(it);
// department.employees[2] = "Pinco";

it.describe();
it.printEmployeeInformation();

// const accounting = new AccountingDepartment("d2", []);
/**
 * This is a singleton class
 * it ha private constructor, static method that return the instance of the class
 * if it isn't created already
 */
const accounting = AccountingDepartment.getInstance();
// const accounting2 = AccountingDepartment.getInstance();
// console.log(accounting, accounting2);
// no parenthesis because setters are like property of an object and they accept a value
accounting.mostRecentReport = "pupu";

// no parenthesis because getters are like property of an object

accounting.addReport("This is a report");
console.log(accounting.mostRecentReport);
// accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Filippo");
accounting.describe();
// console.log(accounting);

// example of how doing a copy of an object with class
// const departmentCopy = { name: "AccountingCopy", describe: department.describe };

// departmentCopy.describe();
