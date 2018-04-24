#include <avr/io.h>
#include <util/delay.h>

#define setHigh( directory, pin ) ( directory |= (1<< pin ) ) // Set port dir
#define setLow(directory, pin) ( directory &= ~(1<< pin )) // Set port low

#define MOSFET_pin ( 1<<PB1 )
#define MOSFET_port PORTB
#define MOSFET_direction DDRB
#define BTN_pin ( 1<<PB0 )

#define cycle_delay() _delay_us(2) // cycle delay
#define current 150 // PWM current
#define off 255 // PWM off
//
// Simple debug to start wwith
//
// Push the button and make a noise

// Pin btn = PB0 --> input :
// Pin output sound = PB1 --> output sound

int main(void) {

  static uint16_t cycle,cycles,delay,bit,lfsr;
  // Main loop
  CLKPR = (1 << CLKPCE);
  CLKPR = (0 << CLKPS3) | (0 << CLKPS2) | (0 << CLKPS1) | (0 << CLKPS0);

  TCCR0A = ((1 << COM0B0) | (1 << COM0B1) | (1 << WGM01) | (1 << WGM00)); // set OC0B on compare match and set fast PWM mode, 0xFF TOP
  TCCR0B = (1 << CS00); // set timer 0 prescalar to 1

  // Define Input Btn
  DDRB &= ~BTN_pin;
  PORTB |= BTN_pin;

  setLow(MOSFET_port, MOSFET_pin);
  setHigh(MOSFET_direction, MOSFET_pin);


  lfsr = 1;

  while ( 1 ) {
    while( PINB & BTN_pin ){
      //
      // update 11 bit LFSR
      //
      bit  = ((lfsr >> 0) ^ (lfsr >> 9)) & 1;
      lfsr =  (lfsr >> 1) | (bit << 10);
      //
      // loop over cycles
      //
      cycles = (1 << 15) / lfsr;
      for (cycle = 0; cycle < cycles; ++cycle) {
        //
        // set PWM current on and delay
        //
        OCR0B = current;
        for (delay = 0; delay < lfsr; ++delay)
        cycle_delay();
        //
        // set PWM current off and delay
        //
        OCR0B = off;
        for (delay = 0; delay < lfsr; ++delay)
        cycle_delay();

        }
      }
   }
}
