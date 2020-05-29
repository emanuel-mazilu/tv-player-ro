const fs = require("fs")
// used path becouse when making binarys it did not copy the file
const path = require('path');
const filePath = path.join(__dirname, "canaletv.txt");

//  make a dictionary {channelName: link} from file (canaletv.txt)
const text = fs.readFileSync(filePath).toString();
const table = text.split("\n").map(pair => pair.split(" -- "));
const tvChanels = new Map(table);


// add the channels from dicrionary to as li in an ul list with an a tag 
//  adding onClick function as an attribute to a
//  doing this for every item in the dictionary (key=ChannelName, value=link)
// (<ul>  <li><a href = link onClick=changeChannel(e) >Channel Name</a></li>  </ul>)
function addChannels(){
    for (let [k, v] of tvChanels) {

        const ul = document.getElementById("channels");

        const liTag = document.createElement("li");
        liTag.setAttribute("id", "canal");
        ul.appendChild(liTag);

        const a = document.createElement("a");
        const link = document.createTextNode(k);
        a.setAttribute("onClick", "changeChannel(event)")
        a.appendChild(link)
        a.href = v;
        liTag.appendChild(a);

    }
}

addChannels();