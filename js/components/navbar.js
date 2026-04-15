fetch('/portfolio/components/navbar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('nav').innerHTML = html;
  });
