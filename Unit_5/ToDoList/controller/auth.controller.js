const router = require("express").Router();


/* 
- If querying multiple properties, we use the & to divide them
    ex: /query/?firstName=Kate&lastName=Lockhart&email=email@email.com */


// Build a .post() with the url of /register: http://localhost:4000/todo/register
router.post("/register", (req, res) => {
  // check that the middleware is running
  //console.log("\nIn Auth Controller:", req.datePosted);
  // Check the Header of the req
  //console.log("Headers:", req.headers);
  // Check the body of the req
  //console.log("Body/content of Req:", req.body);

  try {
    // Dive into the req body and assign values to variables, object destructuring
    const { firstName, lastName, email, password } = req.body;

    console.log(potato); // Only here to test and trigger catch response

    res.status(200).send({
      fullName: `${firstName} ${lastName}`,
      email: email,
      password: password,
      // password: password, may not want our password to show...
      date: req.datePosted,
    });
  } catch (err) {
    res
      .status(500)
      .send(`<img src="https://http.cat/500" alt="Status code 500"/>`);
  }
});









/* 
  Use the URL of the page to query something and get a response

  This has particular syntax(symbols)
  - Anything after the endpoint can be extracted from it.
        ex: /todo/query/?firstName="John"

        Build a query in a GET route:

*/

router.get("/query/", (req, res) => {
  //console.log(req.query); // an object of the key and value after the second / { firstName: 'Kate' }
try {
  const {firstName, lastName, email, password} = req.query;
  // values passed within URL need to match
        // ex: /query/?firstName=John&lastName=Doe  etc.

        res.status(200).json({
          status: "New user created!",
          results: {
            first: firstName,
            last: lastName,
            email: email,
          },

        })


} catch (err){
  res.status(500).json({
    results: "Rejected",
    error: err
  })

}


});

module.exports = router;
