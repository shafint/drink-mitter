

const liter_count = document.querySelector("#liter_count");
const parsentTaig = document.querySelector("#parsentTaig");
const single_glases = document.querySelectorAll(".single_glases");


//convertpart
var litterNum;
litterNum = Number(0);
liter_count.innerHTML = `${litterNum}L`
let litterParsentTage;
litterParsentTage = Number(0);
parsentTaig.innerHTML = `${litterParsentTage}%`;



//math part
let litern2 = 2;
let litterml = Number(litern2 / 8);
let litterParsent = 100;
let mililiter = 2000;
let single_glasesValue = mililiter / 8;

//letter_parsentage
var heightddd;
heightddd = Number(0);



//Main Engine
single_glases.forEach((value) => {
    value.addEventListener("click", () => {

        try {
            const workPart = () => {
                value.style = "background:#6BB3F9;color:#fff";
                var dd = litterNum += litterml; //liter
                var hh = heightddd += 12.5; //height
                var pp = litterParsentTage += 12.5;
                if (hh < 100) {
                    liter_count.innerHTML = `${dd}L` //liter
                    document.querySelector(".liter_parsent").style = `height:${hh}%`; //height
                    parsentTaig.innerHTML = `${pp}%`; //parsent
                }else {
                    liter_count.innerHTML = `${litern2}L`
                    parsentTaig.innerHTML = `100%`; //parsent
                    document.querySelector(".liter_parsent").style = `height:100%`; //height
                    document.querySelector(".rem").style = "display:none";
                    document.querySelector("#dds").style = "display:none";
                }
            };
            workPart();

        } catch (err) {
            console.log(err);
        }

    })
})
