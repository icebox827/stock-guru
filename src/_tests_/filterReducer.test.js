import { filterStock } from '../actions/index';
import filterReducer from '../reducers/filterReducer';


describe('filter reducer', () => {
  it('Should return the default state', () => {
    expect('').toEqual('');
  });

  it('Should return new state if a valid filter is provide', () => {
    const action = filterStock({ filter: 'Action' });
    const state = filterReducer(undefined, action);

    expect(state).toEqual({"errur": null, "filter": [], "loading": false});
  });
});