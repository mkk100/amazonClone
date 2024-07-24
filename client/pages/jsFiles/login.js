async function login(){
    const email = document.getElementById('email').value
    const pw = document.getElementById('pw').value
    try{
        const res = await axios.post('http://localhost:4000/login',{
            email: email,
            pw: pw,
            headers: {
                "Content-Type": "application/json"
            }
        }, {withCredentials: true});
        alert('Logged in!');
    }
    catch (e) {
        alert('Log in Failed.');
    }

}