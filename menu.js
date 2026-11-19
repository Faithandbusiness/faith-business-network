(() => {
  const menuButton = document.getElementById('menu-button');
  const navigation = document.getElementById('navigation');

  if (!menuButton || !navigation) return;

  // Voeg Galerij toe aan het navigatiemenu.
  const galleryAlreadyExists =
    navigation.querySelector('a[href="galerij.html"]');

  if (!galleryAlreadyExists) {
    const galleryLink = document.createElement('a');

    galleryLink.href = 'galerij.html';
    galleryLink.textContent = 'Galerij';

    const mediaMenu =
      navigation.querySelector('.has-submenu');

    if (mediaMenu) {
      navigation.insertBefore(galleryLink, mediaMenu);
    } else {
      navigation.append(galleryLink);
    }
  }

  // Markeer Galerij wanneer deze pagina geopend is.
  if (
    window.location.pathname.endsWith('/galerij.html')
  ) {
    const galleryLink =
      navigation.querySelector('a[href="galerij.html"]');

    if (galleryLink) {
      navigation
        .querySelectorAll('a.active')
        .forEach(link => {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        });

      galleryLink.classList.add('active');
      galleryLink.setAttribute('aria-current', 'page');
    }
  }

  function closeMenu() {
    navigation.classList.remove('is-open');

    menuButton.setAttribute('aria-expanded', 'false');

    menuButton.textContent = 'Menu';
  }

  menuButton.addEventListener('click', () => {
    const isOpen =
      navigation.classList.toggle('is-open');

    menuButton.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    menuButton.textContent =
      isOpen ? 'Sluiten' : 'Menu';
  });

  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (
      event.key === 'Escape' &&
      navigation.classList.contains('is-open')
    ) {
      closeMenu();
      menuButton.focus();
    }
  });

  window
    .matchMedia('(min-width: 721px)')
    .addEventListener('change', event => {
      if (event.matches) {
        closeMenu();
      }
    });
})();
