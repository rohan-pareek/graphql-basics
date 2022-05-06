const result = document.getElementById("greeting");

result.textContent = 'loading...';

async function fetchGreeting() {
    const response = await fetch('http://localhost:9000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
                query {
                    greeting
                }
            `,
        }),
    });

    const body = await response.json();

    const greeting = body.data.greeting;

    return greeting;
}

fetchGreeting()
.then(data => {
    result.textContent = data;
})
