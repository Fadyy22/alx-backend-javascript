const { expect } = require('chai');
const { spy } = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('sendPaymentRequestToApi uses calculateNumber from Utils', function () {
    const utilsSpy = spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(utilsSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(utilsSpy.calculateNumber.callCount).equals(1);
    utilsSpy.calculateNumber.restore();
  });
});
