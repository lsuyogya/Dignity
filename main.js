const truncateWrappers = document.querySelectorAll('.truncateWrapper');

truncateWrappers.forEach((truncateWrapper) => {
  const truncateEl = truncateWrapper.querySelector('.truncate');
  const truncateInnerEl = truncateWrapper.querySelector('.truncate__inner');
  const truncateRect = truncateEl.getBoundingClientRect();
  let truncateInnerRect = truncateInnerEl.getBoundingClientRect();
  const btn = truncateWrapper.querySelector('button');
  truncateEl.style.setProperty('--truncate-height', `${truncateRect.height}px`);

  btn.addEventListener('click', () => {
    if (truncateEl.classList.contains('truncate--expanded')) {
      close();
    } else {
      open();
    }
  });

  function open() {
    const btnSpan = btn.querySelector('span');
    btnSpan.innerText = btn.getAttribute('data-expandedtxt');
    truncateEl.classList.remove('truncate--line-clamped');
    window.requestAnimationFrame(() => {
      truncateInnerRect = truncateInnerEl.getBoundingClientRect();
      truncateEl.style.setProperty(
        '--truncate-height-expanded',
        `${truncateInnerRect.height}px`
      );
      truncateEl.classList.add('truncate--expanded');
    });
  }

  function close() {
    const btnSpan = btn.querySelector('span');
    btnSpan.innerText = btn.getAttribute('data-initialtxt');
    truncateEl.classList.remove('truncate--expanded');
    setTimeout(() => {
      truncateEl.classList.add('truncate--line-clamped');
    }, 300);
  }

  // Resize event listener to recalculate heights
  window.addEventListener('resize', () => {
    // Recalculate heights when the window is resized
    truncateRect = truncateEl.getBoundingClientRect();
    truncateInnerRect = truncateInnerEl.getBoundingClientRect();

    // Update the CSS properties based on the new sizes
    truncateEl.style.setProperty(
      '--truncate-height',
      `${truncateRect.height}px`
    );

    if (truncateEl.classList.contains('truncate--expanded')) {
      truncateEl.style.setProperty(
        '--truncate-height-expanded',
        `${truncateInnerRect.height}px`
      );
    }
  });
});
