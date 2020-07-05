let mainpage = require("../pages/mainpage");

describe("Angular page test", function () {
  it("Download AngularJS test", function () {
    browser.manage().window().setSize(1100, 900);

    mainpage.openPage("https://angularjs.org/");
    mainpage.downloadButton(
      "DOWNLOAD",
      "Download",
      "https://ajax.googleapis.com/ajax/libs/angularjs/1.8.0/angular.min.js"
    );

    browser.sleep(3000);
  });
});
