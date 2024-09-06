const express = require('express');
const app = express();
const dotenv = require('dotenv');
const sequelize = require('./config/db.config');
const userRoutes = require('./routes/user.routes');
const cors = require('cors');

dotenv.config();

app.use(cors())
app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.json({message: 'Working fine'})
})

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
