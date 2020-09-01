import React from 'react';

const DetailsScreen = ({route}) => {
    const item = route.params.recipeItem;
    const {name, imageURL, ingredients, steps} = item;
    return (
        <div>
            <h1>{name}</h1>
            <h1>{ingredients}</h1>
        </div>
    );
};

export default DetailsScreen;