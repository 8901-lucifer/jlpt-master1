import { useState } from "react";

const ALL_CARDS = {
N5: [
// ── KANJI (60) ──
{id:"n5k01",type:"kanji",kanji:"一",reading:"いち・ひと",en:"one",tl:"isa",example:"一つください",exampleEn:"Please give me one",exampleTl:"Bigyan mo ako ng isa"},
{id:"n5k02",type:"kanji",kanji:"二",reading:"に・ふた",en:"two",tl:"dalawa",example:"二人で行く",exampleEn:"Go as two people",exampleTl:"Pumunta bilang dalawa"},
{id:"n5k03",type:"kanji",kanji:"三",reading:"さん・み",en:"three",tl:"tatlo",example:"三時に会いましょう",exampleEn:"Let's meet at three",exampleTl:"Magkita tayo nang tatlo"},
{id:"n5k04",type:"kanji",kanji:"四",reading:"し・よん",en:"four",tl:"apat",example:"四月に旅行する",exampleEn:"Travel in April",exampleTl:"Maglakbay sa Abril"},
{id:"n5k05",type:"kanji",kanji:"五",reading:"ご・いつ",en:"five",tl:"lima",example:"五分待ってください",exampleEn:"Please wait five minutes",exampleTl:"Maghintay ng limang minuto"},
{id:"n5k06",type:"kanji",kanji:"六",reading:"ろく・む",en:"six",tl:"anim",example:"六時に起きる",exampleEn:"Wake up at six",exampleTl:"Gumising nang alas sais"},
{id:"n5k07",type:"kanji",kanji:"七",reading:"しち・なな",en:"seven",tl:"pito",example:"七月は暑い",exampleEn:"July is hot",exampleTl:"Mainit ang Hulyo"},
{id:"n5k08",type:"kanji",kanji:"八",reading:"はち・や",en:"eight",tl:"walo",example:"八時の電車",exampleEn:"The eight o'clock train",exampleTl:"Tren nang alas otso"},
{id:"n5k09",type:"kanji",kanji:"九",reading:"く・きゅう",en:"nine",tl:"siyam",example:"九月に帰る",exampleEn:"Return in September",exampleTl:"Bumalik sa Setyembre"},
{id:"n5k10",type:"kanji",kanji:"十",reading:"じゅう・とお",en:"ten",tl:"sampu",example:"十円のお菓子",exampleEn:"Ten-yen candy",exampleTl:"Kendi na sampung yen"},
{id:"n5k11",type:"kanji",kanji:"百",reading:"ひゃく",en:"hundred",tl:"isang daan",example:"百円ショップ",exampleEn:"Hundred-yen shop",exampleTl:"Tindahan ng isang daang yen"},
{id:"n5k12",type:"kanji",kanji:"千",reading:"せん",en:"thousand",tl:"isang libo",example:"千円札",exampleEn:"Thousand-yen bill",exampleTl:"Billeteng isang libong yen"},
{id:"n5k13",type:"kanji",kanji:"万",reading:"まん",en:"ten thousand",tl:"sampung libo",example:"一万円",exampleEn:"Ten thousand yen",exampleTl:"Sampung libong yen"},
{id:"n5k14",type:"kanji",kanji:"円",reading:"えん",en:"yen / circle",tl:"yen / bilog",example:"五百円あります",exampleEn:"I have 500 yen",exampleTl:"Mayroon akong 500 yen"},
{id:"n5k15",type:"kanji",kanji:"年",reading:"ねん・とし",en:"year",tl:"taon",example:"今年は何年ですか",exampleEn:"What year is this year?",exampleTl:"Anong taon ngayon?"},
{id:"n5k16",type:"kanji",kanji:"月",reading:"つき・げつ",en:"moon / month",tl:"buwan",example:"月が綺麗です",exampleEn:"The moon is beautiful",exampleTl:"Maganda ang buwan"},
{id:"n5k17",type:"kanji",kanji:"日",reading:"にち・ひ",en:"day / sun",tl:"araw",example:"今日は何日ですか",exampleEn:"What day is today?",exampleTl:"Ikanilang petsa ngayon?"},
{id:"n5k18",type:"kanji",kanji:"時",reading:"じ・とき",en:"time / hour",tl:"oras",example:"今何時ですか",exampleEn:"What time is it now?",exampleTl:"Anong oras na ngayon?"},
{id:"n5k19",type:"kanji",kanji:"分",reading:"ふん・ぶん",en:"minute / part",tl:"minuto",example:"十分で着く",exampleEn:"Arrive in ten minutes",exampleTl:"Makakarating sa sampung minuto"},
{id:"n5k20",type:"kanji",kanji:"半",reading:"はん",en:"half",tl:"kalahati",example:"三時半に来てください",exampleEn:"Please come at three thirty",exampleTl:"Pumunta nang tatlo y medya"},
{id:"n5k21",type:"kanji",kanji:"週",reading:"しゅう",en:"week",tl:"linggo",example:"来週また来ます",exampleEn:"I'll come again next week",exampleTl:"Babalik ako susunod na linggo"},
{id:"n5k22",type:"kanji",kanji:"山",reading:"やま・さん",en:"mountain",tl:"bundok",example:"山に登る",exampleEn:"Climb a mountain",exampleTl:"Umakyat sa bundok"},
{id:"n5k23",type:"kanji",kanji:"川",reading:"かわ",en:"river",tl:"ilog",example:"川で泳ぐ",exampleEn:"Swim in the river",exampleTl:"Lumangoy sa ilog"},
{id:"n5k24",type:"kanji",kanji:"木",reading:"き・もく",en:"tree / wood",tl:"puno / kahoy",example:"木の下で休む",exampleEn:"Rest under a tree",exampleTl:"Magpahinga sa ilalim ng puno"},
{id:"n5k25",type:"kanji",kanji:"火",reading:"か・ひ",en:"fire / Tuesday",tl:"apoy / Martes",example:"火曜日は忙しい",exampleEn:"Tuesday is busy",exampleTl:"Abala ang Martes"},
{id:"n5k26",type:"kanji",kanji:"水",reading:"みず・すい",en:"water / Wednesday",tl:"tubig / Miyerkules",example:"水を一杯ください",exampleEn:"Please give me a glass of water",exampleTl:"Bigyan mo ako ng isang basong tubig"},
{id:"n5k27",type:"kanji",kanji:"金",reading:"きん・かね",en:"gold / money / Friday",tl:"ginto / pera / Biyernes",example:"金曜日に会いましょう",exampleEn:"Let's meet on Friday",exampleTl:"Magkita tayo sa Biyernes"},
{id:"n5k28",type:"kanji",kanji:"土",reading:"つち・ど",en:"earth / Saturday",tl:"lupa / Sabado",example:"土曜日は休みです",exampleEn:"Saturday is a day off",exampleTl:"Pahinga sa Sabado"},
{id:"n5k29",type:"kanji",kanji:"人",reading:"ひと・じん",en:"person",tl:"tao",example:"あの人は先生です",exampleEn:"That person is a teacher",exampleTl:"Guro ang taong iyon"},
{id:"n5k30",type:"kanji",kanji:"子",reading:"こ・し",en:"child",tl:"bata",example:"子どもが遊んでいる",exampleEn:"Children are playing",exampleTl:"Naglelaro ang mga bata"},
{id:"n5k31",type:"kanji",kanji:"女",reading:"おんな・じょ",en:"woman",tl:"babae",example:"女の人が来た",exampleEn:"A woman came",exampleTl:"Dumating ang isang babae"},
{id:"n5k32",type:"kanji",kanji:"男",reading:"おとこ・だん",en:"man",tl:"lalaki",example:"男の子が走っている",exampleEn:"A boy is running",exampleTl:"Tumatakbo ang isang batang lalaki"},
{id:"n5k33",type:"kanji",kanji:"父",reading:"ちち・ふ",en:"father",tl:"ama / tatay",example:"父は会社員です",exampleEn:"My father is a company employee",exampleTl:"Empleyado ang aking tatay"},
{id:"n5k34",type:"kanji",kanji:"母",reading:"はは・ぼ",en:"mother",tl:"ina / nanay",example:"母が料理を作る",exampleEn:"My mother cooks",exampleTl:"Nagluluto ang aking nanay"},
{id:"n5k35",type:"kanji",kanji:"手",reading:"て・しゅ",en:"hand",tl:"kamay",example:"手を洗いなさい",exampleEn:"Wash your hands",exampleTl:"Hugasan ang iyong kamay"},
{id:"n5k36",type:"kanji",kanji:"目",reading:"め・もく",en:"eye",tl:"mata",example:"目が疲れました",exampleEn:"My eyes are tired",exampleTl:"Pagod ang aking mata"},
{id:"n5k37",type:"kanji",kanji:"口",reading:"くち・こう",en:"mouth",tl:"bibig",example:"口を大きく開けて",exampleEn:"Open your mouth wide",exampleTl:"Buksan ng malaki ang bibig"},
{id:"n5k38",type:"kanji",kanji:"耳",reading:"みみ・じ",en:"ear",tl:"tainga",example:"耳が聞こえない",exampleEn:"I can't hear",exampleTl:"Hindi ko marinig"},
{id:"n5k39",type:"kanji",kanji:"足",reading:"あし・そく",en:"foot / leg",tl:"paa / binti",example:"足が痛い",exampleEn:"My foot hurts",exampleTl:"Masakit ang aking paa"},
{id:"n5k40",type:"kanji",kanji:"頭",reading:"あたま・とう",en:"head",tl:"ulo",example:"頭が痛い",exampleEn:"I have a headache",exampleTl:"Masakit ang ulo ko"},
{id:"n5k41",type:"kanji",kanji:"上",reading:"うえ・じょう",en:"above / up",tl:"sa itaas",example:"机の上に本がある",exampleEn:"There is a book on the desk",exampleTl:"May libro sa ibabaw ng mesa"},
{id:"n5k42",type:"kanji",kanji:"下",reading:"した・か",en:"below / down",tl:"sa ibaba",example:"椅子の下を見て",exampleEn:"Look under the chair",exampleTl:"Tumingin sa ilalim ng upuan"},
{id:"n5k43",type:"kanji",kanji:"右",reading:"みぎ",en:"right",tl:"kanan",example:"右に曲がる",exampleEn:"Turn right",exampleTl:"Lumiko sa kanan"},
{id:"n5k44",type:"kanji",kanji:"左",reading:"ひだり",en:"left",tl:"kaliwa",example:"左の道を行く",exampleEn:"Take the road on the left",exampleTl:"Dumaan sa kaliwa"},
{id:"n5k45",type:"kanji",kanji:"中",reading:"なか・ちゅう",en:"inside / middle",tl:"loob / gitna",example:"箱の中に何がある",exampleEn:"What is inside the box?",exampleTl:"Ano ang nasa loob ng kahon?"},
{id:"n5k46",type:"kanji",kanji:"外",reading:"そと・がい",en:"outside",tl:"labas",example:"外は寒い",exampleEn:"It is cold outside",exampleTl:"Malamig sa labas"},
{id:"n5k47",type:"kanji",kanji:"前",reading:"まえ・ぜん",en:"front / before",tl:"harap / bago",example:"駅の前で待つ",exampleEn:"Wait in front of the station",exampleTl:"Maghintay sa harap ng istasyon"},
{id:"n5k48",type:"kanji",kanji:"後",reading:"うしろ・ご",en:"behind / after",tl:"likod / pagkatapos",example:"後で電話します",exampleEn:"I will call later",exampleTl:"Tatawag ako mamaya"},
{id:"n5k49",type:"kanji",kanji:"大",reading:"おお・だい",en:"big / large",tl:"malaki",example:"大きい声で言う",exampleEn:"Say it in a loud voice",exampleTl:"Sabihin nang malakas"},
{id:"n5k50",type:"kanji",kanji:"小",reading:"ちい・しょう",en:"small",tl:"maliit",example:"小さい声で話す",exampleEn:"Speak quietly",exampleTl:"Magsalita nang mahinahon"},
{id:"n5k51",type:"kanji",kanji:"本",reading:"ほん・もと",en:"book / origin",tl:"libro",example:"本を読む",exampleEn:"Read a book",exampleTl:"Magbasa ng libro"},
{id:"n5k52",type:"kanji",kanji:"国",reading:"くに・こく",en:"country",tl:"bansa",example:"どの国から来ましたか",exampleEn:"What country are you from?",exampleTl:"Saan kang bansa nanggaling?"},
{id:"n5k53",type:"kanji",kanji:"語",reading:"ご",en:"language / word",tl:"wika / salita",example:"日本語を勉強する",exampleEn:"Study Japanese",exampleTl:"Mag-aral ng Hapon"},
{id:"n5k54",type:"kanji",kanji:"学",reading:"がく・まな",en:"study / learn",tl:"pag-aaral",example:"大学で学ぶ",exampleEn:"Study at university",exampleTl:"Mag-aral sa unibersidad"},
{id:"n5k55",type:"kanji",kanji:"校",reading:"こう",en:"school",tl:"paaralan",example:"高校に通う",exampleEn:"Attend high school",exampleTl:"Pumunta sa mataas na paaralan"},
{id:"n5k56",type:"kanji",kanji:"生",reading:"せい・い",en:"life / birth / student",tl:"buhay / estudyante",example:"先生に質問する",exampleEn:"Ask the teacher",exampleTl:"Magtanong sa guro"},
{id:"n5k57",type:"kanji",kanji:"先",reading:"せん・さき",en:"ahead / previous",tl:"una / dati",example:"先に行ってください",exampleEn:"Please go ahead",exampleTl:"Mauna ka na"},
{id:"n5k58",type:"kanji",kanji:"花",reading:"はな",en:"flower",tl:"bulaklak",example:"花を買う",exampleEn:"Buy flowers",exampleTl:"Bumili ng bulaklak"},
{id:"n5k59",type:"kanji",kanji:"雨",reading:"あめ",en:"rain",tl:"ulan",example:"雨が降っている",exampleEn:"It is raining",exampleTl:"Umuulan"},
{id:"n5k60",type:"kanji",kanji:"電",reading:"でん",en:"electricity",tl:"kuryente",example:"電気をつける",exampleEn:"Turn on the light",exampleTl:"I-on ang ilaw"},
// ── VOCAB (60) ──
{id:"n5v01",type:"vocab",kanji:"食べる",reading:"たべる",en:"to eat",tl:"kumain",example:"朝ご飯を食べる",exampleEn:"Eat breakfast",exampleTl:"Kumain ng almusal"},
{id:"n5v02",type:"vocab",kanji:"飲む",reading:"のむ",en:"to drink",tl:"uminom",example:"お茶を飲む",exampleEn:"Drink tea",exampleTl:"Uminom ng tsaa"},
{id:"n5v03",type:"vocab",kanji:"見る",reading:"みる",en:"to see / watch",tl:"tumingin / manood",example:"テレビを見る",exampleEn:"Watch TV",exampleTl:"Manood ng TV"},
{id:"n5v04",type:"vocab",kanji:"聞く",reading:"きく",en:"to listen / ask",tl:"makinig / magtanong",example:"音楽を聞く",exampleEn:"Listen to music",exampleTl:"Makinig ng musika"},
{id:"n5v05",type:"vocab",kanji:"話す",reading:"はなす",en:"to speak / talk",tl:"magsalita",example:"日本語で話す",exampleEn:"Speak in Japanese",exampleTl:"Magsalita ng Hapon"},
{id:"n5v06",type:"vocab",kanji:"書く",reading:"かく",en:"to write",tl:"sumulat",example:"手紙を書く",exampleEn:"Write a letter",exampleTl:"Sumulat ng liham"},
{id:"n5v07",type:"vocab",kanji:"読む",reading:"よむ",en:"to read",tl:"magbasa",example:"本を読む",exampleEn:"Read a book",exampleTl:"Magbasa ng libro"},
{id:"n5v08",type:"vocab",kanji:"買う",reading:"かう",en:"to buy",tl:"bumili",example:"野菜を買う",exampleEn:"Buy vegetables",exampleTl:"Bumili ng gulay"},
{id:"n5v09",type:"vocab",kanji:"売る",reading:"うる",en:"to sell",tl:"magbenta",example:"古い本を売る",exampleEn:"Sell old books",exampleTl:"Magbenta ng lumang libro"},
{id:"n5v10",type:"vocab",kanji:"行く",reading:"いく",en:"to go",tl:"pumunta",example:"学校に行く",exampleEn:"Go to school",exampleTl:"Pumunta sa paaralan"},
{id:"n5v11",type:"vocab",kanji:"来る",reading:"くる",en:"to come",tl:"dumating",example:"友達が来る",exampleEn:"A friend is coming",exampleTl:"Darating ang kaibigan"},
{id:"n5v12",type:"vocab",kanji:"帰る",reading:"かえる",en:"to return home",tl:"umuwi",example:"六時に帰る",exampleEn:"Return home at six",exampleTl:"Umuwi nang alas sais"},
{id:"n5v13",type:"vocab",kanji:"起きる",reading:"おきる",en:"to wake up",tl:"gumising",example:"七時に起きる",exampleEn:"Wake up at seven",exampleTl:"Gumising nang alas siyete"},
{id:"n5v14",type:"vocab",kanji:"寝る",reading:"ねる",en:"to sleep",tl:"matulog",example:"早く寝なさい",exampleEn:"Go to sleep early",exampleTl:"Matulog nang maaga"},
{id:"n5v15",type:"vocab",kanji:"立つ",reading:"たつ",en:"to stand up",tl:"tumayo",example:"椅子から立つ",exampleEn:"Stand up from the chair",exampleTl:"Tumayo mula sa upuan"},
{id:"n5v16",type:"vocab",kanji:"座る",reading:"すわる",en:"to sit down",tl:"umupo",example:"ここに座ってください",exampleEn:"Please sit here",exampleTl:"Umupo dito"},
{id:"n5v17",type:"vocab",kanji:"開ける",reading:"あける",en:"to open",tl:"buksan",example:"窓を開ける",exampleEn:"Open the window",exampleTl:"Buksan ang bintana"},
{id:"n5v18",type:"vocab",kanji:"閉める",reading:"しめる",en:"to close",tl:"isara",example:"ドアを閉める",exampleEn:"Close the door",exampleTl:"Isara ang pintuan"},
{id:"n5v19",type:"vocab",kanji:"入る",reading:"はいる",en:"to enter",tl:"pumasok",example:"部屋に入る",exampleEn:"Enter the room",exampleTl:"Pumasok sa silid"},
{id:"n5v20",type:"vocab",kanji:"出る",reading:"でる",en:"to exit / leave",tl:"lumabas",example:"家を出る",exampleEn:"Leave the house",exampleTl:"Lumabas ng bahay"},
{id:"n5v21",type:"vocab",kanji:"使う",reading:"つかう",en:"to use",tl:"gamitin",example:"パソコンを使う",exampleEn:"Use a computer",exampleTl:"Gumamit ng kompyuter"},
{id:"n5v22",type:"vocab",kanji:"作る",reading:"つくる",en:"to make / create",tl:"gumawa",example:"料理を作る",exampleEn:"Cook a meal",exampleTl:"Magluto ng pagkain"},
{id:"n5v23",type:"vocab",kanji:"待つ",reading:"まつ",en:"to wait",tl:"maghintay",example:"バスを待つ",exampleEn:"Wait for the bus",exampleTl:"Maghintay ng bus"},
{id:"n5v24",type:"vocab",kanji:"走る",reading:"はしる",en:"to run",tl:"tumakbo",example:"公園で走る",exampleEn:"Run in the park",exampleTl:"Tumakbo sa parke"},
{id:"n5v25",type:"vocab",kanji:"歩く",reading:"あるく",en:"to walk",tl:"maglakad",example:"学校まで歩く",exampleEn:"Walk to school",exampleTl:"Maglakad sa paaralan"},
{id:"n5v26",type:"vocab",kanji:"大きい",reading:"おおきい",en:"big",tl:"malaki",example:"大きい犬が来た",exampleEn:"A big dog came",exampleTl:"Dumating ang malaking aso"},
{id:"n5v27",type:"vocab",kanji:"小さい",reading:"ちいさい",en:"small",tl:"maliit",example:"小さい子ども",exampleEn:"A small child",exampleTl:"Maliit na bata"},
{id:"n5v28",type:"vocab",kanji:"新しい",reading:"あたらしい",en:"new",tl:"bago",example:"新しいスマホを買った",exampleEn:"Bought a new smartphone",exampleTl:"Bumili ng bagong smartphone"},
{id:"n5v29",type:"vocab",kanji:"古い",reading:"ふるい",en:"old",tl:"luma",example:"古いお寺を訪れる",exampleEn:"Visit an old temple",exampleTl:"Bisitahin ang lumang templo"},
{id:"n5v30",type:"vocab",kanji:"高い",reading:"たかい",en:"tall / expensive",tl:"mataas / mahal",example:"値段が高い",exampleEn:"The price is high",exampleTl:"Mahal ang presyo"},
{id:"n5v31",type:"vocab",kanji:"安い",reading:"やすい",en:"cheap",tl:"mura",example:"このお店は安い",exampleEn:"This shop is cheap",exampleTl:"Mura ang tindahang ito"},
{id:"n5v32",type:"vocab",kanji:"早い",reading:"はやい",en:"early / fast",tl:"maaga / mabilis",example:"早く起きる",exampleEn:"Wake up early",exampleTl:"Gumising nang maaga"},
{id:"n5v33",type:"vocab",kanji:"遅い",reading:"おそい",en:"late / slow",tl:"huli / mabagal",example:"バスが遅い",exampleEn:"The bus is slow",exampleTl:"Mabagal ang bus"},
{id:"n5v34",type:"vocab",kanji:"多い",reading:"おおい",en:"many / much",tl:"marami",example:"人が多い",exampleEn:"There are many people",exampleTl:"Maraming tao"},
{id:"n5v35",type:"vocab",kanji:"少ない",reading:"すくない",en:"few / little",tl:"kaunti",example:"時間が少ない",exampleEn:"There is little time",exampleTl:"Kaunti ang oras"},
{id:"n5v36",type:"vocab",kanji:"長い",reading:"ながい",en:"long",tl:"mahaba",example:"長い道",exampleEn:"A long road",exampleTl:"Mahabang daan"},
{id:"n5v37",type:"vocab",kanji:"短い",reading:"みじかい",en:"short",tl:"maikli",example:"短い映画",exampleEn:"A short movie",exampleTl:"Maikling pelikula"},
{id:"n5v38",type:"vocab",kanji:"白い",reading:"しろい",en:"white",tl:"puti",example:"白い服を着る",exampleEn:"Wear white clothes",exampleTl:"Magsuot ng puting damit"},
{id:"n5v39",type:"vocab",kanji:"黒い",reading:"くろい",en:"black",tl:"itim",example:"黒い猫",exampleEn:"A black cat",exampleTl:"Itim na pusa"},
{id:"n5v40",type:"vocab",kanji:"赤い",reading:"あかい",en:"red",tl:"pula",example:"赤いリンゴ",exampleEn:"A red apple",exampleTl:"Pulang mansanas"},
{id:"n5v41",type:"vocab",kanji:"青い",reading:"あおい",en:"blue / green",tl:"asul / berde",example:"青い空",exampleEn:"Blue sky",exampleTl:"Asul na langit"},
{id:"n5v42",type:"vocab",kanji:"学校",reading:"がっこう",en:"school",tl:"paaralan",example:"学校に友達がいる",exampleEn:"I have friends at school",exampleTl:"May kaibigan ako sa paaralan"},
{id:"n5v43",type:"vocab",kanji:"先生",reading:"せんせい",en:"teacher",tl:"guro",example:"先生に質問する",exampleEn:"Ask the teacher a question",exampleTl:"Magtanong sa guro"},
{id:"n5v44",type:"vocab",kanji:"学生",reading:"がくせい",en:"student",tl:"estudyante",example:"大学生になった",exampleEn:"Became a university student",exampleTl:"Naging estudyante sa unibersidad"},
{id:"n5v45",type:"vocab",kanji:"電車",reading:"でんしゃ",en:"train",tl:"tren",example:"電車で通勤する",exampleEn:"Commute by train",exampleTl:"Mag-commute sa tren"},
{id:"n5v46",type:"vocab",kanji:"自転車",reading:"じてんしゃ",en:"bicycle",tl:"bisikleta",example:"自転車で学校へ行く",exampleEn:"Go to school by bicycle",exampleTl:"Pumunta sa paaralan sa bisikleta"},
{id:"n5v47",type:"vocab",kanji:"電話",reading:"でんわ",en:"telephone",tl:"telepono",example:"電話をかける",exampleEn:"Make a phone call",exampleTl:"Tumawag sa telepono"},
{id:"n5v48",type:"vocab",kanji:"会社",reading:"かいしゃ",en:"company",tl:"kumpanya",example:"会社に行く",exampleEn:"Go to work",exampleTl:"Pumunta sa trabaho"},
{id:"n5v49",type:"vocab",kanji:"家",reading:"いえ・うち",en:"house / home",tl:"bahay",example:"家に帰る",exampleEn:"Return home",exampleTl:"Umuwi sa bahay"},
{id:"n5v50",type:"vocab",kanji:"部屋",reading:"へや",en:"room",tl:"silid / kuwarto",example:"部屋を掃除する",exampleEn:"Clean the room",exampleTl:"Linisin ang silid"},
{id:"n5v51",type:"vocab",kanji:"今日",reading:"きょう",en:"today",tl:"ngayon",example:"今日は何をしますか",exampleEn:"What will you do today?",exampleTl:"Ano ang gagawin mo ngayon?"},
{id:"n5v52",type:"vocab",kanji:"明日",reading:"あした",en:"tomorrow",tl:"bukas",example:"明日また来ます",exampleEn:"I'll come again tomorrow",exampleTl:"Babalik ako bukas"},
{id:"n5v53",type:"vocab",kanji:"昨日",reading:"きのう",en:"yesterday",tl:"kahapon",example:"昨日何をしましたか",exampleEn:"What did you do yesterday?",exampleTl:"Ano ang ginawa mo kahapon?"},
{id:"n5v54",type:"vocab",kanji:"今",reading:"いま",en:"now",tl:"ngayon",example:"今どこにいますか",exampleEn:"Where are you now?",exampleTl:"Nasaan ka ngayon?"},
{id:"n5v55",type:"vocab",kanji:"毎日",reading:"まいにち",en:"every day",tl:"araw-araw",example:"毎日練習する",exampleEn:"Practice every day",exampleTl:"Magsanay araw-araw"},
{id:"n5v56",type:"vocab",kanji:"料理",reading:"りょうり",en:"cooking / cuisine",tl:"pagluluto / pagkain",example:"日本料理が好きです",exampleEn:"I like Japanese food",exampleTl:"Gusto ko ang Japanese na pagkain"},
{id:"n5v57",type:"vocab",kanji:"水",reading:"みず",en:"water",tl:"tubig",example:"水を飲む",exampleEn:"Drink water",exampleTl:"Uminom ng tubig"},
{id:"n5v58",type:"vocab",kanji:"天気",reading:"てんき",en:"weather",tl:"panahon",example:"今日の天気は？",exampleEn:"What is today's weather?",exampleTl:"Ano ang panahon ngayon?"},
{id:"n5v59",type:"vocab",kanji:"名前",reading:"なまえ",en:"name",tl:"pangalan",example:"名前を教えてください",exampleEn:"Please tell me your name",exampleTl:"Sabihin mo ang iyong pangalan"},
{id:"n5v60",type:"vocab",kanji:"何",reading:"なに・なん",en:"what",tl:"ano",example:"これは何ですか",exampleEn:"What is this?",exampleTl:"Ano ito?"},
],

N4: [
// ── KANJI (50) ──
{id:"n4k01",type:"kanji",kanji:"駅",reading:"えき",en:"station",tl:"istasyon",example:"駅まで歩いて十分",exampleEn:"Ten minutes walk to the station",exampleTl:"Sampung minutong lakad sa istasyon"},
{id:"n4k02",type:"kanji",kanji:"急",reading:"きゅう",en:"urgent / hurry",tl:"madalian",example:"急いでください",exampleEn:"Please hurry",exampleTl:"Magmadali po"},
{id:"n4k03",type:"kanji",kanji:"広",reading:"ひろい",en:"wide / spacious",tl:"malawak",example:"広い公園で遊ぶ",exampleEn:"Play in the wide park",exampleTl:"Maglaro sa malawak na parke"},
{id:"n4k04",type:"kanji",kanji:"使",reading:"つかう",en:"to use",tl:"gamitin",example:"辞書を使って調べる",exampleEn:"Look up using a dictionary",exampleTl:"Hanapin gamit ang diksyunaryo"},
{id:"n4k05",type:"kanji",kanji:"体",reading:"からだ",en:"body",tl:"katawan",example:"体の調子がいい",exampleEn:"My body feels good",exampleTl:"Maganda ang kondisyon ng katawan ko"},
{id:"n4k06",type:"kanji",kanji:"病",reading:"びょう",en:"illness",tl:"sakit",example:"病院で診てもらう",exampleEn:"Get examined at the hospital",exampleTl:"Ipatingnan sa ospital"},
{id:"n4k07",type:"kanji",kanji:"服",reading:"ふく",en:"clothes",tl:"damit",example:"冬服を買う",exampleEn:"Buy winter clothes",exampleTl:"Bumili ng damit panglamig"},
{id:"n4k08",type:"kanji",kanji:"働",reading:"はたらく",en:"to work",tl:"magtrabaho",example:"夜遅くまで働く",exampleEn:"Work until late at night",exampleTl:"Magtrabaho hanggang gabi"},
{id:"n4k09",type:"kanji",kanji:"特",reading:"とく",en:"special",tl:"espesyal",example:"特に好きな食べ物",exampleEn:"Especially favourite food",exampleTl:"Espesyal na paboritong pagkain"},
{id:"n4k10",type:"kanji",kanji:"声",reading:"こえ",en:"voice",tl:"boses",example:"大きな声で歌う",exampleEn:"Sing in a loud voice",exampleTl:"Kumanta nang malakas"},
{id:"n4k11",type:"kanji",kanji:"色",reading:"いろ",en:"colour",tl:"kulay",example:"好きな色は青です",exampleEn:"My favourite colour is blue",exampleTl:"Asul ang paboritong kulay ko"},
{id:"n4k12",type:"kanji",kanji:"図",reading:"ず",en:"diagram / map",tl:"diagrama / mapa",example:"図書館で本を借りる",exampleEn:"Borrow a book from the library",exampleTl:"Manghiram ng libro sa aklatan"},
{id:"n4k13",type:"kanji",kanji:"地",reading:"ち",en:"ground / earth",tl:"lupa",example:"地図を見る",exampleEn:"Look at the map",exampleTl:"Tingnan ang mapa"},
{id:"n4k14",type:"kanji",kanji:"肉",reading:"にく",en:"meat",tl:"karne",example:"鶏肉が好きです",exampleEn:"I like chicken",exampleTl:"Gusto ko ang manok"},
{id:"n4k15",type:"kanji",kanji:"魚",reading:"さかな",en:"fish",tl:"isda",example:"魚を焼く",exampleEn:"Grill fish",exampleTl:"Mag-ihaw ng isda"},
{id:"n4k16",type:"kanji",kanji:"野",reading:"や",en:"field / wild",tl:"bukid",example:"野菜を食べる",exampleEn:"Eat vegetables",exampleTl:"Kumain ng gulay"},
{id:"n4k17",type:"kanji",kanji:"海",reading:"うみ",en:"sea / ocean",tl:"dagat",example:"夏は海へ行く",exampleEn:"Go to the sea in summer",exampleTl:"Pumunta sa dagat sa tag-init"},
{id:"n4k18",type:"kanji",kanji:"空",reading:"そら",en:"sky",tl:"langit",example:"空が青い",exampleEn:"The sky is blue",exampleTl:"Asul ang langit"},
{id:"n4k19",type:"kanji",kanji:"雪",reading:"ゆき",en:"snow",tl:"niyebe",example:"雪が積もった",exampleEn:"Snow has piled up",exampleTl:"Nag-ipon ang niyebe"},
{id:"n4k20",type:"kanji",kanji:"風",reading:"かぜ",en:"wind",tl:"hangin",example:"強い風が吹いている",exampleEn:"A strong wind is blowing",exampleTl:"Humihip ang malakas na hangin"},
{id:"n4k21",type:"kanji",kanji:"道",reading:"みち",en:"road / path",tl:"daan",example:"道に迷った",exampleEn:"Got lost on the road",exampleTl:"Naligaw sa daan"},
{id:"n4k22",type:"kanji",kanji:"店",reading:"みせ",en:"shop / store",tl:"tindahan",example:"あの店は安い",exampleEn:"That shop is cheap",exampleTl:"Mura ang tindahang iyon"},
{id:"n4k23",type:"kanji",kanji:"門",reading:"もん",en:"gate",tl:"pintuan / gate",example:"学校の門",exampleEn:"School gate",exampleTl:"Gate ng paaralan"},
{id:"n4k24",type:"kanji",kanji:"番",reading:"ばん",en:"number / turn",tl:"numero / turn",example:"何番ですか",exampleEn:"What number is it?",exampleTl:"Anong numero iyon?"},
{id:"n4k25",type:"kanji",kanji:"号",reading:"ごう",en:"number / issue",tl:"numero",example:"三号室に入る",exampleEn:"Enter room number three",exampleTl:"Pumasok sa silid numero tatlo"},
{id:"n4k26",type:"kanji",kanji:"料",reading:"りょう",en:"fee / material",tl:"bayad",example:"料金を払う",exampleEn:"Pay the fee",exampleTl:"Bayaran ang bayad"},
{id:"n4k27",type:"kanji",kanji:"理",reading:"り",en:"reason / logic",tl:"dahilan / lohika",example:"理由を説明する",exampleEn:"Explain the reason",exampleTl:"Ipaliwanag ang dahilan"},
{id:"n4k28",type:"kanji",kanji:"由",reading:"ゆ・よし",en:"reason / origin",tl:"pinagmulan",example:"自由に選ぶ",exampleEn:"Choose freely",exampleTl:"Pumili nang malaya"},
{id:"n4k29",type:"kanji",kanji:"近",reading:"ちか・きん",en:"near / close",tl:"malapit",example:"駅の近くに住む",exampleEn:"Live near the station",exampleTl:"Manirahan malapit sa istasyon"},
{id:"n4k30",type:"kanji",kanji:"遠",reading:"とお・えん",en:"far / distant",tl:"malayo",example:"遠い国に行く",exampleEn:"Go to a distant country",exampleTl:"Pumunta sa malayong bansa"},
{id:"n4k31",type:"kanji",kanji:"重",reading:"おもい",en:"heavy / important",tl:"mabigat / mahalaga",example:"重い荷物を持つ",exampleEn:"Carry heavy luggage",exampleTl:"Magdala ng mabigat na bagahe"},
{id:"n4k32",type:"kanji",kanji:"軽",reading:"かるい",en:"light",tl:"magaan",example:"軽い荷物",exampleEn:"Light luggage",exampleTl:"Magaang na bagahe"},
{id:"n4k33",type:"kanji",kanji:"強",reading:"つよい",en:"strong",tl:"malakas",example:"強い選手",exampleEn:"A strong player",exampleTl:"Matapang na manlalaro"},
{id:"n4k34",type:"kanji",kanji:"弱",reading:"よわい",en:"weak",tl:"mahina",example:"体が弱い",exampleEn:"Physically weak",exampleTl:"Mahina ang katawan"},
{id:"n4k35",type:"kanji",kanji:"速",reading:"はやい",en:"fast / quick",tl:"mabilis",example:"速く走る",exampleEn:"Run fast",exampleTl:"Tumakbo nang mabilis"},
{id:"n4k36",type:"kanji",kanji:"遅",reading:"おそい",en:"slow / late",tl:"mabagal / huli",example:"電車が遅れた",exampleEn:"The train was late",exampleTl:"Naantala ang tren"},
{id:"n4k37",type:"kanji",kanji:"暑",reading:"あつい",en:"hot (weather)",tl:"mainit (panahon)",example:"今日は暑い",exampleEn:"It is hot today",exampleTl:"Mainit ngayon"},
{id:"n4k38",type:"kanji",kanji:"寒",reading:"さむい",en:"cold (weather)",tl:"malamig (panahon)",example:"冬は寒い",exampleEn:"Winter is cold",exampleTl:"Malamig sa taglamig"},
{id:"n4k39",type:"kanji",kanji:"温",reading:"あたたかい",en:"warm",tl:"mainit-init",example:"温かいスープ",exampleEn:"Warm soup",exampleTl:"Mainit-initang sopas"},
{id:"n4k40",type:"kanji",kanji:"冷",reading:"つめたい",en:"cold (touch)",tl:"malamig (sa hawak)",example:"冷たい水",exampleEn:"Cold water",exampleTl:"Malamig na tubig"},
{id:"n4k41",type:"kanji",kanji:"痛",reading:"いたい",en:"painful",tl:"masakit",example:"頭が痛い",exampleEn:"I have a headache",exampleTl:"Masakit ang ulo ko"},
{id:"n4k42",type:"kanji",kanji:"安",reading:"あん・やす",en:"safe / cheap / peace",tl:"ligtas / mura",example:"安全に帰る",exampleEn:"Return home safely",exampleTl:"Umuwi nang ligtas"},
{id:"n4k43",type:"kanji",kanji:"危",reading:"き・あぶない",en:"dangerous",tl:"mapanganib",example:"危険な道",exampleEn:"A dangerous road",exampleTl:"Mapanganib na daan"},
{id:"n4k44",type:"kanji",kanji:"便",reading:"べん",en:"convenient",tl:"maginhawa",example:"便利な場所",exampleEn:"A convenient location",exampleTl:"Maginhawang lugar"},
{id:"n4k45",type:"kanji",kanji:"利",reading:"り",en:"profit / advantage",tl:"kalamangan",example:"便利な道具",exampleEn:"A useful tool",exampleTl:"Kapaki-pakinabang na kagamitan"},
{id:"n4k46",type:"kanji",kanji:"明",reading:"あかるい・めい",en:"bright / clear",tl:"maliwanag",example:"明るい部屋",exampleEn:"A bright room",exampleTl:"Maliwanag na silid"},
{id:"n4k47",type:"kanji",kanji:"暗",reading:"くらい",en:"dark",tl:"madilim",example:"暗い夜道",exampleEn:"A dark night road",exampleTl:"Madilim na daan sa gabi"},
{id:"n4k48",type:"kanji",kanji:"静",reading:"しずか",en:"quiet",tl:"tahimik",example:"静かな図書館",exampleEn:"A quiet library",exampleTl:"Tahimik na aklatan"},
{id:"n4k49",type:"kanji",kanji:"賑",reading:"にぎやか",en:"lively / busy",tl:"masaya / maingay",example:"賑やかな町",exampleEn:"A lively town",exampleTl:"Masayang bayan"},
{id:"n4k50",type:"kanji",kanji:"忙",reading:"いそがしい",en:"busy",tl:"abala",example:"毎日忙しい",exampleEn:"Busy every day",exampleTl:"Abala araw-araw"},
// ── VOCAB (50) ──
{id:"n4v01",type:"vocab",kanji:"家族",reading:"かぞく",en:"family",tl:"pamilya",example:"家族と夕食を食べる",exampleEn:"Eat dinner with the family",exampleTl:"Kumain ng hapunan kasama ang pamilya"},
{id:"n4v02",type:"vocab",kanji:"友達",reading:"ともだち",en:"friend",tl:"kaibigan",example:"友達に電話する",exampleEn:"Call a friend",exampleTl:"Tumawag sa kaibigan"},
{id:"n4v03",type:"vocab",kanji:"仕事",reading:"しごと",en:"work / job",tl:"trabaho",example:"仕事が終わった",exampleEn:"Work is finished",exampleTl:"Tapos na ang trabaho"},
{id:"n4v04",type:"vocab",kanji:"練習",reading:"れんしゅう",en:"practice",tl:"pagsasanay",example:"ピアノを練習する",exampleEn:"Practice the piano",exampleTl:"Mag-ensayo ng piano"},
{id:"n4v05",type:"vocab",kanji:"旅行",reading:"りょこう",en:"travel / trip",tl:"paglalakbay",example:"海外旅行をする",exampleEn:"Travel abroad",exampleTl:"Maglakbay sa ibang bansa"},
{id:"n4v06",type:"vocab",kanji:"生活",reading:"せいかつ",en:"daily life",tl:"pamumuhay",example:"一人暮らしの生活",exampleEn:"Life living alone",exampleTl:"Pamumuhay na nag-iisa"},
{id:"n4v07",type:"vocab",kanji:"言葉",reading:"ことば",en:"word / language",tl:"salita / wika",example:"丁寧な言葉を使う",exampleEn:"Use polite language",exampleTl:"Gumamit ng magalang na salita"},
{id:"n4v08",type:"vocab",kanji:"気持ち",reading:"きもち",en:"feeling / mood",tl:"pakiramdam",example:"嬉しい気持ちになる",exampleEn:"Feel happy",exampleTl:"Maramdamang masaya"},
{id:"n4v09",type:"vocab",kanji:"時間",reading:"じかん",en:"time",tl:"oras",example:"時間を守る",exampleEn:"Be on time",exampleTl:"Sumunod sa oras"},
{id:"n4v10",type:"vocab",kanji:"場所",reading:"ばしょ",en:"place / location",tl:"lugar",example:"待ち合わせ場所",exampleEn:"Meeting place",exampleTl:"Lugar ng pagtatagpuan"},
{id:"n4v11",type:"vocab",kanji:"方法",reading:"ほうほう",en:"method / way",tl:"paraan",example:"解決方法を考える",exampleEn:"Think of a solution",exampleTl:"Mag-isip ng solusyon"},
{id:"n4v12",type:"vocab",kanji:"予定",reading:"よてい",en:"plan / schedule",tl:"plano",example:"来週の予定",exampleEn:"Next week's plan",exampleTl:"Plano para sa susunod na linggo"},
{id:"n4v13",type:"vocab",kanji:"理由",reading:"りゆう",en:"reason",tl:"dahilan",example:"遅刻した理由",exampleEn:"Reason for being late",exampleTl:"Dahilan ng pagkahuli"},
{id:"n4v14",type:"vocab",kanji:"説明",reading:"せつめい",en:"explanation",tl:"paliwanag",example:"詳しく説明する",exampleEn:"Explain in detail",exampleTl:"Magpaliwanag nang detalyado"},
{id:"n4v15",type:"vocab",kanji:"質問",reading:"しつもん",en:"question",tl:"tanong",example:"先生に質問する",exampleEn:"Ask the teacher a question",exampleTl:"Magtanong sa guro"},
{id:"n4v16",type:"vocab",kanji:"返事",reading:"へんじ",en:"reply / answer",tl:"sagot / tugon",example:"すぐに返事をする",exampleEn:"Reply immediately",exampleTl:"Sumagot agad"},
{id:"n4v17",type:"vocab",kanji:"準備",reading:"じゅんび",en:"preparation",tl:"paghahanda",example:"試験の準備をする",exampleEn:"Prepare for the exam",exampleTl:"Maghanda para sa pagsusulit"},
{id:"n4v18",type:"vocab",kanji:"世話",reading:"せわ",en:"care / help",tl:"pag-aalaga",example:"子どもの世話をする",exampleEn:"Take care of a child",exampleTl:"Alagaan ang bata"},
{id:"n4v19",type:"vocab",kanji:"文章",reading:"ぶんしょう",en:"sentence / text",tl:"pangungusap / teksto",example:"文章を書く",exampleEn:"Write a sentence",exampleTl:"Sumulat ng pangungusap"},
{id:"n4v20",type:"vocab",kanji:"意味",reading:"いみ",en:"meaning",tl:"kahulugan",example:"この言葉の意味は？",exampleEn:"What is the meaning of this word?",exampleTl:"Ano ang kahulugan ng salitang ito?"},
{id:"n4v21",type:"vocab",kanji:"地図",reading:"ちず",en:"map",tl:"mapa",example:"地図で場所を確認する",exampleEn:"Check the location on a map",exampleTl:"Tingnan ang lugar sa mapa"},
{id:"n4v22",type:"vocab",kanji:"問題",reading:"もんだい",en:"problem / question",tl:"problema / tanong",example:"試験問題を解く",exampleEn:"Solve exam questions",exampleTl:"Lutasin ang mga tanong sa pagsusulit"},
{id:"n4v23",type:"vocab",kanji:"授業",reading:"じゅぎょう",en:"class / lesson",tl:"klase / leksyon",example:"授業を受ける",exampleEn:"Attend a class",exampleTl:"Dumalo sa klase"},
{id:"n4v24",type:"vocab",kanji:"宿題",reading:"しゅくだい",en:"homework",tl:"takdang-aralin",example:"宿題を忘れた",exampleEn:"Forgot the homework",exampleTl:"Nalimutan ang takdang-aralin"},
{id:"n4v25",type:"vocab",kanji:"試験",reading:"しけん",en:"exam / test",tl:"pagsusulit / eksamen",example:"試験に合格する",exampleEn:"Pass the exam",exampleTl:"Pumasa sa eksamen"},
{id:"n4v26",type:"vocab",kanji:"成績",reading:"せいせき",en:"grades / results",tl:"grado / resulta",example:"成績が上がった",exampleEn:"Grades improved",exampleTl:"Tumaas ang grado"},
{id:"n4v27",type:"vocab",kanji:"卒業",reading:"そつぎょう",en:"graduation",tl:"pagtatapos",example:"大学を卒業する",exampleEn:"Graduate from university",exampleTl:"Matapos sa unibersidad"},
{id:"n4v28",type:"vocab",kanji:"入学",reading:"にゅうがく",en:"school entry",tl:"pagpasok sa paaralan",example:"高校に入学する",exampleEn:"Enter high school",exampleTl:"Pumasok sa mataas na paaralan"},
{id:"n4v29",type:"vocab",kanji:"運動",reading:"うんどう",en:"exercise / sports",tl:"ehersisyo / palakasan",example:"運動不足です",exampleEn:"I lack exercise",exampleTl:"Kulang ako sa ehersisyo"},
{id:"n4v30",type:"vocab",kanji:"音楽",reading:"おんがく",en:"music",tl:"musika",example:"音楽を聞く",exampleEn:"Listen to music",exampleTl:"Makinig ng musika"},
{id:"n4v31",type:"vocab",kanji:"映画",reading:"えいが",en:"movie / film",tl:"pelikula",example:"映画を見に行く",exampleEn:"Go to see a movie",exampleTl:"Pumunta sa sinehan"},
{id:"n4v32",type:"vocab",kanji:"写真",reading:"しゃしん",en:"photograph",tl:"larawan / litrato",example:"写真を撮る",exampleEn:"Take a photograph",exampleTl:"Kumuha ng litrato"},
{id:"n4v33",type:"vocab",kanji:"病院",reading:"びょういん",en:"hospital",tl:"ospital",example:"病院に行く",exampleEn:"Go to the hospital",exampleTl:"Pumunta sa ospital"},
{id:"n4v34",type:"vocab",kanji:"薬",reading:"くすり",en:"medicine",tl:"gamot",example:"薬を飲む",exampleEn:"Take medicine",exampleTl:"Uminom ng gamot"},
{id:"n4v35",type:"vocab",kanji:"体重",reading:"たいじゅう",en:"body weight",tl:"timbang",example:"体重が増えた",exampleEn:"Weight increased",exampleTl:"Tumaas ang timbang"},
{id:"n4v36",type:"vocab",kanji:"電気",reading:"でんき",en:"electricity / light",tl:"kuryente / ilaw",example:"電気をつける",exampleEn:"Turn on the light",exampleTl:"I-on ang ilaw"},
{id:"n4v37",type:"vocab",kanji:"冷蔵庫",reading:"れいぞうこ",en:"refrigerator",tl:"ref / refrigerador",example:"冷蔵庫に入れる",exampleEn:"Put it in the refrigerator",exampleTl:"Ilagay sa ref"},
{id:"n4v38",type:"vocab",kanji:"洗濯",reading:"せんたく",en:"laundry / washing",tl:"paglalaba",example:"洗濯をする",exampleEn:"Do the laundry",exampleTl:"Maglaba"},
{id:"n4v39",type:"vocab",kanji:"掃除",reading:"そうじ",en:"cleaning / sweeping",tl:"paglilinis",example:"部屋を掃除する",exampleEn:"Clean the room",exampleTl:"Linisin ang silid"},
{id:"n4v40",type:"vocab",kanji:"料金",reading:"りょうきん",en:"fee / charge / fare",tl:"bayad / singil",example:"料金を払う",exampleEn:"Pay the fee",exampleTl:"Bayaran ang singil"},
{id:"n4v41",type:"vocab",kanji:"駐車場",reading:"ちゅうしゃじょう",en:"parking lot",tl:"paradahan",example:"駐車場に止める",exampleEn:"Park in the parking lot",exampleTl:"Ipark sa paradahan"},
{id:"n4v42",type:"vocab",kanji:"信号",reading:"しんごう",en:"traffic light",tl:"semaporo",example:"信号で止まる",exampleEn:"Stop at the traffic light",exampleTl:"Huminto sa semaporo"},
{id:"n4v43",type:"vocab",kanji:"交通",reading:"こうつう",en:"traffic / transportation",tl:"trapiko / transportasyon",example:"交通が便利",exampleEn:"Transportation is convenient",exampleTl:"Maginhawa ang transportasyon"},
{id:"n4v44",type:"vocab",kanji:"天気予報",reading:"てんきよほう",en:"weather forecast",tl:"ulat panahon",example:"天気予報を見る",exampleEn:"Check the weather forecast",exampleTl:"Tingnan ang ulat panahon"},
{id:"n4v45",type:"vocab",kanji:"文化",reading:"ぶんか",en:"culture",tl:"kultura",example:"日本文化を学ぶ",exampleEn:"Learn Japanese culture",exampleTl:"Matuto ng kulturang Hapon"},
{id:"n4v46",type:"vocab",kanji:"習慣",reading:"しゅうかん",en:"habit / custom",tl:"gawi / ugali",example:"食前に手を洗う習慣",exampleEn:"Habit of washing hands before meals",exampleTl:"Gawi ng paghuhugas ng kamay bago kumain"},
{id:"n4v47",type:"vocab",kanji:"挨拶",reading:"あいさつ",en:"greeting",tl:"pagbati",example:"朝の挨拶をする",exampleEn:"Give a morning greeting",exampleTl:"Mag-abot ng pagbati sa umaga"},
{id:"n4v48",type:"vocab",kanji:"笑顔",reading:"えがお",en:"smiling face",tl:"ngiti",example:"笑顔でお客様を迎える",exampleEn:"Welcome customers with a smile",exampleTl:"Tanggapin ang mga customer na may ngiti"},
{id:"n4v49",type:"vocab",kanji:"記念",reading:"きねん",en:"commemoration",tl:"alaala / commemoration",example:"記念写真を撮る",exampleEn:"Take a commemorative photo",exampleTl:"Kumuha ng commemorative na litrato"},
{id:"n4v50",type:"vocab",kanji:"残念",reading:"ざんねん",en:"regrettable / unfortunate",tl:"nakakalungkot",example:"残念ながら行けない",exampleEn:"Unfortunately I can't go",exampleTl:"Sa kasamaang palad hindi ako makakpunta"},
],

N3: [
// ── KANJI (50) ──
{id:"n3k01",type:"kanji",kanji:"意",reading:"い",en:"meaning / intention",tl:"kahulugan",example:"意味を確認する",exampleEn:"Confirm the meaning",exampleTl:"Kumpirmahin ang kahulugan"},
{id:"n3k02",type:"kanji",kanji:"感",reading:"かん",en:"feeling / sense",tl:"pakiramdam",example:"感動した映画",exampleEn:"A touching movie",exampleTl:"Nakakaantig na pelikula"},
{id:"n3k03",type:"kanji",kanji:"化",reading:"か",en:"change / transform",tl:"pagbabago",example:"文化の変化",exampleEn:"Cultural change",exampleTl:"Pagbabago ng kultura"},
{id:"n3k04",type:"kanji",kanji:"関",reading:"かん",en:"related to",tl:"may kaugnayan",example:"関係を築く",exampleEn:"Build a relationship",exampleTl:"Bumuo ng relasyon"},
{id:"n3k05",type:"kanji",kanji:"験",reading:"けん",en:"experience / test",tl:"karanasan / pagsusulit",example:"受験勉強をする",exampleEn:"Study for an entrance exam",exampleTl:"Mag-aral para sa entrance exam"},
{id:"n3k06",type:"kanji",kanji:"議",reading:"ぎ",en:"deliberation",tl:"talakayan",example:"会議に参加する",exampleEn:"Participate in a meeting",exampleTl:"Sumali sa pulong"},
{id:"n3k07",type:"kanji",kanji:"決",reading:"けつ",en:"decide",tl:"magpasya",example:"大事なことを決める",exampleEn:"Decide something important",exampleTl:"Magpasya ng mahalagang bagay"},
{id:"n3k08",type:"kanji",kanji:"最",reading:"さい",en:"most / utmost",tl:"pinaka",example:"最近どうですか",exampleEn:"How have you been lately?",exampleTl:"Kumusta ka na kamakailan?"},
{id:"n3k09",type:"kanji",kanji:"様",reading:"よう",en:"manner / appearance",tl:"paraan / hitsura",example:"様子を見る",exampleEn:"Watch how things go",exampleTl:"Obserbahan ang mga bagay"},
{id:"n3k10",type:"kanji",kanji:"続",reading:"ぞく",en:"continue",tl:"magpatuloy",example:"練習を続ける",exampleEn:"Continue practising",exampleTl:"Magpatuloy ng pagsasanay"},
{id:"n3k11",type:"kanji",kanji:"進",reading:"しん",en:"advance",tl:"sumulong",example:"研究が進む",exampleEn:"Research advances",exampleTl:"Sumusulong ang pananaliksik"},
{id:"n3k12",type:"kanji",kanji:"運",reading:"うん",en:"luck / carry",tl:"kapalaran / magdala",example:"運動不足です",exampleEn:"I lack exercise",exampleTl:"Kulang ako sa ehersisyo"},
{id:"n3k13",type:"kanji",kanji:"動",reading:"どう",en:"move / motion",tl:"gumalaw",example:"感動する映画",exampleEn:"A moving film",exampleTl:"Nakakakilig na pelikula"},
{id:"n3k14",type:"kanji",kanji:"力",reading:"ちから",en:"power / strength",tl:"lakas",example:"努力が必要だ",exampleEn:"Effort is necessary",exampleTl:"Kailangan ng pagsisikap"},
{id:"n3k15",type:"kanji",kanji:"数",reading:"すう",en:"number / count",tl:"bilang",example:"数学が得意",exampleEn:"Good at mathematics",exampleTl:"Mahusay sa matematika"},
{id:"n3k16",type:"kanji",kanji:"形",reading:"けい",en:"shape / form",tl:"hugis",example:"三角形を描く",exampleEn:"Draw a triangle",exampleTl:"Gumuhit ng tatsulok"},
{id:"n3k17",type:"kanji",kanji:"深",reading:"しん",en:"deep",tl:"malalim",example:"深い意味がある",exampleEn:"There is a deep meaning",exampleTl:"Mayroon itong malalim na kahulugan"},
{id:"n3k18",type:"kanji",kanji:"暖",reading:"だん",en:"warm",tl:"mainit-init",example:"暖かい部屋",exampleEn:"A warm room",exampleTl:"Mainit-initang silid"},
{id:"n3k19",type:"kanji",kanji:"痛",reading:"つう",en:"painful",tl:"masakit",example:"頭が痛い",exampleEn:"My head hurts",exampleTl:"Masakit ang ulo ko"},
{id:"n3k20",type:"kanji",kanji:"困",reading:"こん",en:"troubled",tl:"nalilito / nag-aalala",example:"困った状況",exampleEn:"A troubling situation",exampleTl:"Mahirap na sitwasyon"},
{id:"n3k21",type:"kanji",kanji:"反",reading:"はん",en:"oppose / anti",tl:"laban",example:"反対意見を言う",exampleEn:"State an opposing opinion",exampleTl:"Sabihin ang salungat na opinyon"},
{id:"n3k22",type:"kanji",kanji:"対",reading:"たい",en:"against / pair",tl:"laban sa / pares",example:"対策を取る",exampleEn:"Take measures",exampleTl:"Gumawa ng mga hakbang"},
{id:"n3k23",type:"kanji",kanji:"表",reading:"ひょう",en:"surface / express / table",tl:"ibabaw / ipahayag",example:"感情を表す",exampleEn:"Express emotions",exampleTl:"Ipahayag ang damdamin"},
{id:"n3k24",type:"kanji",kanji:"現",reading:"げん",en:"present / appear",tl:"kasalukuyan / lumabas",example:"現在の状況",exampleEn:"Current situation",exampleTl:"Kasalukuyang sitwasyon"},
{id:"n3k25",type:"kanji",kanji:"実",reading:"じつ",en:"reality / truth",tl:"katotohanan",example:"実は知っていた",exampleEn:"Actually, I knew",exampleTl:"Sa katunayan, alam ko na"},
{id:"n3k26",type:"kanji",kanji:"際",reading:"さい",en:"occasion / edge",tl:"pagkakataon",example:"その際に連絡する",exampleEn:"Contact at that time",exampleTl:"Makipag-ugnayan sa pagkakataong iyon"},
{id:"n3k27",type:"kanji",kanji:"必",reading:"ひつ",en:"necessary",tl:"kailangan",example:"必要な書類",exampleEn:"Necessary documents",exampleTl:"Kinakailangang dokumento"},
{id:"n3k28",type:"kanji",kanji:"要",reading:"よう",en:"need / essential",tl:"kailangan / mahalaga",example:"要点をまとめる",exampleEn:"Summarise the key points",exampleTl:"Buod ang mga pangunahing punto"},
{id:"n3k29",type:"kanji",kanji:"選",reading:"せん",en:"choose / select",tl:"pumili",example:"職業を選ぶ",exampleEn:"Choose a career",exampleTl:"Pumili ng trabaho"},
{id:"n3k30",type:"kanji",kanji:"集",reading:"しゅう",en:"gather / collect",tl:"mag-ipon / magtipun",example:"情報を集める",exampleEn:"Gather information",exampleTl:"Mag-ipon ng impormasyon"},
{id:"n3k31",type:"kanji",kanji:"共",reading:"きょう",en:"together / share",tl:"magkasama",example:"共に頑張る",exampleEn:"Work hard together",exampleTl:"Magsama-samang magsikap"},
{id:"n3k32",type:"kanji",kanji:"各",reading:"かく",en:"each / every",tl:"bawat isa",example:"各地で問題が起きる",exampleEn:"Problems occur in each area",exampleTl:"Nagaganap ang mga problema sa bawat lugar"},
{id:"n3k33",type:"kanji",kanji:"全",reading:"ぜん",en:"all / complete",tl:"lahat",example:"全力を尽くす",exampleEn:"Give one's all",exampleTl:"Ibigay ang lahat"},
{id:"n3k34",type:"kanji",kanji:"半",reading:"はん",en:"half",tl:"kalahati",example:"半分に分ける",exampleEn:"Divide in half",exampleTl:"Hatiin sa kalahati"},
{id:"n3k35",type:"kanji",kanji:"部",reading:"ぶ",en:"part / section",tl:"bahagi",example:"一部の人だけ",exampleEn:"Only some people",exampleTl:"Ilang tao lang"},
{id:"n3k36",type:"kanji",kanji:"以",reading:"い",en:"by means of / compared to",tl:"sa pamamagitan ng",example:"以前より上手になった",exampleEn:"Got better than before",exampleTl:"Naging mas mahusay kaysa dati"},
{id:"n3k37",type:"kanji",kanji:"得",reading:"とく",en:"gain / benefit",tl:"makuha / pakinabang",example:"知識を得る",exampleEn:"Gain knowledge",exampleTl:"Makakuha ng kaalaman"},
{id:"n3k38",type:"kanji",kanji:"失",reading:"しつ",en:"lose / miss",tl:"mawala",example:"仕事を失う",exampleEn:"Lose one's job",exampleTl:"Mawala ang trabaho"},
{id:"n3k39",type:"kanji",kanji:"成",reading:"せい",en:"become / accomplish",tl:"maging / magawa",example:"成功を収める",exampleEn:"Achieve success",exampleTl:"Makamit ang tagumpay"},
{id:"n3k40",type:"kanji",kanji:"功",reading:"こう",en:"achievement / merit",tl:"tagumpay",example:"成功するために努力する",exampleEn:"Work hard to succeed",exampleTl:"Magsikap para magtagumpay"},
{id:"n3k41",type:"kanji",kanji:"望",reading:"ぼう",en:"hope / wish",tl:"pag-asa / kagustuhan",example:"将来の夢を望む",exampleEn:"Hope for future dreams",exampleTl:"Mag-asang matupad ang mga pangarap"},
{id:"n3k42",type:"kanji",kanji:"願",reading:"がん",en:"wish / request",tl:"kahilingan / hiling",example:"お願いがあります",exampleEn:"I have a request",exampleTl:"Mayroon akong kahilingan"},
{id:"n3k43",type:"kanji",kanji:"答",reading:"とう",en:"answer / respond",tl:"sagot",example:"質問に答える",exampleEn:"Answer a question",exampleTl:"Sumagot sa tanong"},
{id:"n3k44",type:"kanji",kanji:"教",reading:"きょう",en:"teach / religion",tl:"magturo",example:"英語を教える",exampleEn:"Teach English",exampleTl:"Magturo ng Ingles"},
{id:"n3k45",type:"kanji",kanji:"習",reading:"しゅう",en:"learn / practice",tl:"matuto",example:"水泳を習う",exampleEn:"Learn swimming",exampleTl:"Matuto ng paglangoy"},
{id:"n3k46",type:"kanji",kanji:"知",reading:"ち",en:"know / wisdom",tl:"malaman",example:"知識を増やす",exampleEn:"Increase knowledge",exampleTl:"Dagdagan ang kaalaman"},
{id:"n3k47",type:"kanji",kanji:"考",reading:"こう",en:"think / consider",tl:"mag-isip",example:"よく考えて決める",exampleEn:"Decide after careful thought",exampleTl:"Magpasya pagkatapos mag-isip nang mabuti"},
{id:"n3k48",type:"kanji",kanji:"思",reading:"し",en:"think / feel",tl:"isipin",example:"そう思います",exampleEn:"I think so",exampleTl:"Ganoon ang aking palagay"},
{id:"n3k49",type:"kanji",kanji:"記",reading:"き",en:"record / note",tl:"itala",example:"日記を書く",exampleEn:"Write a diary",exampleTl:"Sumulat ng talaarawan"},
{id:"n3k50",type:"kanji",kanji:"忘",reading:"ぼう",en:"forget",tl:"malimutan",example:"名前を忘れた",exampleEn:"Forgot the name",exampleTl:"Nalimutan ang pangalan"},
// ── VOCAB (50) ──
{id:"n3v01",type:"vocab",kanji:"経験",reading:"けいけん",en:"experience",tl:"karanasan",example:"仕事の経験を積む",exampleEn:"Gain work experience",exampleTl:"Makakuha ng karanasan sa trabaho"},
{id:"n3v02",type:"vocab",kanji:"社会",reading:"しゃかい",en:"society",tl:"lipunan",example:"社会問題を考える",exampleEn:"Think about social issues",exampleTl:"Pag-isipan ang mga isyung panlipunan"},
{id:"n3v03",type:"vocab",kanji:"場合",reading:"ばあい",en:"case / situation",tl:"kaso / sitwasyon",example:"緊急の場合",exampleEn:"In an emergency",exampleTl:"Sa emergency"},
{id:"n3v04",type:"vocab",kanji:"原因",reading:"げんいん",en:"cause",tl:"sanhi",example:"事故の原因を調べる",exampleEn:"Investigate the cause of the accident",exampleTl:"Imbestigahan ang sanhi ng aksidente"},
{id:"n3v05",type:"vocab",kanji:"目的",reading:"もくてき",en:"purpose / goal",tl:"layunin",example:"目的を持って行動する",exampleEn:"Act with a purpose",exampleTl:"Kumilos nang may layunin"},
{id:"n3v06",type:"vocab",kanji:"注意",reading:"ちゅうい",en:"caution / attention",tl:"pag-ingat / pansin",example:"注意を払う",exampleEn:"Pay attention",exampleTl:"Magbigay ng pansin"},
{id:"n3v07",type:"vocab",kanji:"連絡",reading:"れんらく",en:"contact / communication",tl:"pakikipag-ugnayan",example:"連絡が取れない",exampleEn:"Cannot get in contact",exampleTl:"Hindi makontak"},
{id:"n3v08",type:"vocab",kanji:"気をつける",reading:"きをつける",en:"to be careful",tl:"mag-ingat",example:"車に気をつけて",exampleEn:"Be careful of cars",exampleTl:"Mag-ingat sa mga sasakyan"},
{id:"n3v09",type:"vocab",kanji:"集まる",reading:"あつまる",en:"to gather",tl:"magtipun-tipon",example:"友達が集まる",exampleEn:"Friends gather",exampleTl:"Nagtitipon ang mga kaibigan"},
{id:"n3v10",type:"vocab",kanji:"変わる",reading:"かわる",en:"to change",tl:"magbago",example:"考えが変わった",exampleEn:"My thinking changed",exampleTl:"Nagbago ang aking pag-iisip"},
{id:"n3v11",type:"vocab",kanji:"増える",reading:"ふえる",en:"to increase",tl:"dumami",example:"仕事が増える",exampleEn:"Work increases",exampleTl:"Dumadami ang trabaho"},
{id:"n3v12",type:"vocab",kanji:"減る",reading:"へる",en:"to decrease",tl:"bumawas",example:"体重が減る",exampleEn:"Body weight decreases",exampleTl:"Bumababa ang timbang"},
{id:"n3v13",type:"vocab",kanji:"比べる",reading:"くらべる",en:"to compare",tl:"ikumpara",example:"値段を比べる",exampleEn:"Compare prices",exampleTl:"Ikumpara ang mga presyo"},
{id:"n3v14",type:"vocab",kanji:"伝える",reading:"つたえる",en:"to convey",tl:"ipahayag",example:"気持ちを伝える",exampleEn:"Convey feelings",exampleTl:"Ipahayag ang damdamin"},
{id:"n3v15",type:"vocab",kanji:"表現",reading:"ひょうげん",en:"expression",tl:"pagpapahayag",example:"感情を表現する",exampleEn:"Express emotions",exampleTl:"Ipahayag ang emosyon"},
{id:"n3v16",type:"vocab",kanji:"以上",reading:"いじょう",en:"more than / above",tl:"higit sa",example:"18歳以上が対象",exampleEn:"For those 18 and above",exampleTl:"Para sa 18 taong gulang pataas"},
{id:"n3v17",type:"vocab",kanji:"以下",reading:"いか",en:"less than / below",tl:"mas mababa sa",example:"定員以下です",exampleEn:"Below capacity",exampleTl:"Mas mababa sa kapasidad"},
{id:"n3v18",type:"vocab",kanji:"以外",reading:"いがい",en:"other than / except",tl:"maliban sa",example:"これ以外の方法",exampleEn:"Methods other than this",exampleTl:"Mga paraan maliban dito"},
{id:"n3v19",type:"vocab",kanji:"以内",reading:"いない",en:"within",tl:"sa loob ng",example:"三日以内に返す",exampleEn:"Return within three days",exampleTl:"Ibalik sa loob ng tatlong araw"},
{id:"n3v20",type:"vocab",kanji:"特に",reading:"とくに",en:"especially",tl:"lalo na",example:"特に好きな科目",exampleEn:"Especially favourite subject",exampleTl:"Lalo na ang paboritong paksa"},
{id:"n3v21",type:"vocab",kanji:"急に",reading:"きゅうに",en:"suddenly",tl:"bigla",example:"急に雨が降り出した",exampleEn:"It suddenly started raining",exampleTl:"Bigla na lang umulan"},
{id:"n3v22",type:"vocab",kanji:"別に",reading:"べつに",en:"separately / not particularly",tl:"hiwalay / walang",example:"別に問題はない",exampleEn:"There is no particular problem",exampleTl:"Walang partikular na problema"},
{id:"n3v23",type:"vocab",kanji:"主に",reading:"おもに",en:"mainly / mostly",tl:"pangunahin",example:"主に家で働く",exampleEn:"Mainly work at home",exampleTl:"Pangunahin sa bahay nagtatrabaho"},
{id:"n3v24",type:"vocab",kanji:"確認",reading:"かくにん",en:"confirmation",tl:"kumpirmasyon",example:"予約を確認する",exampleEn:"Confirm the reservation",exampleTl:"Kumpirmahin ang reserbasyon"},
{id:"n3v25",type:"vocab",kanji:"判断",reading:"はんだん",en:"judgment",tl:"pagpapasya",example:"正確な判断をする",exampleEn:"Make an accurate judgment",exampleTl:"Gumawa ng tumpak na pagpapasya"},
{id:"n3v26",type:"vocab",kanji:"相談",reading:"そうだん",en:"consultation",tl:"konsultasyon",example:"友達に相談する",exampleEn:"Consult a friend",exampleTl:"Kumonsulta sa kaibigan"},
{id:"n3v27",type:"vocab",kanji:"解決",reading:"かいけつ",en:"resolution / solution",tl:"solusyon",example:"問題を解決する",exampleEn:"Resolve the problem",exampleTl:"Lutasin ang problema"},
{id:"n3v28",type:"vocab",kanji:"利用",reading:"りよう",en:"use / utilisation",tl:"paggamit",example:"図書館を利用する",exampleEn:"Use the library",exampleTl:"Gamitin ang aklatan"},
{id:"n3v29",type:"vocab",kanji:"参加",reading:"さんか",en:"participation",tl:"pagsali",example:"会議に参加する",exampleEn:"Participate in a meeting",exampleTl:"Sumali sa pulong"},
{id:"n3v30",type:"vocab",kanji:"紹介",reading:"しょうかい",en:"introduction",tl:"pagpapakilala",example:"友達を紹介する",exampleEn:"Introduce a friend",exampleTl:"Ipakilala ang kaibigan"},
{id:"n3v31",type:"vocab",kanji:"調査",reading:"ちょうさ",en:"investigation / survey",tl:"imbestigasyon / survey",example:"アンケート調査をする",exampleEn:"Conduct a questionnaire survey",exampleTl:"Magsagawa ng survey"},
{id:"n3v32",type:"vocab",kanji:"報告",reading:"ほうこく",en:"report",tl:"ulat",example:"結果を報告する",exampleEn:"Report the results",exampleTl:"Iulat ang mga resulta"},
{id:"n3v33",type:"vocab",kanji:"申し込み",reading:"もうしこみ",en:"application",tl:"aplikasyon",example:"コースに申し込む",exampleEn:"Apply for a course",exampleTl:"Mag-apply sa kurso"},
{id:"n3v34",type:"vocab",kanji:"手続き",reading:"てつづき",en:"procedure",tl:"proseso",example:"入学手続きをする",exampleEn:"Complete the enrolment procedure",exampleTl:"Kumpletuhin ang proseso ng pagpasok"},
{id:"n3v35",type:"vocab",kanji:"費用",reading:"ひよう",en:"cost / expense",tl:"gastos",example:"旅行の費用",exampleEn:"Travel cost",exampleTl:"Gastos sa paglalakbay"},
{id:"n3v36",type:"vocab",kanji:"節約",reading:"せつやく",en:"economy / saving",tl:"pagtitipid",example:"電気代を節約する",exampleEn:"Save on electricity costs",exampleTl:"Makatipid sa kuryente"},
{id:"n3v37",type:"vocab",kanji:"環境",reading:"かんきょう",en:"environment",tl:"kapaligiran",example:"環境を守る",exampleEn:"Protect the environment",exampleTl:"Pangalagaan ang kapaligiran"},
{id:"n3v38",type:"vocab",kanji:"影響",reading:"えいきょう",en:"influence / effect",tl:"impluwensya",example:"健康に影響する",exampleEn:"Affect health",exampleTl:"Makaapekto sa kalusugan"},
{id:"n3v39",type:"vocab",kanji:"状態",reading:"じょうたい",en:"state / condition",tl:"kondisyon",example:"良い状態を保つ",exampleEn:"Maintain a good condition",exampleTl:"Panatilihin ang magandang kondisyon"},
{id:"n3v40",type:"vocab",kanji:"程度",reading:"ていど",en:"degree / extent",tl:"antas / lawak",example:"ある程度できる",exampleEn:"Can do to some extent",exampleTl:"Kaya sa isang antas"},
{id:"n3v41",type:"vocab",kanji:"様子",reading:"ようす",en:"appearance / state",tl:"hitsura / kondisyon",example:"体の様子が変だ",exampleEn:"The body's condition is strange",exampleTl:"Kakaiba ang kondisyon ng katawan"},
{id:"n3v42",type:"vocab",kanji:"気分",reading:"きぶん",en:"feeling / mood",tl:"mood / pakiramdam",example:"気分が悪い",exampleEn:"I feel sick",exampleTl:"Masama ang pakiramdam ko"},
{id:"n3v43",type:"vocab",kanji:"人気",reading:"にんき",en:"popularity",tl:"popularidad",example:"人気がある歌手",exampleEn:"A popular singer",exampleTl:"Sikat na mang-aawit"},
{id:"n3v44",type:"vocab",kanji:"意見",reading:"いけん",en:"opinion",tl:"opinyon",example:"意見を言う",exampleEn:"State an opinion",exampleTl:"Sabihin ang opinyon"},
{id:"n3v45",type:"vocab",kanji:"理解",reading:"りかい",en:"understanding",tl:"pag-unawa",example:"内容を理解する",exampleEn:"Understand the content",exampleTl:"Unawain ang nilalaman"},
{id:"n3v46",type:"vocab",kanji:"失敗",reading:"しっぱい",en:"failure / mistake",tl:"kabiguan / pagkakamali",example:"失敗から学ぶ",exampleEn:"Learn from failure",exampleTl:"Matuto mula sa kabiguan"},
{id:"n3v47",type:"vocab",kanji:"成功",reading:"せいこう",en:"success",tl:"tagumpay",example:"プロジェクトが成功した",exampleEn:"The project succeeded",exampleTl:"Nagtagumpay ang proyekto"},
{id:"n3v48",type:"vocab",kanji:"努力",reading:"どりょく",en:"effort",tl:"pagsisikap",example:"努力が実る",exampleEn:"Effort bears fruit",exampleTl:"Nagbubunga ang pagsisikap"},
{id:"n3v49",type:"vocab",kanji:"可能",reading:"かのう",en:"possible",tl:"posible",example:"それは可能ですか",exampleEn:"Is that possible?",exampleTl:"Posible ba iyon?"},
{id:"n3v50",type:"vocab",kanji:"不可能",reading:"ふかのう",en:"impossible",tl:"imposible",example:"不可能ではない",exampleEn:"It is not impossible",exampleTl:"Hindi imposible iyon"},
],

N2: [
// ── KANJI (50) ──
{id:"n2k01",type:"kanji",kanji:"概",reading:"がい",en:"general / outline",tl:"pangkalahatan",example:"概念を把握する",exampleEn:"Grasp the concept",exampleTl:"Unawain ang konsepto"},
{id:"n2k02",type:"kanji",kanji:"敬",reading:"けい",en:"respect",tl:"paggalang",example:"敬語を正しく使う",exampleEn:"Use honorifics correctly",exampleTl:"Gamitin nang tama ang magalang na wika"},
{id:"n2k03",type:"kanji",kanji:"縮",reading:"しゅく",en:"shrink",tl:"lumiiit",example:"距離を縮める",exampleEn:"Shorten the distance",exampleTl:"Paikliin ang distansya"},
{id:"n2k04",type:"kanji",kanji:"拡",reading:"かく",en:"expand",tl:"palawakin",example:"事業を拡大する",exampleEn:"Expand the business",exampleTl:"Palawakin ang negosyo"},
{id:"n2k05",type:"kanji",kanji:"及",reading:"きゅう",en:"reach / extend",tl:"maabot",example:"影響が各地に及ぶ",exampleEn:"Influence reaches everywhere",exampleTl:"Naaabot ng impluwensya sa lahat ng lugar"},
{id:"n2k06",type:"kanji",kanji:"賛",reading:"さん",en:"agree / praise",tl:"sumasang-ayon",example:"提案に賛成する",exampleEn:"Agree with the proposal",exampleTl:"Sumasang-ayon sa panukala"},
{id:"n2k07",type:"kanji",kanji:"互",reading:"ご",en:"mutual",tl:"isa't isa",example:"お互いに協力する",exampleEn:"Cooperate with each other",exampleTl:"Magtulungan"},
{id:"n2k08",type:"kanji",kanji:"繁",reading:"はん",en:"prosperous",tl:"masagana",example:"市場が繁盛する",exampleEn:"The market prospers",exampleTl:"Umunlad ang palengke"},
{id:"n2k09",type:"kanji",kanji:"貧",reading:"ひん",en:"poor",tl:"mahirap",example:"貧困問題",exampleEn:"Poverty issue",exampleTl:"Problema ng kahirapan"},
{id:"n2k10",type:"kanji",kanji:"豊",reading:"ほう",en:"abundant / rich",tl:"masagana",example:"豊かな自然",exampleEn:"Abundant nature",exampleTl:"Masaganang kalikasan"},
{id:"n2k11",type:"kanji",kanji:"疑",reading:"ぎ",en:"doubt",tl:"duda",example:"真実を疑う",exampleEn:"Doubt the truth",exampleTl:"Mag-duda sa katotohanan"},
{id:"n2k12",type:"kanji",kanji:"促",reading:"そく",en:"urge / promote",tl:"hikayatin",example:"改善を促す",exampleEn:"Urge improvement",exampleTl:"Hikayatin ang pagpapabuti"},
{id:"n2k13",type:"kanji",kanji:"採",reading:"さい",en:"adopt / take",tl:"kunin / piliin",example:"対策を採用する",exampleEn:"Adopt measures",exampleTl:"Gamitin ang mga hakbang"},
{id:"n2k14",type:"kanji",kanji:"環",reading:"かん",en:"ring / environment",tl:"kapaligiran",example:"環境を守る",exampleEn:"Protect the environment",exampleTl:"Pangalagaan ang kapaligiran"},
{id:"n2k15",type:"kanji",kanji:"策",reading:"さく",en:"plan / policy",tl:"plano / patakaran",example:"対策を立てる",exampleEn:"Establish countermeasures",exampleTl:"Bumuo ng mga hakbang"},
{id:"n2k16",type:"kanji",kanji:"複",reading:"ふく",en:"double / complex",tl:"kumplikado",example:"複雑な問題",exampleEn:"A complex problem",exampleTl:"Kumplikadong problema"},
{id:"n2k17",type:"kanji",kanji:"純",reading:"じゅん",en:"pure",tl:"dalisay",example:"純粋な気持ち",exampleEn:"Pure feelings",exampleTl:"Dalisay na damdamin"},
{id:"n2k18",type:"kanji",kanji:"徐",reading:"じょ",en:"gradually",tl:"unti-unti",example:"徐々に回復する",exampleEn:"Gradually recover",exampleTl:"Unti-unting gumaling"},
{id:"n2k19",type:"kanji",kanji:"抑",reading:"よく",en:"suppress / hold back",tl:"pigilan",example:"感情を抑える",exampleEn:"Suppress emotions",exampleTl:"Pigilan ang damdamin"},
{id:"n2k20",type:"kanji",kanji:"緩",reading:"かん",en:"loose / slow / relax",tl:"maluwag / relax",example:"規制を緩和する",exampleEn:"Relax regulations",exampleTl:"Bawasan ang mga regulasyon"},
{id:"n2k21",type:"kanji",kanji:"厳",reading:"げん",en:"strict / severe",tl:"mahigpit",example:"厳しい条件",exampleEn:"Strict conditions",exampleTl:"Mahigpit na kondisyon"},
{id:"n2k22",type:"kanji",kanji:"柔",reading:"じゅう",en:"soft / flexible",tl:"malambot / flexible",example:"柔軟に対応する",exampleEn:"Respond flexibly",exampleTl:"Tumugon nang may kakayahang umangkop"},
{id:"n2k23",type:"kanji",kanji:"維",reading:"い",en:"maintain / preserve",tl:"panatilihin",example:"現状を維持する",exampleEn:"Maintain the status quo",exampleTl:"Panatilihin ang kasalukuyang kalagayan"},
{id:"n2k24",type:"kanji",kanji:"持",reading:"じ",en:"hold / have",tl:"hawak / mayroon",example:"責任を持つ",exampleEn:"Take responsibility",exampleTl:"Tanggapin ang responsibilidad"},
{id:"n2k25",type:"kanji",kanji:"推",reading:"すい",en:"push / infer",tl:"itulak / mahulaan",example:"原因を推測する",exampleEn:"Infer the cause",exampleTl:"Hulaan ang sanhi"},
{id:"n2k26",type:"kanji",kanji:"測",reading:"そく",en:"measure",tl:"sukatin",example:"距離を測る",exampleEn:"Measure the distance",exampleTl:"Sukatin ang distansya"},
{id:"n2k27",type:"kanji",kanji:"刺",reading:"し",en:"pierce / stimulate",tl:"tuhugin",example:"視線が刺さる",exampleEn:"Gaze pierces",exampleTl:"Tumataguos ang tingin"},
{id:"n2k28",type:"kanji",kanji:"激",reading:"げき",en:"violent / intense",tl:"marahas / matindi",example:"激しい雨",exampleEn:"Heavy rain",exampleTl:"Malakas na ulan"},
{id:"n2k29",type:"kanji",kanji:"穏",reading:"おん",en:"calm / gentle",tl:"mahinahon",example:"穏やかな性格",exampleEn:"A calm personality",exampleTl:"Mahinahong personalidad"},
{id:"n2k30",type:"kanji",kanji:"騒",reading:"そう",en:"noisy / disturbance",tl:"maingay",example:"騒音が問題だ",exampleEn:"Noise is a problem",exampleTl:"Ang ingay ay isang problema"},
{id:"n2k31",type:"kanji",kanji:"沈",reading:"ちん",en:"sink / silence",tl:"lumubog",example:"気分が沈む",exampleEn:"Spirits sink",exampleTl:"Bumaba ang loob"},
{id:"n2k32",type:"kanji",kanji:"浮",reading:"ふ",en:"float / emerge",tl:"lumutang",example:"アイデアが浮かぶ",exampleEn:"An idea comes to mind",exampleTl:"Lumabas ang isang ideya"},
{id:"n2k33",type:"kanji",kanji:"映",reading:"えい",en:"reflect / project",tl:"ipakita / sumasalamin",example:"スクリーンに映す",exampleEn:"Project onto a screen",exampleTl:"Ipakita sa screen"},
{id:"n2k34",type:"kanji",kanji:"録",reading:"ろく",en:"record",tl:"itala / i-record",example:"音声を録音する",exampleEn:"Record audio",exampleTl:"I-record ang tunog"},
{id:"n2k35",type:"kanji",kanji:"編",reading:"へん",en:"edit / compile",tl:"mag-edit",example:"本を編集する",exampleEn:"Edit a book",exampleTl:"Mag-edit ng libro"},
{id:"n2k36",type:"kanji",kanji:"刊",reading:"かん",en:"publish",tl:"ilathala",example:"雑誌を刊行する",exampleEn:"Publish a magazine",exampleTl:"Ilathala ang isang magazine"},
{id:"n2k37",type:"kanji",kanji:"訴",reading:"そ",en:"appeal / sue",tl:"apela / magdemanda",example:"不当を訴える",exampleEn:"Appeal against injustice",exampleTl:"Umapela laban sa kawalang-katarungan"},
{id:"n2k38",type:"kanji",kanji:"却",reading:"きゃく",en:"reject / on the contrary",tl:"tanggihan",example:"申請が却下された",exampleEn:"The application was rejected",exampleTl:"Tinanggihan ang aplikasyon"},
{id:"n2k39",type:"kanji",kanji:"援",reading:"えん",en:"aid / support",tl:"tulong / suporta",example:"被災地を援助する",exampleEn:"Aid the disaster area",exampleTl:"Tulungan ang lugar na tinamaan ng sakuna"},
{id:"n2k40",type:"kanji",kanji:"脅",reading:"きょう",en:"threaten",tl:"banta",example:"脅迫を受ける",exampleEn:"Receive a threat",exampleTl:"Matanggap ng banta"},
{id:"n2k41",type:"kanji",kanji:"詐",reading:"さ",en:"deceive / fraud",tl:"manlinlang",example:"詐欺に気をつける",exampleEn:"Watch out for fraud",exampleTl:"Mag-ingat sa pandaraya"},
{id:"n2k42",type:"kanji",kanji:"欺",reading:"ぎ",en:"cheat / deceive",tl:"dayain",example:"人を欺く",exampleEn:"Deceive people",exampleTl:"Dayain ang mga tao"},
{id:"n2k43",type:"kanji",kanji:"貢",reading:"こう",en:"tribute / contribute",tl:"mag-ambag",example:"社会に貢献する",exampleEn:"Contribute to society",exampleTl:"Mag-ambag sa lipunan"},
{id:"n2k44",type:"kanji",kanji:"献",reading:"けん",en:"offer / dedicate",tl:"ialay",example:"命を献身的に捧げる",exampleEn:"Devote one's life",exampleTl:"Ialay ang buhay"},
{id:"n2k45",type:"kanji",kanji:"慣",reading:"かん",en:"accustom / habit",tl:"nasanay",example:"慣れるのに時間がかかる",exampleEn:"It takes time to get used to",exampleTl:"Kailangan ng panahon para masanay"},
{id:"n2k46",type:"kanji",kanji:"憩",reading:"けい",en:"rest / repose",tl:"pahinga",example:"憩いの場所",exampleEn:"A place of rest",exampleTl:"Lugar ng pahinga"},
{id:"n2k47",type:"kanji",kanji:"礎",reading:"そ",en:"foundation / cornerstone",tl:"pundasyon",example:"成功の礎を築く",exampleEn:"Build the foundation of success",exampleTl:"Itayo ang pundasyon ng tagumpay"},
{id:"n2k48",type:"kanji",kanji:"懸",reading:"けん",en:"hang / stake",tl:"ilagay sa panganib",example:"命懸けで戦う",exampleEn:"Fight risking one's life",exampleTl:"Lumaban nang buhay ang kataya"},
{id:"n2k49",type:"kanji",kanji:"携",reading:"けい",en:"carry / be involved",tl:"magdala / kalahok",example:"プロジェクトに携わる",exampleEn:"Be involved in a project",exampleTl:"Kasali sa proyekto"},
{id:"n2k50",type:"kanji",kanji:"渉",reading:"しょう",en:"ford / negotiate",tl:"makipag-negosasyon",example:"交渉を進める",exampleEn:"Advance negotiations",exampleTl:"Isulong ang negosasyon"},
// ── VOCAB (50) ──
{id:"n2v01",type:"vocab",kanji:"批判",reading:"ひはん",en:"criticism",tl:"pagpuna",example:"政策を批判する",exampleEn:"Criticise the policy",exampleTl:"Punahin ang patakaran"},
{id:"n2v02",type:"vocab",kanji:"提案",reading:"ていあん",en:"proposal",tl:"panukala",example:"新しい提案をする",exampleEn:"Make a new proposal",exampleTl:"Gumawa ng bagong panukala"},
{id:"n2v03",type:"vocab",kanji:"状況",reading:"じょうきょう",en:"situation",tl:"sitwasyon",example:"状況が悪化した",exampleEn:"The situation worsened",exampleTl:"Lumala ang sitwasyon"},
{id:"n2v04",type:"vocab",kanji:"傾向",reading:"けいこう",en:"tendency / trend",tl:"tendensya",example:"増加の傾向がある",exampleEn:"There is an increasing tendency",exampleTl:"May tendensyang tumaas"},
{id:"n2v05",type:"vocab",kanji:"余裕",reading:"よゆう",en:"leeway / margin",tl:"puwang / oras",example:"時間に余裕がある",exampleEn:"Have time to spare",exampleTl:"Mayroon pang panahon"},
{id:"n2v06",type:"vocab",kanji:"維持",reading:"いじ",en:"maintenance",tl:"pagpapanatili",example:"品質を維持する",exampleEn:"Maintain quality",exampleTl:"Panatilihin ang kalidad"},
{id:"n2v07",type:"vocab",kanji:"改善",reading:"かいぜん",en:"improvement",tl:"pagpapabuti",example:"サービスを改善する",exampleEn:"Improve service",exampleTl:"Pagbutihin ang serbisyo"},
{id:"n2v08",type:"vocab",kanji:"矛盾",reading:"むじゅん",en:"contradiction",tl:"kontradiksyon",example:"発言に矛盾がある",exampleEn:"There is a contradiction in the statement",exampleTl:"May kontradiksyon sa pahayag"},
{id:"n2v09",type:"vocab",kanji:"根拠",reading:"こんきょ",en:"basis / grounds",tl:"batayan",example:"根拠のない話",exampleEn:"A story without basis",exampleTl:"Kwentong walang batayan"},
{id:"n2v10",type:"vocab",kanji:"観点",reading:"かんてん",en:"viewpoint",tl:"pananaw",example:"別の観点から考える",exampleEn:"Think from a different viewpoint",exampleTl:"Pag-isipan mula sa ibang pananaw"},
{id:"n2v11",type:"vocab",kanji:"前提",reading:"ぜんてい",en:"premise",tl:"kondisyon",example:"前提が違う",exampleEn:"The premise is different",exampleTl:"Iba ang kondisyon"},
{id:"n2v12",type:"vocab",kanji:"促進",reading:"そくしん",en:"promotion",tl:"pagpapabilis",example:"経済成長を促進する",exampleEn:"Promote economic growth",exampleTl:"Itaguyod ang pag-unlad ng ekonomiya"},
{id:"n2v13",type:"vocab",kanji:"抑制",reading:"よくせい",en:"suppression",tl:"pigil",example:"感情を抑制する",exampleEn:"Suppress emotions",exampleTl:"Pigilan ang damdamin"},
{id:"n2v14",type:"vocab",kanji:"把握",reading:"はあく",en:"grasp / comprehension",tl:"pag-unawa",example:"状況を把握する",exampleEn:"Grasp the situation",exampleTl:"Unawain ang sitwasyon"},
{id:"n2v15",type:"vocab",kanji:"反映",reading:"はんえい",en:"reflection",tl:"pagpapakita",example:"意見を反映する",exampleEn:"Reflect opinions",exampleTl:"Ipakita ang mga opinyon"},
{id:"n2v16",type:"vocab",kanji:"配慮",reading:"はいりょ",en:"consideration",tl:"pagsasaalang-alang",example:"相手への配慮が大切",exampleEn:"Consideration for others is important",exampleTl:"Mahalaga ang pagsasaalang-alang sa iba"},
{id:"n2v17",type:"vocab",kanji:"対処",reading:"たいしょ",en:"deal with",tl:"harapin",example:"問題に対処する",exampleEn:"Deal with the problem",exampleTl:"Harapin ang problema"},
{id:"n2v18",type:"vocab",kanji:"明確",reading:"めいかく",en:"clear / explicit",tl:"malinaw",example:"立場を明確にする",exampleEn:"Make one's position clear",exampleTl:"Gawing malinaw ang posisyon"},
{id:"n2v19",type:"vocab",kanji:"曖昧",reading:"あいまい",en:"vague / ambiguous",tl:"malabo",example:"曖昧な返答",exampleEn:"A vague answer",exampleTl:"Malabong sagot"},
{id:"n2v20",type:"vocab",kanji:"具体的",reading:"ぐたいてき",en:"concrete / specific",tl:"kongkreto / tiyak",example:"具体的な例を挙げる",exampleEn:"Give a concrete example",exampleTl:"Magbigay ng kongkretong halimbawa"},
{id:"n2v21",type:"vocab",kanji:"抽象的",reading:"ちゅうしょうてき",en:"abstract",tl:"abstract",example:"抽象的な議論",exampleEn:"An abstract discussion",exampleTl:"Abstract na talakayan"},
{id:"n2v22",type:"vocab",kanji:"否定",reading:"ひてい",en:"denial / negation",tl:"pagtanggi",example:"その意見を否定する",exampleEn:"Deny that opinion",exampleTl:"Tanggihan ang opinyon na iyon"},
{id:"n2v23",type:"vocab",kanji:"肯定",reading:"こうてい",en:"affirmation",tl:"pagpapatibay",example:"立場を肯定する",exampleEn:"Affirm one's position",exampleTl:"Patibaying ang posisyon"},
{id:"n2v24",type:"vocab",kanji:"客観的",reading:"きゃっかんてき",en:"objective",tl:"obhetibo",example:"客観的に考える",exampleEn:"Think objectively",exampleTl:"Mag-isip nang obhetibo"},
{id:"n2v25",type:"vocab",kanji:"主観的",reading:"しゅかんてき",en:"subjective",tl:"subjektibo",example:"主観的な意見",exampleEn:"A subjective opinion",exampleTl:"Subjektibong opinyon"},
{id:"n2v26",type:"vocab",kanji:"論理",reading:"ろんり",en:"logic",tl:"lohika",example:"論理的に説明する",exampleEn:"Explain logically",exampleTl:"Ipaliwanag nang lohikal"},
{id:"n2v27",type:"vocab",kanji:"矛盾点",reading:"むじゅんてん",en:"point of contradiction",tl:"punto ng kontradiksyon",example:"矛盾点を指摘する",exampleEn:"Point out contradictions",exampleTl:"Ituro ang mga kontradiksyon"},
{id:"n2v28",type:"vocab",kanji:"懸念",reading:"けねん",en:"concern / worry",tl:"alalahanin",example:"安全性への懸念",exampleEn:"Concern over safety",exampleTl:"Alalahanin sa kaligtasan"},
{id:"n2v29",type:"vocab",kanji:"柔軟",reading:"じゅうなん",en:"flexible",tl:"flexible",example:"柔軟な思考",exampleEn:"Flexible thinking",exampleTl:"Flexible na pag-iisip"},
{id:"n2v30",type:"vocab",kanji:"硬直",reading:"こうちょく",en:"stiff / rigid",tl:"mahigpit / walang pagbabago",example:"硬直した考え方",exampleEn:"Rigid thinking",exampleTl:"Mahigpit na pag-iisip"},
{id:"n2v31",type:"vocab",kanji:"摩擦",reading:"まさつ",en:"friction / conflict",tl:"alitan / grating",example:"文化的摩擦が生じる",exampleEn:"Cultural friction arises",exampleTl:"Nagaganap ang kultural na alitan"},
{id:"n2v32",type:"vocab",kanji:"妥協",reading:"だきょう",en:"compromise",tl:"kompromiso",example:"妥協点を見つける",exampleEn:"Find a compromise",exampleTl:"Hanapin ang kompromiso"},
{id:"n2v33",type:"vocab",kanji:"交渉",reading:"こうしょう",en:"negotiation",tl:"negosasyon",example:"給料を交渉する",exampleEn:"Negotiate salary",exampleTl:"Makipag-negosasyon sa sahod"},
{id:"n2v34",type:"vocab",kanji:"合意",reading:"ごうい",en:"agreement / consensus",tl:"kasunduan",example:"合意に達する",exampleEn:"Reach an agreement",exampleTl:"Maabot ang kasunduan"},
{id:"n2v35",type:"vocab",kanji:"競争",reading:"きょうそう",en:"competition",tl:"kompetisyon",example:"激しい競争",exampleEn:"Fierce competition",exampleTl:"Matinding kompetisyon"},
{id:"n2v36",type:"vocab",kanji:"協力",reading:"きょうりょく",en:"cooperation",tl:"kooperasyon",example:"全員で協力する",exampleEn:"Everyone cooperates",exampleTl:"Lahat ay nagkokoopera"},
{id:"n2v37",type:"vocab",kanji:"貢献",reading:"こうけん",en:"contribution",tl:"kontribusyon",example:"社会への貢献",exampleEn:"Contribution to society",exampleTl:"Kontribusyon sa lipunan"},
{id:"n2v38",type:"vocab",kanji:"排除",reading:"はいじょ",en:"exclusion",tl:"pagbubukod",example:"差別を排除する",exampleEn:"Eliminate discrimination",exampleTl:"Alisin ang diskriminasyon"},
{id:"n2v39",type:"vocab",kanji:"導入",reading:"どうにゅう",en:"introduction / adoption",tl:"pagpapakilala / paggamit",example:"新技術を導入する",exampleEn:"Introduce new technology",exampleTl:"Ipakilala ang bagong teknolohiya"},
{id:"n2v40",type:"vocab",kanji:"廃止",reading:"はいし",en:"abolition",tl:"pagpapawalang-bisa",example:"制度を廃止する",exampleEn:"Abolish the system",exampleTl:"Ipawalang-bisa ang sistema"},
{id:"n2v41",type:"vocab",kanji:"開発",reading:"かいはつ",en:"development",tl:"pag-unlad / pagpapaunlad",example:"新商品を開発する",exampleEn:"Develop a new product",exampleTl:"Bumuo ng bagong produkto"},
{id:"n2v42",type:"vocab",kanji:"普及",reading:"ふきゅう",en:"spread / popularisation",tl:"pagpapakalat",example:"スマホが普及した",exampleEn:"Smartphones have spread",exampleTl:"Kumalat ang mga smartphone"},
{id:"n2v43",type:"vocab",kanji:"縮小",reading:"しゅくしょう",en:"reduction / downsizing",tl:"pagbabawas",example:"事業を縮小する",exampleEn:"Downsize the business",exampleTl:"Bawasan ang negosyo"},
{id:"n2v44",type:"vocab",kanji:"拡大",reading:"かくだい",en:"expansion / enlargement",tl:"pagpapalawak",example:"市場を拡大する",exampleEn:"Expand the market",exampleTl:"Palawakin ang merkado"},
{id:"n2v45",type:"vocab",kanji:"一貫",reading:"いっかん",en:"consistency",tl:"konsistensya",example:"一貫した態度",exampleEn:"A consistent attitude",exampleTl:"Konsistenteng saloobin"},
{id:"n2v46",type:"vocab",kanji:"分析",reading:"ぶんせき",en:"analysis",tl:"pagsusuri",example:"データを分析する",exampleEn:"Analyse data",exampleTl:"Suriin ang data"},
{id:"n2v47",type:"vocab",kanji:"検証",reading:"けんしょう",en:"verification",tl:"pag-verify",example:"仮説を検証する",exampleEn:"Verify the hypothesis",exampleTl:"I-verify ang hipotesis"},
{id:"n2v48",type:"vocab",kanji:"証明",reading:"しょうめい",en:"proof",tl:"patunay",example:"無実を証明する",exampleEn:"Prove innocence",exampleTl:"Patunayan ang kawalang-sala"},
{id:"n2v49",type:"vocab",kanji:"補完",reading:"ほかん",en:"complement / supplement",tl:"dagdag",example:"互いに補完し合う",exampleEn:"Complement each other",exampleTl:"Magdagdag sa isa't isa"},
{id:"n2v50",type:"vocab",kanji:"相互",reading:"そうご",en:"mutual / reciprocal",tl:"magkabahagi",example:"相互理解を深める",exampleEn:"Deepen mutual understanding",exampleTl:"Palalimin ang magkaparehong pag-unawa"},
],

N1: [
// ── KANJI (50) ──
{id:"n1k01",type:"kanji",kanji:"懸",reading:"けん",en:"hang / worry",tl:"pag-aalala",example:"懸念事項がある",exampleEn:"There are concerns",exampleTl:"Mayroon mga alalahanin"},
{id:"n1k02",type:"kanji",kanji:"擁",reading:"よう",en:"protect / embrace",tl:"protektahan",example:"立場を擁護する",exampleEn:"Defend one's position",exampleTl:"Ipagtanggol ang posisyon"},
{id:"n1k03",type:"kanji",kanji:"憂",reading:"ゆう",en:"grief / melancholy",tl:"kalungkutan",example:"前途を憂う",exampleEn:"Feel anxious about the future",exampleTl:"Mag-alala sa kinabukasan"},
{id:"n1k04",type:"kanji",kanji:"顕",reading:"けん",en:"manifest / prominent",tl:"kapansin-pansin",example:"顕著な効果",exampleEn:"Prominent effect",exampleTl:"Kapansin-pansing epekto"},
{id:"n1k05",type:"kanji",kanji:"醸",reading:"じょう",en:"brew / create atmosphere",tl:"lumikha ng kapaligiran",example:"誤解を醸す",exampleEn:"Create misunderstanding",exampleTl:"Lumikha ng hindi pagkakaunawaan"},
{id:"n1k06",type:"kanji",kanji:"逸",reading:"いつ",en:"deviate / excel",tl:"nangunguna / lumabas",example:"逸脱した行動",exampleEn:"Deviant behaviour",exampleTl:"Maling gawi"},
{id:"n1k07",type:"kanji",kanji:"粛",reading:"しゅく",en:"solemn / strict",tl:"seryoso",example:"粛々と進める",exampleEn:"Proceed solemnly",exampleTl:"Magpatuloy nang seryoso"},
{id:"n1k08",type:"kanji",kanji:"翻",reading:"ほん",en:"flip / translate",tl:"baligtarin / isalin",example:"意見を翻す",exampleEn:"Reverse one's opinion",exampleTl:"Baguhin ang opinyon"},
{id:"n1k09",type:"kanji",kanji:"凌",reading:"りょう",en:"endure / surpass",tl:"lampasan",example:"ライバルを凌ぐ",exampleEn:"Surpass the rival",exampleTl:"Lampasan ang karibal"},
{id:"n1k10",type:"kanji",kanji:"慕",reading:"ぼ",en:"yearn / adore",tl:"hangaan",example:"先生を慕う",exampleEn:"Admire the teacher",exampleTl:"Hangaan ang guro"},
{id:"n1k11",type:"kanji",kanji:"峻",reading:"しゅん",en:"steep / strict",tl:"mahigpit / matarik",example:"峻厳な態度",exampleEn:"A strict attitude",exampleTl:"Mahigpit na saloobin"},
{id:"n1k12",type:"kanji",kanji:"慄",reading:"りつ",en:"tremble / shudder",tl:"manginig",example:"慄然とする事件",exampleEn:"A horrifying incident",exampleTl:"Nakakatakot na insidente"},
{id:"n1k13",type:"kanji",kanji:"逼",reading:"ひつ",en:"press / compel",tl:"pinilit",example:"逼迫した状況",exampleEn:"A pressing situation",exampleTl:"Kritikal na sitwasyon"},
{id:"n1k14",type:"kanji",kanji:"忖",reading:"そん",en:"guess / infer",tl:"hulaan",example:"忖度が働く",exampleEn:"Reading the room occurs",exampleTl:"Nagbabasa ng sitwasyon"},
{id:"n1k15",type:"kanji",kanji:"蔑",reading:"べつ",en:"scorn / despise",tl:"hamakin",example:"人を蔑視する",exampleEn:"Look down on someone",exampleTl:"Hamakin ang isang tao"},
{id:"n1k16",type:"kanji",kanji:"恣",reading:"し",en:"arbitrary / selfish",tl:"sariling-sarili",example:"恣意的な判断",exampleEn:"An arbitrary judgment",exampleTl:"Arbitraryong hatol"},
{id:"n1k17",type:"kanji",kanji:"逡",reading:"しゅん",en:"hesitate",tl:"mag-alinlangan",example:"逡巡している",exampleEn:"Hesitating",exampleTl:"Nag-aalangan"},
{id:"n1k18",type:"kanji",kanji:"漸",reading:"ぜん",en:"gradually",tl:"unti-unti",example:"漸次改善される",exampleEn:"Gradually improved",exampleTl:"Unti-unting napabuti"},
{id:"n1k19",type:"kanji",kanji:"矯",reading:"きょう",en:"correct / rectify",tl:"ituwid",example:"悪習を矯正する",exampleEn:"Correct bad habits",exampleTl:"Ituwid ang masamang gawi"},
{id:"n1k20",type:"kanji",kanji:"瑕",reading:"か",en:"flaw / blemish",tl:"kapintasan",example:"瑕疵のある商品",exampleEn:"A defective product",exampleTl:"Depektibong produkto"},
{id:"n1k21",type:"kanji",kanji:"嗜",reading:"し",en:"taste / fondness",tl:"hilig",example:"読書を嗜む",exampleEn:"Have a fondness for reading",exampleTl:"Mahilig sa pagbabasa"},
{id:"n1k22",type:"kanji",kanji:"凄",reading:"せい",en:"dreadful / amazing",tl:"kahanga-hanga / kakila-kilabot",example:"凄惨な光景",exampleEn:"A dreadful scene",exampleTl:"Nakakatakot na tanawin"},
{id:"n1k23",type:"kanji",kanji:"奔",reading:"ほん",en:"run wild / rush",tl:"tumakbo nang bilis",example:"東奔西走する",exampleEn:"Rush about in all directions",exampleTl:"Tumakbo sa lahat ng direksyon"},
{id:"n1k24",type:"kanji",kanji:"弄",reading:"ろう",en:"play with / trifle",tl:"laruan",example:"感情を弄ぶ",exampleEn:"Play with emotions",exampleTl:"Laruin ang damdamin"},
{id:"n1k25",type:"kanji",kanji:"涸",reading:"こ",en:"dry up / exhaust",tl:"matuyo",example:"資源が涸渇する",exampleEn:"Resources are exhausted",exampleTl:"Nauubos ang mga likas na yaman"},
{id:"n1k26",type:"kanji",kanji:"遮",reading:"しゃ",en:"block / interrupt",tl:"harangan",example:"視界を遮る",exampleEn:"Block the view",exampleTl:"Harangan ang paningin"},
{id:"n1k27",type:"kanji",kanji:"蓄",reading:"ちく",en:"accumulate / store",tl:"mag-ipon",example:"財産を蓄積する",exampleEn:"Accumulate wealth",exampleTl:"Mag-ipon ng kayamanan"},
{id:"n1k28",type:"kanji",kanji:"殊",reading:"しゅ",en:"especially / particular",tl:"lalo na",example:"殊のほか嬉しい",exampleEn:"Especially happy",exampleTl:"Lalo na masaya"},
{id:"n1k29",type:"kanji",kanji:"璧",reading:"へき",en:"flawless jade",tl:"perpekto",example:"完璧な仕事",exampleEn:"Perfect work",exampleTl:"Perpektong trabaho"},
{id:"n1k30",type:"kanji",kanji:"滞",reading:"たい",en:"stagnate / stay",tl:"manatili / mapigilan",example:"業務が滞る",exampleEn:"Operations stagnate",exampleTl:"Natigil ang operasyon"},
{id:"n1k31",type:"kanji",kanji:"憤",reading:"ふん",en:"anger / indignation",tl:"galit / pagngangalit",example:"不公平に憤る",exampleEn:"Angry at injustice",exampleTl:"Magalit sa kawalang-katarungan"},
{id:"n1k32",type:"kanji",kanji:"諦",reading:"てい",en:"give up / resign oneself",tl:"sumuko",example:"諦めずに挑戦する",exampleEn:"Challenge without giving up",exampleTl:"Susubukan nang hindi sumusuko"},
{id:"n1k33",type:"kanji",kanji:"窮",reading:"きゅう",en:"destitute / extreme",tl:"kahirapan / sukdulan",example:"窮地に追い込まれる",exampleEn:"Driven into a tight corner",exampleTl:"Napunta sa mahirap na sitwasyon"},
{id:"n1k34",type:"kanji",kanji:"赴",reading:"ふ",en:"proceed / go to",tl:"pumunta",example:"任地に赴く",exampleEn:"Proceed to one's post",exampleTl:"Pumunta sa itinalagang lugar"},
{id:"n1k35",type:"kanji",kanji:"罷",reading:"ひ",en:"quit / stop",tl:"huminto",example:"職を罷免される",exampleEn:"Be dismissed from one's post",exampleTl:"Matanggal sa posisyon"},
{id:"n1k36",type:"kanji",kanji:"嘲",reading:"ちょう",en:"ridicule / mock",tl:"tuksuhin",example:"他人を嘲笑う",exampleEn:"Ridicule others",exampleTl:"Tuksuhin ang iba"},
{id:"n1k37",type:"kanji",kanji:"羨",reading:"せん",en:"envy",tl:"inggit",example:"成功を羨む",exampleEn:"Envy success",exampleTl:"Mainggit sa tagumpay"},
{id:"n1k38",type:"kanji",kanji:"拙",reading:"せつ",en:"clumsy / poor",tl:"maladyeng / pangit",example:"拙い文章",exampleEn:"A clumsy text",exampleTl:"Maladyeng sulat"},
{id:"n1k39",type:"kanji",kanji:"濫",reading:"らん",en:"overflow / abuse",tl:"mag-abuse",example:"権力を濫用する",exampleEn:"Abuse power",exampleTl:"Mag-abuse ng kapangyarihan"},
{id:"n1k40",type:"kanji",kanji:"驕",reading:"きょう",en:"arrogant",tl:"mayabang",example:"驕り高ぶる",exampleEn:"Become arrogant",exampleTl:"Maging mayabang"},
{id:"n1k41",type:"kanji",kanji:"謙",reading:"けん",en:"humble",tl:"mapagkumbaba",example:"謙虚な姿勢",exampleEn:"A humble attitude",exampleTl:"Mapagkumbabang saloobin"},
{id:"n1k42",type:"kanji",kanji:"邁",reading:"まい",en:"progress / advance",tl:"sumulong",example:"邁進する",exampleEn:"Press forward",exampleTl:"Sumulong nang walang hinto"},
{id:"n1k43",type:"kanji",kanji:"斡",reading:"あっ",en:"mediate",tl:"maging tagapamagitan",example:"斡旋する",exampleEn:"Mediate / arrange",exampleTl:"Maging tagapamagitan"},
{id:"n1k44",type:"kanji",kanji:"稚",reading:"ち",en:"young / childish",tl:"bata / parang bata",example:"稚拙な考え",exampleEn:"A childish idea",exampleTl:"Parang batang ideya"},
{id:"n1k45",type:"kanji",kanji:"錯",reading:"さく",en:"be confused / mixed",tl:"nagkalabuan",example:"錯覚に陥る",exampleEn:"Fall into an illusion",exampleTl:"Mahulog sa ilusyon"},
{id:"n1k46",type:"kanji",kanji:"喚",reading:"かん",en:"shout / call out",tl:"sumigaw",example:"注意を喚起する",exampleEn:"Raise awareness",exampleTl:"Itaas ang kamalayan"},
{id:"n1k47",type:"kanji",kanji:"殴",reading:"おう",en:"hit / punch",tl:"suntok",example:"殴打事件",exampleEn:"An assault incident",exampleTl:"Insidente ng pananakit"},
{id:"n1k48",type:"kanji",kanji:"縛",reading:"ばく",en:"bind / restrict",tl:"talian / limitahan",example:"規則に縛られる",exampleEn:"Be bound by rules",exampleTl:"Maitali ng mga patakaran"},
{id:"n1k49",type:"kanji",kanji:"扇",reading:"せん",en:"fan / instigate",tl:"pamaypay / pukawin",example:"群衆を扇動する",exampleEn:"Incite the crowd",exampleTl:"Udyukan ang karamihan"},
{id:"n1k50",type:"kanji",kanji:"淘",reading:"とう",en:"wash away / select",tl:"tanggalin / piliin",example:"淘汰される",exampleEn:"Be weeded out",exampleTl:"Maalis"},
// ── VOCAB (50) ──
{id:"n1v01",type:"vocab",kanji:"曖昧",reading:"あいまい",en:"vague / ambiguous",tl:"malabo",example:"曖昧な表現を避ける",exampleEn:"Avoid vague expressions",exampleTl:"Iwasan ang malabong ekspresyon"},
{id:"n1v02",type:"vocab",kanji:"齟齬",reading:"そご",en:"discrepancy / mismatch",tl:"hindi magkatugma",example:"認識の齟齬が生じた",exampleEn:"A mismatch in understanding arose",exampleTl:"Lumabas ang hindi pagkakaunawaan"},
{id:"n1v03",type:"vocab",kanji:"忖度",reading:"そんたく",en:"reading the room",tl:"basahin ang sitwasyon",example:"上司の意向を忖度する",exampleEn:"Read the boss's intentions",exampleTl:"Basahin ang intensyon ng boss"},
{id:"n1v04",type:"vocab",kanji:"瑣末",reading:"さまつ",en:"trivial / minor",tl:"maliit na bagay",example:"瑣末なことにこだわる",exampleEn:"Obsess over trivial things",exampleTl:"Mag-obsess sa maliliit na bagay"},
{id:"n1v05",type:"vocab",kanji:"逡巡",reading:"しゅんじゅん",en:"hesitation",tl:"pag-aalangan",example:"返答に逡巡する",exampleEn:"Hesitate in replying",exampleTl:"Mag-alinlangan sa pagsagot"},
{id:"n1v06",type:"vocab",kanji:"恣意",reading:"しい",en:"arbitrariness",tl:"arbitraryo",example:"恣意的な運用",exampleEn:"Arbitrary operation",exampleTl:"Arbitraryong operasyon"},
{id:"n1v07",type:"vocab",kanji:"逼迫",reading:"ひっぱく",en:"pressing / critical",tl:"kritikal",example:"財政が逼迫している",exampleEn:"Finances are critical",exampleTl:"Kritikal ang pananalapi"},
{id:"n1v08",type:"vocab",kanji:"蔑視",reading:"べっし",en:"contempt / scorn",tl:"paghamak",example:"他者を蔑視する発言",exampleEn:"A remark that scorns others",exampleTl:"Pahayag na humahamak sa iba"},
{id:"n1v09",type:"vocab",kanji:"矜持",reading:"きょうじ",en:"pride / dignity",tl:"dignidad",example:"職人の矜持",exampleEn:"A craftsman's pride",exampleTl:"Pagmamalaki ng isang artisano"},
{id:"n1v10",type:"vocab",kanji:"憂慮",reading:"ゆうりょ",en:"concern / anxiety",tl:"pag-aalala",example:"深刻な憂慮がある",exampleEn:"There is serious concern",exampleTl:"Mayroon seryosong alalahanin"},
{id:"n1v11",type:"vocab",kanji:"端緒",reading:"たんしょ",en:"beginning / clue",tl:"simula / pahiwatig",example:"事件の端緒をつかむ",exampleEn:"Get a clue to the incident",exampleTl:"Makakuha ng pahiwatig sa insidente"},
{id:"n1v12",type:"vocab",kanji:"斟酌",reading:"しんしゃく",en:"consideration / discretion",tl:"pagsasaalang-alang",example:"事情を斟酌する",exampleEn:"Give consideration to circumstances",exampleTl:"Isaalang-alang ang mga pangyayari"},
{id:"n1v13",type:"vocab",kanji:"払拭",reading:"ふっしょく",en:"wipe out / eradicate",tl:"burahin",example:"不安を払拭する",exampleEn:"Wipe out anxiety",exampleTl:"Burahin ang pangamba"},
{id:"n1v14",type:"vocab",kanji:"醸成",reading:"じょうせい",en:"fostering / cultivation",tl:"pag-aalaga",example:"合意を醸成する",exampleEn:"Foster consensus",exampleTl:"Paunlarin ang kasunduan"},
{id:"n1v15",type:"vocab",kanji:"顕在化",reading:"けんざいか",en:"materialisation",tl:"pagiging halata",example:"問題が顕在化する",exampleEn:"The problem becomes apparent",exampleTl:"Nagiging halata ang problema"},
{id:"n1v16",type:"vocab",kanji:"潜在化",reading:"せんざいか",en:"latent / hidden",tl:"nakatago",example:"潜在的なリスク",exampleEn:"Latent risk",exampleTl:"Nakatagong panganib"},
{id:"n1v17",type:"vocab",kanji:"頑迷",reading:"がんめい",en:"obstinate / stubborn",tl:"matigas ang ulo",example:"頑迷な態度",exampleEn:"An obstinate attitude",exampleTl:"Matigas ang ulat na saloobin"},
{id:"n1v18",type:"vocab",kanji:"虚偽",reading:"きょぎ",en:"falsehood / lie",tl:"kasinungalingan",example:"虚偽の申告",exampleEn:"A false declaration",exampleTl:"Maling deklarasyon"},
{id:"n1v19",type:"vocab",kanji:"欺瞞",reading:"ぎまん",en:"deception / fraud",tl:"pandaraya",example:"欺瞞に満ちた言葉",exampleEn:"Words full of deception",exampleTl:"Mga salitang puno ng pandaraya"},
{id:"n1v20",type:"vocab",kanji:"忌憚",reading:"きたん",en:"reserve / scruple",tl:"pag-aalangan",example:"忌憚なく意見を言う",exampleEn:"State opinions without reserve",exampleTl:"Sabihin ang opinyon nang walang pag-aalangan"},
{id:"n1v21",type:"vocab",kanji:"逡巡",reading:"しゅんじゅん",en:"vacillation",tl:"pag-aalangan",example:"決断に逡巡する",exampleEn:"Vacillate in making a decision",exampleTl:"Mag-alinlangan sa pagpapasya"},
{id:"n1v22",type:"vocab",kanji:"慄然",reading:"りつぜん",en:"horrified / shuddering",tl:"nanginginig sa takot",example:"慄然とする光景",exampleEn:"A horrifying sight",exampleTl:"Nakakatakot na tanawin"},
{id:"n1v23",type:"vocab",kanji:"愕然",reading:"がくぜん",en:"astonished / stunned",tl:"nagulat",example:"愕然とする事実",exampleEn:"A stunning fact",exampleTl:"Nakagugulat na katotohanan"},
{id:"n1v24",type:"vocab",kanji:"呆然",reading:"ぼうぜん",en:"dumbfounded",tl:"nawalan ng malay",example:"呆然と立ち尽くす",exampleEn:"Stand dumbfounded",exampleTl:"Tumayo nang walang malay"},
{id:"n1v25",type:"vocab",kanji:"茫然",reading:"ぼうぜん",en:"in a daze",tl:"nanganga",example:"茫然自失",exampleEn:"In a complete daze",exampleTl:"Lubos na nanganga"},
{id:"n1v26",type:"vocab",kanji:"杞憂",reading:"きゆう",en:"needless worry",tl:"walang kwentang alalahanin",example:"それは杞憂だった",exampleEn:"That was a needless worry",exampleTl:"Iyon ay walang kwentang alalahanin"},
{id:"n1v27",type:"vocab",kanji:"皮肉",reading:"ひにく",en:"irony / sarcasm",tl:"sarcasmo / panunuya",example:"皮肉を言う",exampleEn:"Say something sarcastic",exampleTl:"Magsabi ng panunuya"},
{id:"n1v28",type:"vocab",kanji:"諷刺",reading:"ふうし",en:"satire",tl:"satira",example:"社会を諷刺する",exampleEn:"Satirise society",exampleTl:"Satirisahin ang lipunan"},
{id:"n1v29",type:"vocab",kanji:"揶揄",reading:"やゆ",en:"ridicule / tease",tl:"tuksuhin",example:"揶揄するような態度",exampleEn:"A ridiculing attitude",exampleTl:"Nagtutuksong saloobin"},
{id:"n1v30",type:"vocab",kanji:"卑下",reading:"ひげ",en:"self-deprecation",tl:"pagpapababa ng sarili",example:"自分を卑下する",exampleEn:"Deprecate oneself",exampleTl:"Ibaba ang sarili"},
{id:"n1v31",type:"vocab",kanji:"謙遜",reading:"けんそん",en:"modesty / humility",tl:"pagkamapagkumbaba",example:"謙遜した言い方",exampleEn:"A modest way of speaking",exampleTl:"Mapagkumbabang paraan ng pagsasalita"},
{id:"n1v32",type:"vocab",kanji:"傲慢",reading:"ごうまん",en:"arrogance",tl:"kayabangan",example:"傲慢な態度を改める",exampleEn:"Correct one's arrogant attitude",exampleTl:"Ituwid ang mayabang na saloobin"},
{id:"n1v33",type:"vocab",kanji:"慇懃",reading:"いんぎん",en:"courteous / overly polite",tl:"magalang",example:"慇懃無礼な態度",exampleEn:"Rudely polite attitude",exampleTl:"Mapanghamak na paggalang"},
{id:"n1v34",type:"vocab",kanji:"理不尽",reading:"りふじん",en:"unreasonable",tl:"hindi makatwiran",example:"理不尽な要求",exampleEn:"An unreasonable demand",exampleTl:"Hindi makatwirang kahilingan"},
{id:"n1v35",type:"vocab",kanji:"無謀",reading:"むぼう",en:"reckless",tl:"pabaya",example:"無謀な計画",exampleEn:"A reckless plan",exampleTl:"Pabayangplano"},
{id:"n1v36",type:"vocab",kanji:"慎重",reading:"しんちょう",en:"cautious / prudent",tl:"maingat",example:"慎重に行動する",exampleEn:"Act cautiously",exampleTl:"Kumilos nang maingat"},
{id:"n1v37",type:"vocab",kanji:"軽率",reading:"けいそつ",en:"rash / careless",tl:"pabaya / walang ingat",example:"軽率な発言",exampleEn:"A rash remark",exampleTl:"Walang ingat na pahayag"},
{id:"n1v38",type:"vocab",kanji:"周到",reading:"しゅうとう",en:"thorough / meticulous",tl:"maingat / masusing",example:"周到な準備",exampleEn:"Thorough preparation",exampleTl:"Masusing paghahanda"},
{id:"n1v39",type:"vocab",kanji:"粗雑",reading:"そざつ",en:"rough / crude",tl:"magaspang / bastos",example:"粗雑な仕事",exampleEn:"Rough work",exampleTl:"Magaspang na trabaho"},
{id:"n1v40",type:"vocab",kanji:"精緻",reading:"せいち",en:"elaborate / precise",tl:"detalyado / tumpak",example:"精緻な細工",exampleEn:"Elaborate craftsmanship",exampleTl:"Detalyadong pagkakagawa"},
{id:"n1v41",type:"vocab",kanji:"抜擢",reading:"ばってき",en:"selection / promotion",tl:"pagpili / promosyon",example:"若者を抜擢する",exampleEn:"Select a young person for promotion",exampleTl:"Piliin ang isang kabataan para sa promosyon"},
{id:"n1v42",type:"vocab",kanji:"登用",reading:"とうよう",en:"appointment / promotion",tl:"paghirang",example:"人材を登用する",exampleEn:"Appoint talented people",exampleTl:"Humirang ng mga talentadong tao"},
{id:"n1v43",type:"vocab",kanji:"罷免",reading:"ひめん",en:"dismissal",tl:"pagpapaalis",example:"大臣を罷免する",exampleEn:"Dismiss the minister",exampleTl:"Alisin ang ministro"},
{id:"n1v44",type:"vocab",kanji:"弾劾",reading:"だんがい",en:"impeachment",tl:"impeachment",example:"大統領を弾劾する",exampleEn:"Impeach the president",exampleTl:"I-impeach ang presidente"},
{id:"n1v45",type:"vocab",kanji:"失脚",reading:"しっきゃく",en:"downfall",tl:"pagbagsak",example:"スキャンダルで失脚する",exampleEn:"Fall from power due to scandal",exampleTl:"Mahulog sa kapangyarihan dahil sa iskandalo"},
{id:"n1v46",type:"vocab",kanji:"台頭",reading:"たいとう",en:"rise / emergence",tl:"paglitaw / pagtaas",example:"新興勢力の台頭",exampleEn:"The rise of emerging forces",exampleTl:"Pagtaas ng mga bagong puwersa"},
{id:"n1v47",type:"vocab",kanji:"凋落",reading:"ちょうらく",en:"decline / decay",tl:"pagbaba / pagkabulok",example:"帝国の凋落",exampleEn:"The decline of an empire",exampleTl:"Pagbaba ng isang imperyo"},
{id:"n1v48",type:"vocab",kanji:"勃興",reading:"ぼっこう",en:"sudden rise",tl:"biglaang pagtaas",example:"新文明の勃興",exampleEn:"The sudden rise of a new civilisation",exampleTl:"Biglaang pagtaas ng bagong sibilisasyon"},
{id:"n1v49",type:"vocab",kanji:"瓦解",reading:"がかい",en:"collapse / disintegration",tl:"pagbagsak / pagguho",example:"組織が瓦解する",exampleEn:"The organisation collapses",exampleTl:"Gumuho ang organisasyon"},
{id:"n1v50",type:"vocab",kanji:"雌伏",reading:"しふく",en:"bide one's time",tl:"maghintay ng pagkakataon",example:"雌伏して機会を待つ",exampleEn:"Bide one's time waiting for an opportunity",exampleTl:"Maghintay ng pagkakataon"},
],
};


