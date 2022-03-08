var inputBox = document.getElementById("input")
inputBox.addEventListener("keydown",inputEnter)

function inputEnter(e){
    if(e.which != 13){
        return
    }
    enterCommand()
}
function printTerminal1(type,msg){
    var insertBefore = document.getElementById("iBefore")
    var parentDiv = document.getElementById("iBefore").parentNode
    var span1 = document.createElement("span")
    span1.innerText = msg
    if(type == "error"){
        span1.style.color = "red"
    }
    var br = document.createElement("br")
    parentDiv.insertBefore(span1,insertBefore)
    parentDiv.insertBefore(br,insertBefore)
}
function printTerminal2(input){
    var insertBefore = document.getElementById("iBefore")
    var parentDiv = document.getElementById("iBefore").parentNode
    var span1 = document.createElement("span")
    var span2 = document.createElement("span")
    span1.innerText = "visitor@venkatrohit.com:~$ "
    span2.innerText = input
    span2.style.color = "aliceblue"
    var a1 = document.createElement("a")
    a1.innerText = "About.txt"
    a1.href = "#"
    a1.onclick = ()=>{enterCommand("cat About.txt")}
    var br = document.createElement("br")
    var br2 = document.createElement("br")
    parentDiv.insertBefore(span1,insertBefore)
    parentDiv.insertBefore(span2,insertBefore)
    parentDiv.insertBefore(br,insertBefore)
    parentDiv.insertBefore(a1,insertBefore)
    parentDiv.insertBefore(br2,insertBefore)
}
function printTerminal3(input){
    var insertBefore = document.getElementById("iBefore")
    var parentDiv = document.getElementById("iBefore").parentNode
    var span1 = document.createElement("span")
    var span2 = document.createElement("span")
    var span3 = document.createElement("div")
    span1.innerText = "visitor@venkatrohit.com:~$ "
    span2.innerText = input
    span2.style.color = "aliceblue"
    span3.style.color = "aliceblue"
    span3.innerHTML= `I am a Software Engineer and System Architect with primary focus on Backend systems.
    <br>
    Connect with me on <a href="https://www.linkedin.com/in/vemuri-venkat-rohit/">LinkedIn</a>
    <br>
    Check out my <a href="https://github.com/theBackendEngineer">Github</a>
    `
    var br = document.createElement("br")
    var br2 = document.createElement("br")
    parentDiv.insertBefore(span1,insertBefore)
    parentDiv.insertBefore(span2,insertBefore)
    parentDiv.insertBefore(br,insertBefore)
    parentDiv.insertBefore(span3,insertBefore)
    parentDiv.insertBefore(br2,insertBefore)
}
function enterCommand(inp){
    var input = inp || inputBox.value
    var command = input.split(" ")
    var recognizedCommands = ["ls","sudo","cat"]
    if(!recognizedCommands.includes(command[0])){
        printTerminal1("error","The command does not exist",input)
        inputBox.value = ""
        return
    }
    if(command[0]=="ls" && command.length < 2){
        printTerminal2(input)
    }
    if(command[0]=="cat"){
        printTerminal3(input)
    }
    inputBox.value = ""
}

function click_ls(){
    enterCommand("ls")
}
function click_cat(){
    enterCommand("cat")
}

