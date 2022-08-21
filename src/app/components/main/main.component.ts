import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gameString: any
  allGames: any = []
  index: any = 0
  target: any
  newGame() {
    this.allGames.push({
      name: this.gameString,
      index: this.index,
      isSelected: false

    })
    this.index++
    this.gameString = ""
    this.target.value = ""
    
  }

  setGame(Event: any) {
    this.gameString = Event.target.value
    this.target = Event.target
    
  }

  highlight(index: any) {
    //loop through all games and set isSelected to false
    for (let i = 0; i < this.allGames.length; i++) {
      this.allGames[i].isSelected = false
    }
    //set isSelected to true for the game that was clicked
    this.allGames[index].isSelected = true

  }
  current = 0
  randomNumber: any
  loops = 0
  findRandomGame() {
    this.loops = 0
    //select a random number between 5 and 40
    this.randomNumber = Math.floor(Math.random() * (40 - 5 + 1)) + 5
    this.current = 0
    this.loop()

  }

  loop() {
    this.highlight(this.current)
    this.current++
    if (this.current >= this.allGames.length) {
      this.current = 0
    }
    if (!(this.loops == this.randomNumber)) {
      setTimeout(() => {
        this.loops++
        this.loop()
        
      }, 200)
    }
  }

}
