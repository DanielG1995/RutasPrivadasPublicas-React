import React, { useContext, useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeoresByName';
import { ContextAuth } from '../../auth/ContextAuth';

export const SearchScreen = ({ history }) => {

    const {value} = useContext(ContextAuth);
    
    console.log(value);

    const location = useLocation();
    const { q =''} = queryString.parse(location.search)
    const [values, handleInputChange] = useForm({ searchText: q });
    const { searchText } = values;
   
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control md-5"
                    type="text"
                    name="searchText"
                    autoComplete="off"
                    placeholder="Buscar Heroe"
                    value={searchText}
                    onChange={handleInputChange}
                />

            </form>
            <br />
            {
                heroesFiltered.map(hero => {
                    return <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                })
            }
        </div>
    )
}
