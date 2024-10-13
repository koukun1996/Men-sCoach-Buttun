import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-george-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="george-container">
      <img src="https://i.imgur.com/example.jpg" alt="メンズコーチ ジョージ" class="george-image">
      <div class="button-container">
        <button *ngFor="let phrase of phrases" (click)="playAudio(phrase)" class="george-button">
          <span class="button-text">{{ phrase }}</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .george-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f8f8f8;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .george-image {
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .button-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
    }
    .george-button {
      padding: 12px 20px;
      font-size: 16px;
      cursor: pointer;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 25px;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .george-button:hover {
      background-color: #45a049;
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
    .george-button:active {
      transform: translateY(0);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .button-text {
      font-weight: bold;
    }
  `]
})
export class GeorgeButtonComponent {
  phrases = [
    'スポーツ経験がない男',
    'いままであんまり運動の経験がない男',
    '部活に入った経験のない男',
    'ガチで危機感持った方がいいと思う',
    '厳しいって',
    'キツいって',
    'お前さ、イカ臭いよ'
  ];

  playAudio(phrase: string) {
    console.log(`Playing audio for: ${phrase}`);
    // 音声ファイルが用意されたら、以下のコードを使用します
    // const audio = new Audio(`assets/audio/${phrase}.mp3`);
    // audio.play();
  }
}