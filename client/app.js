const base_url = `http://localhost:3000/foods/`
const button = document.querySelector('#search-button')
const searchBar = document.querySelector('#blank')
const searchResults = document.querySelector('.meal-results')

// API Set up for production
let apiUrl;

const apiUrls = {
  production: "https://pantrymeals-api.herokuapp.com",
  development: "http://localhost:3000",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});
// End of API setup

const getData = async () => {
  removeElement(searchResults)
  try {
    const ingredient = document.querySelector('input').value
    const response = await api.get(`${base_url}${ingredient}`)
    showMeals(response.data.meals)

  } catch (error) {
    alert("Sorry, time to go grocery shopping!")
    console.error(error)
  }
}
button.addEventListener('click', getData)

function showMeals(meals) {
  const indexArr = []
  let i = 0
  let loop = meals.length < 3 ? meals.length : 3;
  while (i < loop) {
    let randomIdx = Math.floor(Math.random() * meals.length)
    if (!indexArr.includes(randomIdx)) {
      indexArr.push(randomIdx)
      let meal = meals[randomIdx]
      const foodData = `
      <div>
      <img class="food-image" src="${meal.strMealThumb}"/>
      <h3 style="text-transform: uppercase">${meal.strMeal}</h3>
      </div>
      `
      searchResults.insertAdjacentHTML("beforeend", foodData)
      i++
    }
  }
  searchBar.value = ''
}

function removeElement(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}
