/* eslint-disable */
import { Player } from "./Player";
import { Board } from "./Board";
import { GameQuestions } from "./Question";

export class Game {
  private board: Board = new Board()
  private players: Array<Player> = [];
  private inPenaltyBox: Array<boolean> = [];
  private currentPlayerIndex: number = 0;
  private isGettingOutOfPenaltyBox: boolean = false;

  private gameQuestions = new GameQuestions()

  public add(name: string): boolean {
    this.players = [...this.players, new Player(name)];
    this.inPenaltyBox[this.howManyPlayers() - 1] = false;

    console.log(name + " was added");
    console.log("They are player number " + this.players.length);

    return true;
  }

  private howManyPlayers(): number {
    return this.players.length;
  }

  public currentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }

  public roll(roll: number) {
    console.log(this.players[this.currentPlayerIndex].getName() + " is the current player");
    console.log("They have rolled a " + roll);

    if (this.inPenaltyBox[this.currentPlayerIndex]) {
      if (roll % 2 != 0) {
        this.isGettingOutOfPenaltyBox = true;

        console.log(this.players[this.currentPlayerIndex].getName() + " is getting out of the penalty box");
        this.players[this.currentPlayerIndex].goAhead(this.board, roll);

        console.log(this.players[this.currentPlayerIndex].getName() + "'s new location is " + this.players[this.currentPlayerIndex].getPlace());
        this.currentPlayer().drawQuestion(this.gameQuestions, this.board)
      } else {
        console.log(this.players[this.currentPlayerIndex].getName() + " is not getting out of the penalty box");
        this.isGettingOutOfPenaltyBox = false;
      }
    } else {
      this.players[this.currentPlayerIndex].goAhead(this.board, roll);

      console.log(this.players[this.currentPlayerIndex].getName() + "'s new location is " + this.players[this.currentPlayerIndex].getPlace());
      this.currentPlayer().drawQuestion(this.gameQuestions, this.board)
    }
  }

  private didPlayerWin(): boolean {
    return !(this.players[this.currentPlayerIndex].getPurseMoney() == 6);
  }

  public wrongAnswer(): boolean {
    console.log("Question was incorrectly answered");
    console.log(this.players[this.currentPlayerIndex].getName() + " was sent to the penalty box");
    this.inPenaltyBox[this.currentPlayerIndex] = true;

    this.currentPlayerIndex += 1;
    if (this.currentPlayerIndex == this.players.length) this.currentPlayerIndex = 0;
    console.log("------")
    return true;
  }

  public wasCorrectlyAnswered(): boolean {
    if (this.inPenaltyBox[this.currentPlayerIndex]) {
      if (this.isGettingOutOfPenaltyBox) {
        console.log("Answer was correct!!!!");
        this.players[this.currentPlayerIndex].answersCorrectly()
        console.log(this.players[this.currentPlayerIndex].getName() + " now has " + this.players[this.currentPlayerIndex].getPurseMoney() + " Gold Coins.");

        var winner = this.didPlayerWin();
        this.currentPlayerIndex += 1;
        if (this.currentPlayerIndex == this.players.length) this.currentPlayerIndex = 0;
        console.log(`Is there a winner: ${winner ? "Yes" : "No"}`)
        console.log("------")
        return winner;
      } else {
        this.currentPlayerIndex += 1;
        if (this.currentPlayerIndex == this.players.length) this.currentPlayerIndex = 0;
        console.log("------")
        return true;
      }
    } else {
      console.log("Answer was correct!!!!");

      this.players[this.currentPlayerIndex].answersCorrectly()
      console.log(this.players[this.currentPlayerIndex].getName() + " now has " + this.players[this.currentPlayerIndex].getPurseMoney() + " Gold Coins.");

      var winner = this.didPlayerWin();

      this.currentPlayerIndex += 1;
      if (this.currentPlayerIndex == this.players.length) this.currentPlayerIndex = 0;
      console.log(`Is there a winner: ${winner ? "Yes" : "No"}`)
      console.log("------")
      return winner;
    }
  }
}
