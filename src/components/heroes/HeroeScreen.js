import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroeById';

export const HeroeScreen = ({history}) => {

    const {heroeId} = useParams();
    useMemo(() => getHeroesById(heroeId), [heroeId]);
    const hero=getHeroesById(heroeId);
    if(!hero){
        return (<Redirect to="/"/>)
    }
   

   const handleReturn=()=>{
     history.goBack();
   }
    
    return (
        <div>
            <h1>{hero.superhero}</h1>
            <img alt={hero.superhero} width="100" src={`../assets/heroes/${hero.id}.jpg`}/>
            <button onClick={handleReturn} >Regresar</button>
        </div>
    )
}
