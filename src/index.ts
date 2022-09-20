/* eslint-disable */
import { Player } from "./Player";
import { Board } from "./Board";
import { GameQuestions } from "./Question";
import { PlayerSet } from "./PlayerSet";

export class Game {
  private board: Board = new Board()
  private playersSet: PlayerSet = new PlayerSet();
  private isGettingOutOfPenaltyBox: boolean = false;

  private gameQuestions = new GameQuestions()

  public add(name: string) {
    this.playersSet.addPlayer(new Player(name));
  }


  public roll(roll: number) {
    console.log(this.playersSet.getCurrentPlayer().getName() + " is the current player");
    console.log("They have rolled a " + roll);

    if (this.playersSet.getCurrentPlayer().isInPenaltyBox()) {
      if (roll % 2 != 0) {
        this.isGettingOutOfPenaltyBox = true;

        console.log(this.playersSet.getCurrentPlayer().getName() + " is getting out of the penalty box");
        this.playersSet.getCurrentPlayer().goAhead(this.board, roll);

        console.log(this.playersSet.getCurrentPlayer().getName() + "'s new location is " + this.playersSet.getCurrentPlayer().getPlace());
        this.playersSet.getCurrentPlayer().drawQuestion(this.gameQuestions, this.board)
      } else {
        console.log(this.playersSet.getCurrentPlayer().getName() + " is not getting out of the penalty box");
        this.isGettingOutOfPenaltyBox = false;
      }
    } else {
      this.playersSet.getCurrentPlayer().goAhead(this.board, roll);

      console.log(this.playersSet.getCurrentPlayer().getName() + "'s new location is " + this.playersSet.getCurrentPlayer().getPlace());
      this.playersSet.getCurrentPlayer().drawQuestion(this.gameQuestions, this.board)
    }
  }

  private didPlayerWin(): boolean {
    return !(this.playersSet.getCurrentPlayer().getPurseMoney() == 6);
  }

  public wrongAnswer(): boolean {
    console.log("Question was incorrectly answered");
    console.log(this.playersSet.getCurrentPlayer().getName() + " was sent to the penalty box");
    this.playersSet.getCurrentPlayer().goToJail()
    this.playersSet.switchToNextPlayer()
    console.log("------")
    return true;
  }

  public wasCorrectlyAnswered(): boolean {
    if (this.playersSet.getCurrentPlayer().isInPenaltyBox()) {
      if (this.isGettingOutOfPenaltyBox) {
        console.log("Answer was correct!!!!");
        this.playersSet.getCurrentPlayer().answersCorrectly()
        console.log(this.playersSet.getCurrentPlayer().getName() + " now has " + this.playersSet.getCurrentPlayer().getPurseMoney() + " Gold Coins.");

        var winner = this.didPlayerWin();
        this.playersSet.switchToNextPlayer()
        console.log(`Is there a winner: ${winner ? "Yes" : "No"}`)
        console.log("------")
        return winner;
      } else {
        this.playersSet.switchToNextPlayer()
        console.log("------")
        return true;
      }
    } else {
      console.log("Answer was correct!!!!");

      this.playersSet.getCurrentPlayer().answersCorrectly()
      console.log(this.playersSet.getCurrentPlayer().getName() + " now has " + this.playersSet.getCurrentPlayer().getPurseMoney() + " Gold Coins.");

      var winner = this.didPlayerWin();

      this.playersSet.switchToNextPlayer()
      console.log(`Is there a winner: ${winner ? "Yes" : "No"}`)
      console.log("------")
      return winner;
    }
  }
}
