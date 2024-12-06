document.getElementById('projectForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value;
    const sector = document.getElementById('sector').value;
    const objetivo = document.getElementById('objetivo').value;
    const duracion = document.getElementById('duracion').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const presupuesto = document.getElementById('presupuesto').value;

    // Generar PDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    pdf.setFontSize(12);
    pdf.text("Evaluación de Proyecto Sustentable", 10, 10);
    pdf.text(`Nombre del proyecto: ${nombre}`, 10, 20);
    pdf.text(`Sector o industria: ${sector}`, 10, 30);
    pdf.text(`Objetivo: ${objetivo}`, 10, 40);
    pdf.text(`Duración estimada: ${duracion}`, 10, 50);
    pdf.text(`Ubicación geográfica: ${ubicacion}`, 10, 60);
    pdf.text(`Presupuesto inicial: $${presupuesto}`, 10, 70);

    // Descargar PDF
    pdf.save('evaluacion_proyecto.pdf');
});



