const TOPICS = [
  { uz: "Salomlashish", ru: "Приветствия", w: [
    ["Salom","Привет","privEt"],["Assalomu alaykum","Здравствуйте","zdrAvstvuyte"],["Xayrli tong","Доброе утро","dObroye Utro"],
    ["Xayrli kun","Добрый день","dObryy dyen'"],["Xayrli kech","Добрый вечер","dObryy vEchyer"],["Xayr","До свидания","da svidAniya"],
    ["Rahmat","Спасибо","spasIba"],["Iltimos","Пожалуйста","pazhAlusta"],["Kechirasiz","Извините","izvinItye"],["Ha","Да","da"],["Yo'q","Нет","nyet"] ] },
  { uz: "Sonlar", ru: "Числа 0–10", w: [
    ["Nol","Ноль","nol'"],["Bir","Один","adIn"],["Ikki","Два","dva"],["Uch","Три","tri"],["To'rt","Четыре","chetIrye"],["Besh","Пять","pyat'"],
    ["Olti","Шесть","shest'"],["Yetti","Семь","syem'"],["Sakkiz","Восемь","vOsyem'"],["To'qqiz","Девять","dyEvyat'"],["O'n","Десять","dyEsyat'"] ] },
  { uz: "Katta sonlar", ru: "Числа 11–1000", w: [
    ["O'n bir","Одиннадцать","adInnatsat'"],["O'n ikki","Двенадцать","dvyenAtsat'"],["O'n uch","Тринадцать","trinAtsat'"],["O'n besh","Пятнадцать","pyatnAtsat'"],
    ["Yigirma","Двадцать","dvAtsat'"],["O'ttiz","Тридцать","trItsat'"],["Qirq","Сорок","sOrak"],["Ellik","Пятьдесят","pyatdyesYAt"],
    ["Oltmish","Шестьдесят","shestdyesYAt"],["Yetmish","Семьдесят","syEm'dyesyat"],["Sakson","Восемьдесят","vOsyemdyesyat"],["To'qson","Девяносто","dyevyanOsta"],
    ["Yuz","Сто","sto"],["Ming","Тысяча","tYsyacha"] ] },
  { uz: "Oila", ru: "Семья", w: [
    ["Oila","Семья","syemyA"],["Ona","Мама","mAma"],["Ota","Папа","pApa"],["Aka","Старший брат","stArshiy brat"],["Uka","Младший брат","mlAdshiy brat"],
    ["Opa","Старшая сестра","stArshaya syestrA"],["Singil","Младшая сестра","mlAdshaya syestrA"],["Bobo","Дедушка","dEdushka"],["Buvi","Бабушка","bAbushka"],
    ["Bola","Ребёнок","ryebYOnok"],["Do'st","Друг","druk"],["Qo'shni","Сосед","sasyEt"] ] },
  { uz: "Ovqat", ru: "Еда и напитки", w: [
    ["Non","Хлеб","khlyep"],["Suv","Вода","vadA"],["Choy","Чай","chay"],["Sut","Молоко","malakO"],["Go'sht","Мясо","myAsa"],["Meva","Фрукты","frUkty"],
    ["Sabzavot","Овощи","Ovashchi"],["Guruch","Рис","ris"],["Tuxum","Яйцо","yaytsO"],["Shakar","Сахар","sAkhar"],["Tuz","Соль","sol'"],
    ["Qahva","Кофе","kOfye"],["Sho'rva","Суп","sup"],["Pishloq","Сыр","syr"],["Olma","Яблоко","yAblaka"],["Kartoshka","Картошка","kartOshka"] ] },
  { uz: "Ranglar", ru: "Цвета", w: [
    ["Qizil","Красный","krAsnyy"],["Ko'k","Синий","sInii"],["Yashil","Зелёный","zyelYOnyy"],["Sariq","Жёлтый","zhOltyy"],["Oq","Белый","byElyy"],
    ["Qora","Чёрный","chOrnyy"],["Jigarrang","Коричневый","karIchnyevyy"],["Pushti","Розовый","rOzovyy"],["Kulrang","Серый","syEryy"],["To'q sariq","Оранжевый","aranzhEvyy"] ] },
  { uz: "Hafta kunlari", ru: "Дни недели", w: [
    ["Dushanba","Понедельник","panyedyEl'nik"],["Seshanba","Вторник","ftOrnik"],["Chorshanba","Среда","sryedA"],["Payshanba","Четверг","chetvyErk"],
    ["Juma","Пятница","pyAtnitsa"],["Shanba","Суббота","subbOta"],["Yakshanba","Воскресенье","vaskryesyEnye"],["Bugun","Сегодня","syevOdnya"],["Ertaga","Завтра","zAftra"],["Kecha","Вчера","fcherA"] ] },
  { uz: "Oylar va fasllar", ru: "Месяцы и времена года", w: [
    ["Yanvar","Январь","yanvAr'"],["Fevral","Февраль","fyevrAl'"],["Mart","Март","mart"],["Aprel","Апрель","aprEl'"],["May","Май","may"],["Iyun","Июнь","iyUn'"],
    ["Iyul","Июль","iyUl'"],["Avgust","Август","Avgust"],["Sentabr","Сентябрь","syentyAbr'"],["Oktabr","Октябрь","aktYabr'"],["Noyabr","Ноябрь","nayAbr'"],["Dekabr","Декабрь","dyekAbr'"],
    ["Bahor","Весна","vyesnA"],["Yoz","Лето","lEta"],["Kuz","Осень","Osyen'"],["Qish","Зима","zimA"] ] },
  { uz: "Vaqt", ru: "Время", w: [
    ["Bir soat","Час","chas"],["Daqiqa","Минута","minUta"],["Soniya","Секунда","syekUnda"],["Kun","День","dyen'"],["Tun","Ночь","noch"],["Ertalab","Утро","Utro"],
    ["Kechqurun","Вечер","vEchyer"],["Hafta","Неделя","nyedyEl'ya"],["Oy","Месяц","mEsyats"],["Yil","Год","got"],["Hozir","Сейчас","syeychAs"],["Keyin","Потом","patOm"],
    ["Avval","Сначала","snachAla"],["Doim","Всегда","fsyegdA"],["Hech qachon","Никогда","nikagdA"],["Ba'zan","Иногда","inagdA"],["Allaqachon","Уже","uzhE"],["Hali","Ещё","yeshchYO"] ] },
  { uz: "Shaharda", ru: "В городе", w: [
    ["Uy","Дом","dom"],["Maktab","Школа","shkOla"],["Do'kon","Магазин","magazIn"],["Ko'cha","Улица","Ulitsa"],["Shahar","Город","gOrat"],["Bozor","Рынок","rYnak"],
    ["Kasalxona","Больница","bal'nItsa"],["Metro","Метро","myetrO"],["Avtobus","Автобус","aftObus"],["Bekat","Остановка","astanOfka"],
    ["Chapga","Налево","nalyEva"],["O'ngga","Направо","naprAva"],["To'g'ri","Прямо","prYAma"],["Bog'","Парк","park"],["Restoran","Ресторан","ryestarAn"],["Bank","Банк","bank"] ] },
  { uz: "Savollar", ru: "Вопросы", w: [
    ["Nima?","Что?","shto"],["Kim?","Кто?","kto"],["Qayerda?","Где?","gdye"],["Qachon?","Когда?","kagdA"],["Nega?","Почему?","pachimU"],["Qancha?","Сколько?","skOl'ka"],
    ["Qanday?","Какой?","kakOy"],["Ismingiz nima?","Как вас зовут?","kak vas zavUt"],["Men tushunmadim","Я не понял","ya nye panyAl"],["Qancha turadi?","Сколько стоит?","skOl'ka stOit"],
    ["Qayerga?","Куда?","kudA"],["Kim bilan?","С кем?","s kyem"] ] },
  { uz: "Muloqot", ru: "Фразы для разговора", w: [
    ["Mening ismim...","Меня зовут...","myenyA zavUt"],["Tanishganimdan xursandman","Очень приятно","Ochyen' priyAtna"],["Qayerdansiz?","Откуда вы?","atkUda vy"],
    ["Men O'zbekistondanman","Я из Узбекистана","ya iz uzbyekistAna"],["Rus tilini o'rganyapman","Я учу русский язык","ya uchU rUsskiy yazYk"],
    ["Sekinroq gapiring","Говорите медленнее","gavarItye myEdlyenyeye"],["Takrorlang","Повторите","paftarItye"],["Yordam bering","Помогите","pamagItye"],
    ["Menga kerak","Мне нужно","mnye nUzhna"],["Menda yo'q","У меня нет","u myenyA nyet"],["Bilmayman","Не знаю","nye znAyu"],["Tushundim","Я понял","ya panyAl"],
    ["Bu nima?","Что это?","shto Eta"],["Hammasi yaxshi","Всё хорошо","fsyo kharashO"],["Omad!","Удачи","udAchi"],["Tug'ilgan kuning bilan","С днём рождения","z dnyOm razhdyEniya"] ] },
  { uz: "Tana a'zolari", ru: "Тело", w: [
    ["Bosh","Голова","galavA"],["Ko'z","Глаз","glas"],["Quloq","Ухо","Ukha"],["Burun","Нос","nos"],["Og'iz","Рот","rot"],["Tish","Зуб","zup"],["Soch","Волосы","vOlasy"],
    ["Chehra","Лицо","litsO"],["Qo'l","Рука","rukA"],["Barmoq","Палец","pAlyets"],["Oyoq","Нога","nagA"],["Yurak","Сердце","syErtse"],["Qorin","Живот","zhivOt"],
    ["Bo'yin","Шея","shEya"],["Orqa","Спина","spinA"],["Til","Язык","yazYk"] ] },
  { uz: "Kiyim", ru: "Одежда", w: [
    ["Ko'ylak","Рубашка","rubAshka"],["Libos","Платье","plAt'ye"],["Shim","Брюки","brYuki"],["Yubka","Юбка","yUpka"],["Kurtka","Куртка","kUrtka"],["Palto","Пальто","pal'tO"],
    ["Shapka","Шапка","shApka"],["Oyoq kiyim","Обувь","Obuf'"],["Botinka","Ботинки","batInki"],["Paypoq","Носки","naskI"],["Qo'lqop","Перчатки","pyerchAtki"],
    ["Ro'mol","Платок","platOk"],["Kamar","Ремень","ryemyEn'"],["Sumka","Сумка","sUmka"],["Ko'zoynak","Очки","achkI"],["Qo'l soati","Часы","chasY"] ] },
  { uz: "Uy va xona", ru: "Дом и комната", w: [
    ["Xona","Комната","kOmnata"],["Oshxona","Кухня","kUkhnya"],["Hammom","Ванная","vAnnaya"],["Eshik","Дверь","dvyer'"],["Deraza","Окно","aknO"],["Devor","Стена","styenA"],
    ["Pol","Пол","pol"],["Shift","Потолок","patalOk"],["Stol","Стол","stol"],["Stul","Стул","stul"],["Karavot","Кровать","kravAt'"],["Divan","Диван","divAn"],
    ["Shkaf","Шкаф","shkaf"],["Chiroq","Лампа","lAmpa"],["Kalit","Ключ","klyuch"],["Ko'zgu","Зеркало","zyErkala"],["Televizor","Телевизор","tyelyevIzar"] ] },
  { uz: "Hayvonlar", ru: "Животные", w: [
    ["Mushuk","Кошка","kOshka"],["It","Собака","sabAka"],["Ot","Лошадь","lOshat'"],["Sigir","Корова","karOva"],["Qo'y","Овца","aftsA"],["Echki","Коза","kazA"],
    ["Tovuq","Курица","kUritsa"],["Baliq","Рыба","rYba"],["Qush","Птица","ptItsa"],["Sichqon","Мышь","mysh"],["Ayiq","Медведь","myedvyEt'"],["Bo'ri","Волк","volk"],
    ["Tulki","Лиса","lisA"],["Sher","Лев","lyef"],["Fil","Слон","slon"],["Quyon","Заяц","zAyats"],["Maymun","Обезьяна","abyezyAna"] ] },
  { uz: "Tabiat va ob-havo", ru: "Природа и погода", w: [
    ["Ob-havo","Погода","pagOda"],["Quyosh","Солнце","sOntse"],["Yomg'ir","Дождь","dozht'"],["Qor","Снег","snyek"],["Shamol","Ветер","vyEtyer"],["Bulut","Облако","Oblaka"],
    ["Havo issiq","Жарко","zhArka"],["Havo sovuq","Холодно","khOladna"],["Havo iliq","Тепло","tyeplO"],["Osmon","Небо","nEba"],["Yer","Земля","zyemlyA"],
    ["Daryo","Река","ryekA"],["Dengiz","Море","mOrye"],["Tog'","Гора","garA"],["O'rmon","Лес","lyes"],["Gul","Цветок","tsvyetOk"],["Daraxt","Дерево","dEryeva"] ] },
  { uz: "Sifatlar", ru: "Прилагательные", w: [
    ["Katta","Большой","bal'shOy"],["Kichik","Маленький","mAlyen'kiy"],["Yaxshi","Хороший","kharOshiy"],["Yomon","Плохой","plakhOy"],["Yangi","Новый","nOvyy"],["Eski","Старый","stAryy"],
    ["Chiroyli","Красивый","krasIvyy"],["Tez","Быстрый","bYstryy"],["Sekin","Медленный","myEdlyennyy"],["Baland","Высокий","vysOkiy"],["Past","Низкий","nIzkiy"],
    ["Uzun","Длинный","dlInnyy"],["Qisqa","Короткий","karOtkiy"],["Qimmat","Дорогой","daragOy"],["Arzon","Дешёвый","dyeshOvyy"],["Issiq","Горячий","garYachiy"],["Sovuq","Холодный","khalOdnyy"] ] },
  { uz: "Fe'llar", ru: "Глаголы", w: [
    ["Qilmoq","Делать","dyElat'"],["Ko'rmoq","Видеть","vIdyet'"],["Eshitmoq","Слышать","slYshat'"],["Aytmoq","Говорить","gavarIt'"],["O'qimoq","Читать","chitAt'"],
    ["Yozmoq","Писать","pisAt'"],["Yemoq","Есть","yest'"],["Ichmoq","Пить","pit'"],["Uxlamoq","Спать","spat'"],["Sevmoq","Любить","lyubIt'"],["Bilmoq","Знать","znat'"],
    ["Xohlamoq","Хотеть","khatyEt'"],["Olmoq","Брать","brat'"],["Sotib olmoq","Покупать","pakupAt'"],["Bermoq","Давать","davAt'"],["O'ylamoq","Думать","dUmat'"],
    ["Yashamoq","Жить","zhit'"],["O'rganmoq","Учить","uchIt'"],["Ishlamoq","Работать","rabOtat'"],["O'ynamoq","Играть","igrAt'"],["Bormoq","Идти","itI"],["Kelmoq","Приходить","prikhadIt'"] ] },
  { uz: "Kasblar", ru: "Профессии", w: [
    ["O'qituvchi","Учитель","uchItyel'"],["Shifokor","Врач","vrach"],["Talaba","Студент","studyEnt"],["O'quvchi","Ученик","uchyenIk"],["Haydovchi","Водитель","vadItyel'"],
    ["Oshpaz","Повар","pOvar"],["Sotuvchi","Продавец","pradavyEts"],["Muhandis","Инженер","inzhinyEr"],["Politsiyachi","Полицейский","palitsEyskiy"],["Dehqon","Фермер","fyErmyer"],
    ["Quruvchi","Строитель","stroItyel'"],["Rassom","Художник","khudOzhnik"],["Yozuvchi","Писатель","pisAtyel'"],["Dasturchi","Программист","pragrammIst"],["Hamshira","Медсестра","myedsyestrA"],["Direktor","Директор","dirEktar"] ] },
  { uz: "Transport va sayohat", ru: "Транспорт и путешествие", w: [
    ["Mashina","Машина","mashIna"],["Poyezd","Поезд","pOyest"],["Samolyot","Самолёт","samalYOt"],["Velosiped","Велосипед","vyelasipyEt"],["Taksi","Такси","taksI"],
    ["Aeroport","Аэропорт","aerapOrt"],["Vokzal","Вокзал","vagzAl"],["Chipta","Билет","bilyEt"],["Pasport","Паспорт","pAspart"],["Chamadon","Чемодан","chemadAn"],
    ["Mehmonxona","Гостиница","gastInitsa"],["Xarita","Карта","kArta"],["Yo'l","Дорога","daragA"],["Ko'prik","Мост","most"],["Sayohat","Путешествие","putyeshEstviye"] ] },
  { uz: "Bozor va pul", ru: "Покупки и деньги", w: [
    ["Pul","Деньги","dyEn'gi"],["Narx","Цена","tsenA"],["Chegirma","Скидка","skItka"],["Naqd pul","Наличные","nalIchnyye"],["Plastik karta","Банковская карта","bankOfskaya kArta"],
    ["Mahsulot","Товар","tavAr"],["Sotmoq","Продавать","pradavAt'"],["Savat","Корзина","karzIna"],["Paket","Пакет","pakyEt"],["Kassir","Кассир","kassIr"],["Chek","Чек","chek"],
    ["Qaytim","Сдача","zdAcha"],["Kilogramm","Килограмм","kilagrAm"],["Litr","Литр","litr"],["Yarim","Половина","palavIna"],["Ko'proq","Больше","bOl'she"],["Kamroq","Меньше","mEn'she"],["Hammasi","Всё","fsyo"] ] },
  { uz: "Maktab", ru: "Школа и учёба", w: [
    ["Dars","Урок","urOk"],["Kitob","Книга","knIga"],["Daftar","Тетрадь","tyetrAt'"],["Qalam","Карандаш","karandAsh"],["Ruchka","Ручка","rUchka"],["Doska","Доска","daskA"],
    ["Sinf","Класс","klas"],["Imtihon","Экзамен","ekzAmyen"],["Baho","Оценка","atsEnka"],["Uy vazifasi","Домашнее задание","damAshnyeye zadAniye"],["So'z","Слово","slOvo"],
    ["Gap","Предложение","pridlazhEniye"],["Harf","Буква","bUkva"],["Javob","Ответ","atvyEt"],["Tarjima","Перевод","pyeryevOt"],["Lug'at","Словарь","slavAr'"],["Xato","Ошибка","ashIpka"],["Universitet","Университет","univyersityEt"] ] },
  { uz: "Salomatlik", ru: "Здоровье", w: [
    ["Og'riq","Боль","bol'"],["Kasal","Больной","bal'nOy"],["Sog'","Здоровый","zdarOvyy"],["Dori","Лекарство","lyekArstva"],["Dorixona","Аптека","aptyEka"],["Harorat","Температура","tyempyeratUra"],
    ["Yo'tal","Кашель","kAshyel'"],["Shamollash","Простуда","prastUda"],["Tish og'rig'i","Зубная боль","zubnAya bol'"],["Bosh og'rig'i","Головная боль","galavnAya bol'"],
    ["Yordam","Помощь","pOmashch"],["Tez yordam","Скорая помощь","skOraya pOmashch"],["Men kasalman","Я болен","ya bOlyen"] ] }
];

