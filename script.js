document.addEventListener('mousemove', (event) => {
    const horizontalLine = document.getElementById('horizontal-line');
    const verticalLine = document.getElementById('vertical-line');
    const customCursor = document.getElementById('custom-cursor');

    horizontalLine.style.top = `${event.clientY}px`;
    verticalLine.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
    customCursor.style.left = `${event.clientX}px`;
});
