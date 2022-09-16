const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name, email, office) {
    super(id, name, email);
    this.office = office;
  }

  getRole() {
    return "Manager";
  }

  getOffice() {
    return this.office;
  }
    
}

module.exports = Manager;