/* [harf, o'zbekcha tovush, izoh, misol so'z, misol tarjimasi] */
const ALPHA = [
 ["А","a","Ochiq «a», o'zbekchadagi kabi.","мама","ona"],["Б","b","Xuddi «b».","банан","banan"],["В","v","Xuddi «v».","вода","suv"],
 ["Г","g","Xuddi «g».","город","shahar"],["Д","d","Xuddi «d».","дом","uy"],["Е","ye","Odatda «ye» o'qiladi.","еда","ovqat"],
 ["Ё","yo","Doim «yo», urg'u ustida.","ёж","tipratikan"],["Ж","zh","Ingliz «measure» dagi tovush. O'zbekcha «j» emas.","жук","qo'ng'iz"],
 ["З","z","Xuddi «z».","зима","qish"],["И","i","Cho'ziq «i».","игра","o'yin"],["Й","y","Qisqa «y», unli bilan birga keladi.","май","may"],
 ["К","k","Xuddi «k».","кот","mushuk"],["Л","l","Xuddi «l».","лампа","chiroq"],["М","m","Xuddi «m».","мир","dunyo"],
 ["Н","n","Xuddi «n».","нос","burun"],["О","o","Urg'usiz joyda «a» ga yaqin o'qiladi.","окно","deraza"],["П","p","Xuddi «p».","парк","bog'"],
 ["Р","r","Til uchi titraydi.","рука","qo'l"],["С","s","Xuddi «s».","сок","sharbat"],["Т","t","Xuddi «t».","торт","tort"],
 ["У","u","Xuddi «u».","утро","ertalab"],["Ф","f","Xuddi «f».","флаг","bayroq"],["Х","x","O'zbekcha «x» kabi.","хлеб","non"],
 ["Ц","ts","Ikki tovush: «t» va «s» birga.","цирк","sirk"],["Ч","ch","Xuddi «ch».","чай","choy"],["Ш","sh","Xuddi «sh».","шар","shar"],
 ["Щ","shch","Cho'ziq, yumshoq «sh».","щётка","cho'tka"],["Ъ","—","Qattiq belgi. O'zi tovush bermaydi, ajratadi.","объект","ob'yekt"],
 ["Ы","ɨ","«i» va «u» orasidagi qalin tovush.","мы","biz"],["Ь","—","Yumshoq belgi. Oldingi undoshni yumshatadi.","день","kun"],
 ["Э","e","Ochiq «e».","это","bu"],["Ю","yu","Xuddi «yu».","юг","janub"],["Я","ya","Xuddi «ya».","яблоко","olma"]
];

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const SPK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/></svg>';
const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;

