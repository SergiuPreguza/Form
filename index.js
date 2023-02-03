function myFunction () {
    document.getElementById('button').classList.toggle('event');
    document.getElementById('dropdown').style.display = 'flex';
    fetch ('https://meowfacts.herokuapp.com/?count=3')
        .then (res => {
            if (!res.ok) {
                return;
            } else {
                return res.json();
            };
        })
        .then (data => {
            document.getElementById('dropdown-content').textContent = data.data;
        })
};
