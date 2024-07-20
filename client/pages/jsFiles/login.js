
async function login(){
    const email = document.getElementById('email')
    const pw = document.getElementById('pw')
    const res = await fetch('http://localhost:4000/test',{
        method: "POST",
        body: JSON.stringify({email: email, pw: pw})
    })
    console.log(res.json())
}