const fortuneBtn = document.getElementById("fortune-btn")

const options = {
    time: [
        'Today',
        'Tomorrow',
        'This week',
        'This month',
        'This year'
    ],
    event: [
        'you will be on a boat',
        'you will see a dog',
        'you will be at a carnival',
        'you will be minding your own business',
        'you will be going to the store'
    ],
    resolution: [
        'your head will explode',
        'you will be accosted by a bowl of chili',
        'you will follow the money and stop being one of the sheeple',
        'you will get run over by stampeding hari krishnas',
        'you will win a lot of money and the rights to the island of New Guinea',
    ],
}

const displayFortune = document.getElementById("fortune")

fortuneBtn.addEventListener('click', () => {
    const time = getMessage('time')
    const event = getMessage('event')
    const resolution = getMessage('resolution')
    displayFortune.innerHTML = `${time}, ${event}, and ${resolution}`
})

const getMessage = section => {
    return options[section][Math.floor(Math.random() * options[section].length)]
}

