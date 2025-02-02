const allQuestions = [
    { question: "A Föld a Nap körül kering.", answer: true },
    { question: "A Hold a Föld körül kering.", answer: true },
    { question: "A Nap a Föld körül kering.", answer: false },
    { question: "A legnagyobb óceán a Csendes-óceán.", answer: true },
    { question: "A piramisok a legnagyobb építmények a világon.", answer: false },
    { question: "Az emberi testben 206 csont található.", answer: true },
    { question: "A Mount Everest a legmagasabb hegy a világon.", answer: true },
    { question: "A szivárványban mindig 6 szín van.", answer: false },
    { question: "A méheknek öt szeme van.", answer: true },
    { question: "A földi mágneses mező védelmet nyújt a napszéllel szemben.", answer: true },
    { question: "Az emberi szív négy kamrából áll.", answer: true },
    { question: "A földimogyoró egy dióféle.", answer: false },
    { question: "A jegesmedvék természetes élőhelye az Antarktisz.", answer: false },
    { question: "A legnagyobb bolygó a Naprendszerben a Jupiter.", answer: true },
    { question: "A víz kémiai képlete H3O.", answer: false },
    { question: "A legnagyobb ismert fa a világon a mamutfenyő.", answer: true },
    { question: "A pingvinek tudnak repülni.", answer: false },
    { question: "A levegőben több oxigén van, mint szén-dioxid.", answer: true },
    { question: "A legnagyobb vízesés a világon a Victoria vízesés.", answer: false },
    { question: "A legnagyobb sziget a világon Grönland.", answer: true },
    { question: "A Naprendszerben a legtöbb bolygó gáz halmazállapotú.", answer: true },
    { question: "A fóka és a delfin egy rokonfaj.", answer: false },
    { question: "A Marsnak van saját mágneses mezője.", answer: false },
    { question: "A világ legnépesebb országa India.", answer: true },
    { question: "A sarki fény csak az Antarktiszon látható.", answer: false },
    { question: "A Földön vannak olyan helyek, ahol sosem esik eső.", answer: true },
    { question: "A jéghegyek vizen úsznak, mert sűrűségük kisebb, mint a vízé.", answer: true },
    { question: "A fák legnagyobb része vízből áll.", answer: true },
    { question: "A víz szobahőmérsékleten is képes gőzölgésre.", answer: true },
    { question: "A rubin piros színű drágakő.", answer: true },
    { question: "A fák oxigént termelnek.", answer: true },
    { question: "A kenguruk hátrafelé is tudnak ugrani.", answer: false },
    { question: "A Nap egy csillag.", answer: true },
    { question: "A görögdinnye 90%-ban vízből áll.", answer: true },
    { question: "A leghosszabb folyó a világon az Amazonas.", answer: false },
    { question: "A macskák nem éreznek édes ízt.", answer: true },
    { question: "A Titanic első útja során süllyedt el.", answer: true },
    { question: "A baglyok nappali állatok.", answer: false },
    { question: "A sakkban a vezér a legértékesebb figura.", answer: true },
    { question: "A delfinek emlősök.", answer: true },
    { question: "A szumó birkózás Japán nemzeti sportja.", answer: true },
    { question: "A világon több ember beszél spanyolul, mint angolul.", answer: false },
    { question: "A teflon serpenyők tapadásmentes bevonata mérgező.", answer: false },
    { question: "A csigák képesek több évig hibernálódni.", answer: true },
    { question: "A Nap hőmérséklete alacsonyabb, mint a Föld belső magjáé.", answer: false },
    { question: "A méhek táncolással kommunikálnak egymással.", answer: true },
    { question: "A földigilisztáknak több szívük van.", answer: true },
    { question: "A flamingók kék színűek, amikor kikelnek.", answer: false },
    { question: "A világ legmélyebb óceáni árka a Mariana-árok.", answer: true },
    { question: "A vikingek sosem hordtak szarvas sisakot.", answer: true },
    { question: "A pókok rovarok.", answer: false },
    { question: "A gombák növények.", answer: false },
    { question: "A kutyák színvakok.", answer: false },
    { question: "A Holdnak van saját fénye.", answer: false },
    { question: "A leggyorsabb madár a vándorsólyom.", answer: true },
    { question: "A Föld belső magja szilárd.", answer: true },
    { question: "A Naprendszer legforróbb bolygója a Merkúr.", answer: false },
    { question: "A zsiráfok nyelve kékes-fekete színű.", answer: true },
    { question: "A földimogyoró egy hüvelyes növény.", answer: true },
    { question: "A bálnák halak.", answer: false },
    { question: "A világ leghosszabb vasútvonala a Transzszibériai vasút.", answer: true },
    { question: "A tigrisek bundájának csíkozása egyedi, mint az emberi ujjlenyomat.", answer: true },
    { question: "A Holdon található egy síkság, amelyet Nyugalom tengerének neveznek.", answer: true },
    { question: "A csillagok mindig azonos fényerővel világítanak.", answer: false },
    { question: "A világon a legtöbb földimogyorót Kína termeli.", answer: true },
    { question: "A föld alatti gombák közé tartozik a szarvasgomba.", answer: true },
    { question: "A Föld mágneses északi pólusa pontosan az északi földrajzi pólusnál van.", answer: false },
    { question: "A méz soha nem romlik meg.", answer: true },
    { question: "A világ legkisebb madara a kolibri.", answer: true },
    { question: "A cápák egyáltalán nem alszanak.", answer: false },
    { question: "A Hubble-Űrteleszkópot a NASA készítette.", answer: true },
    { question: "A méhrajoknak csak egyetlen királynőjük van.", answer: true },
    { question: "A világ legmagasabb épülete a Burj Khalifa.", answer: true },
    { question: "A leghosszabb emberi csont a combcsont.", answer: true },
    { question: "A polipoknak három szíve van.", answer: true },
    { question: "A világ legnagyobb sivataga a Szahara.", answer: true },
    { question: "A Nap sugarai 8 perc alatt érik el a Földet.", answer: true },
    { question: "A flamingók rózsaszín tollazata a táplálékuktól van.", answer: true },
    { question: "A teknősök foggal rágják az ételt.", answer: false },
    { question: "A pingvinek a Déli-sarkon élnek.", answer: true },
    { question: "A világ legrégebbi egyeteme az Oxfordi Egyetem.", answer: false },
    { question: "A Naprendszerben az Uránusz a leghidegebb bolygó.", answer: true },
    { question: "A vörösvértestek oxigént szállítanak a testben.", answer: true },
    { question: "A zebrák mind egyforma mintázatúak.", answer: false },
    { question: "A dió egy gyümölcs.", answer: false },
    { question: "A világ legkisebb országának neve Monaco.", answer: false },
    { question: "A cápák porcos vázú halak.", answer: true },
    { question: "A paradicsom egy gyümölcs.", answer: true },
    { question: "A Himalája a világ legmagasabb hegysége.", answer: true },
    { question: "A Naprendszer minden bolygóján van legalább egy hold.", answer: false },
    { question: "A csótányok túlélnék egy atomháborút.", answer: true },
    { question: "A delfinek képesek felismerni magukat a tükörben.", answer: true },
    { question: "A legidősebb ismert fa több mint 5000 éves.", answer: true },
    { question: "A szamurájok Japán középkori lovagjai voltak.", answer: true },
    { question: "A boszorkánykörök természetes geológiai képződmények.", answer: false },
    { question: "A római Colosseum még ma is teljesen ép állapotban van.", answer: false },
    { question: "A lepkék a lábukkal érzékelik az ízeket.", answer: true },
    { question: "A világon minden országban jobbratartási kötelezettség van.", answer: false },
    { question: "A Nap tömege körülbelül 99%-át teszi ki a Naprendszer teljes tömegének.", answer: true },
    { question: "A Nap belsejében hélium ég el oxigénnel.", answer: false },
];

        let currentQuestion;
        let score = 0;
        let lives = 3;
        let timer;
        let timeLeft = 5;

        function startGame() {
            score = 0;
            lives = 3;
            document.getElementById('menu').classList.add('hidden');
            document.getElementById('game').classList.remove('hidden');
            document.getElementById('result').classList.add('hidden');
            updateLives();
            showQuestion();
        }

        function showQuestion() {
            if (lives > 0) {
                currentQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
                const questionElement = document.getElementById('question');
                questionElement.innerText = currentQuestion.question;
                questionElement.classList.remove('correct', 'wrong');
                document.getElementById('score').innerText = `Pontszám: ${score}`;
                resetTimer();
            } else {
                endGame();
            }
        }

        function resetTimer() {
            clearInterval(timer);
            timeLeft = 7;
            document.getElementById('timer').innerText = timeLeft;
            
            timer = setInterval(() => {
                timeLeft--;
                document.getElementById('timer').innerText = timeLeft;
                if (timeLeft === 0) {
                    clearInterval(timer);
                    loseLife();
                }
            }, 1000);
        }

        function answer(isTrue) {
            clearInterval(timer);
            const questionElement = document.getElementById('question');
            questionElement.classList.remove('correct', 'wrong');
            if (currentQuestion.answer === isTrue) {
                score++;
                questionElement.classList.add('correct');
            } else {
                loseLife();
                questionElement.classList.add('wrong');
            }
            setTimeout(() => {
                showQuestion();
            }, 500);
        }

        function loseLife() {
            lives--;
            updateLives();
            if (lives === 0) {
                setTimeout(()=>{
                    endGame();
                }, 500)
            } else {
                setTimeout(() => {
                    showQuestion();
                }, 500);
            }
        }

        function updateLives() {
            const livesDisplay = document.getElementById('lives');
            livesDisplay.innerText = "❤️".repeat(lives) + "🖤".repeat(3 - lives);
        }

        function endGame() {
            clearInterval(timer);
            document.getElementById('game').classList.add('hidden');
            document.getElementById('result').classList.remove('hidden');
            document.getElementById('finalScore').innerText = `Vége! Pontszámod: ${score}`;
        }

        function resetGame() {
            clearInterval(timer);
            document.getElementById('menu').classList.remove('hidden');
            document.getElementById('result').classList.add('hidden');
            document.getElementById('game').classList.add('hidden');
        }
