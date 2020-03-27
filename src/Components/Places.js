import React, { Component } from "react";
import axios from "axios";

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
            this.setState({editStatue: !this.state.editStatus})
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
        <img src={this.props.val.img} alt="image" />
        <h2>{this.props.val.name}</h2>
        <p>{this.props.val.album}</p>
        <p>{this.props.val.song}</p>
        <p>{this.props.val.venue}</p>
        <button onClick={this.changeEditStatus}>Edit</button>
        {
            this.state.editStatus === true
            ?
            <section>
                <input type ="text" placeholder='Image' name='img' onChange={this.handleChange} />
                <input type ="text" placeholder='Name' name='name' onChange={this.handleChange}/>
                <input type ="text" placeholder='Album' name='album' onChange={this.handleChange}/>
                <input type ="text" placeholder='Song' name='song' onChange={this.handleChange}/>
                <input type ="text" placeholder='Venue' name='venue' onChange={this.handleChange}/>
                <button onClick={this.updateBand}>Update</button>
            </section>
            :
            null
        }
        <button onClick={this.deleteBand}>Delete</button>
      </div>
    )
  }
}

export default Places;
