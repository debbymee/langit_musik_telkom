module.exports = function() {
    this.Given(/^website langit musik$/, function () {
        helpers.loadPage('https://www.langitmusik.co.id/')
    });

    this.Given(/^user click menu FAQ$/, function () {
    //    driver.then(function(){
    //        return page.faqField-faq.performClick();
           
    //    })
    });      


    this.Given(/^user can see the FAQ on the website$/, function () {
            // driver.then(function(){
            // helpers.loadPage('https://www.langitmusik.co.id/new/faq')
        //})
      });

      this.When(/^user click NSP$/, function () {
        
      });
      
      this.Then(/^user can see NSP page$/, function () {
        
      });
}