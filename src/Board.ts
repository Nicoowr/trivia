import { Category } from "./Question";

export type Place = number

const placeCategoryRelationTable: Category[] = ["Pop", "Science", "Sports", "Rock"];

export class Board {
  private placesNumber: number = 12;

  public goAhead(originPlace: Place, shift: number): Place {
    const temporaryNewPlace = originPlace + shift;
    return temporaryNewPlace % this.placesNumber;
  }

  public determineQuestionCategory(place: Place) {
    const currentCategory = placeCategoryRelationTable[place % placeCategoryRelationTable.length];
    console.log(`The category is ${currentCategory}`);
    return currentCategory;
  }
}
