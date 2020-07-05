let mainpage = function () {
  // open Page
  this.openPage = function (url) {
    browser.get(url);
  };

  //Navigation

  this.checkNavigationLinks = function (
    menu_element,
    sub_menu_element,
    url_destination
  ) {
    let list = element.all(by.css(menu_element));
    list.get(0).click();
    let sublist = element.all(by.css(sub_menu_element));
    sublist.get(0).click();
    expect(browser.getCurrentUrl()).toBe(url_destination);
  };

  // Input write your name
  this.nameInputValidation = function (name) {
    let input = element(by.model("yourName"));
    input.sendKeys(name);
    expect(input.getAttribute("value")).toBe(name);
  };

  //TodoList

  this.todoValidation = function (task, li_number, task_number) {
    let input = element(by.model("todoList.todoText"));
    input.sendKeys(task);
    element(by.css("[value='add']")).click();
    let list = element.all(by.css(".unstyled li"));
    expect(list.count()).toBe(li_number);
    expect(list.get(task_number).getText()).toBe(task);
  };

  // Download AngularJs

  this.downloadButton = function (
    button_first,
    button_second,
    url_destination
  ) {
    element(by.partialLinkText(button_first)).click();
    browser.sleep(3000);
    element(by.partialLinkText(button_second)).click();
    browser.sleep(3000);
    browser.waitForAngularEnabled(false);
    expect(browser.getCurrentUrl()).toBe(url_destination);
  };

  //Scroll to top of page

  this.scrollButtontoTopValidation = function (element_btn, url_destination) {
    let button = element(by.partialLinkText(element_btn));
    button.click();
    expect(browser.getCurrentUrl()).toBe(url_destination);
  };

  //Switch to new Angular Page

  this.getNewAngularPage = function (element_xpath, url_destination) {
    element(by.xpath(element_xpath)).click();
    browser.sleep(3000);
    browser.getAllWindowHandles().then((handles) => {
      browser.switchTo().window(handles[1]);
      expect(browser.getCurrentUrl()).toBe(url_destination);
    });
  };
};

module.exports = new mainpage();
