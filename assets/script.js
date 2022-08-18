var videoEl = $("#videoPlayer");
var wikiEl = $("#wikiText");
var gmDescEl = $("#gameDesc");
var gmTitleEl = $("#gameTitle");
var pltfrm = $("#platform");
var relDt = $("#relDt");



$("#FF1").on("click", FF1);
$("#FF2").on("click", FF2);
$("#FF3").on("click", FF3);
$("#FF4").on("click", FF4);
$("#FF5").on("click", FF5);
$("#FF6").on("click", FF6);
$("#FF7").on("click", FF7);
$("#FF8").on("click", FF8);
$("#FF9").on("click", FF9);
$("#FF10").on("click", FF10);
$("#FF102").on("click", FF102);
$("#FF12").on("click", FF12);
$("#FF13").on("click", FF13);
$("#FF132").on("click", FF132);
$("#FF15").on("click", FF15);
$("#FFBex").on("click", FFBex);

function FF1() {
    var uid = "680fe860-7581-4149-3999-08d6b0a627a3";
    var gameArr = 0;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF2() {
    var uid = "9dcce46c-7779-4096-399a-08d6b0a627a3";
    var gameArr = 1;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF3() {
    var uid = "53da5efb-5925-409b-399b-08d6b0a627a3";
    var gameArr = 2;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF4() {
    var uid = "f4904ca8-8ab7-4e35-399c-08d6b0a627a3";
    var gameArr = 3;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF5() {
    var uid = "d6011f09-3714-4b28-399d-08d6b0a627a3";
    var gameArr = 4;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF6() {
    var uid = "7eb670e8-86bd-4622-399e-08d6b0a627a3";
    var gameArr = 5;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF7() {
    var uid = "9fc1c377-95f1-4a09-399f-08d6b0a627a3";
    var gameArr = 6;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF8() {
    var uid = "96d5ac56-d56b-49f2-39a0-08d6b0a627a3";
    var gameArr = 7;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF9() {
    var uid = "e5c7fa37-0f22-44db-39a1-08d6b0a627a3";
    var gameArr = 8;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF10() {
    var uid = "8332f848-196c-4f5a-39a2-08d6b0a627a3";
    var gameArr = 9;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF102() {
    var uid = "978159df-b726-4fe5-39a3-08d6b0a627a3";
    var gameArr = 10;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF12() {
    var uid = "8e801e49-4f82-4899-39a4-08d6b0a627a3";
    var gameArr = 11;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF13() {
    var uid = "b992a9d4-41ce-4ecf-39a5-08d6b0a627a3";
    var gameArr = 12;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF132() {
    var uid = "de2a5d89-3465-4125-39a6-08d6b0a627a3";
    var gameArr = 13;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FF15() {
    var uid = "0da69a55-9ab2-4798-39a7-08d6b0a627a3";
    var gameArr = 14;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function FFBex() {
    var uid = "8f24fe1b-0e23-47c3-bca1-08d712cd7324";
    var gameArr = 15;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}
function apiCall(uid) {
    var requestUrl = 'https://www.moogleapi.com/api/v1/games/' + uid;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.dir(data);
            gmDescEl.append(data[0].description);
            gmTitleEl.append(data[0].title);
            pltfrm.append(data[0].platform);
            relDt.append(data[0].releaseDate);
        });
}

function mediaCall(num) {
    //console.log(mediaDetails[num].video);
    //console.log(mediaDetails[num].wiki);
    wikiEl.append(mediaDetails[num].wiki);//add text to wiki
    videoEl.append(mediaDetails[num].video);
    //console.log(mediaDetails[num].wikiLink);
}

function clearPage() {
    //clear filled elements, to ready for next game info. 
    gmTitleEl.text('');

    pltfrm.text('');

    relDt.text('');

    gmDescEl.text('');

    wikiEl.text('');

    videoEl.html('');//remove children nodes
    return;
};




//Keep Wiki Array the lowest point to clean page above
var mediaDetails = [{ "wiki": "About four centuries ago, the Lufenian people used the wind crystal's power to build a giant flying fortress and airships. The wind crystal eventually lost its light, which drove the Lufenians' homeland into decline. Tiamat, the fiend of wind, attacked the Lufenians and took over their flying fortress, along with the Mirage Tower. In response, the Lufenian Cid hid an airship in the southern continent.Two centuries after Tiamat, the Fiend of Water Kraken sunk the center of an oceanic civilization to make it his personal lair and darken the water crystal.In the present day, two centuries after Kraken, the fiend of earth Lich awakens and darkens the earth crystal, causing the land around Melmond to decay. At an unspecified point, the sage Lukahn tells of a prophecy about four \"Warriors of Light\", who will save the world in a time of darkness.The four Warriors of Light arrive at the kingdom of Cornelia, each carrying a darkened crystal of each element. They are recruited by the King of Cornelia to rescue the kingdom's princess Sarah, who has been kidnapped by the rogue Cornelian knight Garland. After Garland is defeated at the Chaos Shrine, Sarah rewards the Warriors of Light with her lute and the drawbridge is rebuilt to allow them to pass east.While traveling east, the Warriors of Light liberate the town of Pravoka from a band of pirates, who give up their ship in defeat. However, the only way out of the Aldean Sea is blocked by a land bridge that the dwarves of Mount Duergar have been trying to demolish. To read more please visit the Wiki page: www.google.com", "video": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/voeLk6cSplQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>" }, { "wiki": "this is info about the game2", "video": "www.youtube.com" }];
