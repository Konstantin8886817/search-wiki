import React from 'react';
import { useSearch } from '../../hooks';

import Container from '../../components/Container';
import Autocomplete from '../../components/Autocomplete';

const Search = ({ ...props }) => {
    const search = props.location.search;
    const params = new URLSearchParams(search);
    const query = params.get('query');

    const { articles, status } = useSearch(query, 50);

    return (
        <div>
            <Container>
                {({ articles, searchValue, onSearchChange }) => <Autocomplete articles={articles} searchValue={searchValue} onSearchChange={onSearchChange} />}
            </Container>

            {!articles.length && status === 'SUCCESS' ? <h3>No articles for query: {query}</h3> :

                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <a href={article.id} target="_blanc">{article.label}</a>
                        </div>
                    )
                })}
        </div>
    )
};

export default Search;