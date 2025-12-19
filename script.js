function showDetail(id) {
  const all = document.querySelectorAll('.detail');
  all.forEach(d => d.style.display = 'none');

  const selected = document.getElementById(id);
  selected.style.display = 'block';
  selected.scrollIntoView({ behavior: 'smooth' });
}
