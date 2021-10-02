import React from 'react';
import PropTypes from 'prop-types'

const CharacterList = ({ name, image, id }) => (
 
<button onClick={() => {
        location.replace(`/${character.id}`);
    }}>
        <img src={image} alt={name} height={'200px'} />
        <h2>{name}</h2>
        <p>{id}</p>
    </button>
);

CharacterList.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string
}

export default CharacterList;