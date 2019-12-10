import React from 'react';

class SearchBar extends React.Component
{
    onInputChange(term){
        this.props.onTermChange(term);
    }
    render(){
        return (
            <div>
                <input placeholder="Search culture" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;