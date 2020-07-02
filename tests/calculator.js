describe("demo calculator tests", function () {
  it("addition test", function () {
    browser.get("http://juliemr.github.io/protractor-demo/");
      element(by.model("first")).sendKeys("2");
      element(by.model("second")).sendKeys("3");
      element(by.css(".btn")).click();
      let e = element(by.css(".ng-binding"))
      expect(e.getText()).toBe("5")


      browser.sleep(2000)
    
  });
});
