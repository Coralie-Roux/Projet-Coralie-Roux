fetch('./data/data.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('animals-container');

    data.forEach(animal => {
      const div = document.createElement('div');
      div.classList.add('animal');

      const contentDiv = document.createElement('div');
      contentDiv.classList.add('animal-content');

      const h3 = document.createElement('h3');
      h3.textContent = animal.h3;
      contentDiv.appendChild(h3);

      const ul = document.createElement('ul');
      animal.liste.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      contentDiv.appendChild(ul);

      div.appendChild(contentDiv);

      const img = document.createElement('img');
      img.src = animal.img;
      img.alt = animal.h3;
      div.appendChild(img);

      container.appendChild(div);
    });
  })
  .catch(err => console.error('Erreur de chargement JSON :', err));