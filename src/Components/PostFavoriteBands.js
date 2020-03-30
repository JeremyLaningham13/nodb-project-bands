import React, {Component} from 'react';
import axios from 'axios';
import './PostFavoriteBands.css'

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

    handleClick = () => {
        const {img, name, album, song, venue} = this.state;
        axios.post('/api/bands', {
            img,
            name,
            album,
            song,
            venue
        }).then(response => {
            console.log(response)
            this.setState({
                img: '',
                name: '',
                album: '',
                song: '',
                venue: ''
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const {img, name, album, song, venue} = this.state;
        return (
            <div>
                <h1 class='title2' >Post Your Favorite Bands</h1>
                <nav className='inputGrp'>
                <input class='tab' type="text" placeholder="Band Image" onChange={this.handleChange} name='img' value={img}/>
                <input class='tab' type="text" placeholder="Band Name" onChange={this.handleChange} name='name' value={name}/>
                <input class='tab' type="text" placeholder="Favorite Album" onChange={this.handleChange} name='album' value={album}/>
                <input class='tab' type="text" placeholder="Top Songs" onChange={this.handleChange} name='song' value={song}/>
                <input class='tab' type="text" placeholder="Venue" onChange={this.handleChange} name='venue' value={venue}/>
                </nav>
                <button class='addBandButton' onClick={this.handleClick} >Add Favorite Band</button>
            </div>
        )
    }
}

export default PostFavoriteBands;