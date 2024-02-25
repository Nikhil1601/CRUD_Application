const express = require("express");
const app = express();
const blogRouter = require("./routes/BlogRoutes");
//middleware

app.use(express.json());

app.listen(3001,() => {
    console.log("Server running on port 3001");
});

module.exports = app;

app.use("/api/blogs",blogRouter);

const mongose = require("mongoose");

//config mongoose
mongose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    },
    (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("Connected to mongoose");
        }
    }
);