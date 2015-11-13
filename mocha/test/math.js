import chai from 'chai';

import { sum, pi } from '../src/math';


describe('math', () => {

  describe('sum', () => {
    it('1+2=3', () => {
      chai.expect(sum(1, 2)).to.equal(3);
    })
  });

  describe('pi', () => {
    it('the circular constant as 3.141593', () => {
      chai.expect(pi).to.equal(3.141593);
    })
  });

});
