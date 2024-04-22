import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import imagesAndAlts from './imagesAndAlts';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	standalone: true,
	imports: [CommonModule, FormsModule],
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	imagesAndAlts = imagesAndAlts;
	questions: any = [];
	game: any = [];
	currentQuestion = 0;
	answeredCorrect: boolean = false;
	answeredIncorrect: boolean = false;
	score: number = 0;
	gameOver: boolean = false;
	totalQuestions = 15;

	constructor(
		private cdr: ChangeDetectorRef
	) { }

	ngOnInit() {
		this.questions = this.imagesAndAlts.map((image, index) => {
			return {
				order: index,
				image: image.src,
				correct: image.name,
				options: [...image.alts, image.name].map((option) => {
					return {
						text: option,
						correct: option === image.name
					}
				})
			}
		});
		this.createNewGame();
	}

	checkAnswer(answer: string) {
		if (answer === this.game[this.currentQuestion].correct) {
			this.answeredCorrect = true;
			this.score++;
		} else {
			this.answeredIncorrect = true;
		}
		setTimeout(() => {
			if (this.currentQuestion === this.totalQuestions - 1) {
				this.gameOver = true;
				return;
			}
			this.currentQuestion++;
			this.answeredCorrect = false;
			this.answeredIncorrect = false;
		}, 2000);
	}

	resetGame() {
		this.currentQuestion = 0;
		this.score = 0;
		this.answeredCorrect = false;
		this.answeredIncorrect = false;
		this.gameOver = false;
		this.createNewGame();
	}

	validateTotalQuestions(event: any): void {
		let value = event.target.value;
		let numValue = parseInt(value, 10);

		if (isNaN(numValue)) {
			numValue = this.totalQuestions;
		}

		if (numValue < 1) {
			this.totalQuestions = 1;
		} else if (numValue > this.questions.length) {
			this.totalQuestions = this.questions.length;
		} else {
			this.totalQuestions = numValue;
		}

		this.resetInputValueIfNeeded();
	}

	private resetInputValueIfNeeded(): void {
		const inputElement = document.getElementById('total-questions') as HTMLInputElement;
		if (inputElement) {
			inputElement.value = this.totalQuestions.toString();
		}
	}

	createNewGame(): void {
		let game = this.getRandomQuestions(this.questions, this.totalQuestions);
		this.game = game.map((question: any) => {
			let options = question.options.sort(() => Math.random() - Math.random());
			return {
				...question,
				options
			}
		});
	}

	getRandomQuestions(questions: any, totalQuestions: number) {
		let shuffled = questions.slice();

		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}

		return shuffled.slice(0, totalQuestions);
	}
}
