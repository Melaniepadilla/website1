panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventlistener('click', () => {
        panel.classList.add('active')
    })
})
