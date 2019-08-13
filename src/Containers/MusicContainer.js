import React, {Component} from 'react';
import MusicList from "../Components/MusicList";

class MusicContainer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            music: []
        };
    }

    componentDidMount() {
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

        fetch(url).then(res => res.json())
            .then(music => this.setState({music: music["feed"]["entry"]}))
            .catch(err => console.error())
    }

    render() {
        return (
            <MusicList music={this.state.music}/>
            )
    }
}

export default MusicContainer;