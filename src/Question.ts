export type Category = "Pop" | "Science" | "Sports" | "Rock"

export class Question {
  private content: string;

  constructor(category: Category, index: number) {
    this.content = `${category} Question ${index}`;
  }

  toString() {
    return this.content;
  }
}

class QuestionsPool {
  private questions: Question[];
  private category: Category;

  constructor(category: Category, length: number) {
    this.category = category;
    this.questions = [...new Array(length)].map((_, index) => new Question(category, index));
  }


  public drawAndRemoveFirstQuestion(): Question {
    return this.questions.shift();
  }
}

export class GameQuestions {
  private gameQuestions: Record<Category, QuestionsPool> = {
    Pop: new QuestionsPool("Pop", 50),
    Rock: new QuestionsPool("Rock", 50),
    Sports: new QuestionsPool("Sports", 50),
    Science: new QuestionsPool("Science", 50)
  };

  public drawQuestion(category: Category): Question {
    const drawnQuestion = this.gameQuestions[category].drawAndRemoveFirstQuestion();
    console.log(drawnQuestion);
    return drawnQuestion;
  }
}