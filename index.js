function fetchMusic (){
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",{
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a5ba4deb6fmshcaafc9e5a20ca8ep14c9e3jsn55b289fd03fa',
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
          }    

    }).then((response)=>{
        console.log(response)
        return response.json()
    }).then(musics => {
        console.log(musics);
        displayTrack(musics.data)
    })
    .catch(error =>{
        console.error(error)
    })

    console.log("Displaying tracklists...")
   
}

function displayTrack (musics){
    //targeting the parent container
    const music_container = document.querySelector(".music_container ul")
    for (music of musics){
        music_container.innerHTML += 
        `<li class="list-group-item">${music.title}
        <i class="fas fa-play"></i>
        </li>`
    }
    
    // music_container.innerHTML
}

function countSongs(){
    let totalNumberOfSongs = 0
    //target track lists
    getTrackLists = document.querySelectorAll(".music_container li")
    getCountSongButton = document.querySelector(".countSongButton")
    for (let list=0; list<getTrackLists.length; list++){
        totalNumberOfSongs += 1
    }
    // return totalNumberOfSongs
    getCountSongButton.value = totalNumberOfSongs


   
}



// function displaySong(){
//     //target count Song button
//  getCountSongButton = document.querySelector(".countSongButton")
//  getCountSongButton.value = totalNumberOfSongs
// }
 


