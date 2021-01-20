import React, { useState } from 'react';
import './search-bar.scss';
import lupa from '../../assets/img/lupa.png'
import { Link, withRouter } from 'react-router-dom';


const SearchBar = (props, { onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push(`/search/${term}`);
      }

    return (
        <div className="search-bar">
            <div className="container">
                <div className="row">
                    <Link to="/">
                    <div className="col-1">
                        <div className="logo"></div>
                    </div>
                    </Link>
                    <div className="col-11">
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
