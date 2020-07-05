let mainpage = require("../pages/mainpage");

describe("Angular page test", function () {
  it("Scroll to Top of page", function () {
    browser.manage().window().setSize(1100, 900);
    mainpage.openPage("https://angularjs.org/");
    mainpage.scrollButtontoTopValidation("Back to top", 'https://angularjs.org/#');
  });
});
