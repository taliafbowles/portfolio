    // theme switcher //
    const swatches = document.querySelectorAll('.swatch');

        // Apply saved theme on load, default to grey
        const savedTheme = localStorage.getItem('theme') || 'default';
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Set the matching swatch as active on load
        swatches.forEach(s => {
        if (s.dataset.setTheme === savedTheme) s.classList.add('active');
        });

        swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const theme = swatch.dataset.setTheme;

            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);

            swatches.forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
        });
        });

    // randomize rotation of index page images //
    document.querySelectorAll('.index-grid-child').forEach(img => {
    const deg = (Math.random() * 8 - 4).toFixed(2);
    img.style.setProperty('--rotation', `${deg}deg`);
    });

    // randomize rotation of case study images //
    document.querySelectorAll('.img-caption-container').forEach(img => {
    const deg = (Math.random() * 6 - 3).toFixed(2);
    img.style.setProperty('--rotation', `${deg}deg`);
    });

    // theme switcher swatches //
    swatches.forEach(swatch => {
    const theme = swatch.dataset.setTheme;

    const temp = document.createElement('div');
    temp.setAttribute('data-theme', theme);
    temp.style.display = 'none';
    document.body.appendChild(temp);

    const color = getComputedStyle(temp).getPropertyValue('--color-bg-select').trim();
    document.body.removeChild(temp);

    swatch.style.background = color;
    });