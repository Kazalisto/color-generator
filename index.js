const btn = document.getElementById('btn')
const colors = document.getElementById('colors')
btn.addEventListener('click', function(e){
    e.preventDefault()
    

    const hexColor = document.getElementById('seed-color')
    const mode = document.getElementById('mode')
    console.log(hexColor.value, mode.value)

    function renderColors(data){
        const html = data.colors.map(function(color){
            return `
                <div class="colorsContainer"
                    <div class="colorRect" style="background-color:${color.hex.value}">${color.hex.value}</div>
                </div>
            `
        }).join('')

        colors.innerHTML = html

    }

    fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor.value.slice(1)}&mode=${mode.value}&count=5`, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(res => res.json())
        .then (data => {
            console.log(data)
            renderColors(data)
        })
})

