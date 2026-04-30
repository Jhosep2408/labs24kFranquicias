import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json();

    // Validar campos requeridos
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    // Configurar el transportador de correo (SMTP)
    // Para producción, se deben usar variables de entorno
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true para port 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Contraseña de aplicación si es Gmail
      },
    });

    // Configurar el correo a enviar
    const mailOptions = {
      from: `"${name}" <${email}>`, // Remitente
      to: 'info@labs24kfranquicias.com',       // Destinatario
      replyTo: email,
      subject: `Nuevo Lead de Contacto - Labs 24K: ${company || name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1E40AF;">Nuevo Mensaje desde la Web Labs 24K</h2>
          <hr />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
          <hr />
          <h3 style="color: #1E40AF;">Mensaje:</h3>
          <p style="white-space: pre-wrap; background-color: #f8fafc; padding: 15px; border-left: 4px solid #3B82F6;">${message}</p>
        </div>
      `,
    };

    // Si no hay variables de entorno configuradas, simulamos éxito (para modo dev)
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("⚠️ Nodemailer: Credenciales SMTP no configuradas. Simulando envío exitoso para desarrollo.");
      console.log("Mock Email Data:", { name, email, phone, company, message });
      
      // Simulamos latencia de red
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      return NextResponse.json(
        { message: 'Mensaje simulado enviado correctamente (Modo Dev)' },
        { status: 200 }
      );
    }

    // Enviar correo real
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor al enviar el correo.' },
      { status: 500 }
    );
  }
}
