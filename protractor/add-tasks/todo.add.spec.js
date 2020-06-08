describe('Adding a todo: ', function () {
    describe('When clicking on an event', function() {

        // beforeEach()
        it('Should be able to select a hero from the main page ', function() {
            browser.get('http://localhost:4200/dashboard');
            var firstElement = element.all(by.css('.hero h4')).first();
            var elementText;
            firstElement.getText().then(function(text){
                elementText = text;
            }).end(function(err, res) {
                if(err) {
                    console.log(err);
                } else {
                    done();
                }
            });
            console.log(elementText);
            firstElement.click()
            browser.waitForAngular();
            var headerElem = element(by.css('app-hero-detail h2'));
            expect(headerElem.getText()).toMatch(elementText + ' Details');
        });

        it('Should be able to create a hero', function() {
            browser.get('http://localhost:4200/dashboard');
            var heroesLink = element(by.css("nav a[href='/heroes']"));
            heroesLink.click
            browser.waitForAngular();
            // var heroNameInput = element(by.css("app-heroes input"));
            // heroNameInput.sendKeys("Calzoncillo man");
            var hero = element(by.css("app-heroes input"));
            hero.sendKeys("CM");
            // element(by.css("app-heroes button")).click();
            // browser.waitForAngular();
            // var newHeroElem = element(by.css(".heroes > li:last-of-type"));
            // expect(newHeroElem.getText()).toContain("Calzoncillo man");


        });
    });
});