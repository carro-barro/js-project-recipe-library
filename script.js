
const URL = `https://api.spoonacular.com/recipes/random?number=3&apiKey=4d3e2b2a43464de48c4a0aac3abf2c52`


const fetchData = async (URL) => {
  console.log("fetching", URL)

  try {
    const response = await fetch(URL)
    console.log("fetch succeeded")
    console.log("status code", response.status)
    console.log("response ok", response.ok)

    if (!response.ok) throw new Error(`HTTP error ${response.status}`)

    const data = await response.json()
    console.log("data", data)
    const recipeInfo = data.recipes


    const showRecipes = (recipesToShow) => {
      recipeContainer.innerHTML = ``

      recipesToShow.forEach(recipe => {
        recipeContainer.innerHTML += `
      <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <hr>
        <h4>
          <span class="label">Meal:</span>
          <span class="value">${recipe.dishTypes?.join(", ") || "N/A"}</span><br>
          <span class="label">Cooking time:</span>
          <span class="value">${recipe.readyInMinutes} min</span>
        </h4>
        <hr>
        <h4>Ingredients</h4>
        <p>${recipe.extendedIngredients
            ? recipe.extendedIngredients.map(ing => `${ing.name}`).join("<br>")
            : "No ingredients listed"
          }</p>
      </div>
    `
      })
    }

    showRecipes(recipeInfo)

    const filterByMeal = (mealType) => {
      if (mealType === "All") {
        showRecipes(recipeInfo)
      } else {
        const filtered = recipeInfo.filter(recipe => recipe.dishTypes?.includes(mealType))

        if (filtered.length > 0) {
          noResultsContainer.innerHTML = ``
          showRecipes(filtered)
        } else {
          recipeContainer.innerHTML = ``
          noResultsContainer.innerHTML = `
            <div class="no-results-container">
          <h3>No recipes found for "${mealType}"</h3>
          <p>Try another filter</p>
          </div>
    `
        }
      }
    };


    const sortingAscending = () => {
      const sortByTime = [...recipeInfo].sort((a, b) => a.readyInMinutes - b.readyInMinutes)
      showRecipes(sortByTime)
    }


    const sortingDescending = () => {
      const sortByTime = [...recipeInfo].sort((a, b) => b.readyInMinutes - a.readyInMinutes)
      showRecipes(sortByTime)
    }

    const getRandomRecipe = () => {
      const randomIndex = Math.floor(Math.random() * recipeInfo.length)
      const randomRecipe = recipeInfo[randomIndex]
      showRecipes([randomRecipe])
    }

    btnAll.addEventListener("click", () => filterByMeal("All"))
    btnBreakfast.addEventListener("click", () => filterByMeal("breakfast"))
    btnLunch.addEventListener("click", () => filterByMeal("lunch"))
    btnFika.addEventListener("click", () => filterByMeal("fika"))
    btnDinner.addEventListener("click", () => filterByMeal("dinner"))
    btnAscending.addEventListener("click", sortingAscending)
    btnDescending.addEventListener("click", sortingDescending)
    randomBtn.addEventListener("click", getRandomRecipe)

  } catch (err) {
    console.log("error is happening", err.message)
  }
}

fetchData(URL)

const btnAll = document.getElementById("btnAll")
const btnBreakfast = document.getElementById("btnBreakfast")
const btnLunch = document.getElementById("btnLunch")
const btnFika = document.getElementById("btnFika")
const btnDinner = document.getElementById("btnDinner")
const btnAscending = document.getElementById("btnAscending")
const btnDescending = document.getElementById("btnDescending")
const placeholderText = document.getElementById("placeholderText")
const mealBtns = document.querySelectorAll(".meal-btn")
const timeBtns = document.querySelectorAll(".time-btn")
const randomBtn = document.getElementById("btnRandom")
const recipeContainer = document.getElementById("recipeContainer")
const noResultsContainer = document.getElementById("noResultsContainer")


mealBtns.forEach(clickedButton => {
  clickedButton.addEventListener("click", () => {
    mealBtns.forEach(currentButton => currentButton.classList.remove("active"))
    clickedButton.classList.add("active")
  })
})

timeBtns.forEach(clickedButton => {
  clickedButton.addEventListener("click", () => {
    timeBtns.forEach(currentButton => currentButton.classList.remove("active"))
    clickedButton.classList.add("active")
  })
})