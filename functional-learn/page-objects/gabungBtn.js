module.exports = {

    url: 'https://laguku.id/#/home.html',
    //url elemen itu berada 

    elements: {
        gabungBtn: by.xpath("//button[@ng-click='showLogin(el)']")
    },

    performClick: function () {

        var selector = page.gabungBtn.elements.gabungBtn;
        return driver.findElement(selector).click();

    }
};
