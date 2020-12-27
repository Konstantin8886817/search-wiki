import React from 'react';

import Container from '../../components/Container';
import Autocomplete from '../../components/Autocomplete';

import './style.css';

const Home = () => {

    return (

        <div className="home-page-container">
            <div className="home-page-logo">
                <img src="./logo.png" alt="logo" />
            </div>

            <Container>
                {({ articles, searchValue, onSearchChange }) => <Autocomplete articles={articles} searchValue={searchValue} onSearchChange={onSearchChange} />}
            </Container>
        </div>
    )
};

export default Home;
