import commonFunction from "./functions";
import { Key } from "webdriverio";

describe("Name of the group", () => {
  it("should copy&paste from one input to another", async () => {
    browser.url("https://qavbox.github.io/demo/");
    browser.pause(2000);

    (await $("*=SignUp")).click();
    browser.pause(2000);

    const elems = await $$("input");

    const $copyInput = elems[0];
    const $pasteInput = elems[1];

    // copies text from an input element
    await $copyInput.setValue("some text");
    await browser.keys([Key.Ctrl, "a"]);
    await browser.keys([Key.Ctrl, "c"]);

    // inserts text from clipboard into input element
    await $pasteInput.click();
    await browser.keys([Key.Ctrl, "v"]);

    await expect($pasteInput).toHaveValue("some text");
  });

  it("should get all the plugin wrapper buttons", async () => {
    await browser.url("https://webdriver.io");
    await browser.addLocatorStrategy("myStrategy", (selector: any) => {
      return document.querySelectorAll(selector);
    });

    const pluginWrapper = await browser.custom$$(
      "myStrategy",
      ".pluginWrapper"
    );

    console.log(await pluginWrapper.length); // 4
  });

  it("should behave...", async () => {
    browser.url("https://qavbox.github.io/demo/");
    browser.pause(2000);
    await $("#username"); //using id
    await $(".EnterText"); //using className
    (await $("*=SignUp")).click();
    browser.pause(2000);
    console.log(await browser.execute(() => window.scrollX)); // returns 500
    await browser
      .action("wheel")
      .scroll({
        deltaX: 0,
        deltaY: 500,
        duration: 200,
      })
      .perform();
    console.log(await browser.execute(() => window.scrollY)); // returns 500
    const elem = await $$("input");
    await elem[0].click(); // make element active
    browser.pause(2000);
    await browser
      .action("key")
      .down("f")
      .down("o")
      .down("o")
      .up("f")
      .up("o")
      .up("o")
      .perform();
    console.log(await elem[0].getValue());
    // await elem[0].click();
    browser.pause(4000);
    // copy value out of input element
    await browser
      .action("key")
      .down(Key.Ctrl)
      .down("a")
      .pause(10)
      .up(Key.Ctrl)
      .up("a")
      .perform();
    await browser
      .action("key")
      .down(Key.Ctrl)
      .down("c")
      .pause(10)
      .up(Key.Ctrl)
      .up("c")
      .perform();
    await elem[1].click(); // make element active
    browser.pause(2000);
    await browser
      .action("key")
      .down(Key.Ctrl)
      .down("v")
      .pause(10)
      .up(Key.Ctrl)
      .up("v")
      .perform();
    console.log(await elem[1].getValue());
    await commonFunction.getTextBoxIndex(1).setValue("afreen");
    console.log(await $$("[role=link]").length); //$$ to find multiple elements
    console.log(await $$("<a>").length); //$$ to find multiple elements
    await $("=WebTable").click();
    browser.pause(2000);
    await $(
      "table[id='table01'] tbody tr:nth-child(1) td:nth-child(2)"
    ).getText(); //using css selector
    await $("//table[@id='table01']")
      .$("tbody tr:nth-child(1) td:nth-child(2)")
      .getText(); //using xpath and parent child chaining
    await browser.pause(2000);
    await commonFunction.getTableData(1, 2).getText();
    await $("h3").getText();
    await $("<h3>").getText();
    console.log(await $("label=Full Name").getAttribute("id"));
  });
});
