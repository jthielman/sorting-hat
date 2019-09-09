console.log('Obliviate!');

const showOnPage = (toShow, divId) => {
    document.getElementById(divId).innerHTML += toShow; // this replaces the inner html rather than adding to it
}

const showForm = (e) => {
    document.getElementById('jumbotron-holder').innerHTML = '';
    const sortForm = `
    <div class="container">
        <form class="form-inline card">
            <h3 class="col-12">Enter Student's Name</h3>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Student:</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control col-sm-10" id="student-name" placeholder="Neville Chamberlain">
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

document.getElementById('start-button').addEventListener('click', showForm);

const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const sort = () => {
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

document.querySelector('#hold-all').addEventListener('click', (event) => {
    let studentName
    if (event.target.id == 'sort-button') {
        if (document.querySelector('input').value) {
            studentName = document.querySelector('input').value;
            makeStudentCard(studentName);
        } else {
            alert('Please enter the student\'s name.');
        }
    }
    // if (event.target.id == 'sort-button') {
    //     makeStudentCard(studentName);
    // };
    document.querySelector('input').value = '';
})

document.querySelector('#card-holder').addEventListener('click', (event) => {
    // blah blah blah
    if (event.target.id.substring(0, 5) == 'expel') {
        console.log(event.target.id);
        const expelled = document.getElementById(event.target.id.substring(6));
        expelled.parentNode.removeChild(expelled);
    }
})
