import * as actions from '../actions/action';

describe(
  'Evaluate stockRequest',
  () => {
    it(
      'Should not be an empty object',
      () => {
        const action = actions.stockRequest;
        expect(action).not.toBe('');
      },
    );
    it('Should return fetch request', () => {
      const action = actions.FETCH_STOCK_REQUEST;
      expect(action).toBe('FETCH_STOCK_REQUEST');
    });
    it('Should return fetch success', () => {
      const action = actions.FETCH_STOCK_SUCCESS;
      expect(action).toBe('FETCH_STOCK_SUCCESS');
    });
    it('Should return fetch failure', () => {
      const action = actions.FETCH_STOCK_FAILURE;
      expect(action).toBe('FETCH_STOCK_FAILURE');
    });
  },
);

describe(
  'Evaluate companyRequest',
  () => {
    it(
      'Should not be an empty object',
      () => {
        const action = actions.companyRequest;
        expect(action).not.toBe('');
      },
    );
  },
);

describe(
  'Evaluate forexRequest',
  () => {
    it(
      'Should not be an empty object',
      () => {
        const action = actions.forexRequest;
        expect(action).not.toBe('');
      },
    );
  },
);

describe(
  'Evaluate stockDetailRequest',
  () => {
    it(
      'Should not be an empty object',
      () => {
        const action = actions.stockDetailRequest;
        expect(action).not.toBe('');
      },
    );
  },
);
