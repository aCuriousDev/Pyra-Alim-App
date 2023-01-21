const aliments = [
    { id: '1', name: 'Pain blanc', img: './assets/Picto1.png', color01: '#7C5434', color02: '#DA9C4A' },
    { id: '2', name: 'Viande Rouge', img: './assets/Picto2.png', color01: '#CA433C', color02: '#EFC2AE' },
    { id: '3', name: 'Produits laitiers de vache (lait, yaourt, fromage', img: './assets/Picto3.png', color01: '#2434A4', color02: '#FFFFFF' },
    { id: '4', name: 'Confiture', img: './assets/Picto4.png', color01: '#3C0908', color02: '#B82C3C' },
    { id: '5', name: 'Boissons sucrée (jus de fruits, soda...)', img: './assets/Picto5.png', color01: '#2b211f', color02: '#4e3834' },
    { id: '6', name: 'Boisson énergisante', img: './assets/Picto6.png', color01: '#344b8c', color02: '#FFFFFF' },
    { id: '7', name: 'Huile raffinée (arachide, tournesol), margarine', img: './assets/Picto7.png', color01: '#C16330', color02: '#ffeb7e' },
    { id: '8', name: 'Beurre', img: './assets/Picto8.png', color01: '#F4CC34', color02: '#fff2bc' },
    { id: '9', name: 'Alcool', img: './assets/Picto9.png', color01: '#E4A541', color02: '#e5f3f1' },
    { id: '10', name: 'Vin rouge (1 verre de 12cL)', img: './assets/Picto10.png', color01: '#930715', color02: '#b54f3b' },
    { id: '11', name: 'Biscuits apéritifs', img: './assets/Picto11.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '12', name: 'Sauce industrielle', img: './assets/Picto12.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '13', name: 'Fruits', img: './assets/Picto13.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '14', name: 'Sel ajouté', img: './assets/Picto14.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '15', name: 'Oeuf', img: './assets/Picto15.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '16', name: 'Champignon', img: './assets/Picto16.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '17', name: 'Riz', img: './assets/Picto17.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '18', name: 'Pâtes', img: './assets/Picto18.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '19', name: 'Chocolat Noir', img: './assets/Picto19.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '20', name: 'Patate douce et Pomme de terre', img: './assets/Picto20.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '21', name: 'Eau', img: './assets/Picto21.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '22', name: 'Café', img: './assets/Picto22.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '23', name: 'Thé et Infusion', img: './assets/Picto23.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '24', name: 'Ail et Oignon', img: './assets/Picto24.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '25', name: 'Huile végétale de première pression à froid (olive, noix, colza, lin)', img: './assets/Picto25.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '26', name: 'Epices', img: './assets/Picto26.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '27', name: 'Herbes aromatiques', img: './assets/Picto27.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '28', name: 'Fruits à coques et oléagineux', img: './assets/Picto28.png', color01: '#C16330', color02: '#e0aa6b' },
    { id: '29', name: 'Beurre et Crème fraiche', img: './assets/Picto29.png', color01: '#058DD3', color02: '#74C4E4' },
    { id: '30', name: 'Produits laitiers de chèvre et brebis', img: './assets/Picto30.png', color01: '#3BA066', color02: '#F1F1F1' },
    { id: '31', name: 'Viande blanche (Volaille)', img: './assets/Picto31.png', color01: '#E17922', color02: '#FBF2D2' },
    { id: '32', name: 'Poissons gras (sardine, maquereau, harengs, truite, saumon, etc)', img: './assets/Picto32.png', color01: '#D03E1E', color02: '#EFD7B8' },
    { id: '33', name: 'Sucre', img: './assets/Picto33.png', color01: '#F3D21B', color02: '#F1F1F1' },
    { id: '34', name: 'Confiserie et Friandises', img: './assets/Picto34.png', color01: '#7353A3', color02: '#D79BC0' },
    { id: '35', name: 'Charcuterie', img: './assets/Picto35.png', color01: '#782424', color02: '#CD8080' },
    { id: '36', name: 'Pain rustique (variété ancienne et au levain)', img: './assets/Picto36.png', color01: '#432B1C', color02: '#90501C' },
    { id: '37', name: 'Céréales du petit déjeuné, pain de mie, biscotte', img: './assets/Picto37.png', color01: '#D0832D', color02: '#CCA876' },
    { id: '38', name: 'Patisseries', img: './assets/Picto38.png', color01: '#F4AC54', color02: '#F7E97B' },
    { id: '39', name: 'Fruits secs', img: './assets/Picto39.png', color01: '#A76D47', color02: '#E4CCA1' },
    { id: '40', name: 'Plats préparés et aliments ultra transformés', img: './assets/Picto40.png', color01: '#0C7E45', color02: '#C1AB7C' },
    { id: '41', name: 'Poissons maigres (colin, cabillaud, merlan, lieu, sol, raie, lotte)', img: './assets/Picto41.png', color01: '#0C7E45', color02: '#C1AB7C' },
    { id: '42', name: 'Fast Food', img: './assets/Picto42.png', color01: '#0C7E45', color02: '#C1AB7C' },
    { id: '43', name: 'Fruits de mer, mollusques', img: './assets/Picto43.png', color01: '#0C7E45', color02: '#C1AB7C' },
    { id: '44', name: 'Légumes secs (pois chiche, lentilles, haricots blans)', img: './assets/Picto44.png', color01: '#0C7E45', color02: '#C1AB7C' },
    { id: '45', name: 'Légumes frais', img: './assets/Picto45.png', color01: '#0C7E45', color02: '#C1AB7C' }
]

let daily = []
let weekly = []
let monthly = []
let rarelyNever = []



let counter = 0

const r = document.querySelector(':root')

const alimLength = aliments.length;
let position = 0;

let score = { Right: 0, Up: 0, Left: 0, Down: 0 };
const dispScoreRight = document.getElementById("score-right")
const dispScoreUp = document.getElementById("score-up")
const dispScoreLeft = document.getElementById("score-left")
const dispScoreDown = document.getElementById("score-down")


const updateScore = () => {
    dispScoreRight.innerText = score.Right;
    dispScoreUp.innerText = score.Up;
    dispScoreLeft.innerText = score.Left;
    dispScoreDown.innerText = score.Down;
}

const dispDaily = document.getElementById("daily")
const dispWeekly = document.getElementById("weekly")
const dispMonthy = document.getElementById("monthly")
const dispRarelyNever = document.getElementById("rarely-never")

const updateResults = (frequency, dispFreq) => {
        const lastAlim = frequency.length - 1;
        console.log(lastAlim)
        const element = document.createElement('p')
        element.innerText = frequency[lastAlim].name
        dispFreq.appendChild(element)

}

class Carousel {

    constructor(element) {

        this.board = element

        // reset scores
        updateScore()

        // add first two cards programmatically
        aliments.forEach(aliment => this.push())

        // handle gestures
        this.handle()

    }

    handle() {

        // list all cards
        this.cards = this.board.querySelectorAll('.card')

        // get top card
        this.topCard = this.cards[this.cards.length - 1]


        // get next card
        this.nextCard = this.cards[this.cards.length - 2]

        // if at least one card is present
        if (this.cards.length > 0) {

            // set default top card position and scale
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'

            // destroy previous Hammer instance, if present
            if (this.hammer) this.hammer.destroy()

            // listen for tap and pan gestures on top card
            this.hammer = new Hammer(this.topCard)
            this.hammer.add(new Hammer.Tap())
            this.hammer.add(new Hammer.Pan({
                position: Hammer.position_ALL,
                threshold: 0
            }))

            // pass events data to custom callbacks
            this.hammer.on('tap', (e) => {
                this.onTap(e)
            })
            this.hammer.on('pan', (e) => {
                this.onPan(e)
            })

        }

    }

    onTap(e) {

        // get finger position on top card
        let propX = (e.center.x - e.target.getBoundingClientRect().left) / e.target.clientWidth

        // get rotation degrees around Y axis (+/- 15) based on finger position
        let rotateY = 15 * (propX < 0.05 ? -1 : 1)

        // enable transform transition
        this.topCard.style.transition = 'transform 100ms ease-out'

        // apply rotation around Y axis
        this.topCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(' + rotateY + 'deg) scale(1)'

        // wait for transition end
        setTimeout(() => {
            // reset transform properties
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
        }, 100)

    }

    onPan(e) {

        if (!this.isPanning) {

            this.isPanning = true

            // remove transition properties
            this.topCard.style.transition = null
            if (this.nextCard) this.nextCard.style.transition = null

            // get top card coordinates in pixels
            let style = window.getComputedStyle(this.topCard)
            let mx = style.transform.match(/^matrix\((.+)\)$/)
            this.startPosX = mx ? parseFloat(mx[1].split(', ')[4]) : 0
            this.startPosY = mx ? parseFloat(mx[1].split(', ')[5]) : 0

            // get top card bounds
            let bounds = this.topCard.getBoundingClientRect()

            // get finger position on top card, top (1) or bottom (-1)
            this.isDraggingFrom =
                (e.center.y - bounds.top) > this.topCard.clientHeight / 2 ? -1 : 1

        }

        // get new coordinates
        let posX = e.deltaX + this.startPosX
        let posY = e.deltaY + this.startPosY

        // get ratio between swiped pixels and the axes
        let propX = e.deltaX / this.board.clientWidth
        let propY = e.deltaY / this.board.clientHeight

        // get swipe direction, left (-1) or right (1)
        let dirX = e.deltaX < 0 ? -1 : 1

        // get degrees of rotation, between 0 and +/- 45
        let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45

        // get scale ratio, between .95 and 1
        let scale = (95 + (5 * Math.abs(propX))) / 100

        // move and rotate top card
        this.topCard.style.transform =
            'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg) rotateY(0deg) scale(1)'

        // scale up next card
        if (this.nextCard) this.nextCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(' + scale + ')'

        if (e.isFinal) {

            this.isPanning = false

            let successful = false

            // set back transition properties
            this.topCard.style.transition = 'transform 200ms ease-out'
            if (this.nextCard) this.nextCard.style.transition = 'transform 100ms linear'
            
            // check threshold and movement direction
            if (propX > 0.25 && e.direction == Hammer.DIRECTION_RIGHT) {

                successful = true
                console.log("swiped right")

                // increase score
                score.Right++
                
                // insert aliment into the set frequency
                daily.push(aliments[counter])
                console.log('daily')
                daily.forEach(element => console.log(element.name))
                updateResults(daily, dispDaily)
                // move to the next item in aliments list               
                counter++



                // get right border position
                posX = this.board.clientWidth

            } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) {

                successful = true
                console.log("swiped left")

                // increase score
                score.Left++

                // insert aliment into the set frequency
                monthly.push(aliments[counter])
                console.log('monthly')
                weekly.forEach(element => console.log(element.name))
                updateResults(monthly, dispMonthy)
                // move to the next item in aliments list               
                counter++

                // get left border position
                posX = -(this.board.clientWidth + this.topCard.clientWidth)

            } else if (propY < -0.25 && e.direction == Hammer.DIRECTION_UP) {

                successful = true
                console.log("swiped up")

                // increase score
                score.Up++

                // insert aliment into the set frequency
                weekly.push(aliments[counter])
                console.log('weekly')
                weekly.forEach(element => console.log(element.name))
                updateResults(weekly, dispWeekly)
                // move to the next item in aliments list               
                counter++

                // get top border position
                posY = -(this.board.clientHeight + this.topCard.clientHeight)

            } else if (propY > 0.25 && e.direction == Hammer.DIRECTION_DOWN) {

                successful = true
                console.log("swiped down")

                // increase score
                score.Down++

                // insert aliment into the set frequency
                rarelyNever.push(aliments[counter])
                console.log('rarelyNever')
                rarelyNever.forEach(element => console.log(element.name))
                updateResults(rarelyNever, dispRarelyNever)
                // move to the next item in aliments list               
                counter++

                // get bottom border position
                posY = (this.board.clientHeight + this.topCard.clientHeight)

            }

            if (successful) {

                updateScore()
                

                // throw card in the chosen direction
                this.topCard.style.transform =
                    'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg)'

                // wait transition end
                setTimeout(() => {
                    // remove swiped card
                    this.board.removeChild(this.topCard)

                    if (position < alimLength) {

                        // add new card
                        this.push()
                    }
                    // handle gestures on new top card
                    this.handle()
                }, 200)

            } else {

                // reset cards position and size
                this.topCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
                if (this.nextCard) this.nextCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)'

            }

        }

    }


    push() {
        // create the card element
        let card = document.createElement('div')

        // loop once through the array aliments
        let name = aliments[position].name;

        let imgSrc = aliments[position].img;

        // change position value to cycle through all aliments
        let prevPos = position;

        position++

        console.log(position)

        // create the card content
        card.innerHTML = `
       <img class="img-alim" src="${imgSrc}" draggable="false">
       <h2 class="card-title drop-shadow">${name}</h2>
       <a class="details-trigger" href="#">détails</a>
       `;

        // add the card class
        card.classList.add('card')

        // set background gradient
        card.style.background = `linear-gradient(25deg, ${aliments[prevPos].color01}, ${aliments[prevPos].color02})`


        // append card into the board
        this.board.insertBefore(card, this.board.firstChild)

    }

}

let board = document.querySelector('#board')

let carousel = new Carousel(board)
