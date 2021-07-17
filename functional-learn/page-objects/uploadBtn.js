module.exports = {

    url: 'https://www.langitmusik.co.id/',
    //url elemen itu berada 

    elements: {
        uploadBtn: by.xpath("//span[normalize-space()='Upload Lagu']")
    },

    performClick: function () {

        var selector = page.uploadBtn.elements.uploadBtn;
        return driver.findElement(selector).click();
    }
};
