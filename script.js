document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var message = document.getElementById('message').value;
    var googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

    var formData = new FormData();
    formData.append('entry.796952964', message);

    fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(function(response) {
        document.getElementById('response').innerText = 'Pesan berhasil dikirim!';
    }).catch(function(error) {
        document.getElementById('response').innerText = 'Terjadi kesalahan, silakan coba lagi.';
    });
});

//https://docs.google.com/forms/d/e/1FAIpQLSfktvPofnjMkWrq0q7SarrOjmCkOdG5E8gbWSKa_sdiqWYKsw/viewform?usp=pp_url&entry.796952964