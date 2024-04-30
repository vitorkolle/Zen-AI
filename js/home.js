'use strict' 
const btnInfo = document.getElementById('enviar')

const consultarGemini = (question) =>{

   // const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle

    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]

    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    }

    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => {
        const respostaTextIa = data.candidates[0].content.parts[0].text
        respostaIa(respostaTextIa)
        respostaIaIngles(respostaTextIa)
    })
    .catch(error => console.error('Error: ', error));

}

const respostaIa = (respostaTextIa) => {
    const textAreaPt = document.getElementById('port')
    textAreaPt.value = respostaTextIa
}

const respostaIaIngles = async (respostaIa) => {
    const textAreaIg = document.getElementById('ing')

    const respostaIaFormatada = String(respostaIa).substring(500, 0)
    console.log(respostaIaFormatada)

    const url = `https://api.mymemory.translated.net/get?q=${respostaIaFormatada}!&langpair=pt|eng`
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.responseData.translatedText)
    } catch (error) {
        console.error(error);
    }    
}

btnInfo.addEventListener('click', () => {
    const question = document.getElementById('pergunta').value
    consultarGemini(question)
})