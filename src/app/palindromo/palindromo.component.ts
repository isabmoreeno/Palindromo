import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
  text: string = '';
  palindromo: boolean | null = null;

  checkPalindromo() {
    if (!this.text) {
      this.palindromo = null;
      return;
    }
    const cleanedText = this.text.toLowerCase().replace(/[^a-z0-9]/g, '');
    this.palindromo = cleanedText === cleanedText.split('').reverse().join('');
  }
}
