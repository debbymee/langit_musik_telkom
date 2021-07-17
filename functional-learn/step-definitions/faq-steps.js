module.exports = function () {

    this.Given(/^user browse langit musikk page$/, function () {
        helpers.loadPage('https://www.langitmusik.co.id/')
      });

    this.When(/^user click link FAQ$/, function () {
        driver.then(function(){
            return page.faq.performClick();
            
        })
      });

    this.Then(/^user can see the faq on the website$/, function () {
    //     driver.then(function(){
    //     helpers.loadPage('https://www.langitmusik.co.id/new/faq')
    // })
  });

    //   this.When(/^user click trending button$/, function () {
    //     driver.then(function () {
    //         return page.trendingBtn.performClick();

    //     })
    //   });

    //   this.Then(/^user can see trending page$/, function () {
    //     driver.then(function(){
    //         helpers.loadPage('https://www.langitmusik.co.id/new/trending')
    //     })
          
    // });
      

}