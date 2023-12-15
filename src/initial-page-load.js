import {projectBtnFnc} from './project-button.js'
import {taskBtnFnc} from './task-button.js'
import {projectClick} from './project-click.js'



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

    projectButton.addEventListener("click", projectBtnFnc);

    document.querySelector(".close").addEventListener("click", 
    
    function(){
        document.querySelector(".bg-modal").style.display = 'none';
    });

    taskButton.addEventListener("click", taskBtnFnc);

    document.querySelector(".note-close").addEventListener("click", 
    
    function(){
        document.querySelector(".note-modal").style.display = 'none';
    });

    const innerProjectDiv = document.createElement("div");
    innerProjectDiv.classList.add("inner-project-div");
    contentDiv.appendChild(innerProjectDiv);

    const getSubmitButton = document.getElementById("submitButton");
    getSubmitButton.addEventListener("click", function(event) {
        event.preventDefault();
        projectClick(innerProjectDiv); 
})
}



