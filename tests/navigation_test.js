let mainpage = require("../pages/mainpage");

describe("Angular page test", function () {
  it("Navigation test", function () {
    browser.manage().window().setSize(1100, 900);
    mainpage.openPage("https://angularjs.org/");
    mainpage.checkNavigationLinks(
      ".nav li",
      ".dropdown-menu li",
      "https://docs.angularjs.org/tutorial"
    );
    
  });
});
