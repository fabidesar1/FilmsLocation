async function getData() {
    const url = 'https://data.sfgov.org/resource/yitu-d5am.json';
    try{
        const response = await fetch(url)
        const json = await response.json()
        const ul = document.getElementById('myUL');

        json.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = item.title;
            a.href = "#";
            a.addEventListener('click', () => {
                const location = item.locations || "San Francisco";


                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

                window.open(mapsUrl, '_blank');
            });
            li.appendChild(a);
            ul.appendChild(li);
        });
    }catch(error){
        console.log(error)
    }
}

function filterFunction() {
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("myUL");
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];
        const txtValue = a.textContent || a.innerText;
        li[i].style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
    }
}



getData()