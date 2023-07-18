const nodeMailer = require('nodemailer');

// NODE MAILER FUNCTION
const Mail = async (from, to, subject, data) => {

    // Set email body
    const html = `
        <h1>Dados do Contato</h1>
        <p>Nome: ${data.name}</p>
        <p>Telefone: ${data.phone}</p>
        <p>CPF: ${data.cpf}</p>
        <p>Email: ${data.email}</p>
        <p>Tipo: ${data.pessoa}</p>
        <p>Estado:  ${data.uf}</p>
        <p>Cidade: ${data.city}</p>
    `

    // Outgoing email config
    const transporter = nodeMailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS.replace('@', '#'),
        }
    })

    // Send email
    const info = await transporter.sendMail({
        from: from,
        to: to,
        subject: subject,
        html: html, 
    }).then(() => {
        console.log("deu certo");
    }).catch((err) => {
        console.log(err);
    })

    console.log("ENTROU AQUI")

}


module.exports = {
    Mail,
}