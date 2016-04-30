describe('ngMsg', () => {
    browser.get('ngMsg/');

    it('should be available', () => {
        expect(browser.getTitle()).toMatch('ngMsg');
    });

    describe('length validation', () => {
        var input = element(by.id('length-input'));
        beforeEach(() => {
            input.clear();
        });

        it('should be invalid with 1 character', () => {
            var classes = input.sendKeys('a').getAttribute('class');

            expect(classes).toMatch('ng-invalid-minlength');
            expect(classes).toMatch('ng-valid-maxlength');
        });

        it('should be valid with 3 characters', () => {
            var classes = input.sendKeys('abc').getAttribute('class');

            expect(classes).toMatch('ng-valid-minlength');
            expect(classes).toMatch('ng-valid-maxlength');
        });

        it('should be invalid with 11 characters', () => {
            var classes = input.sendKeys('abcdefghijk').getAttribute('class');

            expect(classes).toMatch('ng-valid-minlength');
            expect(classes).toMatch('ng-invalid-maxlength');
        });
    });
});