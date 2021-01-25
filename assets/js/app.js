// Declaring Object
// Remove the variables and modify with the object
let person = {
  firstName: "",
  lastName: "",
  birthYear: "",
  job: "",
  age: "",
  isEligibleToVote: false,
  familyMembers: [],
  weight: "",
  height: "",
  bmi: "",
  ageCalc: function () {
    return (this.age = new Date().getFullYear() - this.birthYear);
  },
  checkVote: function () {
    let tempAge = this.ageCalc();
    if (tempAge >= 18) {
      this.isEligibleToVote = true;
    } else {
      this.isEligibleToVote = false;
    }
  },

  // BMI Calculator
  findBMI: function () {
    let bodyMassIndex = this.weight / (this.height * this.height);

    bodyMassIndex = Number(bodyMassIndex.toFixed(1));

    if (bodyMassIndex < 18.5) {
      return (this.bmi = "UnderWeight");
    } else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) {
      return (this.bmi = "Normal");
    } else if (bodyMassIndex >= 30.0) {
      return (this.bmi = "Obese");
    }
  },
};

// Receive the values from input and assign to object properties
person.firstName = prompt("Enter Your First Name");
person.lastName = prompt("Enter Your Last Name");
person.job = prompt("What is Your Profession ?");
person.birthYear = prompt("Enter Your Birth Date");
person.weight = prompt("Your Weight in Kg  ? ");
person.height = prompt("Your Height in M  ? ");

// call age and check vote fun
person.ageCalc();
person.checkVote();
person.findBMI();
// Adding Self Invoking Function Expression

(function () {
  console.log("Your Full Name is " + person.firstName + " " + person.lastName);
  console.log("Your Job is  : " + person.job);
  console.log("Your Age is  : " + person.age + " " + "years old");
  console.log("Eligible to vote : " + person.isEligibleToVote);

  console.log("Your BMI : " + person.bmi);
})();
