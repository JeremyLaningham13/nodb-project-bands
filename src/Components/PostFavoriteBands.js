import React, {Component} from 'react';
import axios from 'axios';

class PostFavoriteBands extends Component {
    constructor() {
        super()
        this.state = {
            img: '', 
            name: '', 
            album: '', 
            song: '', 
            venue: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = e => {
        const {img, name, album, song, venue} = this.state;
        axios.post('/api/bands', {
            img,
            name,
            album,
            song,
            venue
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        //console.log(this.state)
        return (
            <div>
                <h1>Post Your Favorite Bands</h1>
                <input type="text" placeholder="Img" onChange={this.handleChange} name='img'/>
                <input type="text" placeholder="Band Name" onChange={this.handleChange} name='band name'/>
                <input type="text" placeholder="Favorite Album" onChange={this.handleChange} name='favorite album'/>
                <input type="text" placeholder="Favorite Song" onChange={this.handleChange} name='favorite song'/>
                <input type="text" placeholder="Venue" onChange={this.handleChange} name='venue'/>
                <button onClick={this.handleClick} >Add Favorite Band</button>
            </div>
        )
    }
}

export default PostFavoriteBands;