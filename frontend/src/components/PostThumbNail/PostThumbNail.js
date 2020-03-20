import React from 'react';

import imageNotAvailable from '../../assets/images/not.png';

const apiUrl = 'http://localhost:8000';

const styles = {
    width: '100px',
    height: '100px',
    marginRight: '10px'
};

const ProductThumbnail = props => {
    let image = imageNotAvailable;

    if (props.image) {
        image = apiUrl + '/uploads/' + props.image;
    }

    return <img alt="product" src={image} style={styles} className="img-thumbnail" />;
};

export default ProductThumbnail;