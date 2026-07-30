function BankAccount (customerName, balance){
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance

    this.deposit = function(amount){
        this.balance += amount
    }

    this.withdraw = function(amount){
        this.balance -= amount
    }
}

const accounts = []
const accountForm = document.getElementById('accountForm')
const customerName = document.querySelector('#customerName')
const balance = document.querySelector('#balance')
const output = document.getElementById('output')

function renderAccounts() {
    output.innerHTML = ''
    if (accounts.length === 0) {
        output.innerText = 'No accounts created yet.'
        return
    }
    accounts.forEach(acc => {
        const p = document.createElement('p')
        p.innerText = `Account No: ${acc.accountNumber} | Name: ${acc.customerName} | Balance: ${acc.balance}`
        output.appendChild(p)
    })
}

accountForm.addEventListener('submit', function(e){
    e.preventDefault()
    const account = new BankAccount(customerName.value, +balance.value)
    accounts.push(account)
    console.log(accounts)
    renderAccounts()
})

const depositForm = document.getElementById('depositForm')
const accNum = document.querySelector('#accNum')
const amnt = document.querySelector('#amnt')

depositForm.addEventListener('submit', function(e){
    e.preventDefault()
    const account = accounts.find(acc => acc.accountNumber === +accNum.value)
    if (account) {
        account.deposit(+amnt.value)
        console.log(accounts)
        renderAccounts()
    } else {
        console.log('Account not found')
        alert('Account not found')
    }
})

const withdrawForm = document.getElementById('withdrawForm')
const withdrawAccNum = document.querySelector('#withdrawAccNum')
const withdrawAmnt = document.querySelector('#withdrawAmnt')

withdrawForm.addEventListener('submit', function(e){
    e.preventDefault()
    const account = accounts.find(acc => acc.accountNumber === +withdrawAccNum.value)
    if (account) {
        account.withdraw(+withdrawAmnt.value)
        console.log(accounts)
        renderAccounts()
    } else {
        console.log('Account not found')
        alert('Account not found')
    }
})