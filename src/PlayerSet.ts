import { Player } from "./Player";

export class PlayerSet {
  private currentPlayerIndex: number = 0;

  private players: Player[] = [];

  constructor() {
  }

  public addPlayer(player: Player): Player[] {
    this.players = [...this.players, player];
    console.log(`${player.getName()} was added`);
    console.log(`There are ${this.players.length} players`);
    return this.players;
  }

  public getNumberOfPlayers(): number {
    return this.players.length;
  }

  public getCurrentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }

  public switchToNextPlayer(): Player {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.getNumberOfPlayers();
    return this.players[this.currentPlayerIndex];
  }
}
