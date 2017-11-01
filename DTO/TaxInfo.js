class TaxInfo{
    constructor(firstName, lastName, annualSalary, superRate, paymentStartDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.annualSalary = annualSalary;
        this.superRate = superRate;
        this.paymentStartDate = paymentStartDate;
    }
}

module.exports = TaxInfo;