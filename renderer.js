const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'

    const information = document.getElementById('info')
    information.innerText = `Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), Electron (v${versions.electron()}), Response: ${response}`
}

func()