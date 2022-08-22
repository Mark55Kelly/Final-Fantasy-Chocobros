var videoEl = $("#videoPlayer");
var wikiEl = $("#wikiText");
var gmDescEl = $("#gameDesc");
var gmTitleEl = $("#gameTitle");
var pltfrm = $("#platform");
var relDt = $("#relDt");
var jokeBtn = $("#yoMamaJoke");
var txBody = $("#textBody");


$("#yoMamaJoke").on("click",jokeCall);

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
    //txBody.style.backgroundImage = "url(../assets/images/Final Fantasy 1.jpg)";
    txBody.css("background-image", "url('./assets/images/Final Fantasy 1.jpg')");
}
function FF2() {
    var uid = "9dcce46c-7779-4096-399a-08d6b0a627a3";
    var gameArr = 1;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 2.jpg')");
}
function FF3() {
    var uid = "53da5efb-5925-409b-399b-08d6b0a627a3";
    var gameArr = 2;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 3.jpeg')");
}
function FF4() {
    var uid = "f4904ca8-8ab7-4e35-399c-08d6b0a627a3";
    var gameArr = 3;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 4.jpeg')");
}
function FF5() {
    var uid = "d6011f09-3714-4b28-399d-08d6b0a627a3";
    var gameArr = 4;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 5.jpeg')");
}
function FF6() {
    var uid = "7eb670e8-86bd-4622-399e-08d6b0a627a3";
    var gameArr = 5;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 6.png')");
}
function FF7() {
    var uid = "9fc1c377-95f1-4a09-399f-08d6b0a627a3";
    var gameArr = 6;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 7.jpeg')");
}
function FF8() {
    var uid = "96d5ac56-d56b-49f2-39a0-08d6b0a627a3";
    var gameArr = 7;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 8.jpeg')");
}
function FF9() {
    var uid = "e5c7fa37-0f22-44db-39a1-08d6b0a627a3";
    var gameArr = 8;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 9.jpeg')");
}
function FF10() {
    var uid = "8332f848-196c-4f5a-39a2-08d6b0a627a3";
    var gameArr = 9;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 10.jpeg')");
}
function FF102() {
    var uid = "978159df-b726-4fe5-39a3-08d6b0a627a3";
    var gameArr = 10;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 10-2.png')");
}
function FF12() {
    var uid = "8e801e49-4f82-4899-39a4-08d6b0a627a3";
    var gameArr = 11;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 12.jpg')");
}
function FF13() {
    var uid = "b992a9d4-41ce-4ecf-39a5-08d6b0a627a3";
    var gameArr = 12;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 13.jpeg')");
}
function FF132() {
    var uid = "de2a5d89-3465-4125-39a6-08d6b0a627a3";
    var gameArr = 13;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 13-2.jpeg')");
}
function FF15() {
    var uid = "0da69a55-9ab2-4798-39a7-08d6b0a627a3";
    var gameArr = 14;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy 15.jpeg')");
}
function FFBex() {
    var uid = "8f24fe1b-0e23-47c3-bca1-08d712cd7324";
    var gameArr = 15;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
    txBody.css("background-image", "url('./assets/images/Final Fantasy Bex.png')");
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

function jokeCall() {
    var requestUrl = 'https://api.chucknorris.io/jokes/random';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            jokeBtn.text('');
            jokeBtn.append(data.value);
            console.log(data);
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
var mediaDetails = [{ "wiki": "<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy\">Wiki FF1</a>", "video": "<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/voeLk6cSplQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>" }, { "wiki": "<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_II\">Wiki FF2</a>", "video": "<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/b8TdhrqIc9c\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>" },{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_III\">Wiki FF3</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/ZjVK3kGhsr4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_IV\">Wiki FF4</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/_nh5QcbYvGM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_V\">Wiki FF5</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/REyqGVXopkY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_VI\">Wiki FF6</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/LKONQ4UZte0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_VII\">Wiki FF7</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/DotavimguEU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_VIII\">Wiki FF8</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/FcITS930Mts\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy\">Wiki FF9</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/vKat77xifdk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_X\">Wiki FF10</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/7AjXgK0NYTo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_X-2\">Wiki FF10-2</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/XKpRh3b9nsg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_XII\">Wiki FF12</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/NQM2Ru5rKTU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_XIII\">Wiki FF13</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/f_6F--otraE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_XIII-2\">Wiki FF13-2</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/jzQTkDYuyBg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://finalfantasy.fandom.com/wiki/Final_Fantasy_XV\">Wiki FF15</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/kunj5Yxw0Ow\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"<a href=\"https://exvius.fandom.com/wiki/Final_Fantasy_Brave_Exvius_Wiki\">Wiki FF Brave Exvius</a>","video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/UgfbO_HcSsk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"}];
