import React from 'react';
import { connect } from 'react-redux'
import { RootState } from '../store/types'
import { fetchPopularMovieAsyncAction }  from '../_actions/popular.action'
import NavBar from '../components/NavBar'
import MovieItems from '../components/MovieItems'


const mapStateToProps = (state: RootState) => ({
    movies: state.popularReducer.results
});

const dispatchProps = {
  fetchPopularMovie: fetchPopularMovieAsyncAction.request
};

type Props = {} & ReturnType<typeof mapStateToProps> & typeof dispatchProps;
type State = {}

class Main extends React.Component<Props, State> {
    constructor(props: Props){
      super(props)
      this.state = {}
    }

    componentDidMount(){
      this.props.fetchPopularMovie()
    }

    render(){
      const { movies } = this.props
      return(
        <div className="main">
          <div className="main__content">
            <NavBar/>
            <MovieItems movies={movies}/>
          </div>
        </div>
      )
    }
}

export default connect(mapStateToProps, dispatchProps)(Main);
