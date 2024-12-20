// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Configure o transportador do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Você pode usar 'Gmail' ou outra, dependendo do serviço que estiver usando
      auth: {
        user: process.env.EMAIL_USER, // Coloque o e-mail no arquivo .env
        pass: process.env.EMAIL_PASS, // Coloque a senha no arquivo .env
      },
    });

    try {
      // Configure os detalhes do e-mail
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Obrigado por se inscrever!',
        text: 'Olá,\n\nObrigado por se inscrever! Estamos felizes em tê-lo conosco.',
      });

      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).json({ message: 'Erro ao enviar o e-mail.' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
