import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesListScreen = ({publisher}) => {
   
    const heroesMarvel = getHeroesByPublisher(publisher);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                heroesMarvel.map((heroe) => {
                    return (<HeroCard
                    key={heroe.id}
                    {...heroe}
                    />
                    )
                })

            }
        </div>
    )
}
