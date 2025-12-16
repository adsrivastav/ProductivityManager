const router = require("express").Router();
const auth = require("../middleware/auth");
const expenseController = require("../controllers/expenseController"); 


router.post("/", auth, expenseController.addExpense);
router.get("/", auth, expenseController.getExpenses); 
router.get("/summary/totals", auth, expenseController.getExpenseSummary);
router.get("/summary/category", auth, expenseController.getCategorySummary); 
router.get("/recent", auth, expenseController.getRecentExpenses);            
router.get("/:id", auth, expenseController.getExpenseById);
router.put("/:id", auth, expenseController.updateExpense);
router.delete("/:id", auth, expenseController.deleteExpense);
module.exports = router;
