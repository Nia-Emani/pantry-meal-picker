


// const base_url = `www.themealdb.com/api/json/v1/1/filter.php?i=`
const base_url = `http://localhost:3000/foods/`
const button = document.querySelector('#search-button')
const searchBar = document.querySelector('#blank')
const searchResults = document.querySelector('.meal-results')


const getData = async () => {
  removeElement(searchResults)
  try {
    const ingredient = document.querySelector('input').value
    const response = await axios.get(`${base_url}${ingredient}`)
    console.log(response.data.meals) //Use traverse method to get exact info
    showMeals(response.data.meals)

  } catch (error) {
    console.error(error)
  }
}

button.addEventListener('click', getData)

function showMeals(meals) {
  for (let i = 0; i < 3; i++) {
    let randomIdx = Math.floor(Math.random() * meals.length)
    let meal = meals[randomIdx]
    console.log(meals[randomIdx])
    const foodData = `
    <div>
    <img class="food-image" src="${meal.strMealThumb}"/>
      <h3 style="text-transform: uppercase">${meal.strMeal}</h3>
    </div>
    `
    searchResults.insertAdjacentHTML("beforeend", foodData)
  }
  searchBar.value = ''
}

function removeElement(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}



// meals.forEach((meal) => {
//   const divResults = document.createElement('div')
//   searchResults.append(divResults)
//   const mealPic = document.createElement('img')
//   const mealName = document.createElement('h3')
//   mealPic.src = meal.strMealThumb //replace 'strMealThumb with image location
//   mealName.textContent = meal.strMeal //replace 'strMea with title location
//   divResults.append(mealPic, mealName)
// })