const LEVEL_META = {
  N5:{ color:"#22c55e", glow:"rgba(34,197,94,0.12)",  label:"N5 — Beginner",     labelTl:"N5 — Nagsisimula",  desc:"Basic kanji & core words",   descTl:"Pangunahing kanji at salita" },
  N4:{ color:"#3b82f6", glow:"rgba(59,130,246,0.12)",  label:"N4 — Elementary",   labelTl:"N4 — Elementarya",  desc:"Everyday expressions",       descTl:"Pang-araw-araw na ekspresyon" },
  N3:{ color:"#f59e0b", glow:"rgba(245,158,11,0.12)",  label:"N3 — Intermediate", labelTl:"N3 — Intermediate",  desc:"Wider vocabulary & grammar", descTl:"Mas malawak na bokabularyo" },
  N2:{ color:"#a855f7", glow:"rgba(168,85,247,0.12)",  label:"N2 — Upper-Inter",  labelTl:"N2 — Upper-Inter",  desc:"Near-native reading",        descTl:"Malapit nang maging native" },
  N1:{ color:"#f43f5e", glow:"rgba(244,63,94,0.12)",   label:"N1 — Advanced",     labelTl:"N1 — Advanced",     desc:"Complex literary texts",     descTl:"Kumplikadong teksto" },
};

