const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;



app.use(express.json());
app.use(cors());
const USERS = [{
  email:'abdullah16aug@gmail.com',
  password:'password', 
  admin:true
}];
const QUESTIONS = [
  {
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [
      {
        input: "[1,2,3,4,5]",
        output: "5",
      },
    ],
  },
];

const SUBMISSION = [];

app.post("/signup", function (req, res) {
  // Add logic to decode body
  // body should have email and password

  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)
let name=req.body.name;
let email=req.body.email;
let password=req.body.password;
  USERS.forEach((user)=>{
    if(user.email==email){
      return res.status(401).send({message:'User already exists'});
    }else{
      USERS.push({name,email,password});
      return res.status(200).send({message:'User created successfully'});
    }
  })

  // return back 200 status code to the client
 
 
});
app.get('',(req,res)=>{
  res.send('backend')
})
app.post("/login", function (req, res) {
  // Add logic to decode body
  // body should have email and password
  let femail = req.body.email;
  let fpassword = req.body.password;
  console.log(femail, fpassword);
  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same
  USERS.forEach((user) => {

    if (user.email === femail && user.password === fpassword) {
        // If the password is the same, return back 200 status code to the client
        // Also send back a token (any random string will do for now)
        return res.status(200).json({token:'randomStringToken'});
    } 
      // If the password is not the same, return back 401 status code to the client
      else {
     return res.status(401).json({token:"Login Failed"});
    }
  });
  // res.json("Hello World from route 2!");
});

app.get("/questions", function (req, res) {
  //return the user all the questions in the QUESTIONS array
  console.log(QUESTIONS)
  res.json(QUESTIONS)
  res.send({message:"Hello World from route 3!"});
});

app.get("/submissions", function (req, res) {
  // return the users submissions for this problem
  res.send("Hello World from route 4!");
});

app.post("/submissions", function (req, res) {
  // let the user submit a problem, randomly accept or reject the solution
  // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!");
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
