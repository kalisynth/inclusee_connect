'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c41047d21dca6b31e5229711d473f78a",
"assets/AssetManifest.bin.json": "e452ae0c070923888ab365376e1002e8",
"assets/AssetManifest.json": "3000d0c8d15af4ab63cbc46245b296c1",
"assets/assets/app_strings.dart": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/img/bg/light_bg.png": "90580d14eb9beb97550b34d44cd40bab",
"assets/assets/img/defaults/default_avatar.png": "d96c2c91caa2043e1da4b89e9031423d",
"assets/assets/img/defaults/default_avatar_meet.png": "bf8fdae57c026b35f5494989eef39eb2",
"assets/assets/img/defaults/default_avatar_zoom.png": "a286392601e2872f1357ded9159c7fcb",
"assets/assets/img/icons/app_icons/c2o_icon.png": "cb3563f172ed9b9bfb17325648bcde2a",
"assets/assets/img/icons/app_icons/c2y_icon.png": "9d065dcb074509a83a9436819510bb5d",
"assets/assets/img/icons/app_icons/channels4_profile.jpg": "1818a8dd99e5b383bc15cd41dc178f59",
"assets/assets/img/icons/app_icons/channels4_youtube.jpg": "49b9ea7c85b3bf6f221c016a5664c0c0",
"assets/assets/img/icons/app_icons/i2e_icon.png": "e47b74f95dc619c512a0f1b550110962",
"assets/assets/img/icons/app_icons/info_icon.png": "b921728227c165daca192d15354f0f58",
"assets/assets/img/icons/app_icons/kahoot_link_icon.png": "04eea589fe2f771c025f217285ca36b7",
"assets/assets/img/icons/app_icons/kbhelpdoc.png": "9fc188876915bcdd520b59ad91f7fb5b",
"assets/assets/img/icons/app_icons/new%2520news_icon.png": "ebf82c67bd076f63739eeb663e420ba4",
"assets/assets/img/icons/app_icons/news_icon.png": "37971612c7c53f5f7c243c2b1130c71d",
"assets/assets/img/icons/app_icons/radio_icon.png": "a44289213c7e7eeba85614fb69666e53",
"assets/assets/img/logos/appbar_logo.png": "3eaf56be1612a2da888b3c39f3d252ee",
"assets/assets/img/logos/logo_sml.png": "778723bf1d02ccda24cb106349e82896",
"assets/assets/img/tiles/dl_tile.png": "4ba0aca42939e8eb7f80ac8cef949eeb",
"assets/assets/img/tiles/il_tile.png": "55f9f49f299075abd070c63878034a23",
"assets/assets/img/tiles/news_tile.png": "f14331323ce262e38e6bd7793f1c8a04",
"assets/assets/img/tiles/ol_tile.png": "eda629a626c4e06477c7fd188a13152e",
"assets/assets/img/tiles/pag_tile.png": "d6ecb7fe9be0085e384f1de316eff3d1",
"assets/assets/img/tiles/pag_tile_txt.png": "474de3035a16bea8f2bbc1bc8549d4ae",
"assets/assets/img/tiles/pi_tile.png": "56b5e43283b3651edc1ad53eb1cfde05",
"assets/assets/img/timetable/b2/Art%2520Therapy.png": "d2fee86b373a8071568b8866ae657f2e",
"assets/assets/img/timetable/b2/Bible%2520Studies%2520Club.png": "8fe9876f4e4162400c9a3c706bbf943c",
"assets/assets/img/timetable/b2/Book%2520Club.png": "3af69e9ff4e225a42e33b653b904079f",
"assets/assets/img/timetable/b2/Brain%2520Teasers%2520Club%2520Tile.png": "a1c32680aa61d56ab351dea5b554657f",
"assets/assets/img/timetable/b2/Carer's%2520Haven.jpg": "7ec8b61ad38d319b494aded6c701da21",
"assets/assets/img/timetable/b2/Chippy%2520Chat.png": "863043af281bf454fff8134c3dc7cda0",
"assets/assets/img/timetable/b2/Craft%2520Club.png": "04c0619ce7a0cfe026de067dbbc7aad1",
"assets/assets/img/timetable/b2/Digital%2520Help%2520Desk.png": "74a00a38f250528c6c733cfb40be91df",
"assets/assets/img/timetable/b2/Discovery%2520Hub.jpg": "e3addc6ce64352abd40a04fa5b56601f",
"assets/assets/img/timetable/b2/Drawing%2520Club.png": "53e42dbe0277354469a5f846aebb5d20",
"assets/assets/img/timetable/b2/event/Aged%2520Care%2520Information%2520Series.png": "067302e51267a8c5ba15c55ba02c1b3c",
"assets/assets/img/timetable/b2/event/Art%2520Week%2520Finale%2520Paint%2520&%2520Sip.png": "9ef69d4868dd12b771f7ea13891e6ecf",
"assets/assets/img/timetable/b2/event/Art%2520Week%2520Finale.png": "476401d3388b857276157ed0cd13b9db",
"assets/assets/img/timetable/b2/event/Art%2520Week_%2520Virtual%2520Art%2520Gallery%2520Tour.png": "739b70445ed561fc3310abaf64f3500b",
"assets/assets/img/timetable/b2/event/Be%2520Happier%2520at%2520any%2520Age%2520Bob%2520Pfifferling%2520.png": "c1a26a831d97bb9a652e6d9c97665db2",
"assets/assets/img/timetable/b2/event/Book%2520Club%2520with%2520Author%2520Jo%2520Skinner.png": "bbabeb856e465522ebeb1c4499522539",
"assets/assets/img/timetable/b2/event/eSafety%2520Club%2520-%2520eSafety%2520Commissioner.png": "387bb18d285bcde21f61d86a2573a3b6",
"assets/assets/img/timetable/b2/event/Guest%2520Artist_%2520Indigenous%2520Painter.png": "e2a6d605a39e07075cfbed62c76ca8a8",
"assets/assets/img/timetable/b2/event/In2Movies%2520-%2520Easter%2520in%2520Australia%2520(PG).png": "3f4e8212676426f995e5fa63faa52a23",
"assets/assets/img/timetable/b2/event/In2Movies%2520-%2520The%2520Blind%2520Sea%2520(PG).png": "6e7202c8f3aa3fbb0d7949614882e8f0",
"assets/assets/img/timetable/b2/event/In2Movies%2520-%2520The%2520Quietman%2520(PG).png": "89bcd615c7e20ef90e6c95c151a0d04c",
"assets/assets/img/timetable/b2/event/Interior%2520Decorating%2520Mini%2520Series.png": "1e5b29012deceda97da6be0c9893bf25",
"assets/assets/img/timetable/b2/event/Mens%2520Health%2520Week.png": "4e3ec8991d929ae76a354f4953065931",
"assets/assets/img/timetable/b2/event/Paint%2520&%2520Sip.png": "9d37321447fe7caaf5a78245b19a4663",
"assets/assets/img/timetable/b2/event/Special%2520Event%2520Musical%2520Bingo.png": "3243866c7d3bb962e0da7077f4ec5099",
"assets/assets/img/timetable/b2/event/The%2520Art%2520of%2520Pickling%2520&%2520Fermenting_%2520Bev%2520Dobson.png": "0e694889bd99449e8c0e37dca2fef882",
"assets/assets/img/timetable/b2/event/Virtual%2520Garden%2520Tour%2520Ranger%2520Stacey.png": "ce27a64ab17f28082f94deaf774d4558",
"assets/assets/img/timetable/b2/Games%2520Club.png": "19226e68c5df1bf89f26f2ec066fee60",
"assets/assets/img/timetable/b2/Gardening%2520Club.png": "95d37bdfb87fe689f7e1d3c618b06082",
"assets/assets/img/timetable/b2/Genealogy%2520Club.png": "14a3f99bbf61867b595274773189061c",
"assets/assets/img/timetable/b2/Generations%2520Club.png": "d6ab91a9370ce089e0fed593d5a47d56",
"assets/assets/img/timetable/b2/Good%2520News%2520Club.png": "9b056c0bbf91f8e49c3b6fa45ae70e0d",
"assets/assets/img/timetable/b2/Mens%2520Hour.png": "de4d351cb3dbd50c7dd881b2dd20050a",
"assets/assets/img/timetable/b2/Music%2520Appreciation.png": "d58acc0725343f1a4877632529b2f49b",
"assets/assets/img/timetable/b2/Paint%2520Club.png": "0455443773eb5d7d9e03fafae0b0ddb5",
"assets/assets/img/timetable/b2/Photography%2520Club.png": "6bd422b43d92216f805d966d3c1ae63f",
"assets/assets/img/timetable/b2/Poetry%2520Club.png": "8bc15d270ddac0bd52fd84cacf9c1349",
"assets/assets/img/timetable/b2/Recipes%2520Club.png": "3511da10c37e5289777599b7c3e134dd",
"assets/assets/img/timetable/b2/Sewing%2520Club.png": "7d5156140ea2055cb9a582d62b4ea088",
"assets/assets/img/timetable/b2/Singing%2520Club.png": "e13f3c199ba4cf6c9a0b39d7a9fc917f",
"assets/assets/img/timetable/b2/Theatre%2520Club.png": "509f8c9c6267dcced2a131a7cd31f7df",
"assets/assets/img/timetable/b2/Travel%2520Club.png": "917f2fb13cd9aab2da3f53c5cfffb540",
"assets/assets/img/timetable/b2/Trivia%2520Club.png": "88813f14d893636050934e2c81b2efe1",
"assets/assets/img/timetable/b2/Virtual%2520Field%2520Trip%2520-%2520App%2520Tile.png": "92ad4bbb21f464b4369092b459cb66bc",
"assets/assets/img/timetable/b2/Wellness%2520Club.png": "954133edaada49a15963df4e5de681e1",
"assets/assets/img/timetable/daily/Coffee%2520Catchup.png": "4cd31bd6cf025c52062fb144bc018544",
"assets/assets/img/timetable/daily/Happy%2520Hour.png": "3004d090c6dbcaba77b89e25cb29e4be",
"assets/assets/img/timetable/daily/Morning%2520Meditation.png": "1211945583d89611d522288ec879de56",
"assets/assets/img/timetable/esafety/esafeandroid.png": "a59457a3142c5f164c2702366594323e",
"assets/assets/img/timetable/esafety/esafeonlineshopbank.png": "e4f5cd35acde80ebfe838ba44c0822bf",
"assets/assets/img/timetable/esafety/esafety-gov.png": "ef5ef6cd8a5e4491d9a88353a30027f5",
"assets/assets/img/timetable/esafety/esafetyspotascam.png": "65e0971b325e843c5c3884b29f274684",
"assets/assets/img/timetable/esafety/HEALTHANDTECH.png": "cab296ad49b503c2a99cb23dc7b850f8",
"assets/assets/img/timetable/esafety/In2eSafety%2520-%2520apps.png": "4c340ee6b1b2882118b3922aca394d08",
"assets/assets/img/timetable/esafety/In2eSafety%2520-%2520eSafety%2520Commissioner%25201-3.png": "4c9e98a915f7c91d78135d776fb7f189",
"assets/assets/img/timetable/esafety/In2eSafety%2520-%2520eSafety%2520Commissioner%2520home.png": "99a915b98604361b861fb0b9bae5abc8",
"assets/assets/img/timetable/esafety/In2eSafety%2520-%2520facebook.png": "9b6765676588a61a4bf94cd3de924958",
"assets/assets/img/timetable/esafety/In2eSafety-connect.png": "e9aaea050e65d4c2afb247961c4edc37",
"assets/assets/img/timetable/esafety/In2eSafety-email.png": "d1e8d39705305139009df15d750501d5",
"assets/assets/img/timetable/esafety/protectpersonal.png": "6269083604b68c53cd1dc64e22c329ff",
"assets/assets/img/timetable/guests/American%2520Politics%2520with%2520James%2520Cahill.png": "188ebca84bf466a9ab4b9830881b6272",
"assets/assets/img/timetable/guests/Carers%2520QLD.png": "a63d63036a5e0f71dbe20937015ef1fc",
"assets/assets/img/timetable/guests/Earth%2520Hour.png": "be1a049cc6f6c2417392f2a1a10dc6e0",
"assets/assets/img/timetable/guests/Guest%2520Speaker%2520-%2520ADA%2520Australia%2520-%2520Your%2520Right%2520to%2520Aged%2520Care%2520Advocacy.png": "ae6340817f9025eeb15724ab215697c7",
"assets/assets/img/timetable/guests/Guest%2520Speaker%2520-%2520Tenants%2520QLD.png": "77d90b6aac43ac7e6a4cd87fd2a7391e",
"assets/assets/img/timetable/guests/Guest%2520Speaker%2520-%2520The%2520Session.png": "1b1979fac78d101111d1e70ceb3e9a5f",
"assets/assets/img/timetable/guests/Guest%2520Speaker%2520Caxton%2520Legal.png": "465209ae413498419a47e7f84f4ed804",
"assets/assets/img/timetable/guests/In2Books%2520with%2520Jo%2520Skinner.png": "ec163d2915715ed366323e4748422cb7",
"assets/assets/img/timetable/guests/in2booksJA.png": "f0546455f74d76e3c43cc9f9dfdf6cc1",
"assets/assets/img/timetable/guests/Mindful%2520Psychology%2520Guest%2520Speaker.png": "102dfd78d15ffd2f344d0580a4e3c9cc",
"assets/assets/img/timetable/guests/Nutrition%2520Australia%2520txt.png": "27685a32d82acbd60262f8d1320eade4",
"assets/assets/img/timetable/guests/Nutrition%2520Australia.png": "3d5d9cd2b466eaa88f6a9f06311b352c",
"assets/assets/img/timetable/guests/OSM%2520Physio%2520with%2520Emily%2520Moore.png": "6bd6654c194280feb3a8611f508cc33d",
"assets/assets/img/timetable/guests/Poetry%2520workshop%2520with%2520Tess%2520Rowley.png": "bb2a8a7137de5ffc66cad2aab5995d78",
"assets/assets/img/timetable/inclusee_tile.png": "a058fd363ec12814e2269442a4f2f5e8",
"assets/assets/img/timetable/inclusee_tile_white.png": "3897ebd804b69b5a40c43c7757f70e24",
"assets/assets/img/timetable/movies/In2Movies%2520-%25205%2520Weddings.png": "d99331cc867e2e83250793d7d548d021",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520A%2520Chance%2520in%2520the%2520world.png": "5b6276096c4710b54180f70e732e8437",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520Blue%2520Hawaii%2520(PG).png": "cf340cab64236ef28af2b0882a004354",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520Its%2520a%2520wonderful%2520life%2520(PG).png": "a5c9689f4aaa5c389cf5b1710b0db6f1",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520Living%2520on%2520one%2520Dollar%2520(PG).png": "bf82e14a061c2adbd96fb11c6f404f10",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520My%2520one%2520and%2520only%2520(PG).png": "f101689bff3809fa9b4ec8d48eaa47af",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520Orphan%2520Horse%2520(PG).png": "eae8b3f38882fcfc6b1e8491d7c95488",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520Prayers%2520for%2520Bobby.png": "59f65925ac82f552024b38a3f3c4558a",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520Rich%2520and%2520Strange%2520(PG).png": "3c56a8b62fb225dafa20b302995ce0fe",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520The%2520Decade%2520You%2520Were%2520Born_%252070s%2520(PG).png": "b42a674a9bb61b07668aeb9840d70bab",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520The%2520Pajama%2520Game%2520(G).png": "1310e84026d2def34f1142a7fd6b1842",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520The%2520Tigers%2520of%2520Scotland%2520(PG).png": "8afcaa7ee924216291ff2e6438b60422",
"assets/assets/img/timetable/movies/In2Movies%2520-%2520Welcome%2520to%2520Babel%2520(PG).png": "744208f09fadd1fd51fe0dc2186f53d8",
"assets/assets/img/timetable/movies/In2Movies%2520-I%2520am%2520Potential%2520(PG).png": "e48d917706afafff514e4b875cc6b44a",
"assets/assets/img/timetable/movies/In2Movies%2520Reduced%2520Timetable%2520-%2520Local%2520Hero%2520(PG)%2520(1).png": "6bf70bec7753679c51764147e2d57195",
"assets/assets/img/timetable/movies/Movie%2520Club%2520-%2520The%2520Blind%2520Sea%2520(PG).png": "4a42ab9e5790e1df12419e223d56fda7",
"assets/assets/img/timetable/movies/theredpill.png": "1aa4b7f3afb2f31d7c43a9d91f412a4d",
"assets/assets/img/timetable/specialevents/52bc6955-30f5-447a-ad7c-77e7f7a65f7f.png": "41a98eda41dece0867d52dcc0e0c63a8",
"assets/assets/img/timetable/specialevents/Aged%2520Care%2520Information%2520Series.png": "067302e51267a8c5ba15c55ba02c1b3c",
"assets/assets/img/timetable/specialevents/Beyond%2520Blue%2520Webinar.png": "e588e51575778acf0be3c0cef446afc8",
"assets/assets/img/timetable/specialevents/Birthday%2520Celebration%2520Club%2520Tile.png": "7d2972e5c2432800166fa09054c01a9e",
"assets/assets/img/timetable/specialevents/Cooking%2520with%2520Kat.png": "33238dbc21d33b793b5e4a50660e3dc8",
"assets/assets/img/timetable/specialevents/Daggy%2520Disco%2520Event.png": "b8f9c05b42018c138ee2f24ee0536cd2",
"assets/assets/img/timetable/specialevents/datawifi.png": "e5ea8ca27c4f162cb1f869e9f22f6375",
"assets/assets/img/timetable/specialevents/Digital%2520Escape%2520Room%2520-%2520Generic.png": "89de7b58458950d12fc2d3177e4bb476",
"assets/assets/img/timetable/specialevents/Digital%2520Escape%2520Room%2520-%2520Midnight%2520Express.png": "561352abe63fb65541627993efe50297",
"assets/assets/img/timetable/specialevents/Digital%2520Escape%2520Room%2520-%2520Safe%2520Cracker.png": "2615865341267ac34715cd48e6eaea2b",
"assets/assets/img/timetable/specialevents/Digital%2520Escape%2520Room%2520-%2520Spy%2520Apprentice.png": "606e99b470ef7e4e85798a37cf7698bb",
"assets/assets/img/timetable/specialevents/guest%2520rachel%2520armstrng.png": "fe9c459513c4cbcc265ce5367502a0d7",
"assets/assets/img/timetable/specialevents/Guest%2520Speaker%2520-%2520In2Books%2520Amanda%2520O%2520Callaghan.png": "acdfdeae3af8ab2541e640f831414360",
"assets/assets/img/timetable/specialevents/Guest%2520Speaker%2520-%2520The%2520Session.png": "1b1979fac78d101111d1e70ceb3e9a5f",
"assets/assets/img/timetable/specialevents/Healthy%2520Relationship%2520Sessions%2520-%2520Richelle%2520Menzies.png": "5a8509c20fb9a0907ec5a7daf8ac32f1",
"assets/assets/img/timetable/specialevents/In%2520Movies%2520Blind.png": "dd590943347b5b6f4bc3f9ece0054d25",
"assets/assets/img/timetable/specialevents/In%2520Movies%2520General.png": "989f063265cbf315b2965404005c7189",
"assets/assets/img/timetable/specialevents/In%2520Movies%2520VBlue%2520bird.png": "4f1e0a1b70c9f16c59f699a0a35ddb94",
"assets/assets/img/timetable/specialevents/In2Books%2520(T.M%2520Clark).png": "23e67ab2f915aa95da68013ac8697136",
"assets/assets/img/timetable/specialevents/In2Gardening%2520(Nurso).png": "e9d263746675ee75563937e5af381c97",
"assets/assets/img/timetable/specialevents/In2Me.png": "a6defe555599840e2f3def07fa43a04c",
"assets/assets/img/timetable/specialevents/In2Movies%2520(A%2520Late%2520Quartet).png": "c15564ed461d9d7191ab8f06d709ddfe",
"assets/assets/img/timetable/specialevents/In2Movies%2520(Loves%2520Kitchen).png": "79979d5b7a0cadcd884b695c6ac3a874",
"assets/assets/img/timetable/specialevents/In2Movies%2520-%2520The%2520Blue%2520Bird.png": "594af235c55d726f3b90447cf5c7beb6",
"assets/assets/img/timetable/specialevents/In2Movies%2520-%2520Three%2520Chords%2520and%2520the%2520Truth.png": "ad1f2d5c167dd7850164312d60f0f008",
"assets/assets/img/timetable/specialevents/In2Movies%252090sclub.png": "48c5e3b7dd44999fee24156cce1f3fda",
"assets/assets/img/timetable/specialevents/in2movies%2520last%2520daughter.png": "d543c172458df0d227bce33b40c1c7c8",
"assets/assets/img/timetable/specialevents/In2Travel%2520Coromandel%2520NZ.png": "d563666264ea3b71b1d5f6410ead5a2d",
"assets/assets/img/timetable/specialevents/In2Travel_%2520Samoa.png": "67e77fc7b5f8d13b9cdf60d2a187e80a",
"assets/assets/img/timetable/specialevents/In2Trivia%2520(Mardi%2520Gras).png": "fd962fa7dc77ec85d18de727238296d4",
"assets/assets/img/timetable/specialevents/In2Trivia%2520-%2520Drag%2520Trivia.png": "ce283b2bdde4902cad6b1e20d3bb5dd9",
"assets/assets/img/timetable/specialevents/in2wellnes%2520mini.png": "a749a6fd4200ade6855a743ea47bbcb9",
"assets/assets/img/timetable/specialevents/iphone.png": "fb530eb3f28a16f5869de2018f4b3049",
"assets/assets/img/timetable/specialevents/Laughter%2520Yoga%2520txt.png": "96c4fc129665557dc84481f463ba92bf",
"assets/assets/img/timetable/specialevents/Laughter%2520Yoga.png": "97b542480c31b90c8d7a2596b785bca7",
"assets/assets/img/timetable/specialevents/Letters%2520of%2520Hope%2520-%2520Letter%2520writing%2520workshop.png": "757d3c0e7a2861f36458fbfea5842e45",
"assets/assets/img/timetable/specialevents/Liveup%2520Guest%2520Speaker.png": "cf67ad9bb8f10e9ae3740a31b219ba8a",
"assets/assets/img/timetable/specialevents/memoirworkshop.png": "4133fd6d961de4cdf1aaea5f213106c9",
"assets/assets/img/timetable/specialevents/NBN%2520In2eSafety.png": "65eeb089ed1a88f2b9d7bac2a39031b1",
"assets/assets/img/timetable/specialevents/officeftcr.png": "44d471ed80f866d8a5381e484975d138",
"assets/assets/img/timetable/specialevents/Public%2520Trustee%2520Wills.png": "784570c69b53ec7f5471e7cc729ada01",
"assets/assets/img/timetable/specialevents/scams.png": "126e8e8f3c2ee06e820379f9b96d2816",
"assets/assets/img/timetable/specialevents/sellingsafely.png": "5fe181a3a03872eef86a4733784c0a13",
"assets/assets/img/timetable/specialevents/Special%2520Event%2520Musical%2520Bingo.png": "3243866c7d3bb962e0da7077f4ec5099",
"assets/assets/img/timetable/specialevents/specialEventTile.png": "e53b6f5e2db147f973c9af4805ce3040",
"assets/assets/img/timetable/specialevents/Stroke%2520Foundation%2520Guest%2520Speaker.png": "666c4dd66e9f6815a76bbe902d00fb0c",
"assets/assets/img/timetable/specialevents/The%2520Office%2520of%2520Fair%2520Trading%2520Guest%2520Speaker%2520App%2520tile.png": "af9fd70ab91cc1f5f60771c7080d6712",
"assets/assets/img/timetable/specialevents/vccclosed_tile.png": "b02201e31db381f93474012da1c95072",
"assets/assets/img/timetable/specialevents/vccclosed_tile2.png": "addc3ea45e808fb0bb6b4ee0a0acb1dd",
"assets/assets/img/timetable/specialevents/vccclosed_tile3.png": "833cdbae45c6630373874d882fcb5a9d",
"assets/assets/img/timetable/specialevents/vft%2520angkor.png": "2904fb2f72f8480e3eab01ff41737c37",
"assets/assets/img/timetable/specialevents/VFT%2520Caves%2520and%2520Caverns.png": "01b86315ea97d2db018546c610144361",
"assets/assets/img/timetable/specialevents/vft%2520wonders.png": "03a61aa18aa01633e5ac43211cc56d24",
"assets/assets/img/timetable/specialevents/vftjoey.png": "a63e8a1c27346484bc2a771a78126914",
"assets/assets/img/timetable/specialevents/vftnorway.png": "d47fa29b5b9830ba928447b3eb0ff2e5",
"assets/assets/img/timetable/specialevents/Virtual%2520Fieldtrip%2520-%2520Bribie%2520Butterfly%2520House.png": "2ffb68bef7ef1792feb921341f8f8b39",
"assets/assets/img/timetable/specialevents/Virtual%2520Fieldtrip%2520-%2520Redcliffe%2520Botcanical%2520Gardens.png": "3dca4d3bbf7f985cfda6dac040766875",
"assets/assets/img/timetable/specialevents/wellnesmibi.png": "4039cf35bed866f275f8b9149c2f2164",
"assets/assets/img/timetable/specialevents/Wellness%2520Mini%2520Series%2520(Website).png": "ecaec98ff2da1e5a2ea30f1289b6d425",
"assets/assets/img/timetable/weekly/arttherapytile.png": "d2fee86b373a8071568b8866ae657f2e",
"assets/assets/img/timetable/weekly/b2/In2Theatre.png": "ff34080bff0287904388c07d41cb8cca",
"assets/assets/img/timetable/weekly/b2/Learn2Minecraft.png": "aca8e903e27402de11511c57243d055a",
"assets/assets/img/timetable/weekly/bibletxt.png": "af90f8622cefdd2c152f7dcba970599b",
"assets/assets/img/timetable/weekly/bookstxt.png": "9eece3a074165f0f57b26a8750db0269",
"assets/assets/img/timetable/weekly/Brain%2520Teasers%2520Club%2520Tile.png": "a1c32680aa61d56ab351dea5b554657f",
"assets/assets/img/timetable/weekly/c2ytxt.png": "0052e03e96f92692724c23f845bf0bd2",
"assets/assets/img/timetable/weekly/Carer's%2520Haven.jpg": "7ec8b61ad38d319b494aded6c701da21",
"assets/assets/img/timetable/weekly/Carers%2520Club.png": "511e595fd45cf6ed86c7b438690f770c",
"assets/assets/img/timetable/weekly/crafttile.png": "e052385ecac212a0ac6885e5194b1ba7",
"assets/assets/img/timetable/weekly/Digital%2520Help%2520Desk.png": "74a00a38f250528c6c733cfb40be91df",
"assets/assets/img/timetable/weekly/digitalhelptile.png": "199fdebaec7a201bab482a1d197542b5",
"assets/assets/img/timetable/weekly/Discovery%2520Hub.jpg": "e3addc6ce64352abd40a04fa5b56601f",
"assets/assets/img/timetable/weekly/Feedback%2520Sessions.jpg": "402035da83f139f3081e17370385881e",
"assets/assets/img/timetable/weekly/Footy%2520Tipping%2520Chat%2520App%2520Tile.png": "b91efb34fa05e579ea2fd26c15d96006",
"assets/assets/img/timetable/weekly/gamestile.png": "dd168ac0912eee563fcc1b10552f130f",
"assets/assets/img/timetable/weekly/gardentile.png": "221813092f7d0f5e87e5e1871112604f",
"assets/assets/img/timetable/weekly/hhtext.png": "dad6ea6538295d7f4bc91e5d74ffeec3",
"assets/assets/img/timetable/weekly/i2gentile.png": "d4ad527c3a8916f27d6d0b598aceadee",
"assets/assets/img/timetable/weekly/In2BibleStudies.png": "aecb3c842ce68fdf18249828dfb4636c",
"assets/assets/img/timetable/weekly/In2Books.png": "56927f69c6377cd0a103106fc770f943",
"assets/assets/img/timetable/weekly/In2Craft.png": "df60fbc381e7e6acceb3be5175117628",
"assets/assets/img/timetable/weekly/In2Drawing.png": "e9705f1d61e043c547a16dbe23ae6fc1",
"assets/assets/img/timetable/weekly/In2Games.png": "dedbfb6d64ccbcc843a16003cc5072aa",
"assets/assets/img/timetable/weekly/In2Gardening.png": "947d6e241e9957442b79781f7dfed289",
"assets/assets/img/timetable/weekly/In2Genealogy.png": "91b7af084dc80cae0a49c5d179885687",
"assets/assets/img/timetable/weekly/In2Generations.png": "16e44c345d28ec9a7ba95d8c0472469a",
"assets/assets/img/timetable/weekly/In2Music.png": "6c9ae66dd78b64023a54c1c705e3f2c6",
"assets/assets/img/timetable/weekly/In2Paint.png": "92c0e2d0ff67337a2ed65b2d6b61d08c",
"assets/assets/img/timetable/weekly/in2painttile.png": "8a42b71f79e9d681c0ba2ba3a30d6169",
"assets/assets/img/timetable/weekly/In2Photography%2520App%2520Tile.png": "27b54f5270b15eb4bf58c3f11900a643",
"assets/assets/img/timetable/weekly/In2Poetry.jpg": "c687d7a26816a46fda689a0e87b725fd",
"assets/assets/img/timetable/weekly/In2Politics%2520U.S.%2520Election%2520Watch.png": "2395cc8bb68ff4238c9ad49bc7ecc120",
"assets/assets/img/timetable/weekly/In2Recipes%2520app%2520tile.png": "bcef8dda25cc8e3656de7e7e7dc89b4d",
"assets/assets/img/timetable/weekly/In2Sewing.jpg": "5bd8c867dcde273aaf039b4fe3f74cb3",
"assets/assets/img/timetable/weekly/In2Singing.png": "9a3c1292a33ff0ecb8245a014e7bee89",
"assets/assets/img/timetable/weekly/In2Stories%2520app%2520tile.png": "18bbcd53f9d69595c7a7dc37a8ca7183",
"assets/assets/img/timetable/weekly/in2story.png": "b69dc2959556d2ba656a07e474b53ee6",
"assets/assets/img/timetable/weekly/In2Storytelling.png": "4bbc0c6ce322315ba7c82b198042a912",
"assets/assets/img/timetable/weekly/In2Theatre%2520(1).png": "ff34080bff0287904388c07d41cb8cca",
"assets/assets/img/timetable/weekly/In2Travel.png": "450c11a890ba31815b1d3eda173280b5",
"assets/assets/img/timetable/weekly/In2Trivia.png": "ec2baa325f9a25c2d56a27b75dbf27e9",
"assets/assets/img/timetable/weekly/In2Wellness.png": "35bdda855ff85878aacf06b63e783493",
"assets/assets/img/timetable/weekly/Learn2Capture.png": "9e970d70b95a19adb9300ca47078b549",
"assets/assets/img/timetable/weekly/Learn2GetStarted.png": "1994ec89c395c24f8ef133c5150dee37",
"assets/assets/img/timetable/weekly/Learn2Kahoot.png": "dae7e9ea781664ba7f7b7394778dd5a4",
"assets/assets/img/timetable/weekly/Listening%2520Library.png": "5439cb7352525bd5574787c7a5fa16a2",
"assets/assets/img/timetable/weekly/Lunch%2520&%2520Living.png": "79d389e263791ebe56e7ec6192ca911b",
"assets/assets/img/timetable/weekly/Lunch%2520and%2520Laugh.png": "e98ec67457db99bd9678e4a70b13d0ef",
"assets/assets/img/timetable/weekly/Lunch%2520and%2520Learn%2520app%2520tile.png": "52892395dba8b5449eadc424f6d94518",
"assets/assets/img/timetable/weekly/lunchandlearntile.png": "52892395dba8b5449eadc424f6d94518",
"assets/assets/img/timetable/weekly/meditiation.png": "b03b9a1ca837d888603c702ae9a2e249",
"assets/assets/img/timetable/weekly/menhour.png": "b9ace4e725f78c4bec2a40ed81c43d88",
"assets/assets/img/timetable/weekly/Mens%2520Hour.png": "de4d351cb3dbd50c7dd881b2dd20050a",
"assets/assets/img/timetable/weekly/minecraft.png": "7060002c30f4c6f4c1d01bf3ba306058",
"assets/assets/img/timetable/weekly/receipes.png": "83a035f11ce01220220b5d218bbe53eb",
"assets/assets/img/timetable/weekly/shedstxt.png": "17b53e086963751e80d9b23a6ddc06f8",
"assets/assets/img/timetable/weekly/singingtxt.png": "563f422449ffc598a5b11c1f6d75078a",
"assets/assets/img/timetable/weekly/startedtxt.png": "dd3cf704bf1dffba3ac675788ecb0c30",
"assets/assets/img/timetable/weekly/theatre.png": "c84352889b7843253bf419dd853dfa01",
"assets/assets/img/timetable/weekly/traveltile.png": "6964ff1ad4749167785b477891810606",
"assets/assets/img/timetable/weekly/triviatxt.png": "ff38a1436d21ad28ca65c959db9f1038",
"assets/assets/img/timetable/weekly/ukulele.png": "60c8b94d61771f03df2912c93aeb16ba",
"assets/assets/img/timetable/weekly/Upskillhourtile.png": "ee6d026823028921a7a027c92bef2a52",
"assets/assets/img/timetable/weekly/vft.png": "b1cb28399de986d90b07a943d1ed1df5",
"assets/assets/img/timetable/weekly/Virtual%2520Field%2520Trip%2520-%2520App%2520Tile.png": "92ad4bbb21f464b4369092b459cb66bc",
"assets/assets/img/timetable/weekly/wellnesstxt.png": "f9d53d194daa6eb3d0ec145bcbe8a7c7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d72e7b1d23f4bc114266019ad6bcd0a0",
"assets/NOTICES": "30402bad8bc5ac5dd20653d7d98515f5",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-icon-144x144.png": "6c129348e6960b9b3670f200373d360e",
"icons/android-icon-192x192.png": "07c7902bb6bd693ecaa8dec37ebb8f67",
"icons/android-icon-36x36.png": "3d56503da9db6f97027e9476453462e5",
"icons/android-icon-48x48.png": "6f83a7110f98ab56bf58e3525bfaca37",
"icons/android-icon-72x72.png": "169c2ddb5aebf0a93f9745d477e74d51",
"icons/android-icon-96x96.png": "08205654efa6a3a6249d4e02ea365776",
"icons/apple-icon-114x114.png": "11427ba9b9c49376f8f7b13488a8759d",
"icons/apple-icon-120x120.png": "106a24b1fc5fc9b2721df5d165105b2f",
"icons/apple-icon-144x144.png": "6c129348e6960b9b3670f200373d360e",
"icons/apple-icon-152x152.png": "b0b3ebb139ed179dc3aeed662409c040",
"icons/apple-icon-180x180.png": "30980292511ed0c04e9b87cd3cd817cd",
"icons/apple-icon-57x57.png": "35b058d154a66ad07ff258a8e01d1504",
"icons/apple-icon-60x60.png": "7c6fa9a995417f80955166518b12267f",
"icons/apple-icon-72x72.png": "169c2ddb5aebf0a93f9745d477e74d51",
"icons/apple-icon-76x76.png": "e258c96a4184ad3f3e5bac08f8d5195d",
"icons/apple-icon-precomposed.png": "dd0627728ddaa74eed254538ca02b3e8",
"icons/apple-icon.png": "dd0627728ddaa74eed254538ca02b3e8",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "8c1fb31ecc567478d234ef18340af666",
"icons/favicon-32x32.png": "4d9e939f5eb36036ee76c22283a36d31",
"icons/favicon-96x96.png": "08205654efa6a3a6249d4e02ea365776",
"icons/favicon.ico": "8d16aef920a9f99453119cb7c1fc2c07",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "6c129348e6960b9b3670f200373d360e",
"icons/ms-icon-150x150.png": "5022c2bf22710fbb197c46a3ca08e0d1",
"icons/ms-icon-310x310.png": "be9497c21925e4d091ad81514e188131",
"icons/ms-icon-70x70.png": "602874a6f063b1342f7436d9cf627ba2",
"index.html": "e2eac9ea10e54bf1762c401897a195ae",
"/": "e2eac9ea10e54bf1762c401897a195ae",
"jsfunctions.js": "527047b4742849d7741d0e74f3aea90e",
"main.dart.js": "f5e33b5f9eb4bb781919209eab82de68",
"manifest.json": "b5a8a967df78e46328f4db6abd07f563",
"version.json": "e640fb6bb2a22b070c3f374f8c8ae980"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
