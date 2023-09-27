'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "522658f3a7433aaa80729f1314d98138",
"assets/assets/app_strings.dart": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/img/avatars/CSO/andrea.jpg": "4ff9f6f8d40ab794ebad03de00d8cbff",
"assets/assets/img/avatars/CSO/jacinta.jpg": "545f79449473b53066a2b5afe6643e41",
"assets/assets/img/avatars/CSO/jessicap.jpg": "78dc413ebe71dba70812076ad2710e64",
"assets/assets/img/avatars/CSO/jessicaw.jpg": "f4eab7fefdeeae3a01c01704e7cdae02",
"assets/assets/img/avatars/CSO/kate.jpg": "f5b6f998d766051ba2c18f44f54aabaa",
"assets/assets/img/avatars/CSO/kristie.png": "55f7c7a2b799a032f428a5a0684cc754",
"assets/assets/img/avatars/CSO/lisa.jpg": "dd72c7d83e13754b063283de23e5ab6c",
"assets/assets/img/avatars/CSO/mere.jpg": "19899746180aed7800da894c5ccebf7c",
"assets/assets/img/avatars/CSO/nick.jpg": "a55854e8dd479df11251400b79d4432a",
"assets/assets/img/avatars/CSO/sandra.jpg": "4f343a5b128cb198722b221f9eb9ecbc",
"assets/assets/img/avatars/CSO/tanya.jpg": "a075cdb18334978685231a5dad4ab83b",
"assets/assets/img/avatars/default_avatar.png": "d96c2c91caa2043e1da4b89e9031423d",
"assets/assets/img/avatars/default_avatar_meet.png": "bf8fdae57c026b35f5494989eef39eb2",
"assets/assets/img/avatars/default_avatar_zoom.png": "a286392601e2872f1357ded9159c7fcb",
"assets/assets/img/bg/light_bg.png": "90580d14eb9beb97550b34d44cd40bab",
"assets/assets/img/gowslides/gowslide1.png": "c7a0bc3c9531fa21951452f67305f686",
"assets/assets/img/gowslides/gowslide10.png": "2e06f51c209190555bfc4118d86cf1d6",
"assets/assets/img/gowslides/gowslide11.png": "3bf9994b0960ec8d09ba32f639e383b1",
"assets/assets/img/gowslides/gowslide12.png": "0758a7d5865e9d4446918c4ab0c24750",
"assets/assets/img/gowslides/gowslide13.png": "a5f5dfa2917631f96b085585a47deb56",
"assets/assets/img/gowslides/gowslide14.png": "c8a18f2ed21ed9c3458be3333c15c1b7",
"assets/assets/img/gowslides/gowslide15.png": "92d29ce3ce62e117e558e18efefc792c",
"assets/assets/img/gowslides/gowslide16.png": "60a487f6f17c62d5ec47033a624bac6c",
"assets/assets/img/gowslides/gowslide17.png": "3dddc6f1dacf98ec2365bbd639fd6733",
"assets/assets/img/gowslides/gowslide18.png": "8d27b77983463ed9198a04fe0bc90316",
"assets/assets/img/gowslides/gowslide19.png": "7d6d41ad693c6b23d4cbe8bf0279c0cf",
"assets/assets/img/gowslides/gowslide2.png": "ada385b446c27211b5db3072452ca7da",
"assets/assets/img/gowslides/gowslide20.png": "f4ff678b040f13c07fc6945897ad590f",
"assets/assets/img/gowslides/gowslide21.png": "96a8c9590553132e364eb8e8fd9e56fa",
"assets/assets/img/gowslides/gowslide22.png": "8ef188fb7a82281ef3a8ba2b2eeaee79",
"assets/assets/img/gowslides/gowslide23.png": "dcbcb170ef11c2979439838101984687",
"assets/assets/img/gowslides/gowslide24.png": "76526baf1bc7d239a967c3df94d9a65c",
"assets/assets/img/gowslides/gowslide25.png": "132e78d7e7d6494a31f2515f22da5abd",
"assets/assets/img/gowslides/gowslide26.PNG": "132e78d7e7d6494a31f2515f22da5abd",
"assets/assets/img/gowslides/gowslide27.PNG": "83d04d063890fd4a4fc6a9729973b01f",
"assets/assets/img/gowslides/gowslide28.PNG": "009ec09ba489236bdc9572eb0d6f3322",
"assets/assets/img/gowslides/gowslide29.png": "35a9990b9e736faa52bf6967cd5aa18e",
"assets/assets/img/gowslides/gowslide3.png": "f8d067f344ca2cdf2a9e047f831cf220",
"assets/assets/img/gowslides/gowslide30.PNG": "4d83933f3f2683d6a085e681878938b9",
"assets/assets/img/gowslides/gowslide31.png": "5d13281e2fcd3864f8fe94f9fe30995a",
"assets/assets/img/gowslides/gowslide32.png": "9886480b4289bcce30b5bba0626eee64",
"assets/assets/img/gowslides/gowslide33.png": "61b184daaa003cfae0d575ac1576ef29",
"assets/assets/img/gowslides/gowslide34.png": "18beed0db600b086987e05cfce2a77a3",
"assets/assets/img/gowslides/gowslide35.png": "5c502b8b15bdb8e82bd4fe7cb68cdce4",
"assets/assets/img/gowslides/gowslide36.PNG": "51de5720fe0901bec861a5d9b6f1d663",
"assets/assets/img/gowslides/gowslide37.png": "0e74e327bb267aa281fa6d056f2b8c3a",
"assets/assets/img/gowslides/gowslide38.png": "dc3217d0c31e51f2679fa3205b721f16",
"assets/assets/img/gowslides/gowslide39.png": "f5574043a184089c871a8586e48c35f2",
"assets/assets/img/gowslides/gowslide4.png": "e89a705f38ff981a9ffa75d09d97bc82",
"assets/assets/img/gowslides/gowslide40.png": "b21fd39021e26767679734bbdb4217a5",
"assets/assets/img/gowslides/gowslide41.png": "e435983227620bb0d53da7fba8b9b921",
"assets/assets/img/gowslides/gowslide42.png": "1c8e0e346cdb4d90dfa730055823845a",
"assets/assets/img/gowslides/gowslide43.png": "5f9b5757d494a193702d93820a59990b",
"assets/assets/img/gowslides/gowslide44.png": "ce9316e92d44e526b91df180987cf3c9",
"assets/assets/img/gowslides/gowslide45.png": "d0647ef45aa500927bc7aaccf1b7d46d",
"assets/assets/img/gowslides/gowslide46.png": "2ca51c3b87b9f867b5e27d87367f1084",
"assets/assets/img/gowslides/gowslide47.png": "635a50506453234d2d13c8e8de2fa6e9",
"assets/assets/img/gowslides/gowslide48.png": "b91a086c3b0e5c499bd1c269365d54ba",
"assets/assets/img/gowslides/gowslide49.png": "85752bea4388609b5318c981895251b4",
"assets/assets/img/gowslides/gowslide5.png": "9516d8d17fd4b0734e8788334c989df4",
"assets/assets/img/gowslides/gowslide50.png": "82668f6c174e8ba1aeb98663b4807ccd",
"assets/assets/img/gowslides/gowslide51.png": "98113e3600bc8f4d20e948c6788dfe0a",
"assets/assets/img/gowslides/gowslide52.png": "ccf0cc7587ccf0d64aa93cd65f611eb6",
"assets/assets/img/gowslides/gowslide53.png": "31aab694f76016cf0ce6d491e521faac",
"assets/assets/img/gowslides/gowslide54.png": "56990ebce1d0333d49498e0981633472",
"assets/assets/img/gowslides/gowslide55.png": "1e70e93f91a40e1ee3cce138499948b3",
"assets/assets/img/gowslides/gowslide56.png": "7560cfbbe72375e32e73f09ddd939c4c",
"assets/assets/img/gowslides/gowslide57.png": "10b1aa064f308636ad25208dccd0024e",
"assets/assets/img/gowslides/gowslide58.png": "faf0bcf1ec3539c4f71f3565b26c7807",
"assets/assets/img/gowslides/gowslide59.png": "46ac1a2adba8afe6bae2c7ea57fe0037",
"assets/assets/img/gowslides/gowslide6.png": "0cecf2d305500e5792fa1a0b8cd8209a",
"assets/assets/img/gowslides/gowslide60.png": "cb6eb3328d8ac42a47c3f9fd871d9a9f",
"assets/assets/img/gowslides/gowslide61.png": "5ccadcaf11624698f04cf6ae98fc0f6c",
"assets/assets/img/gowslides/gowslide62.png": "ff3f90171d131ea051b07e0d10f3ee57",
"assets/assets/img/gowslides/gowslide63.PNG": "9732a40d992ef8e331e96502680a1ca5",
"assets/assets/img/gowslides/gowslide64.PNG": "eb67458fb547285b4f20e7e9313537a8",
"assets/assets/img/gowslides/gowslide65.png": "3b63ec80676fd7893eda1f4d80a9faf3",
"assets/assets/img/gowslides/gowslide66.png": "988a02cdf4eab846811c73a6be65abd5",
"assets/assets/img/gowslides/gowslide67.PNG": "ed8f67f6c3f8cc1937a414625feb80c5",
"assets/assets/img/gowslides/gowslide7.png": "780eec2fae250cb17036d1e153a9fb1a",
"assets/assets/img/gowslides/gowslide8.png": "f0dae71f8be4b231448b1055b7ac2474",
"assets/assets/img/gowslides/gowslide9.png": "2c4ea0cb5159859cc7786d42f196f3cf",
"assets/assets/img/icons/event/bbe.png": "b16aaea123115327d6c89ceefb543668",
"assets/assets/img/icons/event/Bribie%2520Butterfly%2520House.png": "525d442e51134544c681b980e1992281",
"assets/assets/img/icons/event/Cosy%2520Crime%2520Workshop%2520(CT%2520Mitchell).png": "b9e213c52ab879edcab63bcab78bf4bc",
"assets/assets/img/icons/event/Dementia%2520Webinar.png": "2ef4aa4cbca29bd629553729ce7d3d1c",
"assets/assets/img/icons/event/Eddie%2520Spaghetti%2520VCC.png": "6002b7152f5e9f5b2d088f70516715aa",
"assets/assets/img/icons/event/GOW%2520Morning%2520Tea.png": "eeba54baef9ad095a032e5b404e5dbf8",
"assets/assets/img/icons/event/Happy%2520Hour_%2520Trivia.png": "665e072f3f266ee4262efb280b98074a",
"assets/assets/img/icons/event/In2Books%2520(CT%2520Mitchell).png": "bc67a4455e4157a5c99867f849c5a26b",
"assets/assets/img/icons/event/In2Books%2520(E%2520Shaw).png": "dcacf8e4eedfa3aa0af0039a11acbb75",
"assets/assets/img/icons/event/In2Craft_%2520Embroidery.png": "68a820c9b1fcd94ca5e3388cf657d966",
"assets/assets/img/icons/event/In2eSafety%2520-%2520eSafety%2520Commissioner.png": "5e46078a96fd88617710052d4f84734c",
"assets/assets/img/icons/event/In2Gardening%2520(Nurso).png": "e9d263746675ee75563937e5af381c97",
"assets/assets/img/icons/event/In2Paintby%2523.png": "478f664b1254c90e53bf72c67f70f659",
"assets/assets/img/icons/event/In2Pets%2520(RSPCA).png": "859025db19f71aea2ef01349ee9e974b",
"assets/assets/img/icons/event/in2petsrspca.png": "a53d6a024f40e15a9e7c3893491f9152",
"assets/assets/img/icons/event/in2petsrspcatxt.png": "98b82873dc257c9609dc66cb0e253e8e",
"assets/assets/img/icons/event/In2Travel_%2520Romania_%2520Halloween.png": "5a91cd6a41b31c6d11cea64fb232c4a7",
"assets/assets/img/icons/event/In2Trivia%2520(VOW%2520Ellen%2520Briggs).png": "cb219d6beebe4830c8878d63bdf6fa4f",
"assets/assets/img/icons/event/In2Wellness%2520(Nutrition%2520Australia).png": "0017fc8926dab13e3757936b773a000e",
"assets/assets/img/icons/event/Learn2QRCode.png": "a0fb5120fde0f6fbe0d2dde36d822b2a",
"assets/assets/img/icons/event/Live%2520Up.png": "23bdf4b23ac9785a487e8ea3ba7d2fa8",
"assets/assets/img/icons/event/Lunch%2520Club%2520(Laughter%2520Yoga).png": "11c5d2b80ca09d1a3f4005941b2591bb",
"assets/assets/img/icons/event/NBN%2520DIGITAL%2520Legacy.png": "bf3fa01f54b6da72841f6fa6af1f6029",
"assets/assets/img/icons/event/NBN%2520Special%2520In2eSaftety.png": "c1cc22b0109400681ab65735656218a6",
"assets/assets/img/icons/event/nurso.png": "a66272e62db1e14febce8e05c9e6e381",
"assets/assets/img/icons/event/Parkinson's%2520QLD.png": "e9c8f53c8ab8548b61b321a015a55cbe",
"assets/assets/img/icons/event/Public%2520Trustee%2520Wills.png": "784570c69b53ec7f5471e7cc729ada01",
"assets/assets/img/icons/event/QSM%2520Morning%2520Tea.png": "0f3e8c3d4415b2c71d9f217e4429dda2",
"assets/assets/img/icons/inclusee/incluseeconnect.png": "3eaf56be1612a2da888b3c39f3d252ee",
"assets/assets/img/icons/inclusee/incluseelogo.png": "f4b3f4f98541961f60f278a0565f491e",
"assets/assets/img/icons/inclusee/incluseelogosmall.png": "778723bf1d02ccda24cb106349e82896",
"assets/assets/img/icons/inclusee/pag.png": "d6ecb7fe9be0085e384f1de316eff3d1",
"assets/assets/img/icons/interests/Happy%2520Holidays%2520Afternoon%2520Tea.png": "6176ec002175ed675b4d01274a9694f2",
"assets/assets/img/icons/interests/Happy%2520Holidays%2520Morning%2520Tea.png": "83bcd1c3d2a8f49a7908cd816038d04a",
"assets/assets/img/icons/interests/In2eSafety%2520Commissioner%25201-3%2520connecting.png": "088cbd02ba883c412f881cea967e249d",
"assets/assets/img/icons/interests/In2eSafety%2520Commissioner%25201-3%2520facebook.png": "594d577ca44c00f0b72f1a34d5e87a43",
"assets/assets/img/icons/interests/In2eSafety%2520Commissioner%25201-3%2520hometech.png": "75fde82a327ef62dca973c6b95783dee",
"assets/assets/img/icons/interests/In2eSafety%2520Commissioner%25201-3%2520scam.png": "6f9a07ff6eb9ea15e6a19758bfe10c5d",
"assets/assets/img/icons/interests/In2eSafety%2520Commissioner%25201-3%2520scams.png": "33c53d38cddd8519a57fc666691c3c68",
"assets/assets/img/icons/interests/In2eSafety%2520Commissioner%25201-3%2520selling.png": "06bcad7e2e2a2adb5c0729a21816f666",
"assets/assets/img/icons/interests/In2eSafety%2520Commissioner%25201-3%2520shopping.png": "b4aa39888e11a255e99e827c65b664b1",
"assets/assets/img/icons/interests/In2eSafety%2520Commissioner%25201-3%2520techandhealth.png": "4000bf8729fd0793e60f8f6562bab257",
"assets/assets/img/icons/interests/In2eSafety%2520Commissioner%25201-3%2520websites.png": "85f35710a78a154fea3b4ee38bbd479d",
"assets/assets/img/icons/interests/In2eSafety%2520Commissioner%25201-3%2520wifi.png": "132acb2c97e03402fd4e737707b1bd7b",
"assets/assets/img/icons/interests/In2Movies%2520Christmess.png": "41bbd84d5d7fbda4d62eb2eb3a115ed9",
"assets/assets/img/icons/interests/inclusee_tile.png": "a058fd363ec12814e2269442a4f2f5e8",
"assets/assets/img/icons/interests/inclusee_tile_pale.png": "3637b1177784a5e534b55e91efc845d0",
"assets/assets/img/icons/interests/inclusee_tile_white.png": "3897ebd804b69b5a40c43c7757f70e24",
"assets/assets/img/icons/interests/nursotxt.png": "e7fb722b276cf085c1d184eafa70d6c2",
"assets/assets/img/icons/interests/thirds/Connect2You.png": "75385a03a2e20404f2bdc40cb686fd2c",
"assets/assets/img/icons/interests/thirds/ddi3rd.png": "c32f5070e06029a5bc4d5f03655acf81",
"assets/assets/img/icons/interests/thirds/in2biblestudies.png": "01aee27b54b5f328ca9a72cf7d546874",
"assets/assets/img/icons/interests/thirds/In2Craft.png": "5ce82e315fb9522a284ee243c692d9fd",
"assets/assets/img/icons/interests/thirds/In2Pets.png": "02a8a19aaf0fa95cf6a9c18db2f74c93",
"assets/assets/img/icons/interests/thirds/In2Sheds.png": "a78bb23034db9bee5a8002a71db8d847",
"assets/assets/img/icons/interests/thirds/In2Singing%2520V2.png": "a772a31f8fc760361ee27c230d4dd96f",
"assets/assets/img/icons/interests/thirds/In2Travel.png": "8da4e765d3bb5a2d5e485cb6937b15e1",
"assets/assets/img/icons/interests/thirds/Lunch%2520Club.png": "443127b1ccd78163f5157bb7ce71be0a",
"assets/assets/img/icons/interests/txtimg/adatile.png": "828f065fe1c200bb7e9b37c17ebc7b32",
"assets/assets/img/icons/interests/txtimg/bibletxt.png": "af90f8622cefdd2c152f7dcba970599b",
"assets/assets/img/icons/interests/txtimg/bookstxt.png": "9eece3a074165f0f57b26a8750db0269",
"assets/assets/img/icons/interests/txtimg/c2ytxt.png": "0052e03e96f92692724c23f845bf0bd2",
"assets/assets/img/icons/interests/txtimg/crafttxt.png": "e052385ecac212a0ac6885e5194b1ba7",
"assets/assets/img/icons/interests/txtimg/dhdtxt.png": "199fdebaec7a201bab482a1d197542b5",
"assets/assets/img/icons/interests/txtimg/gamestxt.png": "dd168ac0912eee563fcc1b10552f130f",
"assets/assets/img/icons/interests/txtimg/gardentxt.png": "221813092f7d0f5e87e5e1871112604f",
"assets/assets/img/icons/interests/txtimg/generationstxt.png": "d4ad527c3a8916f27d6d0b598aceadee",
"assets/assets/img/icons/interests/txtimg/gmailtxt.png": "f143e5f079a6242e0b3603c2d1225225",
"assets/assets/img/icons/interests/txtimg/Happy%2520Hour.png": "8a42b71f79e9d681c0ba2ba3a30d6169",
"assets/assets/img/icons/interests/txtimg/hhtext.png": "dad6ea6538295d7f4bc91e5d74ffeec3",
"assets/assets/img/icons/interests/txtimg/in2paint.png": "8a42b71f79e9d681c0ba2ba3a30d6169",
"assets/assets/img/icons/interests/txtimg/int2paint.png": "4d0c542901938c3d344c695d26ef0756",
"assets/assets/img/icons/interests/txtimg/petstxt.png": "e533aeb92be23b9ef288ed64ea1c4476",
"assets/assets/img/icons/interests/txtimg/receipes.png": "c21b1d1e6815d9f41e405875b7032b3e",
"assets/assets/img/icons/interests/txtimg/shedstxt.png": "17b53e086963751e80d9b23a6ddc06f8",
"assets/assets/img/icons/interests/txtimg/shoptxt.png": "f6dbb7582286300dd9848c902c205727",
"assets/assets/img/icons/interests/txtimg/singingtxt.png": "563f422449ffc598a5b11c1f6d75078a",
"assets/assets/img/icons/interests/txtimg/startedtxt.png": "dd3cf704bf1dffba3ac675788ecb0c30",
"assets/assets/img/icons/interests/txtimg/storytxt.png": "c67bb8e38c709e430a1b30d7c01419d4",
"assets/assets/img/icons/interests/txtimg/traveltxt.png": "6964ff1ad4749167785b477891810606",
"assets/assets/img/icons/interests/txtimg/triviatxt.png": "ff38a1436d21ad28ca65c959db9f1038",
"assets/assets/img/icons/interests/txtimg/ukulele.png": "60c8b94d61771f03df2912c93aeb16ba",
"assets/assets/img/icons/interests/txtimg/wellnesstxt.png": "f9d53d194daa6eb3d0ec145bcbe8a7c7",
"assets/assets/img/icons/rd/c2oapp.png": "8062094dfc68575f42cce7887bcd51cd",
"assets/assets/img/icons/rd/c2yapp.png": "7e54aa05535cc5dcb0a636f60c51ba13",
"assets/assets/img/icons/rd/gowrd.png": "28645ce0ad0241a7473db6fe206e601a",
"assets/assets/img/icons/rd/In2Books.png": "37971612c7c53f5f7c243c2b1130c71d",
"assets/assets/img/icons/rd/In2Crafts.png": "a2a4deb55496ed748d5c8ce283f41a00",
"assets/assets/img/icons/rd/In2Gardening.png": "cb54737178d5ad40a3a328a7684bd88b",
"assets/assets/img/icons/rd/In2Movies.png": "c71a38f0a8ae0b6cbe56596b5c7fe7a1",
"assets/assets/img/icons/rd/InSheds.png": "4f617ceaf9867c56c5b14b9a14bb708f",
"assets/assets/img/icons/rd/interestsapp.png": "cefbba157f20bb30c771ee174afc78e2",
"assets/assets/img/icons/rd/radioapp.png": "a44289213c7e7eeba85614fb69666e53",
"assets/assets/img/icons/rd/rdconnect2one.png": "cb3563f172ed9b9bfb17325648bcde2a",
"assets/assets/img/icons/rd/rdconnect2you.png": "9d065dcb074509a83a9436819510bb5d",
"assets/assets/img/icons/rd/rdincluseeltdradio.png": "6dd09c6501586f063c73ca0970d8716c",
"assets/assets/img/icons/rd/rdinterests2enjoy.png": "e47b74f95dc619c512a0f1b550110962",
"assets/assets/img/icons/rd/rdinterests2enjoytxt.png": "3b5777ae6051ecc355e1464db8232c01",
"assets/assets/img/icons/rd/rdlearn2tech.png": "046ea1d852770bc9a0c584dfa222b80f",
"assets/assets/img/icons/rd/support.png": "b921728227c165daca192d15354f0f58",
"assets/assets/img/icons/rd/techapp.png": "09858ea3aa656c4b0e3786d1433f2c37",
"assets/assets/img/icons/sq/appmainicon.png": "85a9ad0aa574e544376023798ac35546",
"assets/assets/img/icons/sq/bingo.png": "d056d94c0dcd05db9361fc7399860ead",
"assets/assets/img/icons/sq/c2o.png": "d06d44c18b233d60e2c909cc03745343",
"assets/assets/img/icons/sq/c2y.png": "1b673032a2c555a56f91f547b04871cd",
"assets/assets/img/icons/sq/downloadstile.png": "4ba0aca42939e8eb7f80ac8cef949eeb",
"assets/assets/img/icons/sq/gowtile.png": "9e643044e0b3b168ce95769b5f096f21",
"assets/assets/img/icons/sq/help.png": "59e651da78520cbb287f92e72c1900ed",
"assets/assets/img/icons/sq/IncluseeLinksTile.png": "55f9f49f299075abd070c63878034a23",
"assets/assets/img/icons/sq/IncluseeProgramInfoTile.png": "56b5e43283b3651edc1ad53eb1cfde05",
"assets/assets/img/icons/sq/interests.png": "e997dea698eb1aa8a982fcf659e957d0",
"assets/assets/img/icons/sq/NewsletterTile.png": "f14331323ce262e38e6bd7793f1c8a04",
"assets/assets/img/icons/sq/OtherLinksTile.png": "eda629a626c4e06477c7fd188a13152e",
"assets/assets/img/icons/sq/radio.png": "37ad678a2d18b9540e74636b1ed81ed5",
"assets/assets/img/icons/sq/tech.png": "6c7525e056b794232ece74a0b3dabc0f",
"assets/assets/img/icons/sq/travel.png": "5ac774d888c0b991b3eb25de11419ced",
"assets/assets/img/icons/sq/trivia.png": "cfb1b2f266e0a98487c41dc3120284d6",
"assets/assets/img/icons/vow/Happy%2520Hour%2520Maurie%2520Voisey%2520Barlin.png": "3e6822061cd56449c33ba3a3c7d658b2",
"assets/assets/img/icons/vow/In2Books%2520Tess%2520Rowley.png": "6fd9044b60a9ebbc5526af9f9c8196d8",
"assets/assets/img/icons/vow/In2Games%2520Eddie%2520Spagetti.png": "3a47ef401a37d9fcf4590d79f5205715",
"assets/assets/img/icons/vow/In2Gardening%2520Nurso.png": "a66272e62db1e14febce8e05c9e6e381",
"assets/assets/img/icons/vow/In2Pets%2520RSPCA.png": "a53d6a024f40e15a9e7c3893491f9152",
"assets/assets/img/icons/vow/In2Singing%2520Rose%2520Grace.png": "fa4810d727f457729d903732cd10492f",
"assets/assets/img/icons/vow/In2Trivia%2520VOW%2520Ellen%2520Briggs.png": "1a5414a5715a6e90fed522b756dcf942",
"assets/assets/img/icons/vow/In2Wellness%2520Nutrition%2520Australia.png": "3d5d9cd2b466eaa88f6a9f06311b352c",
"assets/assets/img/icons/vow/Learn2Storytell%2520Robyn%2520Moore.png": "63510bb78a926d29cdb5ba809484e286",
"assets/assets/img/icons/vow/Lunch%2520Club%2520Laughter%2520Yoga.png": "97b542480c31b90c8d7a2596b785bca7",
"assets/assets/img/icons/vow/NBN%2520In2eSafety.png": "1602c7d426dec37c21efc4b994add149",
"assets/assets/img/icons/vow/Virtual%2520Open%2520Week%2520-%2520Tile.png": "b9a8c5ba801142269af405d262e96bf0",
"assets/assets/img/PAGFlyer.png": "6acbe8fdd2ed2d0bbb10678384781eff",
"assets/assets/img/VirtualOpenWeekTimetable.png": "8cc0998d4f1d0582070846db9cb21eb4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5d48b813a36bac82a9e1a041dd480e91",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "36f0824f284e284cb057c51dbef78840",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
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
"index.html": "ee07668c060a8744c90c6b2cf8f25ef6",
"/": "ee07668c060a8744c90c6b2cf8f25ef6",
"jsfunctions.js": "527047b4742849d7741d0e74f3aea90e",
"main.dart.js": "b8b2285b07438fd5548726e519b6c642",
"manifest.json": "b5a8a967df78e46328f4db6abd07f563",
"version.json": "e640fb6bb2a22b070c3f374f8c8ae980"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
