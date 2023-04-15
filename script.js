// Initialize the employee array
let employees = [];

// Get DOM elements
const form = document.getElementById('employee-form');
const employeeList = document.getElementById('employee-list');

// Function to generate unique IDs for employees
const generateId = () => {
  const ids = employees.map(employee => employee.id);
  let id = 1;
  while (ids.includes(id)) {
    id++;
  }
  return id;
};

// Function to display employees on the page
const displayEmployees = () => {
  employeeList.innerHTML = '';
  employees.forEach(employee => {
    const employeeDiv = document.createElement('div');
    employeeDiv.className = 'employee';
    employeeDiv.innerHTML = `
      <p><strong>ID:</strong> ${employee.id}</p>
      <p><strong>Name:</strong> ${employee.name}</p>
      <p><strong>Profession:</strong> ${employee.profession}</p>
      <p><strong>Age:</strong> ${employee.age}</p>
      <button class="delete-btn" data-id="${employee.id}">Delete Employee</button>
    `;
    employeeList.appendChild(employeeDiv);
  });
};

// Function to add employee
const addEmployee = (name, profession, age) => {
  const id = generateId();
  const employee = {
    id,
    name,
    profession,
    age
  };
  employees.push(employee);
  displayEmployees();
};

// Function to remove employee
const removeEmployee = id => {
  employees = employees.filter(employee => employee.id !== id);
  displayEmployees();
};

// Event handler for form submission
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = document.getElementById('age').value;
  if (!name || !profession || !age) {
    alert('Please fill in all the fields');
  } else {
    addEmployee(name, profession, age);
    form.reset();
    alert('Employee added successfully');
  }
});

// Event handler for delete buttons
employeeList.addEventListener('click', event => {
  if (event.target.classList.contains('delete-btn')) {
    const id = parseInt(event.target.getAttribute('data-id'));
    removeEmployee(id);
  }
});
