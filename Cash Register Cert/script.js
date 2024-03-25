const input = document.getElementById('cash');
const button = document.getElementById('purchase-btn');
const output = document.getElementById('change-due');

let price = 19.5;
let cash;
let cid = [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
];

const currencyUnits = {
    'PENNY': 1,
    'NICKEL': 5,
    'DIME': 10,
    'QUARTER': 25,
    'ONE': 100,
    'FIVE': 500,
    'TEN': 1000,
    'TWENTY': 2000,
    'ONE HUNDRED': 10000
};

let money;
let statusTypes = {
    OPEN: 'OPEN',
    CLOSED: 'CLOSED',
    INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS'
};

let statusType = statusTypes.OPEN;

button.addEventListener('click', handleClick);

function handleClick() {
    const clonedCid = structuredClone(cid);
    const register = clonedCid.map((item) => [item[0], Math.round(item[1] * 100)]);

    cash = input.value;
    money = cash * 100;

    const changeDue = Number(cash - price);

    if (changeDue === 0) {
        output.innerHTML = 'No change due - customer paid with exact cash';
        return;
    } else if (changeDue < 0) {
        alert('Customer does not have enough money to purchase the item');
        return;
    } else {
        const changeList = getChangeList(register, changeDue);

        if (changeDue > getTotalInRegister(register) || changeList.length === 0) {
            output.innerHTML = `Status: ${statusTypes.INSUFFICIENT_FUNDS}`;
            return;
        }

        output.innerHTML = `Status: ${statusType} ${changeList.join(' ')}`;

        const expected = 'Status: CLOSED QUARTER: $0 DIME: $0 NICKEL: $0 PENNY: $0.5';
        const actual =   output.innerHTML;
    }
}

function getChangeList(register, changeDue) {
    let remainingChange = changeDue * 100;
    const changeList = [];

    const clonedRegister = structuredClone(register);

    if (changeDue === getTotalInRegister(clonedRegister)) {
      statusType = statusTypes.CLOSED;
    }

    for (const currency of clonedRegister.reverse()) {
        const unit = currency[0];
        let amountAvailable = currency[1];
        const unitValue = currencyUnits[unit];

        let done = false;

        while (remainingChange >= unitValue && done === false) {
            if (unitValue > amountAvailable) {
              changeList.push(`${unit}: ${convertToCurrency(0)}`);
              done = true;
              continue;
            }
            
            remainingChange -= unitValue;
            amountAvailable -= unitValue;

            if (changeList.findIndex((item) => item.startsWith(unit)) === -1) {
                changeList.push(`${unit}: ${convertToCurrency(unitValue)}`);
            } else {
                const existingIndex = changeList.findIndex((item) => item.startsWith(unit));
                const existingAmount = Number(changeList[existingIndex].split('$')[1]) * 100;
                changeList[existingIndex] = `${unit}: ${convertToCurrency(
                    existingAmount + unitValue
                )}`;
            }
        }
    }


    if (remainingChange) {
        return [];
    }

    return changeList;
}

function getTotalInRegister(register) {
    const total = register.reduce((sum, [, amount]) => sum + amount, 0) / 100;
    return total;
}

function convertToCurrency(value) {
    return centsToDollars(value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}

function dollarsToCents(value) {
    return Math.round(value * 100);
}

function centsToDollars(value) {
    return value / 100;
}