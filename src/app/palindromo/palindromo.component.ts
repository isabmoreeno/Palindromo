import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.css'
})
export class PalindromoComponent {
  text: string = '';
  palindromo: boolean | null = null;

  checkPalindromo() {
    const sanitizedText = this.text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    this.palindromo = sanitizedText === sanitizedText.split('').reverse().join('');
  }
}
