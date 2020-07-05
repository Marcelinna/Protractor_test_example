let mainpage = require("../pages/mainpage");

describe("Angular page test", function () {
  it("Todo list test", function () {
    browser.manage().window().setSize(1100, 900);
    mainpage.openPage("https://angularjs.org/");
    mainpage.todoValidation("shooping", 3, 2);
  });
});
