// menu mobile toggle (works across pages)
document.addEventListener('DOMContentLoaded', function(){
  const toggles = document.querySelectorAll('.menu-toggle');
  toggles.forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.nav-menu').forEach(menu => menu.classList.toggle('active'));
      t.classList.toggle('toggle');
    });
  });

  // simple form submit handling for pages using formspree
  const forms = document.querySelectorAll('form[action^="https://formspree.io"]');
  forms.forEach(f => {
    f.addEventListener('submit', function(e){
      e.preventDefault();
      const url = f.action;
      fetch(url, { method:'POST', body: new FormData(f), headers:{'Accept':'application/json'} })
        .then(r => {
          if(r.ok){
            const confirm = f.parentElement.querySelector('#confirmation') || f.parentElement.querySelector('#contactConfirm') || null;
            if(confirm) confirm.style.display = 'block';
            f.reset();
          } else {
            alert('Erreur envoi formulaire — réessayez.');
          }
        })
        .catch(()=> alert('Erreur réseau — réessayez.'));
    });
  });
});
