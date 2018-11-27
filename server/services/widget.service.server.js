module.exports = function(app) {
  // create website
  app.post("/api/widget", createWidget);
  // find website by user Id
  app.get("/api/page/:pid/widget", findWidgetsByPageId);
  // find Website By wid
  app.get("/api/widget/:wgid", findWidgetById);
  // update a  website
  app.put("/api/widget", updateWidget);
  // delete a website
  app.delete("/api/widget/:wgid", deleteWidget);

  //List of widgts
  widgets = [
    {
      id: "123",
      widgetType: "HEADING",
      pageId: "123",
      size: 2,
      text: "GIZMODO"
    },
    {
      id: "234",
      widgetType: "HEADING",
      pageId: "123",
      size: 4,
      text: "Lorem ipsum"
    },
    {
      id: "345",
      widgetType: "IMAGE",
      pageId: "123",
      width: "50%",
      url:
        "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
    },
    {
      id: "567",
      widgetType: "YOUTUBE",
      pageId: "123",
      width: "60%",
      url: "https://youtu.be/AM2Ivdi9c4E"
    },
    {
      id: "789",
      widgetType: "HEADING",
      pageId: "234",
      size: 2,
      text: "Header 1"
    },
    {
      id: "900",
      widgetType: "HEADING",
      pageId: "234",
      size: 4,
      text: "Lorem ipsum"
    },
    {
      id: "901",
      widgetType: "IMAGE",
      pageId: "234",
      width: "50%",
      url:
        "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
    },
    {
      id: "902",
      widgetType: "YOUTUBE",
      pageId: "234",
      width: "60%",
      url: "https://youtu.be/AM2Ivdi9c4E"
    }
  ];
  //Function to a widget
  function createWidget(req, res) {
    var widget = req.body;
    widget.id = Math.floor(Math.random() * 10000 + 1).toString();
    //console.log(widget);
    widgets.push(widget);
    res.json(widget);

    //return user.id;
  }
  //Function to find widget by page
  function findWidgetsByPageId(req, res) {
    let result = [];
    const pid = req.params["pid"];
    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pid) {
        result.push(widgets[i]);
      }
    }

    res.json(result);
  }

  //Function to find widge by  id
  function findWidgetById(req, res) {
    const wgid = req.params["wgid"];
    const widget = selectWidgetById(wgid);
    res.json(widget);
  }
  //Select widget by Id
  function selectWidgetById(wid) {
    for (let x = 0; x < widgets.length; x++) {
      if (widgets[x].id === wid) {
        return widgets[x];
      }
    }
  }
  //Update widget
  function updateWidget(req, res) {
    const widget = req.body;
    const oldWidget = selectWidgetById(widget.id);
    const index = widgets.indexOf(oldWidget);
    this.widgets[index] = widget;
    res.json(widget);
  }
  //Delete a widget
  function deleteWidget(req, res) {
    const wgid = req.params["wgid"];
    const widget = selectWidgetById(wgid);
    const index = widgets.indexOf(widget);
    widgets.splice(index, 1);
    res.json(widgets);
  }
};
