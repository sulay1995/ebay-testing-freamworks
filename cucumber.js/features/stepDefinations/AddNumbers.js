const { Given, When, Then } = require("cucumber");

Given("Numbers are provided", function () {
  num1 = 10;
  num2 = 10;
  return console.log("Numbers are " + num1 + " " + "and" + " " + num2);
});

When("Sum of both numbers here", function () {
  sum = num1 + num2;
  return console.log("Addition performed here");
});

Then("Dispaly sum of Numbers", function () {
  return console.log("sum of numbers are " + sum);
});
