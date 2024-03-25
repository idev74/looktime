const makeTimer = (name) => {
  return {
    name,
    time: 0, 
    isRunning: false
  }
} 

export default makeTimer