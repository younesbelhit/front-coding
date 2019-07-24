import React from 'react';
import Template from './template';
import './style.css';

class Search extends React.Component {

    /**
     * constroctor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            search : null
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (Template(this));
    }


}

Search.propTypes = {
    
};

export default Search;