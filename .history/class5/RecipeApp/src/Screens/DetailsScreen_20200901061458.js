import React from 'react';

const DetailsScreen = ({route}) => {
    const item = route.params.recipeItem;
    return (
        <div>
            <h1>{item}</h1>
        </div>
    );
};

export default DetailsScreen;