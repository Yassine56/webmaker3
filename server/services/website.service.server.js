module.exports = function(app) {
  // create website
  app.post("/api/website", createWebsite);
  // find website by user Id
  app.get("/api/user/:uid/website", findWebsitesByUser);
  // find Website By wid
  app.get("/api/website/:wid", findWebsiteById);
  // update a  website
  app.put("/api/website", updateWebsite);
  // delete a website
  app.delete("/api/website/:wid", deleteWebsite);

  websites = [
    { id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    { id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
    { id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
    {
      id: "567",
      name: "Tic Tac Toe",
      developerId: "123",
      description: "Lorem"
    },
    { id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    { id: "789", name: "Chess", developerId: "234", description: "Lorem" },
    { id: "890", name: "Go", developerId: "123", description: "Lorem" }
  ];
  //Function to create user
  function createWebsite(req, res) {
    var website = req.body;
    website.id = Math.floor(Math.random() * 10 + 1).toString();
    websites.push(website);
    res.json(website);

    //return user.id;
  }
  //Function to find websites by userId
  function findWebsitesByUser(req, res) {
    let result = [];
    const userId = req.params["uid"];
    for (let i = 0; i < websites.length; i++) {
      if (websites[i].developerId === userId) {
        result.push(websites[i]);
      }
    }

    res.json(result);
  }

  //Function to find website by website id
  function findWebsiteById(req, res) {
    const wid = req.params["wid"];
    const website = selectWebsiteById(wid);
    res.json(website);
  }
  //Select user by Id
  function selectWebsiteById(wid) {
    for (let x = 0; x < websites.length; x++) {
      if (websites[x].id === wid) {
        return websites[x];
      }
    }
  }
  //Update Website
  function updateWebsite(req, res) {
    const website = req.body;
    const oldWebsite = selectWebsiteById(website.id);
    const index = websites.indexOf(oldWebsite);
    this.websites[index] = website;
    res.json(website);
  }

  function deleteWebsite(req, res) {
    const wid = req.params["wid"];
    const website = selectWebsiteById(wid);
    const index = websites.indexOf(website);
    websites.splice(index, 1);
    res.json(websites);
  }
};
