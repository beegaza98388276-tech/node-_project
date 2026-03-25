const express = require('express');
const router = express.Router();

const eplTeams = [
    "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton", "Burnley", 
    "Chelsea", "Crystal Palace", "Everton", "Fulham", "Liverpool", "Luton Town", 
    "Manchester City", "Manchester United", "Newcastle United", "Nottingham Forest", 
    "Sheffield United", "Tottenham Hotspur", "West Ham United", "Wolverhampton Wanderers"
];

router.get('/random-team', (req, res) => {
    const randomIndex = Math.floor(Math.random() * eplTeams.length);
    res.json({ team: eplTeams[randomIndex] });
});

module.exports = router;
