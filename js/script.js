




const playButton = document.getElementById('my-play-button');
playButton.addEventListener('click' , function(){
    let difficultyOption = document.getElementById('difficulty');
    console.log(difficultyOption.value);
    const gridElement = document.getElementById('my-container');
    let boxNumber = 0;
    if(difficultyOption.value == 'facile'){
        boxNumber = 100;
        console.log(boxNumber);
    }else if (difficultyOption.value == 'medio'){
        boxNumber = 81;
        console.log(boxNumber);
    }else{
        boxNumber = 49;
        console.log(boxNumber);
    }
    
    for(let i = 0; i < boxNumber; i++){
        const gridBox = document.createElement('div');
        if(difficultyOption.value == 'facile'){
            gridBox.classList.add('box-facile');
        }else if (difficultyOption.value == 'medio'){
            gridBox.classList.add('box-medio');
        }else{
            gridBox.classList.add('box-difficile');
        }
        gridElement.appendChild(gridBox);
    }
});