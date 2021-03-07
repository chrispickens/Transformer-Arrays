var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

document.body = document.createElement("body");
var body = document.body;


function createTransformer(tfs){ 
  var ele = document.createElement("div");
  ele.classList.add("character");
  ele.classList.add("character_div");
  
  var autoImg = document.createElement("img"); 
  autoImg.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png"; 
  var decImg = document.createElement("img"); 
  decImg.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  
  autoImg.classList.add("img");
  decImg.classList.add("img");
  
  var nameEle = document.createElement("h3"); 
  nameEle.innerHTML="Name: "+tfs.name;
  
  var classEle = document.createElement("h4");
  classEle.innerHTML="Class: "+tfs.class.toUpperCase();
  
  var vehEle = document.createElement("h4");
  vehEle.innerHTML="Vehicle: "+tfs.vehicle;
  
  if(tfs.vehicle === "truck"){
    vehEle.style.color="blue"
  }else if(tfs.vehicle === "tank"){
    vehEle.style.color="green"
  }else if(tfs.vehicle === "car"){
    vehEle.style.color="gold"
  }else{
    vehEle.style.color="white"
  }
  
  ele.appendChild(nameEle);
  ele.appendChild(classEle);
  ele.appendChild(vehEle);
  
  if(tfs.afl === "autobot"){
    ele.classList.add("autobot")
    ele.appendChild(autoImg)
  }else{
    ele.classList.add("decepticon")
    ele.appendChild(decImg)
  }
  body.appendChild(ele);
}


for(i=0; i<chrs.length; i++){
  createTransformer(chrs[i]);
}