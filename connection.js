const mongoose = require('mongoose')

const mongoConnet = (url) => {

    mongoose.connect(url);
}

module.exports = {
    mongoConnet,
}
