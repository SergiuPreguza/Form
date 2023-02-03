function myFunction () {
    document.getElementById('button').classList.toggle('event');
    document.getElementById('dropdown').style.display = 'block';
    document.getElementById('dropdown').innerHTML="";
    fetch ('https://meowfacts.herokuapp.com/?count=3')
        .then (res => {
            if (!res.ok) {
                return;
            } else {
                return res.json();
            };
        })
        .then (data => {
            var ul = document.getElementById('dropdown');
            for (let i = 0; i < data.data.length; i++) {
                var li = document.createElement('li');
                li.classList.add('dropdown-content');
                var text = document.createTextNode(data.data[i]);
                li.appendChild(text);
                ul.appendChild(li);
            }
        })
};
