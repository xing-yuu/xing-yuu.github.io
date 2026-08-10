// Keep placeholder resource buttons visible without navigating away.
document.addEventListener('click', function(event) {
  const placeholderLink = event.target.closest('a[aria-disabled="true"]');
  if (placeholderLink) {
    event.preventDefault();
  }
});

// Copy BibTeX to clipboard.
function copyBibTeX() {
  const bibtexElement = document.getElementById('bibtex-code');
  const button = document.querySelector('.copy-bibtex-btn');
  const copyText = button.querySelector('.copy-text');

  if (!bibtexElement) return;

  const showCopiedState = function() {
    button.classList.add('copied');
    copyText.textContent = 'Copied!';
    setTimeout(function() {
      button.classList.remove('copied');
      copyText.textContent = 'Copy';
    }, 2000);
  };

  navigator.clipboard.writeText(bibtexElement.textContent).then(showCopiedState).catch(function() {
    const textArea = document.createElement('textarea');
    textArea.value = bibtexElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showCopiedState();
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (scrollButton) {
    scrollButton.classList.toggle('visible', window.pageYOffset > 300);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  if (window.bulmaCarousel) {
    bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
  }
});
