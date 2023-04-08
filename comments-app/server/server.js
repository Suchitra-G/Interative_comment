const app = require('./app');
const hostName = "127.0.0.8";
const PORT = 4080


app.listen(PORT, hostName , () => {
    console.log(`server started with http://${hostName}:${PORT}`);
})