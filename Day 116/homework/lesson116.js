const apiId = 'YOUR_EDAMAM_APP_ID';
const apiKey = 'YOUR_EDAMAM_APP_KEY';
document.getElementById('searchButton').addEventListener('click', fetchRecipes);

async function fetchRecipes() {
    const ingredient = document.getElementById('ingredient').value;
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('error');

    resultsDiv.innerHTML = '';
    errorDiv.innerHTML = '';

    if (!ingredient) {
        errorDiv.textContent = 'Please enter an ingredient.';
        return;
    }
    try {
        const response = await axios.get(`https://api.edamam.com/search`, {
            params: {
                q: ingredient,
                app_id: apiId,
                app_key: apiKey,
            }
        });
        const recipes = response.data.hits;

        if (recipes.length === 0) {
            errorDiv.textContent = 'No recipes found. Please try another ingredient.';
            return;
        }
        recipes.forEach(hit => {
            const recipe = hit.recipe;
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <h3>${recipe.label}</h3>
                <img src="${recipe.image}" alt="${recipe.label}" />
                <p><strong>Ingredients:</strong> ${recipe.ingredientLines.join(', ')}</p>
                <p><strong>Instructions:</strong> <a href="${recipe.url}" target="_blank">View Recipe</a></p>
            `;
            resultsDiv.appendChild(recipeDiv);
        });
    } catch (error) {
        errorDiv.textContent = 'Error fetching recipes. Please try again.';
        console.error('Error fetching recipes:', error);
    }
}