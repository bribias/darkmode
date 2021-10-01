import React from 'react';
import PropTypes from 'prop-types'
import CharacterDetail from './CharacterDetail';

const CharacterList = ({ name, image }) => (
 
<button onClick={() => {
        location.replace(`/${character.id}`);
    }}>
        <img src={image} alt={name} height={'200px'} />
        <h2>{name}</h2>
    </button>
);

CharacterDetail.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default CharacterList;