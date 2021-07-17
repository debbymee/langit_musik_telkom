module.exports = {

    url: 'https://dev-dashboard.vutura.io/signIn',
    //url elemen itu berada 

    elements: {
        fieldPw: by.xpath("//input[@id='password-login']")
    },

    performFill: function () {

        var selector = page.fieldPw.elements.fieldPw;
        return driver.findElement(selector).sendKeys(shared.id.pw);
    }
};
