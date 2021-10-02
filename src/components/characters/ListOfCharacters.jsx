import React from 'react';
import CharacterList from './CharacterList';
import { fetchCharacters } from '../../services/heyArnoldAPI';
import { useLoading, useSetLoading, useCharacters, useSetCharacters } from '../../hooks/CharacterProvider';

const ListOfCharacters = () => {
    const loading = useLoading();
    const setLoading = useSetLoading();
    const characters = useCharacters();
    const setCharacters = useSetCharacters();

    useEffect(() => {
        fetchCharacters()
            .then((charactersArray) => setCharacters(charactersArray))
            .then(() => setLoading(false));
    }, []);

    if (loading)
        return (
            <img src="https://i.imgur.com/B8SSY5p.gif" alt="loading spinner" />
        );
    
    return (
        <ul role ="list" aria-label="character-list">
            {characters.map((character) => (
                <Link key={character.id} to={`${character.id}`}>
                    <li key={character.id}>
                        <CharacterList image={character.image} name={character.name} />
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default ListOfCharacters;