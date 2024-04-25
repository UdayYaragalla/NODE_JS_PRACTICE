const sequelize = require('./config/dbConfig');
const express = require('express')
const userRoute = require('./routes/userRoutes')
const countryRoute = require('./routes/countryRoutes')
const studentRoute = require('./routes/studentRoutes')
const playerRoute = require('./routes/playerRoutes')
const app = express();

// const User = require('./models/userModel')
// const Country = require('./models/oneToOne/countryModel')
// const Capital = require('./models/oneToOne/capitalModel')
// const Student = require('./models/oneToMany/studentModel')
// const Player = require('./models/manyToMany/playerModel')

// sequelize.sync({force:true})

const port = 8090

app.use(express.json());

app.use('/user', userRoute)
app.use('/country', countryRoute)
app.use('/student', studentRoute)
app.use('/player', playerRoute)

app.use((req, res, next) => {
    next();
})

app.listen(port)   
