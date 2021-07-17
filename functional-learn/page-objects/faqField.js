module.exports = {

    url: 'https://www.langitmusik.co.id/new/faq',
    //url elemen itu berada 

    elements: {

       faqField: by.xpath("//span[normalize-space()='FAQ']")
    },

    performClick: function () {

        var selector = page.faqField.elements.fieldField;
        return driver.findElement(selector).click();

   }
};
