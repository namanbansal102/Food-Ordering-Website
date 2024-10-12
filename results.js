async function fetchRecipes(query) {
    const apiKey = '373d85bd012449939f17fe0fb5cae1eb'; // Replace with your actual API key
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        displayResults(data.results);
    } catch (error) {
        console.error('Error fetching recipe data:', error);
        document.getElementById('results').innerHTML = '<p>Error fetching recipes. Please try again later.</p>';
    }
}

function displayResults(recipes) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!recipes || recipes.length === 0) {
        resultsDiv.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    for (const recipe of recipes) {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.classList.add('dark_icon');
    
        recipeCard.innerHTML = `
            <div class="card-content">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image ">
                <div class="recipe-info">
                    <h3 class="recipe-title dark_color">${recipe.title}</h3>
                    <button class="view-recipe" onclick="viewRecipe(${recipe.id})">View Recipe</button>
                </div>
            </div>
        `;
    
        resultsDiv.appendChild(recipeCard);
    }
    
}

function viewRecipe(recipeId) {
    window.location.href = `recipe-details.html?recipeId=${recipeId}`;
}

const params = new URLSearchParams(window.location.search);
const query = params.get('query');
if (query) {
    fetchRecipes(query);
} else {
    document.getElementById('results').innerHTML = '<p>No search query provided.</p>';
}