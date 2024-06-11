function createAccount(pin, amount) {
  let pinNum = pin;
  let amt = amount || 0;
  return {
    checkBalance: (pin) => {
      if (pin === pinNum) return `$${amt}`;
      return "Invalid PIN.";
    },
    deposit: (pin, amount) => {
      if (pin === pinNum) {
        amt += amount;
        return `Succesfully deposited $${amount}. Current balance: $${amt}.`;
      }
      return "Invalid PIN.";
    },
    withdraw: (pin, amount) => {
      if (pin !== pinNum) {
        return "Invalid PIN.";
      }
      if (amt - amount < 0) {
        return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
      }
      amt -= amount;
      return `Succesfully withdrew $${amount}. Current balance: $${amt}.`;
    },
    changePin: (pin, newPin) => {
      if (pin === pinNum) {
        pinNum = newPin;
        return `PIN successfully changed!`;
      }
      return "Invalid PIN.";
    },
  };
}

module.exports = { createAccount };
