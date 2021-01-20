import React, { useState } from 'react';
import './search-bar.scss';
import lupa from '../../assets/img/lupa.png'
import { Redirect, Link } from 'react-router-dom';


const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');
    const [submited, setSubmit] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
        setSubmit(true);
    };

    return (
        <div className="search-bar">
            {
                submited ? <Redirect to={`/search/${term}`} /> : null
            }
            <div className="container">
                <div className="row">
                    <Link to="/">
                    <div className="col-1">
                        <div className="logo"></div>
                    </div>
                    </Link>
                    <div className="col-11">
                        <form onSubmit={onSubmit}>
                            <input
                                placeholder="Nunca dejes de buscar"
                                type="text"
                                className="input-search"
                                value={term}
                                onChange={(event) => setTerm(event.target.value)}
                            />
                            <button className="button-search" onClick={onSubmit}>
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
