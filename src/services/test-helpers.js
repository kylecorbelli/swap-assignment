export const expectFetchingToChangeTo = (expectedValue, actionCreator, reducer) => {
  const initialState = !expectedValue
  const action = actionCreator()
  const newState = reducer(initialState, action)
  expect(newState).toBe(expectedValue)
}
