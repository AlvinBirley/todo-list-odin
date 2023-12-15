export function projectClick (innerProjectDiv) {
    const projectRec = document.createElement("div");
    projectRec.classList.add("project-rec");
    innerProjectDiv.appendChild(projectRec);

    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info");
    projectRec.appendChild(projectInfo);

    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectInfo.appendChild(projectTitle);

    const projectDescription = document.createElement("div");
    projectDescription.classList.add("project-description");
    projectInfo.appendChild(projectDescription);

    const dateAndPriority = document.createElement("div");
    dateAndPriority.classList.add("date-priority");
    projectInfo.appendChild(dateAndPriority);

}