// Skills on the website
const skills = ['Basic JavaScript', 'Basic HTML', 'Basic CSS', 'Project Management', 'Team Collaboration'];
var skillDiv = document.getElementById('skills');

for (var i = 0; i < skills.length; i++) {
    var skillItem = document.createElement('div');
    skillItem.textContent = skills[i];
    skillDiv.appendChild(skillItem);
}



//footer date
var currentYear = new Date().getFullYear();
const getElement = document.getElementById('footerLine');
if (getElement) {
    getElement.textContent += ' ' + `${currentYear}. All Rights Reserved`;
}


//Messages from user
document.addEventListener('DOMContentLoaded', function () {
    const messageForm = document.getElementById('messageForm');
    const messageList = document.getElementById('messageList');
  
    messageForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <p>${message}</p>
        <p>Author: <a href="mailto:${email}">${name}</a></p>
        <button class="removeBtn" onclick="removeMessage(this)">Remove</button>
      `;
  
      // Append the new item to the list
      messageList.appendChild(listItem);
  
      // Clear the form fields
      messageForm.reset();
    });
  });
  
  function removeMessage(button) {
    // Remove the parent <li> of the clicked button
    const listItem = button.closest('li');
    listItem.remove();
  }
  // project section 
  const apiUrl = 'https://api.github.com/repos/Buttersnow/intro-to-programming-section-5';
  const apiUrl2 = 'https://api.github.com/repos/Buttersnow/github-practice-for-students';
  const repoList = document.getElementById('repoList');

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const repoName = data.name;
        const listItem = document.createElement('li');
        listItem.textContent = repoName;
        repoList.appendChild(listItem);
    })
    .catch(error => console.error('Error fetching data:', error));
