class Document {
    constructor (EmployeeName) {
        this.EmployeeName = EmployeeName
    }
}

class Employee {
    constructor(name) {
        this.name = name
    }

    work(office) {
        for (let i = 0; i < 10; i++) {
            office.documents.push(new Document(this.name))
        }
    }
}

class Manager {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }

    hireEmployee(employee) {
        this.employees.push(new Employee(employee))
    }

    askEmployeesToWork(office) {
        this.employees.forEach(e => e.work(office))
    }
}

class Cleaner {
    constructor(name) {
        this.name = name
    }

    clean() {
        console.log("Clean");
    }
}

class Office {
    constructor(documents) {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    hireManager(manager) {
        this.managers.push(new Manager(manager))
    }

    hireCleaner(cleaner) {
        this.cleaners.push(new Cleaner(cleaner))
    }

    startWorkDay() {
        this.managers.forEach(e => e.askEmployeesToWork(this));
    }
}