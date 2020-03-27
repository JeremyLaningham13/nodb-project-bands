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
        //console.log(this.state)
        const {img, name, album, song, venue} = this.state;
        return (
            <div>
                <h1>Post Your Favorite Bands</h1>
                <input type="text" placeholder="Img" onChange={this.handleChange} name='img' value={img}/>
                {/* <img src={img} alt="image"/> */}
                <input type="text" placeholder="Name" onChange={this.handleChange} name='name' value={name}/>
                <input type="text" placeholder="Album" onChange={this.handleChange} name='album' value={album}/>
                <input type="text" placeholder="Song" onChange={this.handleChange} name='song' value={song}/>
                <input type="text" placeholder="Venue" onChange={this.handleChange} name='venue' value={venue}/>
                <button onClick={this.handleClick} >Add Favorite Band</button>
            </div>
        )
    }
}

export default PostFavoriteBands;