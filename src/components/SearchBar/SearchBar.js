import React, { useState } from 'react';
import './search-bar.scss';
import lupa from '../../assets/img/lupa.png'


const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
      };

    return (
        <div className="search-bar">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <div className="logo"></div>
                    </div>
                    <div className="col-11">
                        <form onSubmit={onSubmit}>
                            <input
                                placeholder="Nunca dejes de buscar"
                                type="text"
                                className="input-search"
                                value={term}
                                onChange={(event) => setTerm(event.target.value)}
                            />
                            <button className="button-search">
                                <img src={lupa} alt="lupa" className="search-icon" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default SearchBar;
