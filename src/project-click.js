import {Project} from './submitProject.js'

export function projectClick (innerProjectDiv) {
    const projectRec = document.createElement("div");
    projectRec.classList.add("project-rec");
    innerProjectDiv.appendChild(projectRec);

    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info");
    projectRec.appendChild(projectInfo);

    const projectTitle = document.createElement("div");
    const closeProject = document.createElement("p");
    closeProject.textContent="+";
    closeProject.classList.add("close-project")
    projectTitle.classList.add("project-title")
    projectTitle.appendChild(closeProject);
    projectInfo.appendChild(projectTitle);

    const projectDescription = document.createElement("div");
    projectDescription.classList.add("project-description");
    projectInfo.appendChild(projectDescription);

    const dateAndPriority = document.createElement("div");
    dateAndPriority.classList.add("date-priority");
    projectInfo.appendChild(dateAndPriority);

    const date = document.createElement("div");
    date.classList.add("date");
    dateAndPriority.appendChild(date);

    const priority = document.createElement("div");
    priority.classList.add("priority");
    dateAndPriority.appendChild(priority);

    document.querySelector(".bg-modal").style.display = 'none';
    Project();
}