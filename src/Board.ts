export type Place = number

const placeCategoryRelationTable = ["Pop", "Science", "Sports", "Rock"] as const;

export class Board {
  private placesNumber: number = 12;

  public goAhead(originPlace: Place, shift: number): Place {
    const temporaryNewPlace = originPlace + shift;
    return temporaryNewPlace % 12;
  }

  public determineQuestionCategory(place: Place) {
    const currentCategory = placeCategoryRelationTable[place % 4];
    console.log(`The category is ${currentCategory}`);
    return currentCategory;
  }
}
