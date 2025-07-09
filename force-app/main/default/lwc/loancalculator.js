import { LightningElement, track } from 'lwc';

export default class LoanCalculator extends LightningElement {
    @track loanAmount = 0;
    @track tenure = 0;
    @track interestRate = 0;
    @track emi;

    handleLoanAmountChange(event) {
        this.loanAmount = parseFloat(event.target.value);
    }

    handleTenureChange(event) {
        this.tenure = parseInt(event.target.value, 10);
    }

    handleInterestRateChange(event) {
        this.interestRate = parseFloat(event.target.value);
    }

    calculateEMI() {
        const P = this.loanAmount;
        const N = this.tenure;
        const R = this.interestRate / 12 / 100;

        if (P && N && R) {
            const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
            this.emi = emiValue.toFixed(2);
        } else {
            this.emi = null;
        }
    }
}
