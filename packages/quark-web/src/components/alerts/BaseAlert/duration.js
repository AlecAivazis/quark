// based on: https://ux.stackexchange.com/questions/11203/how-long-should-a-temporary-notification-toast-appear

// min time to display alert
export const min = 3000
// max time to display alert
export const max = 10000
// multiplier
export const perCharTime = 50

export default text => Math.min(Math.max(text.length * perCharTime, min), max)
