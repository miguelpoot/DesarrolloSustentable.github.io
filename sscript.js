

document.getElementById('carbonForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar recarga de la página

    // Obtener datos del formulario
    const producto = document.getElementById('producto').value;
    const duracion = parseFloat(document.getElementById('duracion').value);
    const actividad1 = document.getElementById('actividad1').value;
    const actividad2 = document.getElementById('actividad2').value;
    const actividad3 = document.getElementById('actividad3').value;
    const electricidad1 = parseFloat(document.getElementById('electricidad1').value);

    // Cálculo de huella de carbono (ejemplo simple: electricidad x factor de conversión)
    const factorConversion = 0.233; // kgCO2e por kWh
    const huellaCarbono = (electricidad1 * factorConversion).toFixed(2);

    // Mostrar resultado en la página
    const resultadoTexto = `
        Producto: ${producto} <br>
        Duración: ${duracion} meses <br>
        Huella de Carbono: ${huellaCarbono} kgCO2e
    `;
    document.getElementById('resultadoTexto').innerHTML = resultadoTexto;

    // Generar PDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    pdf.setFontSize(12);
    pdf.text("Calculadora de Huella de Carbono", 10, 10);
    pdf.text(`Producto: ${producto}`, 10, 20);
    pdf.text(`Duración del proyecto: ${duracion} meses`, 10, 30);
    pdf.text(`Actividad 1: ${actividad1}`, 10, 40);
    pdf.text(`Actividad 2: ${actividad2}`, 10, 50);
    pdf.text(`Actividad 3: ${actividad3}`, 10, 60);
    pdf.text(`Consumo de electricidad: ${electricidad1} kWh`, 10, 70);
    pdf.text(`Huella de Carbono: ${huellaCarbono} kgCO2e`, 10, 80);

    // Descargar PDF
    pdf.save('huella_carbono.pdf');
});

