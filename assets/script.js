var videoEl = $("#videoPlayer");
var wikiEl = $("#wikiText");
var gmDescEl = $("#gameDesc");
var gmTitleEl = $("#gameTitle");



$("#FF1").on("click", FF1);
// $("#FF2").on("click", clickSave);
// $("#FF3").on("click", clickSave);
// $("#FF4").on("click", clickSave);
// $("#FF5").on("click", clickSave);
// $("#FF6").on("click", clickSave);
// $("#FF7").on("click", clickSave);
// $("#FF8").on("click", clickSave);
// $("#FF9").on("click", clickSave);
// $("#FF10").on("click", clickSave);
// $("#FF102").on("click", clickSave);
// $("#FF12").on("click", clickSave);
// $("#FF13").on("click", clickSave);
// $("#FF132").on("click", clickSave);
// $("#FF15").on("click", clickSave);
// $("#FFBex").on("click", clickSave);

function FF1(){
    var uid = "680fe860-7581-4149-3999-08d6b0a627a3";
    var gameArr = 0;
    clearPage();
    apiCall(uid);
    mediaCall(gameArr);
}

function apiCall(uid){
    var requestUrl = 'https://www.moogleapi.com/api/v1/games/'+uid;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.dir(data);
            gmDescEl.append(data[0].description);
            gmTitleEl.append(data[0].title);

        });
}

function mediaCall(num){
    console.log(mediaDetails[num].video);
    console.log(mediaDetails[num].wiki);
    wikiEl.append(mediaDetails[num].wiki);//add text to wiki
    videoEl.append(mediaDetails[num].video);
    //console.log(mediaDetails[num].wikiLink);
}

function clearPage(){
//clear filled elements, to ready for next game info. 
};




//Keep Wiki Array the lowest point of clean page above
var mediaDetails = [{"wiki":"About four centuries ago, the Lufenian people used the wind crystal's power to build a giant flying fortress and airships. The wind crystal eventually lost its light, which drove the Lufenians' homeland into decline. Tiamat, the fiend of wind, attacked the Lufenians and took over their flying fortress, along with the Mirage Tower. In response, the Lufenian Cid hid an airship in the southern continent.Two centuries after Tiamat, the Fiend of Water Kraken sunk the center of an oceanic civilization to make it his personal lair and darken the water crystal.In the present day, two centuries after Kraken, the fiend of earth Lich awakens and darkens the earth crystal, causing the land around Melmond to decay. At an unspecified point, the sage Lukahn tells of a prophecy about four \"Warriors of Light\", who will save the world in a time of darkness.The four Warriors of Light arrive at the kingdom of Cornelia, each carrying a darkened crystal of each element. They are recruited by the King of Cornelia to rescue the kingdom's princess Sarah, who has been kidnapped by the rogue Cornelian knight Garland. After Garland is defeated at the Chaos Shrine, Sarah rewards the Warriors of Light with her lute and the drawbridge is rebuilt to allow them to pass east.While traveling east, the Warriors of Light liberate the town of Pravoka from a band of pirates, who give up their ship in defeat. However, the only way out of the Aldean Sea is blocked by a land bridge that the dwarves of Mount Duergar have been trying to demolish. To read more please visit the Wiki page: www.google.com", "video":"<iframe width=\"200\" height=\"100\" src=\"https://www.youtube.com/embed/voeLk6cSplQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"},{"wiki":"this is info about the game2", "video":"www.youtube.com"}];
