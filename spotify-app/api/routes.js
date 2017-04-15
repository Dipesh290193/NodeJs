const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent')

module.exports = () => {

//https://api.spotify.com/v1/search?q=ariana&type=artist
    router.get('/api/search', (req, res) => {
        const { show } = req.query 

        superagent
            .get('https://api.spotify.com/v1/search?q=' + show + '&type=artist')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
            })
    })

//https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr/albums

    router.get('/api/search/albums', (req, res) => {
        const { artistId } = req.query
        superagent
            .get('https://api.spotify.com/v1/artists/' + artistId + '/albums?album_type=album&market=US')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
            })
    })

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}