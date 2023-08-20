var arr = [{ img:"./assets/images/NFT.png"   },
{ img: "./assets/images/1692515311455.webp" },
{ img: "./assets/images/1692515311471.webp" },{ img: "./assets/images/1692515311486.webp" },
];

function show() {
    var clutter = "";
    arr.forEach(function (elem, i) {
         clutter = clutter + `<div id="card">
         <img id="img1" src="./assets/images/Avtar.png" alt="" />
         <h3>@artist_101</h3>
         <button>Rare</button>
         <img id="img2" src=${elem.img} alt="" />
         <h2>SkyDog 409</h2>
         <h4>#303030</h3>
     </div>`;
    });
    document.querySelector("#cards").innerHTML = clutter;
    //document.querySelector("#cards2").innerHTML = clutter;
};

show();

var arr2 = [{ img:"./assets/images/1692515311440.webp"   },
{ img:"./assets/images/1692515311396.webp"   },{ img:"./assets/images/1692515311410.webp"   },{ img:"./assets/images/1692515311501.jpg"   },
];

function showw() {
    var clutter2 = "";
    arr2.forEach(function (elem, i) {
         clutter2 = clutter2 + `<div id="card2">
         <img id="img1" src="./assets/images/Avtar.png" alt="" />
         <h3>@artist_101</h3>
         <button>Rare</button>
         <img id="img2" src=${elem.img} alt="" />
         <h2>SkyDog409</h2>
         <h4>#303030</h3>
     </div>`;
    });
    document.querySelector("#cards2").innerHTML = clutter2;
    //document.querySelector("#cards2").innerHTML = clutter;
};

showw();



gsap.to("#title h1",{
    x:0,
    opacity:1,
    delay:2,
    duration:3,
});
gsap.to("#detail p",{
    x:0,
    opacity:1,
    delay:2,
    duration:3,
});
gsap.to("#detail #d1",{
    x:0,
    opacity:1,
    delay:2,
    duration:3,
});
