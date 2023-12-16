export function Project() {
    const titleValue = document.getElementById('text').value;
    const descriptionValue = document.getElementById('description').value;
    const dateValue = document.getElementById('date').value;

    function Project(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
    }

    const makeProject = new Project(titleValue, descriptionValue, dateValue);
    console.log(makeProject.date);
}






