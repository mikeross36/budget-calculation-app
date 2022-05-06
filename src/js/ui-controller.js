import { qs, qsa } from "./utils.js";

const uiController = (()=> {
    const domElements = {
        inputType: ".add-type",
        inputDescription: ".add-description",
        inputValue: ".add-value",
        incomeList: ".income-list",
        expenseList: ".expense-list",
        addBtn: ".add-btn",
        budgetLabel: ".budget-value",
        budgIncLabel: ".budget-income-value",
        budgExpLabel: ".budget-expense-value",
        budgExpPercLabel: ".budget-expense-percentage",
        itemPercentage: ".item-percentage",
        budgDateLabel: ".budget-title-date",
        itemsContainer: ".details-container"
    };

    const formatNumber = (num, type) => {
        let splitNum, int, dec;
        num = Math.abs(num)
        num = num.toFixed(2)
        splitNum = num.split(".")
        int = splitNum[0]
        dec = splitNum[1]
        if(int.length > 3){
            int = `${int.substr(0, int.length -3)},${int.substr(int.length -3, 3)}`
        }
        const newNum = `${type === "exp" ? "-" : "+"} ${int},${dec}`;
        return newNum;
    };

    return {
        getInputData: () => {
            return {
                type: qs(domElements.inputType).value,
                description: qs(domElements.inputDescription).value,
                value: +qs(domElements.inputValue).value
            }
        },
        displayListItem: (item, type) => {
            let list, tempEl, newEl;
            if(type === "inc"){
                list = domElements.incomeList;
                tempEl = `
                    <div class="item" id="inc-%id%">
                         <div class="item-delete">
                            <button class="item-delete-btn">x</button>
                        </div>
                        <div class="item-description">%description%</div>
                        <div class="value-wrapper">
                            <div class="item-value">%value%</div>                        
                        </div>
                    </div>
                `
            }
            else if(type === "exp"){
                list = domElements.expenseList;
                tempEl = `
                    <div class="item" id="exp-%id%">
                        <div class="item-delete">
                            <button class="item-delete-btn">x</button>
                        </div>
                        <div class="item-description">%description%</div>
                        <div class="value-wrapper">
                            <div class="item-value">%value%</div>
                            <div class="item-percentage">%21%</div>                           
                        </div>
                    </div>
                `
            }
            newEl = tempEl.replace("%id%", item.id);
            newEl = newEl.replace("%description%", item.description);
            newEl = newEl.replace("%value%", formatNumber(item.value, type))
            qs(list).insertAdjacentHTML("beforeend", newEl)
        },
        getDomElements: ()=> {
            return domElements;
        },
        clearInputFields: ()=> {
            const inputFields = qsa(`${domElements.inputDescription}, ${domElements.inputValue}`)
            inputFields.forEach(field => {
                field.value = "";
            })
            return inputFields[0].focus()
        },
        displayBudgetUI: budget => {
            let type;
            budget.budget > 0 ? type = "inc" : type = "exp";

            qs(domElements.budgetLabel).textContent = formatNumber(budget.budget, type);
            qs(domElements.budgIncLabel).textContent = formatNumber(budget.totalInc, "inc");
            qs(domElements.budgExpLabel).textContent = formatNumber(budget.totalExp, "exp");
            if(budget.percentage > 0) {
                qs(domElements.budgExpPercLabel).textContent = `${budget.percentage} %`
            }
            else {
                qs(domElements.budgExpPercLabel).textContent = "---"
            }
        },
        displayBudgetDate: () => {
            const month = new Date().getMonth()
            const year = new Date().getFullYear()
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            qs(domElements.budgDateLabel).textContent = `${months[month]} ${year}`
        },
        displayPercentages: percentages => {
            const percentageFields = qsa(domElements.itemPercentage)
            percentageFields.forEach((field, index) => {
                if(percentages[index] > 0){
                    field.textContent = `${percentages[index]} %`
                }
                else {
                    field.textContent = "---";
                }
            })
        },
        deleteListItem: id => {
            const itemToDel = document.getElementById(id)
            itemToDel.parentNode.removeChild(itemToDel)
        },
        changeType: () => {
            const inputFields = qsa(`${domElements.inputType},${domElements.inputDescription},${domElements.inputValue}`)
            inputFields.forEach(field => {
                field.classList.toggle("red-focus")
            })
            qs(domElements.addBtn).classList.toggle("red")
        }
    }
})();

export default uiController;