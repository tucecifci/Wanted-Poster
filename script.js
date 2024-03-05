document.getElementById('buton').addEventListener('click', function () {
    var x = document.getElementById('x');
    var container = document.getElementById('container');
    var ses = document.getElementById('ses');
    x.style.display = 'flex';
    container.style.filter = 'grayscale(100%)';
    ses.play();
})