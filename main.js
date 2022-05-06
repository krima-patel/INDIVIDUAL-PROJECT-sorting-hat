const students = [
  {
    id: 1,
    name: "Harry",
    house: "gryffindor",
    expelled: false,
  },
  {
    id: 2,
    name: "Blaise",
    house: "slytherin",
    expelled: true,
  },
  {
    id: 3,
    name: "Katie",
    house: "gryffindor",
    expelled: false,
  },
  {
    id: 4,
    name: "Susan",
    house: "hufflepuff",
    expelled: true,
  },
  {
    id: 5,
    name: "Chad",
    house: "ravenclaw",
    expelled: false,
  },
  {
    id: 6,
    name: "Lilly",
    house: "ravenclaw",
    expelled: true,
  },
];

const expelledStudents = [];
console.log(students);

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];


// UTILITY Function:
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

// Form:
const welcomeForm = () => {
  let domString = `
  <h2>Where does your future lie?</h2>
  <form id="form" class="row g-3">
  <div class="col-12">
    <h3><label for="studentName" class="form-label">Enter your name to find out where you belong...</label></h3>
    <input type="text" class="form-control" id="studentName" placeholder="Your Name Here">
  </div>
  <div class="col-12">
    <button type="submit" id="sort-btn">Begin Sorting</button>
  </div>
</form>`;

  renderToDom("#studentForm", domString);
};

// Buttons:
const filterBtns = () => {
  let domString = `
  <button type="button" id="gryffindor">Gryffindor</button>
  <button type="button" id="hufflepuff">Hufflepuff</button>
  <button type="button" id="ravenclaw">Ravenclaw</button>
  <button type="button" id="slytherin">Slytherin</button>
  <button type="button" id="all">All</button>
`;
  renderToDom("#btnRow", domString);
};

// Student Cards:
let renderStudents = () => {
  let domString = "";
  for (let student of students) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button id="expel--${student.id}" class="btn btn-primary">Expel</button>
    </div>
  </div>`;
  }
  renderToDom("#studentCards", domString);
};

// Voldemort Army Cards:
const renderVoldy = () => {
  let domString = "";
  for (let moldy of students) {
    if (moldy.expelled === true) {
      domString += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${moldy.name}</h5>
      <p class="card-text">${moldy.house}</p>
      <h4 class="card-text">Expelled!</h4>
    </div>
  </div>`;
    }
  }
  renderToDom("#voldyCards", domString);
};

// Event Listeners:
const eventListeners = () => {
  document.querySelector("#btnRow").addEventListener("click", (e) => {
    if (e.target.id === "all") {
      renderStudents(students);
    } else if (e.target.id === "gryffindor") {
      const gryffindor = students.filter((taco) => taco.house === "gryffindor");
      renderStudents(gryffindor);
    } else if (e.target.id === "hufflepuff") {
      const hufflepuff = students.filter((taco) => taco.house === "hufflepuff");
      renderStudents(hufflepuff);
    } else if (e.target.id === "ravenclaw") {
      const ravenclaw = students.filter((taco) => taco.house === "ravenclaw");
      renderStudents(ravenclaw);
    } else if (e.target.id === "slytherin") {
      const slytherin = students.filter((taco) => taco.house === "slytherin");
      renderStudents(slytherin);
    }
  });

  // Working on Hiding/Showing Content...
  document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const newStudent = {
    id: students.length+1,
    name: document.querySelector('#studentName').value,
    house: houses[Math.floor(Math.random() * houses.length)],
    expelled: false,
  }
  students.push(newStudent);
  renderStudents(newStudent);
  console.log(newStudent);
  if (newStudent.expelled === true) {
    renderVoldy(newStudent);
  } else if (newStudent.expelled !== true) {
    renderStudents(newStudent);
  } else {
    console.log("Something went wrong...")
  }

  document.querySelector('#studentCards').addEventListener("click", (e) => {
    if (e.target.id.includes("expel")) {
      const [method, id] = e.target.id.split("--");
      let index = students.findIndex((taco) => taco.id === parseInt(id));
      const exp = (students[index]).expelled === true;
      expelledStudents.push(students[index]);
      students.splice(index, 1);
      console.log(students);
      
      console.log(index);
      renderVoldy(expelledStudents);
      console.log(expelledStudents);
      renderStudents(students);
    }
    
  })

  document.querySelector("#studentCards").style.visibility = "visible";
  document.querySelector("#voldyCards").style.visibility = "visible";
  document.querySelector("#btnRow").style.visibility = "visible";
  
  });
};
function hiddenElements() {
  document.querySelector("#studentCards").style.visibility = "hidden";
  document.querySelector("#voldyCards").style.visibility = "hidden";
  document.querySelector("#btnRow").style.visibility = "hidden";
  
}

const startApp = () => {
  welcomeForm();
  filterBtns();
  renderStudents(students);
  renderVoldy(students);
  hiddenElements();
  eventListeners();
};
startApp();
