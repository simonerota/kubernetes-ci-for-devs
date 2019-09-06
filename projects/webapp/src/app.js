var gdata = '';
var jdata = '';
var pdata = '';
var vdata = '';

var loadG = function() {
    m.request({
        method: "GET",
        url: "https://api-go.tozzi.fan/"
    })
    .then(function(data) {
       gdata = data;
       console.log(gdata)
    })
}

var loadP = function() {
    m.request({
        method: "GET",
        url: "https://api-python.tozzi.fan/"
    })
    .then(function(data) {
       pdata = data;
    })
}

var loadJ = function() {
    m.request({
        method: "GET",
        url: "https://api-node.tozzi.fan/"
    })
    .then(function(data) {
       jdata = data;
    })
}

var loadV = function() {
    m.request({
        method: "GET",
        url: "https://api-java.tozzi.fan/"
    })
    .then(function(data) {
       vdata = data;
    })
}


var LanguageLoader = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "Programming languages"),
            m("button", {onclick: loadG}, "Go"),
            m("p", gdata.Name),
            m("p", gdata.Year),
            m("p", gdata.Notes),
            m("button", {onclick: loadP}, "Python"),
            m("p", pdata.Name),
            m("p", pdata.Year),
            m("p", pdata.Notes),
            m("button", {onclick: loadJ}, "JavaScript"),
            m("p", jdata.Name),
            m("p", jdata.Year),
            m("p", jdata.Notes),
            m("button", {onclick: loadV}, "Java"),
            m("p", vdata.Name),
            m("p", vdata.Year),
            m("p", vdata.Notes)
        ])
    }
}

var root = document.body;

m.mount(root, LanguageLoader);
