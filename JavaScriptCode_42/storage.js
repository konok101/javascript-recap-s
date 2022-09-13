//localStorage.setItem('userId', 83453468);

const qlocalStorage = () => {
    console.log('asas')
    const id = document.getElementById('storage-id');
    const a = id.value;
    const value = document.getElementById('storage-value');
    const b = value.value;
    if (a && b) {
        localStorage.setItem(a, b);
    }

    id.value = '';
    value.value = '';

}