import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState({});

    return (
        <CharacterContext.Provider value={{ loading, setLoading, characters, setCharacters, character, setCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
};

export const useSetCharacters = () => {
    const { setCharacters } = useContext(CharacterContext);
    return setCharacters;
};

export const useSetCharacter = () => {
    const { setCharacter } = useContext(CharacterContext);
    return setCharacter;
};

export const useSetLoading = () => {
    const { setLoading } = useContext(CharacterContext);
    return setLoading;
};

export const useCharacters = () => {
    const { characters } = useContext(CharacterContext);
    return characters;
};

export const useCharacter = () => {
    const { character } = useContext(CharacterContext);
    return character;
};

export const useLoading = () => {
    const { loading } = useContext(CharacterContext);
    return loading;
};

CharacterProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default CharacterProvider;