let known = new Set();
try { known = new Set(JSON.parse(localStorage.getItem("rusgo.known") || "[]")); } catch (e) {}
function save() { try { localStorage.setItem("rusgo.known", JSON.stringify([...known])); } catch (e) {} }

const state = { st: 0, tab: "cards", cover: false, q: "", open: new Set(), quiz: null };

function say(text) {
  if (!canSpeak) return;
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ru-RU";
    const v = speechSynthesis.getVoices().find((x) => x.lang && x.lang.toLowerCase().startsWith("ru"));
    if (v) u.voice = v;
    u.rate = 0.9;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  } catch (e) {}
}

const wid = (s, j) => "s" + s + "-" + j;
const allWords = () => TOPICS.flatMap((t, s) => t.w.map((w, j) => ({ id: wid(s, j), s, uz: w[0], ru: w[1], tr: w[2] })));

function stationDone(s) { return TOPICS[s].w.every((_, j) => known.has(wid(s, j))); }
function stationCount(s) { return TOPICS[s].w.filter((_, j) => known.has(wid(s, j))).length; }

function renderStations() {
  $("#stations").innerHTML = TOPICS.map((t, s) => {
    const done = stationDone(s);
    return '<li><button class="st' + (done ? " done" : "") + '" data-s="' + s + '"' + (s === state.st && !state.q ? ' aria-current="true"' : "") + '>' +
      '<span class="roundel">' + (done ? "✓" : s + 1) + '</span>' +
      '<span class="nm">' + esc(t.uz) + '</span><span class="ru">' + esc(t.ru) + '</span>' +
      '<span class="pr">' + stationCount(s) + " / " + t.w.length + " bildim</span></button></li>";
  }).join("");
}

