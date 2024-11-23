const input = document.querySelector('input')
const $qr = document.querySelector('#qr-code')


document.addEventListener('submit', (e) => {
    console.log($qr);
    e.preventDefault()
    const qr = new QRCode($qr, input.value)
    input.value = ''
    // display none main
    document.querySelector('main').style.display = 'none'
    document.querySelector('section').style.display = 'block'

})


// document.querySelector('#download').addEventListener('click', () => {
//     // descargar imagen
//     const link = document.createElement('a')
//     link.download = 'qr-code.png'
//     link.href = document.querySelector('#qr-code img').src
//     link.click()

// })