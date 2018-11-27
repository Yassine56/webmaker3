module.exports = function(app) {
  // create a user
  app.post("/api/user", createUser);
  // get user by Id
  app.get("/api/user/:uid", findUserById);
  // get user
  app.get("/api/user", findUser);
  //update a user
  app.put("/api/user", updateUser);

  users = [
    {
      id: "123",
      username: "alice",
      password: "alice",
      firstName: "Alice",
      lastName: "Wonder",
      email: "alice@gmail.com"
    },
    {
      id: "234",
      username: "bob",
      password: "bob",
      firstName: "Bob",
      lastName: "Marley",
      email: "bob@gmail.com"
    },
    {
      id: "345",
      username: "charly",
      password: "charly",
      firstName: "Charly",
      lastName: "Gacia",
      email: "charly@gmail.com"
    },
    {
      id: "456",
      username: "meriem",
      password: "meriem",
      firstName: "Meriem",
      lastName: "Saaid",
      email: "meriem.saaid@gmail.com"
    }
  ];
  //Function to create user
  function createUser(req, res) {
    var user = req.body;
    user.id = Math.floor(Math.random() * 10 + 1).toString();
    users.push(user);
    res.json(user);

    //return user.id;
  }
  //Search for user by Id
  function findUserById(req, res) {
    const userId = req.params["uid"];
    let user = selectUserById(userId);

    res.json(user);
  }
  //Find user by username and password
  function findUser(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    if (username && password) {
      let user;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          user = users[i];
        }
      }
      res.json(user);
      return;
    }

    if (username) {
      let user;
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          user = users[i];
        }
      }
      res.json(user);
      return;
    }
  }
  //Select user by Id
  function selectUserById(uid) {
    for (let x = 0; x < users.length; x++) {
      if (users[x].id === uid) {
        return users[x];
      }
    }
  }
  //Update User
  function updateUser(req, res) {
    const user = req.body;
    const oldUser = selectUserById(user.id);
    const index = users.indexOf(oldUser);
    this.users[index] = user;
    res.json(user);
  }
};
