(function () {
    'use strict';

    function toMatchClasses(element, expectedClasses) {
        var classes = element.getAttribute('class');
        expectedClasses.forEach(item => {
            expect(classes).toMatch(item);
        });
    }

    describe('ngMsg', () => {
        browser.get('angular/input-validation/');

        describe('length validation', () => {
            var input = element(by.id('input-length'));
            beforeEach(() => {
                input.clear();
            });

            it('should be invalid with 1 character', () => {
                var expectedClasses = ['ng-invalid', 'ng-invalid-minlength', 'ng-valid-maxlength'];

                input.sendKeys('a');
                toMatchClasses(input, expectedClasses);
            });

            it('should be valid with 3 characters', () => {
                var expectedClasses = ['ng-valid', 'ng-valid-minlength', 'ng-valid-maxlength'];

                input.sendKeys('abc');
                toMatchClasses(input, expectedClasses);
            });

            it('should be invalid with 11 characters', () => {
                var expectedClasses = ['ng-invalid', 'ng-valid-minlength', 'ng-invalid-maxlength'];

                input.sendKeys('abcdefghijk');
                toMatchClasses(input, expectedClasses);
            });
        });

        describe('required validation', () => {
            var input = element(by.id('input-required'));
            beforeEach(() => {
                input.clear();
            });

            it('should be invalid if empty', () => {
                var expectedClasses = ['ng-invalid', 'ng-invalid-required'];

                toMatchClasses(input, expectedClasses);
            });

            it('should be valid with characters', () => {
                var expectedClasses = ['ng-valid', 'ng-valid-required'];

                input.sendKeys('characters');
                toMatchClasses(input, expectedClasses);
            })
        });

        describe('pattern validation', () => {
            var input = element(by.id('input-pattern'));
            beforeEach(() => {
                input.clear();
            });

            describe('digit pattern', () => {
                it('should be invalid with characters', () => {
                    var expectedClasses = ['ng-invalid', 'ng-invalid-pattern'];

                    input.sendKeys('characters');
                    toMatchClasses(input, expectedClasses);
                });

                it('should be valid with digits', () => {
                    var expectedClasses = ['ng-valid', 'ng-valid-pattern'];

                    input.sendKeys('123');
                    toMatchClasses(input, expectedClasses);
                })
            });
        });
    });
})();