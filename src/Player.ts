/* eslint-disable */
import { Board, Place } from "./Board";
import { GameQuestions, Question } from "./Question";

export class Player {
  private purse: number = 0;
  private place: Place = 0;
  private inPenaltyBox: boolean = false

  constructor(private name: string) {
  }

  public getName(): string {
    return this.name;
  }

  toString(): string {
    return this.getName();
  }

  public getPurseMoney(): number {
    return this.purse;
  }

  private addMoney(): number {
    this.purse += 1;
    return this.purse;
  }

  public answersCorrectly(): void {
    this.addMoney();
  }

  public goAhead(board: Board, roll: number): Place {
    this.place = board.goAhead(this.place, roll);
    return this.place;
  }

  public getPlace(): Place {
    return this.place;
  }

  public drawQuestion(gameQuestions: GameQuestions, board: Board): Question {
    return gameQuestions.drawQuestion(board.determineQuestionCategory(this.getPlace()));
  }

  public isInPenaltyBox() {
    return this.inPenaltyBox;
  }

  private goToJail(): void {
    this.inPenaltyBox = true;
  }

  public giveWrongAnswer() {
    console.log("Question was incorrectly answered");
    console.log(this.getName() + " was sent to the penalty box");
    this.goToJail()
    console.log("------")
    return;
  }

}
