const students = [];
//   {
//     id: 1,
//     name: "Harry",
//     house: "gryffindor",
//     image: "https://m.media-amazon.com/images/I/71qheAe+f6L._AC_SY450_.jpg",
//   },
//   {
//     id: 2,
//     name: "Blaise",
//     house: "slytherin",
//     image: "https://m.media-amazon.com/images/I/71jTE5obH-L._AC_SL1200_.jpg",
//   },
//   {
//     id: 3,
//     name: "Katie",
//     house: "gryffindor",
//     image: "https://m.media-amazon.com/images/I/71qheAe+f6L._AC_SY450_.jpg",
//   },
//   {
//     id: 4,
//     name: "Susan",
//     house: "hufflepuff",
//     image:
//       "https://cdn3.volusion.com/adgss.rhexw/v/vspfiles/photos/WA046-2.jpg?v-cache=1528079662",
//   },
//   {
//     id: 5,
//     name: "Chad",
//     house: "ravenclaw",
//     image: "https://m.media-amazon.com/images/I/61iys32RuAL._AC_SL1200_.jpg",
//   },
//   {
//     id: 6,
//     name: "Lilly",
//     house: "ravenclaw",
//     image: "https://m.media-amazon.com/images/I/61iys32RuAL._AC_SL1200_.jpg",
//   },
// ];

const expelledStudents = [];
console.log(students);

const houses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];
const crests = ["https://m.media-amazon.com/images/I/71qheAe+f6L._AC_SY450_.jpg", "https://cdn3.volusion.com/adgss.rhexw/v/vspfiles/photos/WA046-2.jpg?v-cache=1528079662", "https://m.media-amazon.com/images/I/61iys32RuAL._AC_SL1200_.jpg", "https://m.media-amazon.com/images/I/71jTE5obH-L._AC_SL1200_.jpg"];

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

let renderStudents = (array) => {
  let domString = "";
  for (let student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${student.crest}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button id="expel--${student.id}" class="btn btn-danger">Expel</button>
    </div>
  </div>`;
  }
  renderToDom("#studentCards", domString);
};

// Voldemort Army Cards:
const renderVoldy = (array) => {
  let domString = "";
  for (let moldy of array) {
      domString += `<div class="card" style="width: 18rem;">
    <img src="$..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${moldy.name}</h5>
      <p class="card-text">${moldy.house}</p>
      <h4 class="card-text">Expelled!</h4>
    </div>
  </div>`;
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
      console.log(e.target.id);
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

  document.querySelector("#studentCards").addEventListener("click", (e) => {
    if (e.target.id.includes("expel")) {
      const [method, id] = e.target.id.split("--");
      let index = students.findIndex((taco) => taco.id === parseInt(id));
      expelledStudents.push(students[index]);
      students.splice(index, 1);
      renderStudents(students);
      renderVoldy(expelledStudents);
    }
  });

  // Working on Hiding/Showing Content and other Eventlisteners:
  
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * houses.length)
    const newStudent = {
      id: students.length + 1,
      name: document.querySelector("#studentName").value,
      house: houses[random], 
      crest: crests[random]
    };
    students.push(newStudent);
    renderStudents(students);
    console.log(newStudent);

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
