// variable

let name = document.querySelector('.name');
let position = document.querySelector('.position');
let tel = document.querySelector('.tel');
let email = document.querySelector('.email');
const btn = document.querySelector('button');

// events
btn.addEventListener('click', createEmail);

//function

function createEmail(){
    workers.forEach(worker => {
        name.innerText = worker.imie;
        position.innerText = worker.nazwisko;
        tel.innerText = worker.tel;
        email.innerText = worker.email;
        let body = document.querySelector('html');
        let blob = new Blob([body.innerHTML], {type: "text/plain"});
        downloadFile(blob, "hello.html");

        function downloadFile(blob, filename){
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
        }
    });
} 



