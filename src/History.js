import React from 'react'

export default function History(props) {
    return props.previousSearches.map((term) => {
    	console.log(term)
        return (
        	<div>
            <button type="button" onClick={props.applyPreviousSearch.bind(this, term)}>
              {term}
            </button>
            </div>
        );
    })
}