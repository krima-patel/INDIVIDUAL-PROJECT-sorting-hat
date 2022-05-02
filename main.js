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
  name: "Cho",
  house: "ravenclaw",
  expelled: false
},
{
  id: 6,
  name: "Luna",
  house: "ravenclaw",
  expelled: true
}
];

// UTILITY Function:
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};


// Form:
const welcomeForm = () => {
  let domString = `<form class="row gy-2 gx-3 align-items-center">
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Name</label>
    <input type="text" class="form-control" id="autoSizingInput" placeholder="Student Name">
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
    <select class="form-select" id="autoSizingSelect">
      <option selected>Choose...</option>
      <option value="1">Gryffindor</option>
      <option value="2">HufflePuff</option>
      <option value="3">Ravenclaw</option>
      <option value="4">Slytherin</option>
    </select>
  </div>
  <div class="col-auto">
  </div>
  <div class="col-auto">
    <button type="sort" class="btn btn-primary">Sort!</button>
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
const renderStudents = (array) => {
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
// const renderVoldy = (array) => {
//   let domString = '';
//   for (let moldy of array) {
//     if (moldy.expelled === true) {
//     domString += `<div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${moldy.name}</h5>
//       <p class="card-text">${moldy.house}</p>
//       <p class="card-text">Expelled!</p>
//     </div>
//   </div>`
//     }
//   }
//   renderToDom('#voldyCards', domString);
// }



// Event Listeners:
const eventListeners = () => {
  document.querySelector('#btnRow').addEventListener('click', (e) => {
    if (e.target.id === "all") {
      renderStudents(students);
    } else if (e.target.id) {
      const houses = students.filter(taco => {
        console.log(taco.house, e.target.id);
        return (taco.house === e.target.id)})
      renderStudents(houses);
      console.log(houses);
    }
  })};



const startApp = () => {
  welcomeForm()
  filterBtns()
  renderStudents(students)
  // renderVoldy(students)
  
  eventListeners()
};
startApp()
