const controller = require("../controller/EzeyNftController");
const db = require("../connectDB/DB")
describe("My Test Suite", async () => {
  it("My Test Case", async () => {
    let allData = await controller.getAllData();
    console.log(allData);
  });
});
