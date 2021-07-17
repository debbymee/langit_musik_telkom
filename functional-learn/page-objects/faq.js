module.exports = {

    url: 'https://www.langitmusik.co.id/',
    //url elemen itu berada 

    elements: {

      //  faq: by.xpath("//a[@href='/new/faq']//span[@class='nav-text']")
    },

    performClick: function () {

        var selector = page.faq.elements.faq;
        return driver.findElement(selector).click();

   }
};
