const { Router } = require('express');

const axios = require('axios');

const routes = Router();

routes.post('/devs', async (req, res) => {
    console.log('devInfo >>>', req.body);

    const { github_username } = request.body;

    const response = await axios.get(`https://api.github.com/users/${github_username}`)

    return res.status(200).json({message: ''});
});

module.exports = routes;
