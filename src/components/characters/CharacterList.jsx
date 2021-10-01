import React from 'react';
import PropTypes from 'prop-types'

const CharacterList = ({ name, image }) => (
 
<button onClick={() => {
        location.replace(`/${character.id}`);
    }}>
        <img src={image} alt={name} height={'200px'} />
        <h2>{name}</h2>
        <p>{character.id}</p>
    </button>
);

CharacterList.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default CharacterList;