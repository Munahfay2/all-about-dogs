document.addEventListener('DOMContentLoaded', () => {
  const breeds = [
      
  ];

  const breedList = document.getElementById('breed-list');

  breeds.forEach(breed => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `${breed.toLowerCase().replace(' ', '_')}.html`;
      a.textContent = breed;
      li.appendChild(a);
      breedList.appendChild(li);
  });

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      alert(`Thank you, ${name}! Your message has been sent.`);

      // Clear the form
      contactForm.reset();
  });
});

