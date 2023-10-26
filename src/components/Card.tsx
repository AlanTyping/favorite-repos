import { Repository } from '@/hooks/types';
import { useFavoriteRepositoryStore } from '../zustand/favoriteRepos';
import React from 'react';

type cardProps = {
    repository: Repository
    isFavorite: boolean
}

const Card = ({ repository, isFavorite }: cardProps) => {
    const {addFavoriteRepo, favoriteRepositoryId, removeFavoriteRepo} = useFavoriteRepositoryStore()

    const toggleRepository = () => {
        isFavorite ? removeFavoriteRepo(repository.id) : addFavoriteRepo(repository.id)
    }
    return (
        <div>
            <h1>{repository.name}</h1>
            <button className='p-[5px] m-[5px] bg-slate-700' onClick={toggleRepository}>
                {isFavorite ? 'like' : 'dislike'}
            </button>
        </div>
    )
}

export default Card