async function getPhotos(){

    const response = await fetch("https://dummyjson.com/recipes");

    const data = await response.json();

    const box = document.getElementById("quotes");

    data.recipes.forEach(function(recipe){

        // Create Card
        const card = document.createElement("div");
        card.className = "card";

        // Image
        const img = document.createElement("img");
        img.src = recipe.image;

        // Recipe Name
        const name = document.createElement("h2");
        name.textContent = recipe.name;

        // Rating
        const rating = document.createElement("h3");
        rating.textContent = "⭐ Rating : " + recipe.rating;

        // Ingredients Heading
        const heading = document.createElement("h4");
        heading.textContent = "Ingredients";

        // Ingredient List
        const ul = document.createElement("ul");

        recipe.ingredients.forEach(function(item){

            const li = document.createElement("li");

            li.textContent = item;

            ul.appendChild(li);

        });

        // Add everything into card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(rating);
        card.appendChild(heading);
        card.appendChild(ul);

        // Add card to page
        box.appendChild(card);

    });

}

getPhotos();