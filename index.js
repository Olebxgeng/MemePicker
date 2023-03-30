import { catsData } from '/data.js'
const emotionsRadio = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")
const gifsOnly = document.getElementById("gifs-only-option")

emotionsRadio.addEventListener('change', highlightCheckedOption)
getImageBtn.addEventListener('click', getMatchingCatsArray)


function highlightCheckedOption(e){
    const radios = document.getElementsByClassName("radio")
    for(let radio of radios){
        radio.classList.remove("highlight")
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray(){
    
    if (document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnly.checked

        const matchingCatsArray = catsData.filter(function(cat){
            if(isGif){
                return emotionTags.includes(selectedEmotion) && cat.isGif
            }else{
                return emotionTags.includes(selectedEmotion)
            }
        })
        return matchingCatsArray
    }
    
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
}

function renderCat(){
    
}

function getEmotionsArray(cats){
    const emotionsArray = []
    for(let cat of cats){
        for(let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionRadios(cats){
    let radioItems = ''
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += 
        `<div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
                >
        </div>`    
    }
    emotionsRadio.innerHTML = radioItems
}

renderEmotionRadios(catsData)