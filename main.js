console.log('Obliviate!');

const showOnPage = (toShow, divId) => {
    document.getElementById(divId).innerHTML += toShow; // this adds to the inner html rather than replacing it
}

const showForm = (e) => {
    document.getElementById('jumbotron-holder').innerHTML = '';
    const sortForm = `
    <div class="container">
        <form class="form-inline card">
            <h3 class="col-12">Enter Student's Name</h3>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Student:</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control col-sm-12" id="student-name" placeholder="Neville Chamberlain">
                </div>
                <button id="sort-button" type="button" class="btn btn-primary mb-2">Sort!</button>
            </div>
        </form>
    </div>
    `
    if (e.target.id == 'start-button') {
        showOnPage(sortForm, 'form-holder')
    }
}


const sort = () => {
    const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    return houses[Math.floor(Math.random() * 4)];
}

const makeStudentCard = (name) => {
    let studentHouse = sort();
    
    let cardString = '';
    cardString += `
    <div id="${name.replace(/ /g, '-')}" class="col-sm-4">
        <div class="card text-center">
            <div class="card-body">
                <h3 class="card-title">${name}</h3>
                <p class="card-text">${studentHouse}</p>
                <button id="expel-${name.replace(/ /g, '-')}" type="button" class="btn btn-primary">Expel!</button>
            </div>
        </div>
    </div>
    `;
    showOnPage(cardString, 'card-holder')
}

const sortStudent = () => {
    if (document.querySelector('input').value) {
        let studentName = document.querySelector('input').value;
        if (document.getElementById(`${studentName.replace(/ /g, '-')}`)) {
            alert('A student by that name has already been sorted.');
        } else {
            makeStudentCard(studentName);
        }
    } else {
        alert('Please enter the student\'s name.');
    }
    document.querySelector('input').value = '';
}

const clickSort = (event) => {
    if (event.target.id == 'sort-button') {
        sortStudent();
    }
}

const pressEnter = (event) => {
    if (event.which == 13) {
        event.preventDefault();
        sortStudent();
    }
}


const expelStudent = (event) => {
    if (event.target.id.substring(0, 5) == 'expel') {
        const expelled = document.getElementById(event.target.id.substring(6));
        expelled.parentNode.removeChild(expelled);
    }
}

const init = () => {
    document.getElementById('start-button').addEventListener('click', showForm);
    document.querySelector('#hold-all').addEventListener('click', clickSort);
    document.querySelector('#form-holder').addEventListener('keypress', pressEnter);
    document.querySelector('#card-holder').addEventListener('click', expelStudent);
}

init();
