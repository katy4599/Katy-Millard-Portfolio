
const label = document.getElementById('label');
label.addEventListener('mouseover', () => {
    label.style.backgroundColor = '#40916C';
});

label.addEventListener('mouseout', () => {
    label.style.backgroundColor = '#354F52';
});

const labe12 = document.getElementById('label2');
label2.addEventListener('mouseover', () => {
    label2.style.backgroundColor = '#40916C';
});

label2.addEventListener('mouseout', () => {
    label2.style.backgroundColor = '#354F52';
});

const label3 = document.getElementById('label3');
label3.addEventListener('mouseover', () => {
    label3.style.backgroundColor = '#40916C';
});

label3.addEventListener('mouseout', () => {
    label3.style.backgroundColor = '#354F52';
});

const label4 = document.getElementById('label4');
label4.addEventListener('mouseover', () => {
    label4.style.backgroundColor = '#40916C';
});

label4.addEventListener('mouseout', () => {
    label4.style.backgroundColor = '#354F52';
});

const icons = document.getElementsById('icons');
const icon = table.getElementsByTagName('img');
for (let icon of icons) {
    icon.addEventListener('mouseover', () => {
        icon.style.backgroundColor = '#40916C';
    });
}

function addProject(name, description, language, url) {
    const project = renderProject(name, description, language, url);
    const projects = document.getElementById('projects');

    projects.appendChild(project);
}

function renderProject(name, description, language, url) {
    const projectDiv = document.createElement('div');
    const projectName = document.createElement('h1');
    const projectUrl = document.createElement('a');

        projectDiv.classname = 'projects';
        projectName.innerText = name;
        
        if (language == 'JavaScript') {
            language = 'yellow'
        } else if (language == 'CSS') {
            language = 'blue'
        } else if (language == 'HTML') {
            language = 'orange'
        } else {
            language = 'black'
        }
        
        projectName.style.color = language;
    const projectDesc = document.createElement('p');
    
    projectDesc.innerText = description;
    projectUrl.appendChild(projectName);

    projectDiv.appendChild(projectUrl);
    projectDiv.appendChild(projectDesc);

return projectDiv;
}


async function main() {
    const resp = await fetch(`https://api.github.com/users/katy4599/repos`);
    const projects = await resp.json();

    for (const project of projects) {
        if (project.stargazers_count >= 1) {
            addProject(project.name, project.description, project.language, project.url);
        }
    }
}