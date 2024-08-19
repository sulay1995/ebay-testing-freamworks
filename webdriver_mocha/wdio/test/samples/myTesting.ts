describe("Testing my first webdriver test", () => {
  it("check google homepage", async () => {
    browser.url("https://qavbox.github.io/demo/");
    browser.pause(2000);

    await $("=SignUp Form").click();
    browser.pause(2000);

    console.log(await browser.execute(() => window.scrollY)); // returns 0
    await browser
      .action("wheel")
      .scroll({
        deltaX: 0,
        deltaY: 500,
        duration: 2000,
      })
      .perform();
    console.log(await browser.execute(() => window.scrollY)); // returns 500
    browser.pause(2000);
  });
  it("go to google and search for facebook", async () => {
    browser.url("https://www.google.com");
    browser.pause(2000);
    const textarea = await $('textarea[name="q"]');
    await textarea.setValue("facebook\uE007");
    browser.pause(2000);
    console.log("text ", await $("h3").getText());
  });

  it("read the first column of second row in table", async () => {
    browser.url("https://qavbox.github.io/demo/");
    browser.pause(2000);

    await $("=WebTable").click();
    browser.pause(2000);

    const text = await $(
      "#table01 tbody tr:nth-child(1) td:nth-child(2)"
    ).getText();
    console.log("table text ", text);
  });
});
