import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/SearchBar';
import ArtList from '../components/ArtList';
// import '../styles/app.css';

class App extends React.Component {
    render(){
        return (
            <div>
                <SearchBar onTermChange={this.props.actions.getArt}/>
                <ArtList art={this.props.art}/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        art: state.art.data
    };
}
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(Actions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);