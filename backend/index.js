const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');
const reviewRouter = require('./routers/reviewRouter');
const platformRouter = require('./routers/platformRouter');
const utilRouter = require('./routers/utils');
const port = process.env.PORT || 5000;
const cors = require('cors');
// const { OAuth2Client, db } = require('google-auth-library');
// const client = new OAuth2Client('552817724530-itaeb1gsnpj82isbhqll5m73t6old9fd.apps.googleusercontent.com');
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.static('./static/uploads'));

app.use('/user', userRouter);
app.use('/review', reviewRouter);
app.use('/platform', platformRouter);
app.use('/util', utilRouter);

app.get('/main/home', (req, res) => {
        console.log('client request on server');
        res.send('Request on home');
    })
    // app.post("/googleauth", async(req, res) => {
    //     const { token } = req.body
    //     const ticket = await client.verifyIdToken({
    //         idToken: token,
    //         audience: '552817724530-itaeb1gsnpj82isbhqll5m73t6old9fd.apps.googleusercontent.com'
    //     });
    //     const { name, email, picture } = ticket.getPayload();
    //     const user = await db.user.upsert({
    //         where: { email: email },
    //         update: { name, picture },
    //         create: { name, email, picture }
    //     })
    //     res.status(201).json({ name, email, picture });
    // })

app.listen(port, () => {
    console.log(`Server started on port on localhost : ${port}`)
})