function cardHtml(w) {
  const k = known.has(w.id);
  return '<article class="card' + (k ? " known" : "") + (state.open.has(w.id) ? " open" : "") + '" data-id="' + w.id + '">' +
    '<div class="row"><span class="tr" title="Ruscha o\'qilishi, urg\'u katta harfda">' + esc(w.tr) + "</span>" +
    (canSpeak ? '<button class="ico" data-say="' + esc(w.ru) + '" aria-label="Eshitish: ' + esc(w.ru) + '">' + SPK + "</button>" : "") + "</div>" +
    '<button class="ruw" data-reveal="' + w.id + '" data-say="' + esc(w.ru) + '">' + esc(w.ru) + "</button>" +
    '<div class="uzw">' + esc(w.uz) + "</div>" +
    '<button class="know" data-know="' + w.id + '" aria-pressed="' + k + '">' + (k ? "Bildim" : "Bildim deb belgilash") + "</button></article>";
}

function renderPanel() {
  const p = $("#panel");
  if (state.q) {
    const q = state.q.toLowerCase();
    const res = allWords().filter((w) => (w.uz + " " + w.ru + " " + w.tr).toLowerCase().includes(q));
    p.className = "panel";
    p.innerHTML = '<div class="ph"><div><h3>Qidiruv</h3><p class="sub">' + res.length + " ta natija: «" + esc(state.q) + "»</p></div></div>" +
      (res.length ? '<div class="cards">' + res.map(cardHtml).join("") + "</div>" : '<p class="empty">Hech narsa topilmadi. Boshqacha yozib ko\'ring, masalan o\'zbekcha so\'z yoki ruscha harflar.</p>');
    return;
  }
  const t = TOPICS[state.st];
  p.className = "panel" + (state.cover && state.tab === "cards" ? " covered" : "");
  let body = "";
  if (state.tab === "cards") {
    body = '<div class="cards">' + t.w.map((w, j) => cardHtml({ id: wid(state.st, j), uz: w[0], ru: w[1], tr: w[2] })).join("") + "</div>";
  } else {
    body = quizHtml();
  }
  p.innerHTML = '<div class="ph"><div><h3>' + (state.st + 1) + "-bekat: " + esc(t.uz) + '</h3><p class="sub">' + esc(t.ru) + " &middot; " + t.w.length + " ta so'z</p></div>" +
    '<div class="controls" role="tablist">' +
    '<button class="pill" role="tab" data-tab="cards" aria-selected="' + (state.tab === "cards") + '">Kartalar</button>' +
    '<button class="pill" role="tab" data-tab="quiz" aria-selected="' + (state.tab === "quiz") + '">Mashq</button>' +
    (state.tab === "cards" ? '<button class="pill" data-cover aria-pressed="' + state.cover + '">Yopiq rejim</button>' : "") +
    "</div></div>" + body;
}

