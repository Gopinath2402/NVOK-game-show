$("document").ready(function() {
    console.log('app started');


    let queCount = 0;
    let timeleft = 60;
    let timer;
    let gameover;
    let questions = [{
            numb: 1,
            question: "Pathinarum petru ____ vazhka’. Fill in the blank",
            ans: "B. Peruvazhvu",
            options: [
                "A. Nimmathiyaka",
                "B. Peruvazhvu",
                "C. Amaithiyaka",
                "D. Vetriyudan"
            ]

        },
        {
            numb: 2,
            question: "During the festival season in the south, which of these leaves are usually tied outside the house?",
            ans: "C. Mango",
            options: [
                "A. lemon",
                "B. Gooseberry",
                "C. Mango",
                "D. Tamarind"
            ]

        },
        {
            numb: 3,
            question: "From the following, which one is not a hill station?",
            ans: "D. Kadalur",
            options: [
                "A. Kodaikanal",
                "B. Ooty",
                "C. Yercaud",
                "D. Kadalur"
            ]

        },
        {
            numb: 4,
            question: "Which of the following books is not written by Cho Ramasamy?",
            ans: "B. Enn iniya Eyadhira",
            options: [
                "A. Washingtonil Nallathambi",
                "B. Enn iniya Eyadhira",
                "C. Yaro ivar yaro",
                "D. thuklak padam edukirar"
            ]

        },
        {
            numb: 5,
            question: "Which of these diseases affects the joints in the human body?",
            ans: "C. Arthiritis",
            options: [
                "A. Halitosis",
                "B. Osteoporosis",
                "C. Arthiritis",
                "D. Glaucoma"
            ]

        },
        {
            numb: 6,
            question: "With whom did the TATA’s enter in to joint venture to launch a low cost airline in India I February 2013?",
            ans: "A. Singapore Airlines",
            options: [
                "A. Singapore Airlines",
                "B. Air Asia",
                "C. Tiger Airways",
                "D. Virgin Atlantic"
            ]

        },
        {
            numb: 7,
            question: "In India, whose birthday is celebrated as 'teachers day'?",
            ans: "D. Radhakrishnan",
            options: [
                "A. Vallabhai patel",
                "B. Apj Abdul kalam",
                "C. Mahatma gandhi",
                "D. Radhakrishnan"
            ]

        },
        {
            numb: 8,
            question: "In Hindu mythology who killed Hiranyaksha?",
            ans: "B. Varaha",
            options: [
                "A. Vamana",
                "B. Varaha",
                "C. Rama",
                "D. Narasimha"
            ]

        },
        {
            numb: 9,
            question: "Which ruler’s invasion of Kalinga was written about by Jayamkondar in his work 'Kalingathu Parani'?",
            ans: "C. Kulothunga Chola 1",
            options: [
                "A. Raja Raja Chola 1",
                "B. Asoka",
                "C. Kulothunga Chola 1",
                "D. Rajendra chola 1"
            ]

        },
        {
            numb: 10,
            question: "Which state did the first three recipients of Bharat Ratna belong to?",
            ans: "B. Madras State",
            options: [
                "A. Bihar",
                "B. Madras State",
                "C. Uttar Pradesh",
                "D. Gujarat"
            ]

        },
        {
            numb: 11,
            question: "Which dynasty overthrew the Cheras, Cholas and Pandyas and ruled most of South India between 3rd CE and 6th CE from Kaveripattinam?",
            ans: "C. Kalabhras",
            options: [
                "A. Chalukya",
                "B. Kakatiya",
                "C. Kalabhras",
                "D. Pallava"
            ]

        },
        {
            numb: 12,
            question: "Who was the Union minister of Youth Affairs and Sports in India , during the 2012 London Olympics?",
            ans: "B. Ajay Maken",
            options: [
                "A. Mani Shankar Aiyer",
                "B. Ajay Maken",
                "C. MS Gill",
                "D. Jitendra Singh"
            ]

        },
        {
            numb: 13,
            question: "When was the Ashes first played?",
            ans: "C. 1882",
            options: [
                "A. 1898",
                "B. 1876",
                "C. 1882",
                "D. 1880"
            ]

        },
        {
            numb: 14,
            question: "How many ways are there of getting out?",
            ans: "A. 10",
            options: [
                "A. 10",
                "B. 7",
                "C. 5",
                "D. 6"
            ]

        },



    ]


    // console.log('answers-1 : ' + questions[0].ans);
    // console.log('answers-2 : ' + questions[1].ans);
    // console.log('answers-3 : ' + questions[2].ans);
    // console.log('answers-4 : ' + questions[3].ans);
    // console.log('answers-5 : ' + questions[4].ans);
    // console.log('answers-6 : ' + questions[5].ans);
    // console.log('answers-7 : ' + questions[6].ans);
    // console.log('answers-8 : ' + questions[7].ans);
    // console.log('answers-9 : ' + questions[8].ans);
    // console.log('answers-10 : ' + questions[9].ans);
    // console.log('answers-11 : ' + questions[10].ans);
    // console.log('answers-12 : ' + questions[11].ans);
    // console.log('answers-13 : ' + questions[12].ans);
    // console.log('answers-14 : ' + questions[13].ans);

    $('.start').click(function() {
        startGame();
    })
    $('.ok').click(function() {
        $('.rulesboxcont').removeClass('visible');
        startGame();
    })
    $('.restart').click(function() {
        window.location.reload();

    })
    $('.rules').click(() => {
        $('.rule').addClass('video');
        let video = document.querySelector('.play');
        video.play();
        video.addEventListener('ended', function() {
            $('.rule').removeClass('video');
            $('.rulesboxcont').addClass('visible');
            $('.gamestart').removeClass('visible');
        })
    })

    let startGame = (function() {
        $('.gamestart').removeClass('visible');
        document.querySelector('.opening').play();
        $('.options').attr('disabled', 'true');
        $('#computer').addClass('click');
        $('#audience').addClass('click');
        $('#fifty').addClass('click');
        $('#double').addClass('click');
        setTimeout(() => {
            $('.point-table').addClass('visible');
            $('.lifelines').addClass('visible');
        }, 4000);
        setTimeout(() => {
            $('.options').removeAttr('disabled');
            $('#computer').removeClass('click');
            $('#audience').removeClass('click');
            $('#fifty').removeClass('click');
            $('#double').removeClass('click');
            $('.questions').addClass('visible');
        }, 6000);
        setTimeout(() => {
            createQuestion(queCount);
            startTimer();
            checkAns();
        }, 7000);

    })

    $('#computer').click(function() {
        computerLifeLine();
    })
    $('#audience').click(function() {
        audienceLifeLine();
    })
    $('#fifty').click(function() {
        fiftyFiftyLifeLine();
    })
    $('#double').click(function() {
        doubleLifeLine();
    })
    let computerCount = 0;
    let audienceCount = 0;
    let fiftyCount = 0;
    let doubleCount = 0;

    let computerLifeLine = (function() {
        computerCount++;
        let correctAns = questions[queCount].ans;
        $('#computer').attr('disabled', 'disabled');
        $('#computer').addClass('click');
        $('#double').attr('disabled', 'disabled');
        $('#double').addClass('click');
        document.querySelectorAll('.ansbtn').forEach(function(e) {
            let text = e.textContent;
            if (text == correctAns) {
                e.style.backgroundColor = '#A8FCFC';
                e.style.color = 'black';
            } else {
                e.style.backgroundColor = "#B1C3C3";
                e.style.color = 'black';
            }
        })

    })

    let audienceLifeLine = (function() {
        audienceCount++;
        let correctAns = questions[queCount].ans;
        $('#audience').addClass('click');
        $('#audience').attr('disabled', 'disabled');
        $('#double').attr('disabled', 'disabled');
        $('#double').addClass('click');
        document.querySelectorAll('.ansbtn').forEach(function(e) {
            let text = e.textContent;

            if (text == correctAns) {
                e.style.backgroundColor = "#85F49A",
                    e.style.color = 'black';
            } else {
                e.style.backgroundColor = "#A1DBAC";
                e.style.color = 'black';
            }
        })

    })

    let fiftyFiftyLifeLine = (function() {
        fiftyCount++;
        let correctAns = questions[queCount].ans;
        $('#fifty').addClass('click');
        $('#fifty').attr('disabled', 'disabled');
        $('#double').attr('disabled', 'disabled');
        $('#double').addClass('click');
        let optionIndex = (function() {
            let index = questions[queCount].options.indexOf(correctAns);
            if (index == 3) {
                return index - 1;
            } else {
                return index + 1;
            }
        });
        let options = questions[queCount].options[optionIndex()];

        document.querySelectorAll('.ansbtn').forEach(function(e) {
            let text = e.textContent;
            if (text == correctAns) {
                e.style.backgroundColor = '#A8FCFC';
                e.style.color = 'black';
            } else if (text == options && !options.includes(correctAns)) {
                e.style.backgroundColor = '#A8FCFC';
                e.style.color = 'black';
            } else {
                e.style.backgroundColor = '#B1C3C3';
                e.style.color = 'black';
            }
        })

    })

    let doubleLifeLine = (function() {
        doubleCount++;
        $('#double').addClass('click');
        $('#double').attr('disabled', 'disabled');
        $('#computer').attr('disabled', 'disabled');
        $('#computer').addClass('click');
        $('#audience').addClass('click');
        $('#audience').attr('disabled', 'disabled');
        $('#fifty').addClass('click');
        $('#fifty').attr('disabled', 'disabled');
        let correctAns = questions[queCount].ans;
        clearInterval(timer);
        let clickCount = 0;
        document.querySelector('.timersound').pause();
        $('.ansbtn').click(function(e) {
            let userAns = e.target.textContent;
            clickCount++;
            // console.log(clickCount);
            if (userAns == correctAns) {
                if (computerCount == 1) {
                    $('#computer').attr('disabled', 'disabled');
                    $('#computer').addClass('click');
                } else {
                    $('#computer').removeAttr('disabled');
                    $('#computer').removeClass('click');
                }
                if (audienceCount == 1) {
                    $('#audience').attr('disabled', 'disabled');
                    $('#audience').addClass('click');
                } else {
                    $('#audience').removeAttr('disabled');
                    $('#audience').removeClass('click');
                }
                if (fiftyCount == 1) {
                    $('#fifty').attr('disabled', 'disabled');
                    $('#fifty').addClass('click');
                } else {
                    $('#fifty').removeAttr('disabled');
                    $('#fifty').removeClass('click');
                }
                correctAns();
            }
            if (userAns !== correctAns && clickCount == 1) {
                e.target.style.backgroundColor = "red"
                e.target.style.color = "white";
                startTimer();
                $('.ansbtn').removeAttr('disabled')
                document.querySelector('.wrongans').play();
                clearTimeout(gameover);
                $('.gameover').removeClass('visible')

            } else {
                wrongAns();
            }

        })
    })



    let createQuestion = (function(index) {
        resetState();
        // console.log("create question");
        $('<span>' + questions[index].numb + '.' + questions[index].question + '</span>').appendTo($('.qus'));
        $('<button class="ansbtn">' + questions[index].options[0] + '</button>' +
            '<button class="ansbtn">' + questions[index].options[1] + '</button>' +
            '<button class="ansbtn">' + questions[index].options[2] + '</button>' +
            ' <button class="ansbtn">' + questions[index].options[3] + '</button>').appendTo($('.answer'));
        setAmount();
    })
    let questionTag = document.querySelector('.qus');
    let ansTag = document.querySelector('.answer');

    let resetState = (function() {
        while (questionTag.firstChild) {
            questionTag.removeChild(questionTag.firstChild);
        }
        while (ansTag.firstChild) {
            ansTag.removeChild(ansTag.firstChild);
        }
    })

    let checkAns = (function() {
        $('.ansbtn').click(function(e) {
            let userAns = e.target.textContent;
            //  console.log(userAns);
            let correctAns = questions[queCount].ans;
            //    console.log(correctAns);

            if (userAns == correctAns) {
                correctAnswer();
                e.target.style.backgroundColor = "#51FB70";
                e.target.style.color = 'black'
                $('.ansbtn').attr('disabled', 'disabled')
                    //  console.log('correct answer');
            } else {
                wrongAns();
                e.target.style.backgroundColor = "red"
                e.target.style.color = "white"
                $('.ansbtn').attr('disabled', 'disabled')
                    // console.log('wrong answer');
            }
        })

    })

    let correctAnswer = (function() {
        if (doubleCount == 1) {
            $('#double').attr('disabled', 'disabled');
            $('#double').addClass('click');
        } else {
            $('#double').removeAttr('disabled');
            $('#double').removeClass('click');
        }
        if (computerCount == 1 && doubleCount == 1 && audienceCount == 1 && fiftyCount == 1) {
            $('.lifelines h3').addClass('used')
        }
        clearInterval(timer);
        document.querySelector('.timersound').pause();
        document.querySelector('.applause').play();
        setTimeout(() => {
            if (queCount < questions.length - 1) {
                document.querySelector('.questionsound').play();
                document.querySelector('.timersound').play();
                queCount++;
                createQuestion(queCount);
                $('.timeleft').text('60');
                timeleft = 60;
                startTimer();
                checkAns();
            } else {
                // console.log("you win");
                document.querySelector('.winsound').play();
                $('.wingame').addClass('visible');


            }
        }, 5000);

    })

    let wrongAns = (function() {
        document.querySelector('.wrongans').play();
        clearInterval(timer);
        document.querySelector('.timersound').pause();
        $('.gameover').addClass('visible')
        priceAmount();
    })



    let setAmount = (function() {
        if (queCount == 0) {
            $('#1').addClass('win');
        }
        if (queCount == 1) {
            $('#1').removeClass('win');
            $('#2').addClass('win');
        }
        if (queCount == 2) {
            $('#2').removeClass('win');
            $('#3').addClass('win');
        }
        if (queCount == 3) {
            $('#3').removeClass('win');
            $('#4').addClass('win');
        }
        if (queCount == 4) {
            $('#4').removeClass('win');
            $('#5').addClass('win');
        }
        if (queCount == 5) {
            $('#5').removeClass('win');
            $('#6').addClass('win');
        }
        if (queCount == 6) {
            $('#6').removeClass('win');
            $('#7').addClass('win');
        }
        if (queCount == 7) {
            $('#7').removeClass('win');
            $('#8').addClass('win');
        }
        if (queCount == 8) {
            $('#8').removeClass('win');
            $('#9').addClass('win');
        }
        if (queCount == 9) {
            $('#9').removeClass('win');
            $('#10').addClass('win');
        }
        if (queCount == 10) {
            $('#10').removeClass('win');
            $('#11').addClass('win');
        }
        if (queCount == 11) {
            $('#11').removeClass('win');
            $('#12').addClass('win');
        }
        if (queCount == 12) {
            $('#12').removeClass('win');
            $('#13').addClass('win');
        }
        if (queCount == 13) {
            $('#13').removeClass('win');
            $('#14').addClass('win');
        }

    })

    let startTimer = (function() {
        document.querySelector('.timersound').play();
        timer = setInterval(() => {
            timeleft--;
            $('.timeleft').text(timeleft);
            // console.log(timeleft);
            if (timeleft < 10) {
                $('.timeleft').text('0' + timeleft);
            }
            if (timeleft == 0) {
                clearInterval(timer);
                document.querySelector('.wrongans').play();
                document.querySelector('.timersound').pause();
                $('.sec').text('timeup')
                $('.timeup').addClass('visible');
                // console.log("time over");
                if (queCount == 0) {
                    $('#win-amount').text('₹0');
                }
                if (queCount == 1) {
                    $('#win-amount').text('₹1,000');
                }
                if (queCount == 2) {
                    $('#win-amount').text('₹5,000');
                }
                if (queCount == 3) {
                    $('#win-amount').text('₹10,000');
                }
                if (queCount == 4) {
                    $('#win-amount').text('₹20,000');
                }
                if (queCount == 5) {
                    $('#win-amount').text('₹40,000');
                }
                if (queCount == 6) {
                    $('#win-amount').text('₹80,000');
                }
                if (queCount == 7) {
                    $('#win-amount').text('₹1,60,000');
                }
                if (queCount == 8) {
                    $('#win-amount').text('₹3,20,000');
                }
                if (queCount == 9) {
                    $('#win-amount').text('₹6,50,000');
                }
                if (queCount == 10) {
                    $('#win-amount').text('₹12,50,000');
                }
                if (queCount == 11) {
                    $('#win-amount').text('₹25,50,000');
                }
                if (queCount == 12) {
                    $('#win-amount').text('₹50,00,000');
                }
                if (queCount == 13) {
                    $('#win-amount').text('₹75,00,000');
                }

            }
        }, 1000);

    })
    let priceAmount = (function() {
        if (queCount == 0) {
            $('#winning-amount').text('₹0');
        }
        if (queCount == 1) {
            $('#winning-amount').text('₹1,000');
        }
        if (queCount == 2) {
            $('#winning-amount').text('₹5,000');
        }
        if (queCount == 3) {
            $('#winning-amount').text('₹10,000');
        }
        if (queCount == 4) {
            $('#winning-amount').text('₹20,000');
        }
        if (queCount == 5) {
            $('#winning-amount').text('₹40,000');
        }
        if (queCount == 6) {
            $('#winning-amount').text('₹80,000');
        }
        if (queCount == 7) {
            $('#winning-amount').text('₹1,60,000');
        }
        if (queCount == 8) {
            $('#winning-amount').text('₹3,20,000');
        }
        if (queCount == 9) {
            $('#winning-amount').text('₹6,50,000');
        }
        if (queCount == 10) {
            $('#winning-amount').text('₹12,50,000');
        }
        if (queCount == 11) {
            $('#winning-amount').text('₹25,50,000');
        }
        if (queCount == 12) {
            $('#winning-amount').text('₹50,00,000');
        }
        if (queCount == 13) {
            $('#winning-amount').text('₹75,00,000');
        }
    })


})