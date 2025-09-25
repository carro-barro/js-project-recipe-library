const btnBreakfast = document.getElementById("btnBreakfast")
const btnLunch = document.getElementById("btnLunch")
const btnFika = document.getElementById("btnFika")
const btnDinner = document.getElementById("btnDinner")
const btnAscending = document.getElementById("btnAscending")
const btnDescending = document.getElementById("btnDescending")
const placeholderText = document.getElementById("placeholderText")
const mealBtns = document.querySelectorAll(".meal-btn")
const timeBtns = document.querySelectorAll(".time-btn")

mealBtns.forEach(button => {
  button.addEventListener("click", () => {
    mealBtns.forEach(btn => btn.classList.remove("active"))
    button.classList.add("active")
  })
})

timeBtns.forEach(button =>{
  button.addEventListener("click", () => {
    timeBtns.forEach(btn => btn.classList.remove("active"))
    button.classList.add("active")
  })
})


const filterBreakfast = () => {
// add the filtering that happens when breakfast btn is clicked
placeholderText.innerText = `Good morning! Ready for breakfast?`
}


const filterLunch= () => {
  // add the filtering that happens when Lunch btn is clicked
  placeholderText.innerText = `Is it already lunchtime?!`
}


const filterFika = () => {
  // add the filtering that happens when Fika btn is clicked
  placeholderText.innerText = `You can never go wrong with some fika`
}


const filterDinner = () => {
  // add the filtering that happens when Lunch btn is clicked
  placeholderText.innerText = `Yummy, make me some dinner`
}


const sortingAscending = () => {
  placeholderText.innerText = `I see your in a hurry to make something to eat`
}


const sortingDescending = () => {
  placeholderText.innerText = `you want to take your time an make an amazing meal`
}

btnBreakfast.addEventListener("click", filterBreakfast)
btnLunch.addEventListener("click", filterLunch)
btnFika.addEventListener("click", filterFika)
btnDinner.addEventListener("click", filterDinner)
btnAscending.addEventListener("click", sortingAscending)
btnDescending.addEventListener("click", sortingDescending)