/* quiz */
function newQuestion() {
  const t = TOPICS[state.st];
  const w = t.w[Math.floor(Math.random() * t.w.length)];
  const pool = allWords().filter((x) => x.ru !== w[1]);
  const same = pool.filter((x) => x.s === state.st);
  const src = same.length >= 3 ? same : pool;
  const wrong = src.sort(() => Math.random() - 0.5).slice(0, 3).map((x) => ({ ru: x.ru, tr: x.tr }));
  const opts = [...wrong, { ru: w[1], tr: w[2] }].sort(() => Math.random() - 0.5);
  const prev = state.quiz || { right: 0, total: 0, streak: 0 };
  state.quiz = { uz: w[0], ru: w[1], opts, picked: null, right: prev.right, total: prev.total, streak: prev.streak, st: state.st };
}
function quizHtml() {
  if (!state.quiz || state.quiz.st !== state.st) { state.quiz = null; newQuestion(); }
  const q = state.quiz;
  const done = q.picked !== null;
  return '<div class="quiz"><p class="q">«<span>' + esc(q.uz) + '</span>» ruscha qanday?</p><div class="opts">' +
    q.opts.map((o, i) => {
      let cls = "opt";
      if (done) cls += o.ru === q.ru ? " right" : i === q.picked ? " wrong" : "";
      return '<button class="' + cls + '" data-opt="' + i + '"' + (done ? " disabled" : "") + "><span>" + esc(o.ru) + "</span>" + (done ? "<small>" + esc(o.tr) + "</small>" : "") + "</button>";
    }).join("") + '</div><div class="qfoot"><span>To\'g\'ri: <b>' + q.right + " / " + q.total + "</b> &middot; Ketma-ket: <b>" + q.streak + '</b></span><button class="next" data-next' + (done ? "" : " hidden") + ">Keyingisi</button></div></div>";
}

