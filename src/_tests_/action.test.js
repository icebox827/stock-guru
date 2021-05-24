import * as actions from '../actions/action';

describe('Evaluate stockRequest',() => {
    it('should not return an empty object', () => {
      const action = actions.FETCH_STOCK_REQUEST;
      expect(action.type).not.toBe('');
    });
    it('Should return stock request', () => {
      const action = actions.FETCH_STOCK_REQUEST;
      expect(action).toBe('FETCH_STOCK_REQUEST');
    });
    it('Should return stock success', () => {
      const action = actions.FETCH_STOCK_SUCCESS;
      expect(action).toBe('FETCH_STOCK_SUCCESS');
    });
    it('Should return stock failure', () => {
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
    it('Should return company request', () => {
      const action = actions.FETCH_COMPANIES_REQUEST;
      expect(action).toBe('FETCH_COMPANIES_REQUEST');
    });
    it('Should return company success', () => {
      const action = actions.FETCH_COMPANIES_SUCCESS;
      expect(action).toBe('FETCH_COMPANIES_SUCCESS');
    });
    it('Should return company failure', () => {
      const action = actions.FETCH_COMPANIES_FAILURE;
      expect(action).toBe('FETCH_COMPANIES_FAILURE');
    });
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
    it('Should return forex request', () => {
      const action = actions.FETCH_FOREX_REQUEST;
      expect(action).toBe('FETCH_FOREX_REQUEST');
    });
    it('Should return forex success', () => {
      const action = actions.FETCH_FOREX_SUCCESS;
      expect(action).toBe('FETCH_FOREX_SUCCESS');
    });
    it('Should return forex failure', () => {
      const action = actions.FETCH_FOREX_FAILURE;
      expect(action).toBe('FETCH_FOREX_FAILURE');
    });
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
    it('Should return stock detail request', () => {
      const action = actions.FETCH_STOCK_ITEM_REQUEST;
      expect(action).toBe('FETCH_STOCK_ITEM_REQUEST');
    });
    it('Should return stock detail success', () => {
      const action = actions.FETCH_STOCK_ITEM_SUCCESS;
      expect(action).toBe('FETCH_STOCK_ITEM_SUCCESS');
    });
    it('Should return stock detail failure', () => {
      const action = actions.FETCH_STOCK_ITEM_FAILURE;
      expect(action).toBe('FETCH_STOCK_ITEM_FAILURE');
    });
  },
);
