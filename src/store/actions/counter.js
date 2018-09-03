// Define action types
export const INCREMENT = { type: 'INCREMENT' }
export const DECREMENT = { type: 'DECREMENT' }

// Define action creator methods which composes actions
export const incrementCounter = (step = 1) => {
  return { ...INCREMENT, step }
}
export const decrementCounter = (step = 1) => {
  return { ...DECREMENT, step }
}
