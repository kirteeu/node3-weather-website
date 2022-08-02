console.log("client side script is loaded");

fetch('https://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    });
}
).catch((error) => {
    console.log(error);
}
);

const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


const weatherForm = document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    const query = document.querySelector('input').value;
    fetch('/weather?address=' + query).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                messageOne.textContent = data.error;

            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;

                console.log(data.location);
                console.log(data.forecast);
            }
        });
    }
    ).catch((error) => {
        console.log(error);
    });
});