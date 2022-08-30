import runGoldenMaster from "jest-golden-master";
import { Game } from "./index";

test("One player answers wrongly, goes to penalty box and gets out with an odd roll and a correct answer", async () => {
  runGoldenMaster("go-to-penalty-box-gets-out", async () => {
    const newGame = new Game();
    newGame.add("alice");
    newGame.add("bob");
    // alice
    newGame.roll(2);
    newGame.wasCorrectlyAnswered();
    // bob
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    // alice
    newGame.roll(3);
    newGame.wrongAnswer();
    // bob
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    // alice
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
  });
});

test("The board is closed with 12 spots", async () => {
  runGoldenMaster("closed-board-12-spots", async () => {
    const newGame = new Game();
    newGame.add("alice");
    newGame.add("bob");
    // alice
    newGame.roll(6);
    newGame.wasCorrectlyAnswered();
    // bob
    newGame.roll(1);
    newGame.wasCorrectlyAnswered();
    // alice
    newGame.roll(5);
    newGame.wrongAnswer();
    // bob
    newGame.roll(1);
    newGame.wasCorrectlyAnswered();
    // alice
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
  });
});


test("One player answers wrongly, goes to penalty box and stays in it (cannot keep answering question)", async () => {
  runGoldenMaster("go-to-penalty-box-stays", async () => {
    const newGame = new Game();
    newGame.add("alice");
    newGame.add("bob");
    // alice
    newGame.roll(2);
    newGame.wasCorrectlyAnswered();
    // bob
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    // alice
    newGame.roll(3);
    newGame.wrongAnswer();
    // bob
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    // alice
    newGame.roll(2);
    newGame.wasCorrectlyAnswered();
    // bob
    newGame.roll(2);
    newGame.wasCorrectlyAnswered();
  });
});


test("One player answers wrongly, goes to penalty box, gets out with an odd roll and answers wrongly again", async () => {
  runGoldenMaster("go-to-penalty-box-gets-out-gets-in", async () => {
    const newGame = new Game();
    newGame.add("alice");
    newGame.add("bob");
    // alice
    newGame.roll(2);
    newGame.wasCorrectlyAnswered();
    // bob
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    // alice
    newGame.roll(3);
    newGame.wrongAnswer();
    // bob
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    // alice
    newGame.roll(3);
    newGame.wrongAnswer();
  });
});

test("One player wins 7 times in a row", async () => {
  runGoldenMaster("7-wins-in-a-row", async () => {
    const newGame = new Game();
    newGame.add("alice");
    newGame.add("bob");

    console.log("----- Round 1 -----")
    newGame.roll(2);
    newGame.wasCorrectlyAnswered();
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();

    console.log("----- Round 2 -----")
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();

    console.log("----- Round 3 -----")
    newGame.roll(2);
    newGame.wasCorrectlyAnswered();
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();

    console.log("----- Round 4 -----")
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();

    console.log("----- Round 5 -----")
    newGame.roll(2);
    newGame.wasCorrectlyAnswered();
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();

    console.log("----- Round 6 -----")
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();

    console.log("----- Round 7 -----")
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();

  });
});

test("Last player is in penalty box and rolls odd and answers correctly", async () => {
  runGoldenMaster("last-player-penalty-odd-correct", async () => {
    const newGame = new Game();
    newGame.add("alice");
    newGame.add("bob");

    console.log("----- Round 1 -----")
    newGame.roll(2);
    newGame.wasCorrectlyAnswered();
    newGame.roll(3);
    newGame.wrongAnswer();

    console.log("----- Round 2 -----")
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
  });
});

test("Last player is in penalty box and rolls even and answers correctly", async () => {
  runGoldenMaster("last-player-penalty-even-correct", async () => {
    const newGame = new Game();
    newGame.add("alice");
    newGame.add("bob");

    console.log("----- Round 1 -----")
    newGame.roll(2);
    newGame.wasCorrectlyAnswered();
    newGame.roll(3);
    newGame.wrongAnswer();

    console.log("----- Round 2 -----")
    newGame.roll(3);
    newGame.wasCorrectlyAnswered();
    newGame.roll(2);
    newGame.wasCorrectlyAnswered();
  });
});

test("One player rolls multiple times", async () => {
  runGoldenMaster("one-player-rolls-multiple-times", async () => {
    const newGame = new Game();
    newGame.add("alice");
    newGame.add("bob");

    console.log("----- Round 1 -----")
    newGame.roll(2);
    newGame.roll(3);
    newGame.roll(1);
    newGame.wasCorrectlyAnswered();
    newGame.wrongAnswer();

  });
});
