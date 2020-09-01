import React from 'react';

const DetailsScreen = ({route}) => {
    const item = route.params.recipeItem;
    return (
        <div>
            <h1>{route.}</h1>
        </div>
    );
};

export default DetailsScreen;