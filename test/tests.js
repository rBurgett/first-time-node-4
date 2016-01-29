/* global describe, it */
/* eslint no-unused-vars:0 */

import should from 'should';
import adder from '../src/modules/adder';

describe('adder', function() {
    it('should be a function', function() {
        adder.should.be.a.Function();
    });
    it('should return a number', function() {
        adder(3, 4).should.be.a.Number();
    });
    it('should return the sum of two numbers', function() {
        adder(3, 4).should.equal(7);
    });
});
