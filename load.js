const fs = require("fs")
const path = require('path');
const filePath = path.join(__dirname, "canaletv.txt");

const text = fs.readFileSync(filePath).toString();
const table = text.split("\n").map(pair => pair.split(" -- "));
const tvChanels = new Map(table);

function addChannels(){
    for (let [k, v] of tvChanels) {

        var ul = document.getElementById("channels");

        var liTag = document.createElement("li");
        liTag.setAttribute("id", "canal");
        ul.appendChild(liTag);

        var a = document.createElement("a");
        var link = document.createTextNode(k);
        a.setAttribute("onClick", "changeChannel(event)")
        a.appendChild(link)
        a.href = v;
        liTag.appendChild(a);

    }
}

addChannels();