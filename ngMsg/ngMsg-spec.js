describe('ngMsg', () => {
    browser.get('ngMsg/');

    describe('length validation', () => {
        var input = element(by.id('input-length'));
        beforeEach(() => {
            input.clear();
        });

        it('should be invalid with 1 character', () => {
            var classes = input.sendKeys('a').getAttribute('class'),
                regexp = /(?=.*ng-invalid)(?=.*ng-invalid-minlength)(?=.*ng-valid-maxlength).*/;

            expect(classes).toMatch(regexp);
        });

        it('should be valid with 3 characters', () => {
            var classes = input.sendKeys('abc').getAttribute('class'),
                regexp = /(?=.*ng-valid)(?=.*ng-valid-minlength)(?=.*ng-valid-maxlength).*/;

            expect(classes).toMatch(regexp);
        });

        it('should be invalid with 11 characters', () => {
            var classes = input.sendKeys('abcdefghijk').getAttribute('class'),
                regexp = /(?=.*ng-invalid)(?=.*ng-valid-minlength)(?=.*ng-invalid-maxlength).*/;

            expect(classes).toMatch(regexp);
        });
    });

    describe('required validation', () => {
        var input = element(by.id('input-required'));
        beforeEach(() => {
            input.clear();
        });

        it('should be invalid if empty', () => {
            var classes = input.getAttribute('class'),
                regexp = /(?=.*ng-invalid)(?=.*ng-invalid-required).*/;

            expect(classes).toMatch(regexp);
        });

        it('should be valid with characters', () => {
            var classes = input.sendKeys('characters').getAttribute('class'),
                regexp = /(?=.*ng-valid)(?=.*ng-valid-required).*/;

            expect(classes).toMatch(regexp);
        })
    });

    describe('pattern validation', () => {
        var input = element(by.id('input-pattern'));
        beforeEach(() => {
            input.clear();
        });

        describe('digit pattern', () => {
            it('should be invalid with characters', () => {
                var classes = input.sendKeys('characters').getAttribute('class'),
                    regexp = /(?=.*ng-invalid)(?=.*ng-invalid-pattern).*/;

                expect(classes).toMatch(regexp);
            });

            it('should be valid with digits', () => {
                var classes = input.sendKeys(123).getAttribute('class'),
                    regexp = /(?=.*ng-valid)(?=.*ng-valid-pattern).*/;

                expect(classes).toMatch(regexp);
            })
        });
    });
});