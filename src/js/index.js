import uiController from "./ui-controller.js";
import budgetController from "./budget-controller.js";
import { qs } from "./utils.js";
import "../style/main.scss"

const globalController = ((uiCtrl, budgCtrl)=> {
    const ctrlAddNewItem = () => {
        let input = uiCtrl.getInputData()
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            const newItem = budgCtrl.createNewItem(input.type, input.description, input.value)
            uiCtrl.displayListItem(newItem, input.type)
            uiCtrl.clearInputFields()
            updateBudgetUI()
            updatePercentages()
        }
    };

    const updateBudgetUI = () => {
        budgCtrl.calculateBudget()
        const budgObj = budgCtrl.getBudget()
        uiCtrl.displayBudgetUI(budgObj)
    };

    const updatePercentages = () => {
        budgCtrl.calculatePercentages()
        const percentages = budgCtrl.getPercentages()
        uiCtrl.displayPercentages(percentages)
    };

    const ctrlDeleteItem = e => {
        let splitId, type, id;
        const itemId = e.target.parentNode.parentNode.id;
        if(itemId){
            splitId = itemId.split("-")
            type = splitId[0]
            id = +splitId[1]
            budgCtrl.deleteItem(type, id)
            uiCtrl.deleteListItem(itemId)
            updateBudgetUI()
            updatePercentages()
        }
    };

    const eventTriggering = () => {
        const domEl = uiCtrl.getDomElements();
        qs(domEl.addBtn).addEventListener("click", ctrlAddNewItem)
        document.addEventListener("keypress", e => {
            if(e.key === "Enter") {
                ctrlAddNewItem()
            }
        })
        qs(domEl.itemsContainer).addEventListener("click", ctrlDeleteItem)
        qs(domEl.inputType).addEventListener("change", uiCtrl.changeType)
    };

    return {
        init: ()=> {
            eventTriggering()
            uiCtrl.displayBudgetDate()
            uiCtrl.displayBudgetUI({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            })
        }
    }
})(uiController, budgetController);

globalController.init()