/* alphabet */
let curLetter = 0;
function renderLetters() {
  $("#letters").innerHTML = ALPHA.map((a, i) => '<button class="lt" data-l="' + i + '" aria-pressed="' + (i === curLetter) + '">' + a[0] + a[0].toLowerCase() + "<small>" + esc(a[1]) + "</small></button>").join("");
  const a = ALPHA[curLetter];
  $("#ldet").innerHTML = '<div class="big">' + a[0] + a[0].toLowerCase() + '</div><div class="snd">O\'qilishi: ' + esc(a[1]) + '</div><p class="note">' + esc(a[2]) + "</p>" +
    '<div class="ex"><div><b>' + esc(a[3]) + "</b><br><span>" + esc(a[4]) + "</span></div>" + (canSpeak ? '<button class="ico" data-say="' + esc(a[3]) + '" aria-label="Eshitish: ' + esc(a[3]) + '">' + SPK + "</button>" : "") + "</div>";
}

function renderAll() { renderStations(); renderPanel(); }

document.addEventListener("click", (e) => {
  const el = e.target.closest("button");
  if (!el) return;
  if (el.dataset.s !== undefined) {
    state.st = +el.dataset.s; state.tab = "cards"; state.q = ""; state.quiz = null; $("#q").value = ""; renderAll();
  } else if (el.dataset.tab) {
    state.tab = el.dataset.tab; renderPanel();
  } else if (el.hasAttribute("data-cover")) {
    state.cover = !state.cover; state.open.clear(); renderPanel();
  } else if (el.dataset.know) {
    const id = el.dataset.know;
    known.has(id) ? known.delete(id) : known.add(id);
    save(); renderStations(); renderPanel();
  } else if (el.dataset.reveal) {
    if (state.cover) { state.open.add(el.dataset.reveal); el.closest(".card").classList.add("open"); }
    say(el.dataset.say);
  } else if (el.dataset.say) {
    say(el.dataset.say);
  } else if (el.dataset.opt !== undefined) {
    const q = state.quiz; if (!q || q.picked !== null) return;
    q.picked = +el.dataset.opt; q.total++;
    if (q.opts[q.picked].ru === q.ru) { q.right++; q.streak++; } else { q.streak = 0; }
    renderPanel(); say(q.ru);
  } else if (el.hasAttribute("data-next")) {
    newQuestion(); renderPanel();
  } else if (el.dataset.l !== undefined) {
    curLetter = +el.dataset.l; renderLetters();
  }
});
$("#q").addEventListener("input", (e) => { state.q = e.target.value.trim(); renderAll(); });

$("#nWords").textContent = allWords().length;
$("#nSt").textContent = TOPICS.length;
renderAll();
renderLetters();
