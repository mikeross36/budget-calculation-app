class Item {
    constructor(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
}

class Income extends Item {
    constructor(id, description, value){
        super(id, description, value)
    }
}

class Expense extends Item {
    constructor(id, description, value){
        super(id, description, value)
        this.percentage = -1;
    }

    calcPercent(totalInc){
        if(totalInc > 0){
            this.percentage = Math.round((this.value / totalInc) * 100)
        }
        else {
            this.percentage = -1;
        }
    }

    getPercent(){
        return this.percentage;
    }
}

const budgetController = (()=> {
    const db = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        },
        budget: 0,
        percentage: -1
    }

    const calculateTotals = type => {
        let sum = 0;
        db.allItems[type].forEach(item => {
            sum += item.value;
        })
        db.totals[type] = sum;
    };

    return {
        createNewItem: (type, desc, val) => {
            let id, newItem;
            if(db.allItems[type].length > 0){
                id = db.allItems[type][db.allItems[type].length -1].id + 1;
            }
            else {
                id = 0;
            }
            // 
            if(type === "inc"){
                newItem = new Income(id, desc, val)
            }
            else if(type === "exp"){
                newItem = new Expense(id, desc, val)
            }
            // 
            db.allItems[type].push(newItem)

            return newItem;
        },
        calculateBudget: ()=> {
            calculateTotals("inc")
            calculateTotals("exp")
            db.budget = db.totals.inc - db.totals.exp;
            if(db.totals.inc > 0){
                db.percentage = Math.round((db.totals.exp / db.totals.inc) * 100)
            }
            else {
                db.percentage = -1;
            }
        },
        getBudget: ()=> {
            return {
                budget: db.budget,
                totalInc: db.totals.inc,
                totalExp: db.totals.exp,
                percentage: db.percentage
            }
        },
        calculatePercentages: ()=> {
            db.allItems.exp.forEach(expense => {
                expense.calcPercent(db.totals.inc)
            })
        },
        getPercentages: ()=> {
            const allPercentages = db.allItems.exp.map(expense => {
                return expense.getPercent()
            })
            return allPercentages;
        },
        deleteItem: (type, id) => {
            const idsArr = db.allItems[type].map(item => {
                return item.id;
            })
            const idsIdx = idsArr.indexOf(id)
            if(idsIdx !== -1){
                db.allItems[type].splice(idsIdx, 1)
            }
        }
    }
})();

export default budgetController;