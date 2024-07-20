async function register(){
    const email = document.getElementById('email').value
    const pw = document.getElementById('pw').value
    const res = await axios.post('http://localhost:4000/test',{
        email: email,
        pw: pw,
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log(res)
}