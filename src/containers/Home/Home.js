import React from 'react';
import axios from 'axios';
import Spinner from "../../components/Spinner/Spinner";

class Home extends React.Component {

    componentDidMount() {
        // axios.get('https://mighty-shelf-24710.herokuapp.com/accounts/user',{headers:{Authorization: 'Token '+ localStorage.getItem('aJWT')}})
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Spinner/>
            </div>
        );
    }
}

export default Home;
