document.getElementById("randomForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let n = parseInt(document.getElementById("numInput").value);
    if (isNaN(n) || n <= 0) {
        n = 10; // Valor por defecto si no es un número válido
    }
    
    let menores50 = 0;
    let mayoresIguales50 = 0;
    
    for (let i = 0; i < n; i++) {
        let numero = Math.floor(Math.random() * 100);
        if (numero < 50) {
            menores50++;
        } else {
            mayoresIguales50++;
        }
    }
    
    let porcentajeMenores = ((menores50 / n) * 100).toFixed(2);
    let porcentajeMayores = ((mayoresIguales50 / n) * 100).toFixed(2);
    
    document.getElementById("result").innerHTML = `
        <p><strong>Total de números generados:</strong> ${n}</p>
        <p><strong>Porcentaje de números menores que 50:</strong> ${porcentajeMenores}%</p>
        <p><strong>Porcentaje de números mayores o iguales a 50:</strong> ${porcentajeMayores}%</p>
    `;
});
