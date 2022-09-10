
//Question 1:

const cat = {
    type: "cat",
    name: "kitty",
    complain: true,
}

if (cat.complain) {
    console.log("Meow");
}



//Question 2:

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


//Question 3:

heading.style.fontSize = "2em";



//Question 4:

heading.classList.add("subheading");


//Question 5:

var paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {

    paragraphs[i].style.color = "red";
}


//Question 6:

var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p> New paragraph</p > ";
resultsContainer.style.backgroundColor = "yellow";



//Question 7:

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function myCatListFunction(list) {

    for (let i = 0; i < list.length; i++) {

        console.log(list[i].name);
    }
}

myCatListFunction(cats);


//Question 8:


const catsContainer = document.querySelector(".cat-container");

console.log(catsContainer);



function createCats(cats) {
    let html = "";

    for (let i = 0; i < cats.length; i++) {


        let theCatsAge = "Age unknown";

        if (cats[i].age) {
            theCatsAge = cats[i].age;
        }


        html += `<div>
<h5>${cats[i].name}</h5>
<p>${theCatsAge}</p> 
</div>
`;
    }
    return html;
}

catsContainer.innerHTML = createCats(cats);