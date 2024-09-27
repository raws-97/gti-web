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
    return `<div class="col-md-4">
				<div class="mb-4 img justify-content-center align-items-center">
					<center>
						<img src="https://drive.google.com/thumbnail?id=${projectData.image_id}&sz=w800" style="width: 150px;">
					</center>
					<div class="text" style="text-align: center; margin-top: 20px;">
						<p>${projectData.project}</p>
					</div>
				</div>
			  </div>`
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
