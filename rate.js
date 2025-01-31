document.getElementById('submitRating').addEventListener('click', function() {
   
    const selectedFilm = document.getElementById('filmSelect').value;
    const rating = document.getElementById('rating').value;
   
   
    if (rating < 1 || rating > 10 || rating === '') {
        document.getElementById('message').innerText = 'Please enter a valid rating between 1 and 10.';
        return;
    }
   
 
    let filmName;
    switch(selectedFilm) {
        case 'sonic':
            filmName = 'Sonic the Hedgehog 3';
            break;
        case 'nosferatu':
            filmName = 'Nosferatu';
            break;
        case 'betterMan':
            filmName = 'Better Man';
            break;
    }
   
    document.getElementById('message').innerText = `You rated "${filmName}" a ${rating} out of 10. Thank you for your feedback!`;
});
