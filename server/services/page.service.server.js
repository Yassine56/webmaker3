module.exports = function(app) {
  // create a page
  app.post("/api/page", createPage);
  // find page by website Id
  app.get("/api/website/:wid/page", findPagesByWebsiteId);
  // find page By pid
  app.get("/api/page/:pid", findPageById);
  // update a  page
  app.put("/api/page", updatePage);
  // delete a website
  app.delete("/api/page/:pid", deletePage);

  //List of pages
  pages = [
    { id: "123", name: "Post 1", title: "Lorem", websiteId: "567" },
    { id: "234", name: "Post 2", title: "Lorem", websiteId: "678" },
    { id: "456", name: "Post 3", title: "Lorem", websiteId: "678" },
    { id: "567", name: "Post 4", title: "Lorem", websiteId: "789" },
    { id: "789", name: "Post 5", title: "Lorem", websiteId: "890" },
    { id: "910", name: "Post 6", title: "Lorem", websiteId: "456" },
    { id: "911", name: "Post 7", title: "Lorem", websiteId: "123" },
    { id: "912", name: "Post 8", title: "Lorem", websiteId: "123" },
    { id: "913", name: "Post 9", title: "Lorem", websiteId: "234" }
  ];
  //Function to create user
  function createPage(req, res) {
    var page = req.body;
    page.id = Math.floor(Math.random() * 10 + 1).toString();
    pages.push(page);
    res.json(page);

    //return user.id;
  }
  //Function to find websites by userId
  function findPagesByWebsiteId(req, res) {
    let result = [];
    const wid = req.params["wid"];
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].websiteId === wid) {
        result.push(pages[i]);
      }
    }

    res.json(result);
  }

  //Function to find website by website id
  function findPageById(req, res) {
    const pid = req.params["pid"];
    const page = selectPageById(pid);
    res.json(page);
  }
  //Select user by Id
  function selectPageById(pid) {
    for (let x = 0; x < pages.length; x++) {
      if (pages[x].id === pid) {
        return pages[x];
      }
    }
  }
  //Update Website
  function updatePage(req, res) {
    const page = req.body;
    const oldPage = selectPageById(page.id);
    const index = pages.indexOf(oldPage);
    this.pages[index] = page;
    res.json(page);
  }

  function deletePage(req, res) {
    const pid = req.params["pid"];
    const page = selectPageById(pid);
    const index = pages.indexOf(page);
    pages.splice(index, 1);
    res.json(websites);
  }
};
