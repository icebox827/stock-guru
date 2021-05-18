import * as actions from '../actions/action';

describe('Evaluate stockRequest', () => {
  it('Should not be an empty object', () => {
    const action = actions.stockRequest;
    expect(action).not.toBe('')
  });
});

describe('Evaluate companyRequest', () => {
  it('Should not be an empty object', () => {
    const action = actions.companyRequest;
    expect(action).not.toBe('')
  });
});

describe('Evaluate forexRequest', () => {
  it('Should not be an empty object', () => {
    const action = actions.forexRequest;
    expect(action).not.toBe('')
  });
});

describe('Evaluate stockDetailRequest', () => {
  it('Should not be an empty object', () => {
    const action = actions.stockDetailRequest;
    expect(action).not.toBe('')
  });
});