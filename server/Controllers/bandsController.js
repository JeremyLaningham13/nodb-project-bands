let favoriteBands = [
    {
    id: 5,
    img: 'https://i.ytimg.com/vi/oY7aPoMSjrI/hqdefault.jpg',
    name: 'anberlin',
    album: 'Never Take Friendship Personal',
    song: 'Paperthin Hymn',
    venue: 'The Door, Warped Tour, House of Blues',
}
]

let id = 1;

const getBands = (req, res) => {
    res.status(200).json(favoriteBands)
}

const postBand = (req, res) => {
    const {img, name, album, song, venue} = req.body

    const band = {
        id: id,
        img: img,
        name: name,
        album: album,
        song: song,
        venue: venue
    }

    favoriteBands.push(band)

    id++

    res.status(200).json(favoriteBands)
}

const updateBand = (req, res) => {
    const id = req.params.id
    const {img, name, album, song, venue} = req.body

    const targetIndex = favoriteBands.findIndex(bands => bands.id === +id)

    favoriteBands[targetIndex].img = img || favoriteBands[targetIndex].img
    favoriteBands[targetIndex].name = name || favoriteBands[targetIndex].name
    favoriteBands[targetIndex].album = album || favoriteBands[targetIndex].album
    favoriteBands[targetIndex].song = song || favoriteBands[targetIndex].song
    favoriteBands[targetIndex].venue = venue || favoriteBands[targetIndex].venue

    res.status(200).json(favoriteBands)
}

const removeBand = (req, res) => {
    const {id} = req.params
    for(let i = 0; i < favoriteBands.length; i++) {
        if(favoriteBands[i].id == id) {
            favoriteBands.splice(i, 1)
        }
    }
    res.status(200).json(favoriteBands)
}

module.exports = {
    getBands,
    postBand,
    updateBand,
    removeBand
}