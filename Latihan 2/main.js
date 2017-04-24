function onKeyUp() {
    // input akan menerima sebuah object HTML Element
    let input = document.getElementById("myInput");
    let nama = input.value;
    // Output akan menerima sebuah object HTML Element
    let output = document.getElementById("myOutput");
    // memberikan nilai template string kedalam properties output object
    output.innerText = `Halo ${nama},
  jumlah karakter dalam nama anda adalah ${nama.trim().length}!`;
}
