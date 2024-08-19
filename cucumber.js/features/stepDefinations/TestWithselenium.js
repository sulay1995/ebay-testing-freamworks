const { By, Builder, until } = require("selenium-webdriver");
const { Given, When, Then } = require("cucumber");
let driver;

Given("Url of the webiste is Given", async () => {
  driver = await new Builder().forBrowser("chrome").build();
  // Write code here that turns the phrase above into concrete actions
  url = "https://admlucid.com/";
  return console.log("The url is " + url);
});

When("Go to the website", async () => {
  // Write code here that turns the phrase above into concrete actions
  await driver.get(url);
  return "Going to the url";
});

Then("console the website header", async () => {
  // Write code here that turns the phrase above into concrete actions
  title = await driver.getTitle();
  return "Title is " + title;
});
