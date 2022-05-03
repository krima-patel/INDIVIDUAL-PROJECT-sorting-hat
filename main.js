const students = [{
  id: 1,
  name: "Harry",
  house: "gryffindor",
  expelled: false
},
{
  id: 2,
  name: "Blaise",
  house: "slytherin",
  expelled: true
},
{
  id: 3,
  name: "Katie",
  house: "gryffindor",
  expelled: false
},
{
  id: 4,
  name: "Susan",
  house: "hufflepuff",
  expelled: true
},
{
  id: 5,
  name: "Chad",
  house: "ravenclaw",
  expelled: false
},
{
  id: 6,
  name: "Lilly",
  house: "ravenclaw",
  expelled: true
}
];

// UTILITY Function:
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// Entrance Button:
function enterBtn() {
  document.querySelector('#studentCards').style.display= 'none';
}

// Form:
const welcomeForm = () => {
  let domString = `
  <h3>Welcome, Students...</h3>
  <form class="row g-3">
  <div class="col-12">
    <label for="studentName" class="form-label">Enter your name to find out where you belong...</label>
    <input type="text" class="form-control" id="studentName" placeholder="Your Name Here">
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Begin Sorting</button>
  </div>
</form>`

renderToDom('#studentForm', domString);
}

// Buttons:
const filterBtns  = () => {
  let domString =`
  <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button" id="gryffindor">Gryffindor</button>
  <button class="btn btn-primary" type="button" id="hufflepuff">Hufflepuff</button>
  <button class="btn btn-primary" type="button" id="ravenclaw">Ravenclaw</button>
  <button class="btn btn-primary" type="button" id="slytherin">Slytherin</button>
  <button class="btn btn-primary" type="button" id="all">All</button>
</div>
`;
renderToDom("#btnRow", domString)
};


// Student Cards: 
let renderStudents = (array) => {
  let domString = '';
  for (let student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <a href="#" class="btn btn-primary">Expel</a>
    </div>
  </div>`
  }
  renderToDom("#studentCards", domString);
};


// Voldemort Army Cards:
const renderVoldy = (array) => {
  let domString = '';
  for (let moldy of array) {
    if (moldy.expelled === true) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${moldy.name}</h5>
      <p class="card-text">${moldy.house}</p>
      <p class="card-text">Expelled!</p>
    </div>
  </div>`
    }
  }
  renderToDom('#voldyCards', domString);
}

// Event Listeners:

const eventListeners = () => {
  document.querySelector('#btnRow').addEventListener('click', (e) => {
  if (e.target.id === "all") {
    renderStudents(students);
  } else if (e.target.id === "gryffindor") {
    const gryffindor = students.filter(taco => taco.house === "gryffindor");
    renderStudents(gryffindor);
  } else if (e.target.id === "hufflepuff") {
    const hufflepuff = students.filter(taco => taco.house === "hufflepuff");
    renderStudents(hufflepuff);
  } else if (e.target.id === "ravenclaw") {
    const ravenclaw = students.filter(taco => taco.house === "ravenclaw");
    renderStudents(ravenclaw);
  } else if (e.target.id === "slytherin") {
    const slytherin = students.filter(taco => taco.house === "slytherin");
    renderStudents(slytherin);
  }
})
};

// Working on Hiding/Showing Content...
// const hideContent = () => {
//   const hide = document.getElementById("studentCards")
//   if (hide.style.display === "none") {
//     hide.style.display = "block";
//   }else {
//     hide.style.display ="none";
//   }
// }

const startApp = () => {
  welcomeForm()
  filterBtns()
  renderStudents(students)
  renderVoldy(students)
  eventListeners()
  // hideContent();
};
startApp();
