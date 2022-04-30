const students = [{
  id: 1,
  name: "Harry Potter"
  // house: "gryffindor"
},
{
  id: 2,
  name: "Blaise Zabini"
  // house: "slytherin"
},
{
  id: 3,
  name: "Katie Bell"
  // house: "gryffindor"
},
{
  id: 4,
  name: "Susan Bones"
  // house: "hufflepuff"
},
{
  id: 5,
  name: "Cho Chang"
  // house: "ravenclaw"
},
{
  id: 6,
  name: "Luna Lovegood"
  // house: "ravenclaw"
}
];

// UTILITY Function:
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const renderStudents = (array) => {
  let domString = '';
  for (const item of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary">Expel</a>
    </div>
  </div>`
  }
  renderToDom("#studentCards", domString);
};

const startApp = () => {
  renderStudents(students)
};
startApp()
