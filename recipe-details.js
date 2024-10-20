async function getRecipeDetails(recipeId) {
    const apiKey = 'b01364bef28b48bdb4f7389c37c2f596';
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        return null;
    }
}

async function displayRecipeDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('recipeId');

    if (!recipeId) {
        document.getElementById('recipeDetails').innerHTML = 'Recipe not found.';
        return;
    }

    const recipe = await getRecipeDetails(recipeId);
    if (!recipe) {
        document.getElementById('recipeDetails').innerHTML = 'Failed to load recipe details.';
        return;
    }

    let stepsHtml = '<p>Instructions not available.</p>';
    
    if (recipe.analyzedInstructions && recipe.analyzedInstructions.length > 0) {
        const steps = recipe.analyzedInstructions[0].steps;
        if (steps.length > 0) {
            stepsHtml = '<ol>';
            for (const step of steps) {
                stepsHtml += `<li>${step.step}</li>`;
            }
            stepsHtml += '</ol>';
        }
    }

    document.getElementById('recipeDetails').innerHTML = `
        <h1>${recipe.title}</h1>
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>Instructions</h3>
        ${stepsHtml}
    `;
}

document.addEventListener('DOMContentLoaded', displayRecipeDetails);
