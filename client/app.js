


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
    console.log(response.data.meals)
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

  while (i < 3) {
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





// if (document.getElementById("blank").value.length == 0) {
  //   alert("Sorry")
  // }


// const mealArray = Object.keys(meal)
// console.log(mealArray)
// if (lastRandom === undefined) {
//   randomIdx = Math.floor(Math.random() * meals.length + 1)
// } else {
//   random = mealArray[lastRandom][Math.floor(Math.random() * 2)]
// }
// lastRandom = random


//function showMeals(meals) {
  // for (let i = 0; i < 3; i++) {
  //   let randomIdx = Math.floor(Math.random() * meals.length)
  //   let meal = meals[randomIdx]
  //   console.log(meals[randomIdx])


// meals.forEach((meal) => {
//   const divResults = document.createElement('div')
//   searchResults.append(divResults)
//   const mealPic = document.createElement('img')
//   const mealName = document.createElement('h3')
//   mealPic.src = meal.strMealThumb //replace 'strMealThumb with image location
//   mealName.textContent = meal.strMeal //replace 'strMea with title location
//   divResults.append(mealPic, mealName)
// })