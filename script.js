const counter = document.getElementsByClassName('counter')[0];
const visitors = document.getElementsByClassName('visitor')[0];

var visitCount = localStorage.getItem("page_view");

console.log(visitCount);

if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
    }
else {
    localStorage.setItem("page_view", 1);
    visitCount = 1;
    
}
    
    const newDiv = document.createElement("div");

    const newContent = document.createTextNode(visitCount);

    newDiv.appendChild(newContent);

    counter.appendChild(newDiv);


console.log(counter, visitors);
