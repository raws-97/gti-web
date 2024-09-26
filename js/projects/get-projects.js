async function getProjects() {
    try {

        const pathname = window.location.pathname
        const data = await fetchDataProject();
        
        const latestProjectElements = createLatestListElements(data)
        renderList(latestProjectElements)

        if(pathname == "/project.html"){
            const projectElements = createTableElements(data);
            renderTable(projectElements);
        }
        
    } catch (error) {
        console.error(error);
    }
}

async function fetchDataProject() {
    const url = `${API_URL}?token=${API_TOKEN}&db=projects`;
    return await httpGetPromises(url);
}

function createTableElements(data) {
    return data.data.map((projectData) => createTableRowElement(projectData));
}

function createLatestListElements(data) {
    return data.data.slice(0, 3).map((projectData) => createListRowElement(projectData));
}

function createTableRowElement(projectData) {
    return `<li class="table-row">
    <div class="col col-1" data-label="Client">${projectData.client}</div>
    <div class="col col-2" data-label="Project">${projectData.project}</div>
    <div class="col col-3" data-label="Year">${projectData.start_year} - ${projectData.end_year}</div>
    </li>`
}

function createListRowElement(projectData) {
    return `<div class="block-21 mb-4 d-flex">
            <div class="text">
            <h3 class="heading"><a href="project.html">${projectData.project}</a></h3>
            <div class="meta">
            <div><span></span> ${projectData.client}</div>
            <div><span class="icon-calendar"></span> ${projectData.end_year}</div>
            </div>
            </div>
        </div>`
}

function renderTable(projectElement) {
    document.getElementById("project-table").innerHTML = projectElement.join('');
}

function renderList(projectElement) {
    document.getElementById("latest-project-list").innerHTML = projectElement.join('');
}
