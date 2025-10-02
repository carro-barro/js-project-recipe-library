const recipes = [
  {
    id: 1,
    title: "French toast",
    image: "img/French-toast.jpg",
    readyInMinutes: 30,
    meal: "Breakfast",
    cuisine: "European",
    ingredients: [
      "bread",
      "eggs",
      "flour",
      "sugar",
      "milk"
    ]
  },
  {
    id: 2,
    title: "Beef Stew",
    image: "img/beef-stew.jpg",
    readyInMinutes: 90,
    meal: "Dinner",
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ]
  },
  {
    id: 3,
    title: "Vegan Lentil Soup",
    image: "img/lentil-soup.jpg",
    readyInMinutes: 45,
    meal: "Dinner",
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ]
  },
  {
    id: 4,
    title: "Vegetarian Pesto Pasta",
    image: "img/pasta-pesto.jpg",
    readyInMinutes: 25,
    meal: "Lunch",
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ]
  }
]

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



const showRecipes = (recipesToShow) => {
  recipeContainer.innerHTML = ``

  recipesToShow.forEach(recipe => {
    recipeContainer.innerHTML += `
    <div class="recipe-card">
    <img src="${recipe.image}" alt="${recipe.title}">
    <h3>${recipe.title}</h3>
    <hr>
    <h4><span class="label">Meal:</span><span class="value"> ${recipe.meal}</span><br><span class="label">Cooking time:</span><span class="value"> ${recipe.readyInMinutes} min</span></h4>
    <hr>
    <h4>Ingredients</h4>
    <p>${recipe.ingredients.join("<br>")}</p>
    `
  })

}

showRecipes(recipes)



const filterByMeal = (mealType) => {
  if (mealType === "All") {
    showRecipes(recipes)
  } else {
    const filtered = recipes.filter(recipe => recipe.meal === mealType)

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
  const sortByTime = recipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes)
  showRecipes(sortByTime)
}


const sortingDescending = () => {
  const sortByTime = recipes.sort((a, b) => b.readyInMinutes - a.readyInMinutes)
  showRecipes(sortByTime)
}

const getRandomRecipe = () => {
  const randomIndex = Math.floor(Math.random() * recipes.length)
  const randomRecipe = recipes[randomIndex]
  showRecipes([randomRecipe])
}



btnAll.addEventListener("click", () => filterByMeal("All"))
btnBreakfast.addEventListener("click", () => filterByMeal("Breakfast"))
btnLunch.addEventListener("click", () => filterByMeal("Lunch"))
btnFika.addEventListener("click", () => filterByMeal("Fika"))
btnDinner.addEventListener("click", () => filterByMeal("Dinner"))
btnAscending.addEventListener("click", sortingAscending)
btnDescending.addEventListener("click", sortingDescending)
randomBtn.addEventListener("click", getRandomRecipe)
