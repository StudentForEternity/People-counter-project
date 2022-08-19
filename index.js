// document.getElementById("count").innerText = 5


let count = 0
function increment() {
    count += 1;
    document.getElementById("count-el").textContent = count;
}

function save()
{   
    
    let countStr = count + " - ";
    document.getElementById("save-el").textContent+= countStr;

    count = 0;
    document.getElementById("count-el").textContent = count;
}

function reset()
{
    document.getElementById("count-el").textContent = 0;
    document.getElementById("save-el").textContent = "Previous entries: ";
}
