import React, { Component } from "react";
import axios from "axios";
import './Places.css'

class Places extends Component {
    constructor() {
        super()
        this.state = {
            editStatus: false,
            img: '',
            name: '',
            album: '',
            song: '',
            venue: ''
        }
    }

    changeEditStatus = () => {
        this.setState({editStatus: !this.state.editStatus})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    updateBand = () => {
        const {img, name, album, song, venue} = this.state
        axios.put(`/api/bands/${this.props.val.id}`, {img, name, album, song, venue})
        .then(response => {
            console.log(response)
            this.setState({editStatus: !this.state.editStatus})
            this.props.updateAllBands(response.data)
            this.setState({addStatus: !this.state.addStatus})
            this.props.updateAllBands(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    deleteBand = () => {
        axios.delete(`api/bands/${this.props.val.id}`)
            .then(response => {
                this.props.updateAllBands(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }


  render() {
    //console.log(this.props.val);
    console.log(this.state)
    return (
      <div>
          <nav className='list'>
            <img src={this.props.val.img} alt="image" />
            <h2>{this.props.val.name}</h2>
            <p>{this.props.val.album}</p>
            <p>{this.props.val.song}</p>
            <p>{this.props.val.venue}</p>
            <button class='button3' onClick={this.changeEditStatus} >Edit</button>
            <button class='button3' onClick={this.deleteBand}>Delete</button>
        {
            this.state.editStatus === true
            ?
            <section class='edit1'>
                <input type ="text" placeholder='Image' name='img' onChange={this.handleChange}/>
                <input type ="text" placeholder='Band Name' name='name' onChange={this.handleChange}/>
                <input type ="text" placeholder='Favorite Album' name='album' onChange={this.handleChange}/>
                <input type ="text" placeholder='Top Songs' name='song' onChange={this.handleChange}/>
                <input type ="text" placeholder='Venue' name='venue' onChange={this.handleChange}/>
                <button class='button3' onClick={this.updateBand}>Update</button>
            </section>
                :
                null
        }
                
            </nav>
      </div>
    )
  }
}

export default Places;
