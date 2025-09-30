const { sendEmail } = require('./mailer');

// Ejemplo de uso para enviar un correo de prueba
async function enviarCorreoPrueba() {
  try {
    const mailOptions = {
      from: 'devsoportectpga@gmail.com', // Correo remitente
      to: 'diegoguerrapi123@gmail.com', // Cambia esto por el correo del destinatario
      subject: 'Correo de prueba desde Nodemailer',
      text: 'Este es un correo de prueba enviado desde Nodemailer',
      html: '<h1>Correo de prueba</h1><p>Este es un <b>correo de prueba</b> enviado desde <i>Nodemailer</i>.</p>',
      // Ejemplo de cómo adjuntar archivos (descomenta si necesitas usar adjuntos)
      /*
      attachments: [
        {
          filename: 'archivo.txt',
          content: 'Contenido del archivo de texto'
        }
      ]
      */
    };

    const resultado = await sendEmail(mailOptions);
    console.log('Correo enviado exitosamente:', resultado.messageId);
  } catch (error) {
    console.error('Error al enviar el correo de prueba:', error);
  }
}

// Ejecutar la función de ejemplo
enviarCorreoPrueba();