import React from 'react';
import { useLoading, useSetLoading, useSetCharacter, useCharacter } from '../../hooks/CharacterProvider';
import { useParams } from 'react-router';
import { fetchOneCharacter } from '../../services/heyArnoldAPI';

const CharacterDetail = () => {
    const loading = useLoading();
    const setLoading = useSetLoading();
    const character = useCharacter();
    const setCharacter = useSetCharacter();
    const { id } = useParams();

    useEffect(() => {
        fetchOneCharacter(id)
            .then((chartacter) => setCharacter(chartacter))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading)
        return (
            <img src="https://i.imgur.com/B8SSY5p.gif" alt="loading spinner" />
        );
    
    return (
        <ul aria-label="single-character">
            <img src={character.image} alt="character image" />
            <h2>{character.name}</h2>
        </ul>
    );
};

export default CharacterDetail;