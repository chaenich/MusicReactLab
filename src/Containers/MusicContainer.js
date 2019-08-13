import React, {Component} from 'react';

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
            .then(music => this.setState({music: music}))
            .catch(err => console.error())
    }

    render() {
        return (
            <p>Hello</p>
        )
    }
}

export default MusicContainer;