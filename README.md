# Project Overview

## Pantry Meals

[Pantry Meals Site ](https://pantrymeals.surge.sh/)

## Project Description

Pantry Meals is an app that allows users to get meal ideas based on ingredients they search.

## API and Data Sample

Free Meal API www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

```json
{
meals: [
{
strMeal: "Chicken Couscous",
strMealThumb: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
idMeal: "52850"
},
{
strMeal: "Chicken Fajita Mac and Cheese",
strMealThumb: "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg",
idMeal: "52818"
},
{
strMeal: "Chicken Quinoa Greek Salad",
strMealThumb: "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
idMeal: "53011"
},
{
strMeal: "General Tso's Chicken",
strMealThumb: "https://www.themealdb.com/images/media/meals/1529444113.jpg",
idMeal: "52951"
},
{
strMeal: "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
strMealThumb: "https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg",
idMeal: "52993"
},
{
strMeal: "Katsu Chicken curry",
strMealThumb: "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
idMeal: "52820"
}
]
}
```

## Wireframes

![image](https://user-images.githubusercontent.com/83891591/127872378-fa58ac42-6daa-44c1-9d25-3f7b453648d4.png)


### MVP/PostMVP 

#### MVP 

- 1 API - Meals
- 1 search form based on main ingredient in meals
- Each search will render 3 results, including image and title
- Previous search will be cleared after each submission


#### PostMVP  

- Add second API for cocktail suggestions for each meal
- Second dropdown menu for cocktails
- Add recipe links for each displayed meal


## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|August 3| Pseudocode / actual code | Complete
|August 4| Initial Clickable Model  | Complete
|August 5| MVP | Complete
|August 6| Presentations | Complete

## Priority Matrix

![image](https://user-images.githubusercontent.com/83891591/127861779-29d2611e-5cde-4b25-81bf-1bc9ce8e1e47.png)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Research API | H | 3hrs| 1.5hrs | 1.5hrs |
| HTML structure | H | 5hrs| 3hrs | 3hrs |
| CSS formatting | H | 5hrs| 6.5hrs | 6.5hrs |
| Javascript framework | H | 3hrs| 2hrs | 2hrs |
| Creating functions | H | 5hrs| 2.5hrs | 2.5hrs |
| Creating loops | H | 5hrs| 3hrs | 3hrs |
| Working with the DOM | H | 4hrs| 3.5hrs | 3.5hrs |
| Adding search form | H | 3hrs| 1 hrs | 1hrs |
| Linking images | H | 2hrs| 1.5hrs | 1.5hrs |
| Working with API | H | 4hrs| 2.5hrs | 2.5hrs |
| Optimizing search results | H | 3hrs| 5hrs | 5hrs |
| Debugging | H | 5hrs| 2.5hrs | 2.5hrs |
| Testing| H | 3hrs| 4 hrs | 4hrs |
| Refine design | M | 4hrs| 6.5hrs | 6.5hrs |
| Total | H | 54hrs| 45hrs | 45hrs |

## Code Snippet
I created this algorithm to populate customized search results as the output. I wanted the user to see a maximum of three different meal options, chosen randomly when they search for an ingredient.

```
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
```


## Change Log
 1. I decided to create a search bar instead of a drop-down menu. With a dropdown, I would have had to choose which ingredients from the api to list for users to select from and then create a function that would loop through only those choices from the API. The more efficient solution and the one that more closely aligned with the concept of the app, was to allow users to search for an ingredient.
 2. My API worked well in Postman, but I had to get help with creating a back-end solution to bypass a CORS error via an express server in order to send get requests. In the interest of time, thought it would be best to add that additional backend code instead of researching new APIs.
