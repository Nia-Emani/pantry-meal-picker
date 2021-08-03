


const base_url = `www.themealdb.com/api/json/v1/1/filter.php?i=`
const button = document.querySelector('#search-button')
const searchResults = document.querySelector('.meal-results')


const getData = async () => {
  try {
    const ingredient = document.querySelector('input').value
    const response = await axios.get(`${base_url}${ingredient}`)
    console.log(response) //Use traverse method to get exact info
    showMeals(response)
  } catch (error) {
    console.error(error)
  }
}

button.addEventListener('click', getData)

// function showMeals(meals) {
//   meals.forEach((meal) => {
//     const divResults = document.createElement('div')
//     searchResults.append(divResults)
//     const mealPic = document.createElement('img')
//     const mealName = document.createElement('h3')
//     mealPic.src = meal.strMealThumb //replace 'strMealThumb with image location
//     mealName.textContent = meal.strMeal //replace 'strMea with title location
//     divResults.append(mealPic, mealName)
//   })
// }