let copyCount = 0;


const duplicateNumber = number => {
    copyCount++;
    const input = document.createElement('input');
    input.value = number;
    document.body.appendChild(input);
    input.select();
    try {
        document.execCommand('copy');
        alert(`Successfully copied ${number}!`);
        document.getElementById('copy-record').textContent = `${copyCount} Copy`;
    } catch (err) {
        alert('Copy operation failed.');
    }
    document.body.removeChild(input);
};