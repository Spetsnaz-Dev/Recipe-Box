import React from 'react';

const RecipeList = (props) => (
    <div>
        {props.recipes.map((recipe) =>
            {
                return (
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="column">
                            <div key={recipe.title} className="recipes__box">
                                <a href={recipe.href}> <h3 className="recipe_title">{recipe.title}</h3></a>
                                <img src={recipe.thumbnail} alt={recipe.title}  />
                                <p className="recipes__subtitle">{recipe.ingredients}</p>
                            </div>
                        </div>
                    </div>
                </div> 
                )
            })}
    </div>
);

export default RecipeList;