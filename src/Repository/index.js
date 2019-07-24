import React from 'react';
import axios from 'axios';
import Template from './template';
import PropTypes from 'prop-types';
import './style.css';

class Repository extends React.Component {

         /**
        * constroctor
         * @param props
         */
        constructor(props) {
            super(props);
            this.state = {
                repositories: [],
                activePage: 1,
            }
        }
    
        /**
         * @param {string} pageTitle;
         */
        titleComponent = (pageTitle) => {
            document.title = pageTitle;
        }

        /**
         * fetch data
         */
        fetchData = () => {
            axios.get(`https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=${this.state.activePage}`)
            .then(res => {
                const repositories = res.data.items;
                this.setState({
                    repositories
                });
            })
        }


        componentDidMount() {
            this.titleComponent( ' ⚛️ List Of Repositories ! ');
            this.fetchData();
        }

        render() {
            return (Template(this));
        }


}

Repository.propTypes = {
    repositories: PropTypes.array
};

export default Repository;