function shuffle(a){ return [...a].sort(()=>Math.random()-0.5); }

function ProgBar({val,color,label}){
  return(
    <div style={{width:"100%",display:"flex",flexDirection:"column",gap:5}}>
      <div style={{height:3,background:"rgba(255,255,255,0.07)",borderRadius:4,overflow:"hidden"}}>
        <div style={{height:"100%",width:(val*100)+"%",background:color,borderRadius:4,transition:"width 0.35s ease"}}/>
      </div>
      <span style={{fontSize:"0.72rem",color:"#334155",textAlign:"right",fontFamily:"'DM Mono',monospace"}}>{label}</span>
    </div>
  );
}

export default function App(){
  const [lang,setLang]=useState("en");
  const [screen,setScreen]=useState("home");
  const [level,setLevel]=useState(null);
  const [filter,setFilter]=useState("all");
  const [deck,setDeck]=useState([]);
  const [idx,setIdx]=useState(0);
  const [flipped,setFlipped]=useState(false);
  const [showEx,setShowEx]=useState(false);
  const [known,setKnown]=useState(new Set());
  const [qDeck,setQDeck]=useState([]);
  const [qi,setQi]=useState(0);
  const [picked,setPicked]=useState(null);
  const [score,setScore]=useState({c:0,w:0});
  const [qDone,setQDone]=useState(false);
  const [search,setSearch]=useState("");

  const meta=level?LEVEL_META[level]:null;
  const cards=level?ALL_CARDS[level]:[];
  const filtered=cards.filter(c=>filter==="all"||c.type===filter);
  const allPool=Object.values(ALL_CARDS).flat();
  const t=(e,tl)=>lang==="en"?e:tl;

  const openLevel=lv=>{setLevel(lv);setFilter("all");setSearch("");setScreen("level");};

  const startFlash=()=>{
    setDeck(shuffle(filtered));
    setIdx(0);setFlipped(false);setShowEx(false);setKnown(new Set());
    setScreen("flash");
  };
  const startQuiz=()=>{
    setQDeck(shuffle(filtered).slice(0,Math.min(15,filtered.length)));
    setQi(0);setPicked(null);setScore({c:0,w:0});setQDone(false);
    setScreen("quiz");
  };

  const flashNext=mark=>{
    if(mark==="known") setKnown(p=>new Set([...p,deck[idx].id]));
    setFlipped(false);setShowEx(false);
    if(idx+1<deck.length) setIdx(i=>i+1);
  };

  const getChoices=card=>{
    const pool=allPool.filter(c=>c.id!==card.id);
    return shuffle([card[lang],...shuffle(pool).slice(0,3).map(c=>c[lang])]);
  };

  const answerQuiz=ch=>{
    if(picked) return;
    setPicked(ch);
    setScore(s=>({...s,[ch===qDeck[qi][lang]?"c":"w"]:s[ch===qDeck[qi][lang]?"c":"w"]+1}));
  };
  const nextQuiz=()=>{
    if(qi+1>=qDeck.length) setQDone(true);
    else{setQi(i=>i+1);setPicked(null);}
  };

  const back=()=>{
    if(screen==="home") return;
    if(screen==="level") setScreen("home");
    else setScreen("level");
  };

  const totalCards=Object.values(ALL_CARDS).flat().length;

  const listCards=filtered.filter(c=>{
    if(!search) return true;
    const q=search.toLowerCase();
    return c.kanji.includes(q)||c.reading.includes(q)||c[lang].toLowerCase().includes(q);
  });

  return(
    <div style={S.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;700;900&family=DM+Mono:wght@400;500&family=Noto+Sans+JP:wght@400;500;700;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#1e293b;border-radius:4px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
        .fu{animation:fadeUp 0.35s ease forwards}
        button{transition:all 0.14s ease;cursor:pointer}
        button:hover{opacity:0.84;transform:scale(0.975)}
        button:active{transform:scale(0.955)}
        input{outline:none;}
      `}</style>

      <div style={{position:"fixed",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.016) 1px,transparent 1px)",backgroundSize:"52px 52px",pointerEvents:"none",zIndex:0}}/>
      {meta&&<div style={{position:"fixed",top:"-25vh",left:"50%",transform:"translateX(-50%)",width:"80vw",height:"55vh",background:"radial-gradient(ellipse,"+meta.glow+" 0%,transparent 70%)",pointerEvents:"none",zIndex:0,transition:"background 0.5s"}}/>}

      <header style={S.hdr}>
        <div style={{width:120,display:"flex",alignItems:"center"}}>
          {screen!=="home"&&<button style={S.backBtn} onClick={back}>← {t("Back","Bumalik")}</button>}
        </div>
        <div style={S.logoWrap}>
          <span style={S.logoJ}>日本語</span>
          <span style={S.logoE}>JLPT · N5 → N1</span>
        </div>
        <div style={{display:"flex",gap:6,width:120,justifyContent:"flex-end"}}>
          {[{k:"en",f:"🇺🇸"},{k:"tl",f:"🇵🇭"}].map(l=>(
            <button key={l.k} style={{...S.lBtn,...(lang===l.k?S.lBtnOn:{})}} onClick={()=>setLang(l.k)}>
              {l.f}{lang===l.k&&<span style={{marginLeft:4,fontSize:"0.68rem",fontFamily:"'DM Mono'"}}>{l.k.toUpperCase()}</span>}
            </button>
          ))}
        </div>
      </header>

      {/* HOME */}
      {screen==="home"&&(
        <main style={S.main} className="fu">
          <div style={{textAlign:"center",padding:"8px 0 4px"}}>
            <h1 style={{fontFamily:"'Kaisei Tokumin',serif",fontSize:"clamp(2.2rem,6vw,3.6rem)",fontWeight:900,lineHeight:1.05,color:"#f1f5f9"}}>
              日本語<br/>
              <span style={{color:"#475569",fontWeight:400,fontSize:"0.42em",letterSpacing:"0.28em",fontFamily:"'DM Mono',monospace"}}>
                {t("MASTER ALL LEVELS","ARALING LAHAT NG ANTAS")}
              </span>
            </h1>
            <p style={{color:"#334155",fontSize:"0.8rem",marginTop:10,letterSpacing:"0.05em"}}>{t("Kanji & Vocabulary · Japanese → English / Tagalog","Kanji at Bokabularyo · Japanese → English / Tagalog")}</p>
          </div>

          <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
            {[{n:totalCards,l:t("Total Cards","Lahat ng Kard")},{n:5,l:t("JLPT Levels","Mga Antas")},{n:3,l:t("Languages","Mga Wika")}].map((s,i)=>(
              <div key={i} style={S.statPill}>
                <span style={{fontFamily:"'DM Mono',monospace",fontSize:"1.6rem",fontWeight:700,color:"#e2e8f0"}}>{s.n}</span>
                <span style={{fontSize:"0.68rem",color:"#475569",letterSpacing:"0.06em"}}>{s.l}</span>
              </div>
            ))}
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:10,width:"100%"}}>
            {Object.entries(LEVEL_META).map(([lv,m],i)=>{
              const cnt=ALL_CARDS[lv].length;
              const kanji=ALL_CARDS[lv].filter(c=>c.type==="kanji").length;
              const vocab=ALL_CARDS[lv].filter(c=>c.type==="vocab").length;
              return(
                <button key={lv} className="fu" style={{...S.lvCard,borderColor:m.color+"30",animationDelay:(i*55)+"ms"}} onClick={()=>openLevel(lv)}>
                  <div style={{...S.lvBadge,background:m.color,boxShadow:"0 0 18px "+m.glow}}>
                    <span style={{fontFamily:"'DM Mono',monospace",fontWeight:700,fontSize:"1.05rem",color:"#fff"}}>{lv}</span>
                  </div>
                  <div style={{flex:1,textAlign:"left"}}>
                    <div style={{fontWeight:700,color:m.color,fontSize:"0.92rem"}}>{t(m.label,m.labelTl)}</div>
                    <div style={{fontSize:"0.73rem",color:"#475569",marginTop:2}}>{t(m.desc,m.descTl)}</div>
                    <div style={{fontSize:"0.65rem",color:"#1e293b",marginTop:3,fontFamily:"'DM Mono',monospace"}}>漢字 {kanji} · 語彙 {vocab}</div>
                  </div>
                  <div style={{textAlign:"right",flexShrink:0}}>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:"1.3rem",fontWeight:700,color:m.color}}>{cnt}</div>
                    <div style={{fontSize:"0.6rem",color:"#1e293b"}}>{t("cards","kard")}</div>
                  </div>
                  <span style={{color:m.color,fontSize:"1.05rem",marginLeft:6}}>→</span>
                </button>
              );
            })}
          </div>
        </main>
      )}

      {/* LEVEL HOME */}
      {screen==="level"&&meta&&(
        <main style={S.main} className="fu">
          <div style={{textAlign:"center"}}>
            <div style={{...S.bigBadge,background:meta.color,boxShadow:"0 0 40px "+meta.glow}}>{level}</div>
            <h2 style={{fontFamily:"'Kaisei Tokumin',serif",fontSize:"1.8rem",fontWeight:900,color:meta.color,margin:"10px 0 4px"}}>{t(meta.label,meta.labelTl)}</h2>
            <p style={{color:"#475569",fontSize:"0.82rem"}}>{t(meta.desc,meta.descTl)}</p>
          </div>

          <div style={S.filterRow}>
            {["all","kanji","vocab"].map(f=>(
              <button key={f} style={{...S.fBtn,...(filter===f?{borderColor:meta.color,color:meta.color,background:meta.color+"1a"}:{})}}
                onClick={()=>setFilter(f)}>
                {f==="all"?t("All","Lahat"):f==="kanji"?"漢字":t("Vocab","Bokab")}
              </button>
            ))}
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,width:"100%"}}>
            {[
              {ic:"🃏",n:t("Flashcards","Mga Flashcard"),d:t("Flip & review","I-flip at suriin"),fn:startFlash},
              {ic:"✏️",n:t("Quiz","Pagsusulit"),d:t("15-question quiz","15-tanong na pagsubok"),fn:startQuiz},
              {ic:"📖",n:t("Word List","Listahan"),d:t("Search & browse","Hanapin at tingnan"),fn:()=>setScreen("list")},
            ].map((m,i)=>(
              <button key={i} style={{...S.modeCard,borderColor:meta.color+"44"}} className="fu" onClick={m.fn}>
                <span style={{fontSize:"2rem"}}>{m.ic}</span>
                <span style={{fontWeight:800,color:meta.color,fontSize:"0.84rem"}}>{m.n}</span>
                <span style={{fontSize:"0.68rem",color:"#475569",textAlign:"center"}}>{m.d}</span>
              </button>
            ))}
          </div>

          <div style={{display:"flex",gap:24,justifyContent:"center"}}>
            {[
              {n:filtered.filter(c=>c.type==="kanji").length,l:"漢字"},
              {n:filtered.filter(c=>c.type==="vocab").length,l:t("Vocab","Bokab")},
              {n:filtered.length,l:t("Total","Lahat")},
            ].map((s,i)=>(
              <div key={i} style={{textAlign:"center"}}>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:"2rem",fontWeight:700,color:meta.color}}>{s.n}</div>
                <div style={{fontSize:"0.68rem",color:"#475569"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* FLASHCARD */}
      {screen==="flash"&&deck.length>0&&(
        <main style={{...S.main,gap:14}} className="fu">
          <ProgBar val={(idx+1)/deck.length} color={meta.color} label={(idx+1)+" / "+deck.length}/>

          <div style={{...S.card,borderColor:flipped?meta.color+"88":"#ffffff12",cursor:"pointer",boxShadow:flipped?"0 0 50px "+meta.glow:""}}
            onClick={()=>{if(!flipped)setFlipped(true);}}>
            <span style={{...S.typePill,background:meta.color}}>
              {deck[idx].type==="kanji"?"漢字":"語彙"} · {level}
            </span>
            <div style={S.bigKanji}>{deck[idx].kanji}</div>
            {!flipped&&(
              <div style={{color:"#1e293b",fontSize:"0.82rem",marginTop:4,animation:"blink 2.2s infinite"}}>
                {t("👆 Tap to flip","👆 I-tap para laguyan")}
              </div>
            )}
            {flipped&&(
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:10,width:"100%",animation:"fadeUp 0.28s ease"}}>
                <div style={{fontSize:"1rem",color:"#64748b",letterSpacing:"0.12em",fontFamily:"'DM Mono',monospace"}}>{deck[idx].reading}</div>
                <div style={{fontSize:"1.65rem",fontWeight:800,color:meta.color,textAlign:"center",lineHeight:1.25}}>{deck[idx][lang]}</div>
                <button style={S.exToggle} onClick={e=>{e.stopPropagation();setShowEx(v=>!v);}}>
                  {showEx?"▲":"▼"} {t("Example","Halimbawa")}
                </button>
                {showEx&&(
                  <div style={S.exBox}>
                    <div style={{fontSize:"0.95rem",color:"#cbd5e1",marginBottom:4}}>{deck[idx].example}</div>
                    <div style={{fontSize:"0.8rem",color:"#475569"}}>{deck[idx][lang==="en"?"exampleEn":"exampleTl"]}</div>
                  </div>
                )}
              </div>
            )}
          </div>

          {flipped?(
            <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"}}>
              <button style={{...S.actBtn,background:"#450a0a"}} onClick={()=>flashNext("unknown")}>
                🔄 {t("Again","Ulit")}
              </button>
              <button style={{...S.actBtn,background:"#052e16"}} onClick={()=>flashNext("known")}>
                ✅ {t("Got it!","Naintindihan!")}
              </button>
            </div>
          ):<div style={{height:46}}/>}

          <div style={{display:"flex",gap:24,fontFamily:"'DM Mono',monospace",fontSize:"0.85rem"}}>
            <span style={{color:"#22c55e"}}>✅ {known.size}</span>
            <span style={{color:"#475569"}}>·</span>
            <span style={{color:"#ef4444"}}>🔄 {idx-known.size}</span>
          </div>

          {idx>=deck.length-1&&flipped&&(
            <div style={{...S.doneBox,borderColor:meta.color}} className="fu">
              <div style={{fontSize:"2.5rem",marginBottom:6}}>🎉</div>
              <p style={{fontWeight:700,fontSize:"1rem",marginBottom:14}}>{t("All cards reviewed!","Lahat ng kard ay nasuri!")}</p>
              <p style={{fontSize:"0.82rem",color:"#475569",marginBottom:16}}>
                {t("Known","Alam")}: {known.size} / {deck.length}
              </p>
              <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
                <button style={{...S.restartBtn,background:meta.color}} onClick={startFlash}>{t("Restart","Ulit")}</button>
                <button style={{...S.restartBtn,background:"#1e293b"}} onClick={()=>setScreen("level")}>{t("Back","Bumalik")}</button>
              </div>
            </div>
          )}
        </main>
      )}

      {/* QUIZ */}
      {screen==="quiz"&&!qDone&&qDeck[qi]&&(
        <main style={{...S.main,gap:18}} className="fu">
          <ProgBar val={(qi+1)/qDeck.length} color={meta.color} label={(qi+1)+" / "+qDeck.length}/>
          <div style={{display:"flex",gap:14,fontSize:"0.82rem",fontFamily:"'DM Mono',monospace"}}>
            <span style={{color:"#22c55e"}}>✅ {score.c}</span>
            <span style={{color:"#ef4444"}}>❌ {score.w}</span>
          </div>

          <div style={{...S.card,borderColor:meta.color+"44",minHeight:"auto",padding:"26px 22px"}}>
            <p style={{color:"#334155",fontSize:"0.78rem",letterSpacing:"0.06em",marginBottom:12}}>
              {t("What does this mean?","Ano ang kahulugan nito?")}
            </p>
            <div style={{...S.bigKanji,fontSize:"clamp(3rem,10vw,5rem)"}}>{qDeck[qi].kanji}</div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:"0.88rem",color:"#475569",marginTop:6}}>{qDeck[qi].reading}</div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,width:"100%",maxWidth:460}}>
            {getChoices(qDeck[qi]).map((ch,i)=>{
              const isRight=ch===qDeck[qi][lang],isSel=ch===picked;
              let bg="#0c1220",bc="#ffffff0e";
              if(picked){bg=isRight?"#052e16":isSel?"#450a0a":"#0c1220"; bc=isRight?"#22c55e55":isSel?"#ef444455":"#ffffff0e";}
              return(
                <button key={i} style={{...S.choiceBtn,background:bg,borderColor:bc}}
                  onClick={()=>answerQuiz(ch)}>{ch}</button>
              );
            })}
          </div>

          {picked&&(
            <div style={S.feedback} className="fu">
              <p style={{color:picked===qDeck[qi][lang]?"#22c55e":"#ef4444",fontWeight:800,fontSize:"1.05rem"}}>
                {picked===qDeck[qi][lang]?t("✅ Correct!","✅ Tama!"):t("❌ Wrong!","❌ Mali!")}
              </p>
              {picked!==qDeck[qi][lang]&&(
                <p style={{color:"#94a3b8",fontSize:"0.84rem"}}>{t("Answer: ","Sagot: ")}<strong style={{color:"#e2e8f0"}}>{qDeck[qi][lang]}</strong></p>
              )}
              <p style={{color:"#1e293b",fontSize:"0.76rem",marginTop:2,lineHeight:1.5}}>{qDeck[qi].example}<br/><span style={{color:"#334155"}}>{qDeck[qi][lang==="en"?"exampleEn":"exampleTl"]}</span></p>
              <button style={{...S.restartBtn,marginTop:10,background:meta.color}} onClick={nextQuiz}>
                {qi+1>=qDeck.length?t("See Results →","Resulta →"):t("Next →","Susunod →")}
              </button>
            </div>
          )}
        </main>
      )}

      {/* QUIZ DONE */}
      {screen==="quiz"&&qDone&&(
        <main style={S.main} className="fu">
          <div style={{...S.doneBox,borderColor:meta.color,maxWidth:420,padding:"36px 28px",textAlign:"center"}}>
            <div style={{fontSize:"4rem",marginBottom:6}}>
              {score.c>=qDeck.length*0.8?"🏆":score.c>=qDeck.length*0.5?"👍":"📚"}
            </div>
            <h2 style={{fontFamily:"'Kaisei Tokumin',serif",fontSize:"1.5rem",color:meta.color,marginBottom:8}}>
              {t("Quiz Complete!","Tapos na ang Pagsusulit!")}
            </h2>
            <div style={{display:"flex",gap:12,justifyContent:"center",alignItems:"center",fontFamily:"'DM Mono',monospace",fontWeight:700,margin:"10px 0 14px"}}>
              <span style={{color:"#22c55e",fontSize:"2.8rem"}}>{score.c}</span>
              <span style={{color:"#1e293b",fontSize:"1.5rem"}}>/</span>
              <span style={{color:"#ef4444",fontSize:"2.8rem"}}>{score.w}</span>
            </div>
            <p style={{color:"#475569",fontSize:"0.86rem",marginBottom:20,lineHeight:1.6}}>
              {score.c>=qDeck.length*0.8
                ?t("Excellent! "+level+" mastered!","Napakahusay! Natututo ka ng "+level+"!")
                :score.c>=qDeck.length*0.5
                ?t("Good effort! Keep going!","Magaling! Patuloy magsanay!")
                :t("Keep studying — you'll get there!","Patuloy mag-aral — kaya mo!")}
            </p>
            <div style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center"}}>
              <button style={{...S.restartBtn,background:meta.color}} onClick={startQuiz}>{t("Try Again","Subukan muli")}</button>
              <button style={{...S.restartBtn,background:"#1e293b"}} onClick={startFlash}>{t("Flashcards","Mga Flashcard")}</button>
              <button style={{...S.restartBtn,background:"#0c1220",border:"1px solid #1e293b"}} onClick={()=>setScreen("level")}>{t("Back","Bumalik")}</button>
            </div>
          </div>
        </main>
      )}

      {/* WORD LIST */}
      {screen==="list"&&(
        <main style={{...S.main,maxWidth:860}} className="fu">
          <div style={{width:"100%",display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"}}>
            <div style={S.filterRow}>
              {["all","kanji","vocab"].map(f=>(
                <button key={f} style={{...S.fBtn,...(filter===f?{borderColor:meta.color,color:meta.color,background:meta.color+"1a"}:{})}}
                  onClick={()=>{setFilter(f);setSearch("");}}>
                  {f==="all"?t("All","Lahat"):f==="kanji"?"漢字":t("Vocab","Bokab")}
                </button>
              ))}
            </div>
            <input
              value={search}
              onChange={e=>setSearch(e.target.value)}
              placeholder={t("Search kanji, reading, meaning...","Hanapin kanji, pagbasa, kahulugan...")}
              style={S.searchInput}
            />
          </div>
          <div style={{width:"100%",fontSize:"0.72rem",color:"#334155",fontFamily:"'DM Mono',monospace",textAlign:"right"}}>
            {listCards.length} {t("cards","kard")}
          </div>
          <div style={S.listGrid}>
            {listCards.map((card,i)=>(
              <div key={card.id} style={{...S.listCard,borderColor:meta.color+"28",animationDelay:(i*15)+"ms"}} className="fu">
                <span style={{...S.listBadge,background:meta.color+"20",color:meta.color}}>
                  {card.type==="kanji"?"漢字":"語彙"}
                </span>
                <div style={{fontFamily:"'Kaisei Tokumin',serif",fontSize:"2rem",fontWeight:700,lineHeight:1,margin:"6px 0 3px"}}>{card.kanji}</div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:"0.7rem",color:"#334155",marginBottom:5}}>{card.reading}</div>
                <div style={{fontWeight:700,color:meta.color,fontSize:"0.87rem",marginBottom:4}}>{card[lang]}</div>
                <div style={{fontSize:"0.7rem",color:"#1e293b",lineHeight:1.5}}>{card.example}</div>
              </div>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

const S={
  root:{minHeight:"100vh",background:"#05080f",color:"#f1f5f9",fontFamily:"'Noto Sans JP','Hiragino Kaku Gothic Pro',sans-serif",overflowX:"hidden",position:"relative"},
  hdr:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 18px",borderBottom:"1px solid rgba(255,255,255,0.05)",backdropFilter:"blur(16px)",background:"rgba(5,8,15,0.92)",position:"sticky",top:0,zIndex:30},
  logoWrap:{display:"flex",flexDirection:"column",alignItems:"center"},
  logoJ:{fontFamily:"'Kaisei Tokumin',serif",fontSize:"1.4rem",fontWeight:900,color:"#e2e8f0",letterSpacing:"0.08em"},
  logoE:{fontFamily:"'DM Mono',monospace",fontSize:"0.48rem",letterSpacing:"0.38em",color:"#1e293b",marginTop:1},
  backBtn:{background:"transparent",border:"1px solid rgba(255,255,255,0.1)",color:"#475569",borderRadius:8,padding:"6px 12px",fontSize:"0.78rem",fontFamily:"inherit"},
  lBtn:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"#334155",borderRadius:20,padding:"5px 9px",fontSize:"1rem"},
  lBtnOn:{background:"rgba(255,255,255,0.09)",borderColor:"rgba(255,255,255,0.18)",color:"#e2e8f0"},
  main:{maxWidth:640,margin:"0 auto",padding:"28px 16px 64px",display:"flex",flexDirection:"column",alignItems:"center",gap:22,position:"relative",zIndex:1},
  statPill:{display:"flex",flexDirection:"column",alignItems:"center",gap:3,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:14,padding:"12px 22px"},
  lvCard:{background:"rgba(255,255,255,0.022)",border:"1px solid",borderRadius:16,padding:"15px 16px",display:"flex",alignItems:"center",gap:13,width:"100%",color:"#fff",fontFamily:"inherit",textAlign:"left"},
  lvBadge:{width:50,height:50,borderRadius:13,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},
  bigBadge:{width:68,height:68,borderRadius:18,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto",fontFamily:"'DM Mono',monospace",fontWeight:700,fontSize:"1.4rem",color:"#fff"},
  filterRow:{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"},
  fBtn:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.07)",color:"#334155",borderRadius:20,padding:"6px 17px",fontSize:"0.81rem",fontFamily:"inherit"},
  modeCard:{background:"rgba(255,255,255,0.022)",border:"1px solid",borderRadius:16,padding:"20px 10px",display:"flex",flexDirection:"column",alignItems:"center",gap:7,fontFamily:"inherit",color:"#fff"},
  card:{width:"100%",maxWidth:460,background:"linear-gradient(155deg,#0a1120,#111a2d)",border:"1px solid",borderRadius:24,minHeight:280,padding:"28px 24px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,boxShadow:"0 20px 60px rgba(0,0,0,0.7)",transition:"border-color 0.3s,box-shadow 0.3s"},
  typePill:{borderRadius:20,padding:"3px 12px",fontSize:"0.63rem",fontFamily:"'DM Mono',monospace",letterSpacing:"0.1em",color:"#fff",fontWeight:700},
  bigKanji:{fontFamily:"'Kaisei Tokumin',serif",fontSize:"clamp(4rem,13vw,6.5rem)",fontWeight:900,lineHeight:1,textAlign:"center"},
  exToggle:{background:"transparent",border:"1px solid rgba(255,255,255,0.08)",color:"#334155",borderRadius:8,padding:"4px 14px",fontSize:"0.76rem",fontFamily:"inherit"},
  exBox:{background:"rgba(255,255,255,0.03)",borderRadius:12,padding:"12px 16px",width:"100%",textAlign:"center"},
  actBtn:{border:"none",borderRadius:14,padding:"13px 28px",color:"#fff",fontWeight:700,fontSize:"0.9rem",fontFamily:"inherit"},
  choiceBtn:{border:"1px solid",borderRadius:14,padding:"14px 10px",color:"#e2e8f0",fontSize:"0.87rem",fontWeight:600,fontFamily:"inherit",lineHeight:1.4,transition:"all 0.18s"},
  feedback:{background:"rgba(255,255,255,0.025)",borderRadius:16,padding:"16px 18px",textAlign:"center",width:"100%",maxWidth:460,display:"flex",flexDirection:"column",gap:5,alignItems:"center"},
  doneBox:{background:"rgba(255,255,255,0.025)",border:"1px solid",borderRadius:20,padding:24,textAlign:"center",width:"100%"},
  restartBtn:{border:"none",borderRadius:12,padding:"10px 22px",color:"#fff",fontWeight:700,fontSize:"0.86rem",fontFamily:"inherit"},
  searchInput:{flex:1,minWidth:200,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,padding:"9px 14px",color:"#e2e8f0",fontSize:"0.82rem",fontFamily:"inherit"},
  listGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(170px,1fr))",gap:10,width:"100%"},
  listCard:{background:"rgba(255,255,255,0.022)",border:"1px solid",borderRadius:14,padding:"13px 12px",position:"relative"},
  listBadge:{borderRadius:6,padding:"2px 8px",fontSize:"0.58rem",fontFamily:"'DM Mono',monospace",fontWeight:700,display:"inline-block",marginBottom:2},
};
