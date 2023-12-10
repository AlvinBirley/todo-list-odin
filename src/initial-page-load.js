import {projectBtnFnc} from './project-button.js'


export function initialPageLoad(){

    const contentDiv = document.querySelector('#content');

    const heading = document.createElement("h1")
    heading.textContent = "Create a todo list";
    const headingDiv = document.createElement("div");
    headingDiv.classList.add("heading-div");
    headingDiv.appendChild(heading);
    contentDiv.appendChild(headingDiv);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button-div");

    const projectButton = document.createElement("button");
    projectButton.classList.add("project-button");
    projectButton.textContent = "New Project";

    const taskButton = document.createElement("button");
    taskButton.classList.add("task-button");
    taskButton.textContent = "New Task";

    buttonDiv.appendChild(projectButton);
    buttonDiv.appendChild(taskButton);
    contentDiv.appendChild(buttonDiv);
    

    const seperationDiv = document.createElement("div");
    seperationDiv.classList.add("seperation-div");
    const p = document.createElement("p");
    seperationDiv.appendChild(p);
    contentDiv.appendChild(seperationDiv);
    
    projectButton.addEventListener('click', projectBtnFnc);

}

