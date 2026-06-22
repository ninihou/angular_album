import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mortgage-caculator',
  imports: [FormsModule],
  templateUrl: './mortgage-caculator.component.html',
  styleUrl: './mortgage-caculator.component.scss',
})
export class MortgageCaculatorComponent {
  loanAmount = "";
  airate = "";
  term = "";
  monthlyPayment = 0;
  totalPayment = 0;
  totalInterest = 0;
  errorMessage = "";

  calculate() {
    
    // reset previous results + error each time
    this.errorMessage = "";
    // this.monthlyPayment = "";
    // this.totalPayment = "";
    // this.totalInterest = "";

    const principal = parseFloat(this.loanAmount);
    const annualRate = parseFloat(this.airate);
    const years = parseFloat(this.term);
// --- calculation ---
    const i = annualRate / 100 / 12;   // monthly interest rate
    const n = years * 12;              // total number of payments

    this.monthlyPayment = (principal * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    this.totalPayment = this.monthlyPayment * n;
    this.totalInterest = this.totalPayment - principal;
  } 

}