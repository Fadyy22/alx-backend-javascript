const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('sendPaymentRequestToApi calls console.log with the right arguments', function () {
    const consoleSpy = sinon.spy(console);
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).equals(1);
    expect(consoleSpy.log.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.log.callCount).equals(1);
    calculateNumberStub.restore();
    consoleSpy.log.restore();
  });
});
