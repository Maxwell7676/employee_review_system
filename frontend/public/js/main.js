// Fetch all employees from the backend and display them in a list
function fetchEmployees() {
    fetch('/api/employees')
      .then((response) => response.json())
      .then((data) => {
        const employeeList = document.getElementById('employee-list');
  
        data.forEach((employee) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${employee.name} (${employee.email})`;
          listItem.classList.add('list-group-item');
          employeeList.appendChild(listItem);
        });
      })
      .catch((error) => console.error('Error fetching employees:', error));
  }
  
  // Call the fetchEmployees function when the page loads
  // Call the fetchEmployees function when the page loads
    window.onload = function () {
        fetchEmployees();
    };
    
  