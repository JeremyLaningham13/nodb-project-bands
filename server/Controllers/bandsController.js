let favoriteBands = [
  {
    id: 5,
    img: "https://thumbs.gfycat.com/MiserableAjarAfricanwilddog-size_restricted.gif",
    name: "anberlin",
    album: "Never Take Friendship Personal",
    song: "Paperthin Hymn, Impossible, I'd Like to Die",
    venue: "The Door, Warped Tour, House of Blues"
  },
  {
    id: 6,
    img: "https://66.media.tumblr.com/98ed15093a7cae7c8874b064f288cafc/tumblr_peydccxflc1rvqdnso3_500.gifv",
    name: "Bilmuri",
    album: "Frame",
    song: "Timing, Faint, Wash",
    venue: "J & J's Pizza"
  },
  {
    id: 7,
    img: "https://thumbs.gfycat.com/HugeDarlingCassowary-size_restricted.gif",
    name: "Story of the Year",
    album: "Wolves",
    song: "Miracle, Until the Day I Die, I'm Alive",
    venue: "Verizon Theater"
  },
  {
    id: 8,
    img:"https://media3.giphy.com/media/maNLc0ABKO4pO/source.gif",
    name:"Thirty Seconds to Mars",
    album:"This Is War",
    song: "The Kill, From Yesterday, Closer to the Edge",
    venue: "Ridglea Theater, Nokia Theater, House of Blues, Gexa Theater"
  },
];

let id = 1;

const getBands = (req, res) => {
  res.status(200).json(favoriteBands);
};

const postBand = (req, res) => {
  const { img, name, album, song, venue } = req.body;

  const band = {
    id: id,
    img: img,
    name: name,
    album: album,
    song: song,
    venue: venue
  };

  favoriteBands.push(band);

  id++;

  res.status(200).json(favoriteBands);
};

const updateBand = (req, res) => {
  const id = req.params.id;
  const { img, name, album, song, venue } = req.body;

  const targetIndex = favoriteBands.findIndex(bands => bands.id === +id);

  favoriteBands[targetIndex].img = img || favoriteBands[targetIndex].img;
  favoriteBands[targetIndex].name = name || favoriteBands[targetIndex].name;
  favoriteBands[targetIndex].album = album || favoriteBands[targetIndex].album;
  favoriteBands[targetIndex].song = song || favoriteBands[targetIndex].song;
  favoriteBands[targetIndex].venue = venue || favoriteBands[targetIndex].venue;

  res.status(200).json(favoriteBands);
};

const removeBand = (req, res) => {
  const { id } = req.params;
  for (let i = 0; i < favoriteBands.length; i++) {
    if (favoriteBands[i].id == id) {
      favoriteBands.splice(i, 1);
    }
  }
  res.status(200).json(favoriteBands);
};

module.exports = {
  getBands,
  postBand,
  updateBand,
  removeBand
};
