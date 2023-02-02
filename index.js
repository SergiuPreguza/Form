function myFunction () {
    document.getElementById('button').classList.toggle('event');
    document.getElementById('dropdown').style.display = 'flex';
    document.getElementById('dropdown-content').textContent = document.getElementById('input').value;
};