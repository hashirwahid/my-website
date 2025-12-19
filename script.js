function showDetail(id) {
  const details = document.querySelectorAll('.detail');
  details.forEach(d => d.style.display = 'none');

  const active = document.getElementById(id);
  active.style.display = 'block';
  active.scrollIntoView({ behavior: 'smooth' });
}
