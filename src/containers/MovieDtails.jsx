import {connect} from "react-redux";
import Details from "../components/MovieDetails/MovieDetails";
import React, {Component} from "react";
import {getMovieFetch} from "../actions/moviesDetails";

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.movieId = props.match.params.id;
        console.log(props);
    }

    componentDidMount() {
        this.props.dispatch(getMovieFetch(this.movieId));
    }

    render() {
        return (
            <Details movieDetails={this.props.movieDetails}/>
        );
    }
}

export default connect(
    state => {
        return {
            movieDetails:state.movieDetails
        };
    }
)(MovieDetails);