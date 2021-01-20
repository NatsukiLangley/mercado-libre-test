import React, { useState } from 'react';
import './search-bar.scss';
import lupa from '../../assets/img/lupa.png'
import { Link, withRouter } from 'react-router-dom';


const SearchBar = (props, { onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push(`/items/search/${term}`);
    }

    return (
        <div className="search-bar">
            <div className="container">
                <div className="row">
                    <div className="col-2 col-sm-1">
                        <Link to="/">
                            <div className="logo"></div>
                        </Link>
                    </div>
                    <div className="col-10 col-sm-11">
                        <form onSubmit={handleSubmit}>
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

export default withRouter(SearchBar);
