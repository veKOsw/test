new AirDatepicker('#date');


let form = document.forms.form;
let elem = form.elements;
let btn = document.getElementById('sub');
let check = document.getElementById('check');
let add = document.querySelector('.add');

check.onclick = () => {
    if (check.hasAttribute('checked') == false) {
        check.setAttribute('checked', true);
        add.classList.remove('add');

    }
    else {
        check.removeAttribute('checked');
        add.classList.add('add');
    }
}
let data;
btn.onclick = () => {
    if (check.hasAttribute('checked') == false) {
        data = {
            startDate: elem[0].value,
            term: elem[1].value,
            sum: elem[2].value,
            percent: elem[3].value,
            sumAdd: 0
        }
    } else {
        data = {
            startDate: elem[0].value,
            term: elem[1].value,
            sum: elem[2].value,
            percent: elem[3].value,
            sumAdd: elem[5].value
        }
    }

    let json = JSON.stringify(data);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'calc.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json);

    xhr.onload = () => {
        if (xhr.status == 200) {
            let resp = xhr.response;
            if (resp != 0) {
                document.getElementById('out').innerHTML = '&#8381;' + xhr.response;
            }
        }
    }
}



