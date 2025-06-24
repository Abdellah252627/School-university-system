const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');
// const chatRoutes = require('./routes/chat'); // أضفها إذا كانت موجودة

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);
// app.use('/api/chat', chatRoutes); // أضفها إذا كانت موجودة

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 