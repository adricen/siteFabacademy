#include <avr/io.h>
#include <inttypes.h>
#include <util/delay.h>
#include <stdio.h>
#include <stdlib.h>


void delay_ms(uint16_t ms);
void init_io();
int button_is_pressed();
void toggle_led();

int main (void)
{
	/*
	Sections :
	- Setup
	- Initialisation
	- Restart
	- Display Score
	- Trigger Score
	- Winner State
	- Round
	*/
	// Used pin on the helloDuel Board :
	// player 1 : PA2-Led PA3-Btn
	// player 2 : PA7-Led PB2-Btn

	// Setup Btn and Led
		// Player 1
			// Btn
			DDRA &= (1<<PA3);
			PORTA |= (1<<PA3);

			// Led
			DDRA |= (1<<PA2);
			PORTA |= (1<<PA2);

		// Player 2
			// Btn
			DDRB &= (1<<PB2);
			PORTB |= (1<<PB2);

			// Led
			DDRA |= (1<<PA7);
			PORTA |= (1<<PA7);

	// Variables used to play
	int init = 1;
	int score1 = 0; // for player 1
	int score2 = 0; // for player 2
	const int scoreLimit = 10;

	while(1){
		// Initiatlisation = to trigger : init = 1
		if( init == 1 ) {
			// Two ligth Blinking together
			PORTA &= ~( 1<<PA7 );
			PORTA &= ~( 1<<PA2 );
			_delay_ms( 25 );
			PORTA |= ( 1<<PA7 );
			PORTA |= ( 1<<PA2 );
			_delay_ms( 50 );
			PORTA &= ~( 1<<PA7 );
			PORTA &= ~( 1<<PA2 );
			_delay_ms( 50 );
			PORTA |= ( 1<<PA7 );
			PORTA |= ( 1<<PA2 );
			_delay_ms( 50 );
			PORTA &= ~( 1<<PA7 );
			PORTA &= ~( 1<<PA2 );
			_delay_ms( 50 );

			// Lighting 1 by 1
			PORTA |= ( 1<<PA7 );
			_delay_ms( 50 );
			PORTA |= ( 1<<PA2 );
			_delay_ms( 75 );
			PORTA &= ~( 1<<PA7 );
			_delay_ms( 50 );
			PORTA &= ~( 1<<PA2 );
			_delay_ms( 75 );

			init = 0;
			score1 = 0;
			score2 = 0;
		}
		// Reset
		if ((PINA & (1 << PA3)) == (1 << PA3) && (PINB & (1 << PB2)) == (1 << PB2)) {
			_delay_ms(500);
			if ((PINA & (1 << PA3)) == (1 << PA3) && (PINB & (1 << PB2)) == (1 << PB2)) {
				init = 1;
				break;
			}
		}
		// Display points
		// if(((PINA & (1 << PA3)) == (1 << PA3) || (PINB & (1 << PB2)) == (1 << PB2)) && !((PINA & (1 << PA3)) == (1 << PA3) && (PINB & (1 << PB2)) == (1 << PB2)) ) {
		//  	_delay_ms( 200 );
		// 	if( (PINA & (1 << PA3)) == (1 << PA3) ){
		// 		// Blink once for a point
		// 		int a;
		// 		for( a = 0; a < score1; a = a + 1 ){
		// 			PORTA &= ~( 1<<PA2 );
		// 			_delay_ms( 250 );
		// 			PORTA |= ( 1<<PA2 );
		// 			_delay_ms( 250 );
		// 			PORTA &= ~( 1<<PA2 );
		// 		}
		// 	}
		// 	if( (PINB & (1 << PB2)) == (1 << PB2) ){
		// 		// Blink once for a point
		// 		int a;
		// 		for( a = 0; a < score2; a = a + 1 ){
		// 			PORTA &= ~( 1<<PA7 );
		// 			_delay_ms( 250 );
		// 			PORTA |= ( 1<<PA7 );
		// 			_delay_ms( 250 );
		// 			PORTA &= ~( 1<<PA7 );
		// 		}
		// 	}
		// }
		// Trigger function
		void trigger(){
			if( (PINA & (1 << PA3)) == (1 << PA3) || (PINB & (1 << PB2)) == (1 << PB2)){
				if( (PINA & (1 << PA3)) == (1 << PA3) ){
					// adding one point to score 1
					score1 = score1 + 1;
					// lighting to show the winner
					PORTA &= ~( 1<<PA2 );
					_delay_ms( 10 );
					PORTA |= ( 1<<PA2 );
					_delay_ms( 250 );
					PORTA &= ~( 1<<PA2 );
					return;
				}
				if( (PINB & (1 << PB2)) == (1 << PB2) ){
					// adding one oint to score 2
					score2 = score2 + 1;
					// lighting to show the winner
					PORTA &= ~( 1<<PA7 );
					_delay_ms( 10 );
					PORTA |= ( 1<<PA7 );
					_delay_ms( 250 );
					PORTA &= ~( 1<<PA7 );
					return;
				}
			} else {
				trigger();
			}
		}
		// Winner State
		void winner( char led ){
			PORTA &= ~( 1 << led );
			_delay_ms( 75 );
			PORTA |= ( 1 << led );
			_delay_ms( 75 );
			PORTA &= ~( 1 << led );
			_delay_ms( 75 );
			init = 1;
			if((PINA & (1 << PA3)) != (1 << PA3) && (PINB & (1 << PB2)) != (1 << PB2)){
				winner(led);
			}
			return;
		}
		// Round function
		void round ( ) {
			int limit;
			for( limit = 3; limit > 0; limit = limit-1 ){
				int loop;
				for( loop = 0; loop < limit; loop = loop+1 ){
					PORTA &= ~( 1<<PA7 );
					PORTA &= ~( 1<<PA2 );
					_delay_ms( 35 );
					PORTA |= ( 1<<PA7 );
					PORTA |= ( 1<<PA2 );
					_delay_ms( 35 );
					PORTA &= ~( 1<<PA7 );
					PORTA &= ~( 1<<PA2 );
				}
				if( limit > 1){
					_delay_ms(250);
          // srand(time(NULL));
					int r =  rand() % 1000;
					int q;
					for(q=0; q < r; q=q+1){
						// random delay;
						_delay_ms(1);
					}
				}
			}
			trigger();
			if( score1 < scoreLimit && score2 < scoreLimit ){
				round();
				return;
			} else {
				if( score1 > 10 ){
					winner( PA2 );
				} else {
					winner( PA7 );
				}
			}
		}
		round();
	}
}
