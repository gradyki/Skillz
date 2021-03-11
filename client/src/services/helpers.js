export const dateConverter = (time) => {



 
  let year = time.substr(0, 4) * 1
  let month = time.substr(5, 2) * 1
  let day = time.substr(8, 2) * 1
  let monthsKey = ['placeholder', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  return(`${monthsKey[month]} ${day}, ${year}`)

  
  


}