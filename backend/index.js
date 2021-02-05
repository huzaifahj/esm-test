// Initialise variables

const express = require('express')
const app = express()
const Axios = require("axios")
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(require("cors")({
  origin: ["https://test.jearally.com","http://localhost:8080"]
}))
const url = "https://sheetdb.io/api/v1/1u540kwlh3kca"

// Endpoint to create user

app.post("/users", async (req, res) => {
  try {
    const response = await Axios({
      method: "get",
      url: `${url}/search`,
      params: {
        email: req.body.email,
      }
    })

    if (response.data.length > 0) {

      // User exists, update

      await Axios({
        method: "put",
        url: `${url}/email/${req.body.email}`,
        data: {
          data: req.body,
        },
      })

    } else {

      // User doesn't exist, create

      await Axios({
        method: "post",
        url: url,
        data: {
          data: req.body,
        },
      })

    }

    res.sendStatus(200)

  } catch (error) {
    res.sendStatus(500)
    console.log(error)
  }
})

// Endpoint to get user

app.get("/users/:email", async (req, res) => {
  try {
    const response = await Axios({
      method: "get",
      url: `${url}/search`,
      params: {
        email: req.params.email,
      }
    })

    // If user doesn't exist, send 404

    if (response.data.length > 0) {
      res.json(response.data[0])
    } else {
      res.sendStatus(404)
    }

  } catch (error) {
    res.sendStatus(500)
    console.log(error)
  }
})

// Root endpoint

app.get('/', (req, res) => {
  res.json({
    "message": "Hello from API!",
    "version": "1",
  })
})

// Start server

app.listen(4000, function () {
  console.log("Production server listening on :4000")
})