let currMoleTile;
let currPlantTile;
let score = 0;
let gameover = false; 


window.onload = function()
{
    setGame();
}
function setGame()
{
    //set up the grid for the game board in html
    for(let i=0; i<9; i++)//i goes from 0 to 8,stops at 9
    //<div id="0.8"></div>
    {
            let tile=document.createElement("div");
            tile.id = i.toString();
            tile.addEventListener("click",selectTile);
            document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole,1000);
    setInterval(setPlant,2000);
    
} 

function setMole()
{
if (gameover)
    {
        return;
    }

    if (currMoleTile)
        {
            currMoleTile.innerHTML = "";
        }


    let mole = document.createElement("img");
    mole.src = "./montymole.png ";

    let num = getRandomTile();
    
    if(currPlantTile && currPlantTile.id == num)
        {
            return;
        }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
function getRandomTile()
{
    //math.floor returns 0-1 and math.floor rounds up the value to an integer and returns before  9
    let num = Math.floor(Math.random()*9);
    return num.toString();
}
function setPlant()
{
    if (gameover)
        {
            return;
        }
    if(currPlantTile)
        {
            currPlantTile.innerHTML = "";
        }
    let plant = document.createElement("img");
    plant.src = "./PiranhaPlant.webp";
     
    let num=getRandomTile();

    if(currMoleTile && currMoleTile.id == num)
        {
            return;
        }

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile()
{
    if (gameover)
        {
            return;
        }
    if(this == currMoleTile)
        {
            score += 10;
            document.getElementById("score").innerText = score.toString();
        }
    else if (this == currPlantTile)
        {
          document.getElementById("score").innerText = "GAME OVER " + score.toString();  
          gameover = true;
        }    
}