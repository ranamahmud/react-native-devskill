import React from 'react';

const DetailsScreen = ({route}) => {
    const item = route.params.recipeItem;
    const {name} = item;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default DetailsScreen;