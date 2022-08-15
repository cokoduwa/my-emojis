
const emojiContainer = document.getElementById("emoji-container")
const myEmojis = ["👩🏾‍💻" , "👨‍👩‍👧", "🍫", "🌴"]
const pushBtn = document.getElementById("push-btn")
const emojiInput = document.getElementById("emoji-input")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function sortEmojis(){
    emojiContainer.innerHTML = ""
    for (let i = 0; i<myEmojis.length; i++){
        const emoji = document.createElement('span')  
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

sortEmojis()

// for (let i = 0; i<myEmojis.length; i++){
//     //emojiContainer.innerHTML = "<span>" + myEmojis[i] + "</span>"  this only displays the last emoji
//     const emoji = document.createElement('span')  
//     emoji.textContent = myEmojis[i]
//     emojiContainer.append(emoji)       
// }

pushBtn.addEventListener("click", function(){
    //const emojiInput = document.getElementById("emoji-input")
    if(emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        sortEmojis()
    }  
})

unshiftBtn.addEventListener("click", function (){
    if(emojiInput.value){
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        sortEmojis()
    }

})

popBtn.addEventListener("click", function(){
    myEmojis.pop(emojiInput.value)
    emojiInput.value = ""
    sortEmojis()
})

shiftBtn.addEventListener("click", function(){
    myEmojis.shift(emojiInput.value)
    emojiInput.value = ""
    sortEmojis()
})