import express from 'express'

const app = express()
const port = 3000;

app.post('/remove-duplicates/:palavra', (req, res) => {
    const palavra = req.params.palavra
    let palavraSemLetrasDuplicadas = palavra.charAt(0)

    for (let i = 0; i < palavra.length; i++) {
        if (!palavraSemLetrasDuplicadas.includes(palavra.charAt(i))) {
            palavraSemLetrasDuplicadas += palavra.charAt(i)
        }
    }
    
    return res.json(palavraSemLetrasDuplicadas)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})