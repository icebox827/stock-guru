import * as actions from '../actions/action';

describe('Evaluate stock actions', () => {
  test('fetchStock should not return an empty action type', () => {
    const action = actions.fetchStock();
    expect(action.type).not.toBe('');
  });

  test('fetchStock should return the correct action type', () => {
    const action = actions.fetchStock();
    expect(action.type).toBe('FETCH_STOCK_REQUEST');
  });

  test('stockSuccess should not return an empty action type', () => {
    const action = actions.stockSuccess();
    expect(action.type).not.toBe('');
  });

  test('stockSuccess should return the correct action type', () => {
    const action = actions.stockSuccess();
    expect(action.type).toBe('FETCH_STOCK_SUCCESS');
  });

  test('stockFailure should not return an empty action type', () => {
    const action = actions.stockFailure();
    expect(action.type).not.toBe('');
  });

  test('stockFailure should return the correct action type', () => {
    const action = actions.stockFailure();
    expect(action.type).toBe('FETCH_STOCK_FAILURE');
  });
});

describe('Evaluate company actions', () => {
  test('companyRequest should not return an empty action type', () => {
    const action = actions.companyRequest();
    expect(action.type).not.toBe('');
  });

  test('companyRequest should return the correct action type', () => {
    const action = actions.countryRequest();
    expect(action.type).toBe('FETCH_COMPANIES_REQUEST');
  });

  test('companySuccess should not return an empty action type', () => {
    const action = actions.companySuccess();
    expect(action.type).not.toBe('');
  });

  test('companySuccess should return the correct action type', () => {
    const action = actions.companySuccess();
    expect(action.type).toBe('FETCH_COMPANIES_SUCCESS');
  });

  test('companyFailure should not return an empty action type', () => {
    const action = actions.companyFailure();
    expect(action.type).not.toBe('');
  });

  test('companyFailure should return the correct action type', () => {
    const action = actions.companyFailure();
    expect(action.type).toBe('FETCH_COMPANIES_FAILURE');
  });
});

describe('Evaluate forex actions', () => {
  test('forexRequest should not return an empty action type', () => {
    const action = actions.forexRequest();
    expect(action.type).not.toBe('');
  });

  test('forexRequest should return the correct action type', () => {
    const action = actions.forexRequest();
    expect(action.type).toBe('FETCH_FOREX_REQUEST');
  });

  test('forexSuccess should not return an empty action type', () => {
    const action = actions.forexSuccess();
    expect(action.type).not.toBe('');
  });

  test('forexSuccess should return the correct action type', () => {
    const action = actions.forexSuccess();
    expect(action.type).toBe('FETCH_FOREX_SUCCESS');
  });

  test('forexFailure should not return an empty action type', () => {
    const action = actions.forexFailure();
    expect(action.type).not.toBe('');
  });

  test('forexFailure should return the correct action type', () => {
    const action = actions.forexFailure();
    expect(action.type).toBe('FETCH_FOREX_FAILURE');
  });
});