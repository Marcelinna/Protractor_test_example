let mainpage = require("../pages/mainpage");

describe("Angular page test", function () {
  it("Switch to new page", function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    browser.manage().window().setSize(1100, 900);
    mainpage.openPage("https://angularjs.org/");
    mainpage.getNewAngularPage(
      "//a[contains(text(), 'Try the New Angular')]",
      "https://angular.io/"
    );
  });
});
