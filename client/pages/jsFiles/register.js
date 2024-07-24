async function register(){
    const email = document.getElementById('email').value
    const pw = document.getElementById('pw').value
    try{
        const res = await axios.post('http://localhost:4000/register',{
            email: email,
            pw: pw,
            headers: {
                "Content-Type": "application/json"
            }
        })
        alert('You can login now!');
    }
    catch (e) {
        alert('Registration Failed. Please try again later');
    }

}