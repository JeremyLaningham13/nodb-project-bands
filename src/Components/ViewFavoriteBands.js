import React, { Component } from 'react'
import axios from 'axios'

import Places from './Places'

class ViewFavoriteBands extends Component {
    constructor() {
        super()
        this.state = {
            allBands: []
        }
    }

    componentDidMount() {
        axios.get('/api/bands')
            .then(response => {
                this.setState({allBands: response.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    updateAllBands = newArr => {
        this.setState({allBands: newArr})
    }

    render() {
        console.log(this.state.allBands)
        let mappedBands = this.state.allBands.map((val, index) => {
            return (
                <Places val={val} updateAllBands={this.updateAllBands}/>
            )
        })
        return (
            <div>
                <h1>My Bands</h1>
                {mappedBands}
            </div>
        )
    }
}

export default ViewFavoriteBands