# Fabacademy : *Week 9* **March 14/2018**

## assignment - Embedded Programming - [schedule](http://academy.cba.mit.edu/classes/embedded_programming/index.html)
* individual assignment:
  * read a microcontroller data sheet
  * program your board to do something,
    * with as many different programming languages
    * and programming environments as possible
* group assignment:
  * experiment with other architectures

## Work out

### Read a microcontroler data sheet

#### ATtiny44A

![Attiny44A](http://fabacademy.org/archives/2013/students/saguar.ruben/pics/ATinny44-Datasheet.PNG)

| Feature | Explaination |
| --- | --- |
| VCC | Supply Voltage / + |
| GND | Ground Voltage / - |
| Port B | Port B Have 4 bit analogic Input/Output on the ITtiny44A. |
| Port A : from PA07 to PA0 | 8 bit input / output  |
| PB3 = RESET | The reset Pin allow you to reprogram your chip. You can reconfigure it as a classic analiogic pin but you won't be able to rewrite your code anyway. |
| Pull-Up Resistor | Maintain the Current in a high lvl. Generaly there is a pull up on the RESET pin to maintain the integrity of the controler. There is a pull resistor setable in each pin register normaly |
| Registers | Every pin have a register referenced in the datasheet. For the PAx or PBx. Each Pin have DDxn, PORTxn, and PINxn that are setable |
| AREF |  External Analog Reference for ADC. Pullup and output driver are disabled on PA0 when the pin is used as an external reference or Internal Voltage Reference with external capacitor at the AREF pin by setting (one) the bit REFS0 in the ADC Multiplexer Selection Register (ADMUX).|
| AINO | Analog Comparator Positive Input. Configure the port pin as input with the internal pull-up switched off to avoid the digital port function from interfering with the function of the Analog Comparator |
| DDRA / DDRB | Control what pin are Input or Output - 1 for output, 0 for input |
| PORTA / PORTB | Control what voltage level for the pins - 0 for 0and 1 for 5v |
| PINA / PINB | To read wich voltage are low or high |

#### ATtiny45S

I focused myself on the ATtiny45 that have a simpler architecture that the ATtiny44 so that I could make differents test.

> The ATtiny45 have 6-bit by registry


![ATtiny45 Schematique](http://www.hobbytronics.co.uk/image/data/atmel/attiny85-pinout.jpg)

| VCC / GND | The VCC => Supply + voltage / GND => ground voltage  -  |
| --- | --- |
| **RESET** | The RESET Pin detect if current is High or Low. Will current stay high, the RESET state stay unaffected. It wait a low current during more than a clock tick to be activated. When it's activated it reset all registry to default states. Desactivate the RESET PIN make it impossible to reprogram, (as far as I know, but there is brobably a way to overload it but I don't know it). For what I see, there is generaly an 100k resistor between vcc ad reset pinnext to a pull-up capacitor. |
| **PCINT**  | The PCINT registry is for interuption, wake up mode or idle mode. It allow you to change the state of the chip. On / Off button basically. It is possible to bind some c function asyncronously to activate the pcint. |
| **MOSI** | Master Output Slave In - On a bus configuration the Mosi is used to send information from the master of the bus. A good ressources that explain it and how to make a master/slave bus  [here](https://hackaday.com/2016/07/01/what-could-go-wrong-spi/) |
| **MISO ** | Master Input Slave Out. Allow the slave chips to send back informations - see --> [here](https://hackaday.com/2016/07/01/what-could-go-wrong-spi/) |
| **ADC** | [*wikipedia page*](https://en.wikipedia.org/wiki/Analog-to-digital_converter) Analog to digital converter. It allow to convert |
| **XTAL1 an XTAL2** | input for an external clock. Allow you to change the clock frequency with another rythme |

### Echo Helloboard !

Files : [hello.ftdi.44.echo.c](assets\files\helloboard\echoHello\hello.ftdi.44.echo.c) / [hello.ftdi.44.echo.c.make](assets\files\helloboard\echoHello\hello.ftdi.44.echo.c.make)

We are gonna make contact with our helloboard. You can download the file provided by neil gershenfeld on the fabacademy site here :


![starting](assets\img\week9\20180316_150430.jpg)

To connect to your board and read your data, you need to download putty if you don't have it. In your linux bash, tap this :

```

sudo apt-get install putty

```

| plug your board in and be carefull to the GND pin of your ftdi wire. It appears that the ISP connector send current so you don't necessarly need to plug your ftdi to see it work. | ![wirePics](assets\img\week9\helloWire.jpg) |
| --- | --- |
| navigate to the folder where you have your files and start by make file | ![helloboard](assets\img\week9\helloScreen.png) |
| To program your board, you need to preprocess your files. the `-f` option is to indicate file to the make process. Inside this the path to your C file is allrady writen | `make -f hello.ftdi.44.echo.c.make |
| two new file in `.hex` and `.out` have been done from the `.c` file, you can now send it to your board using `program-usbtiny` | `make -f hello.ftdi.44.echo.c.make program-usbtiny |
| Now connect your board to Putty | ![putty](assets\img\week9\Screenshot from 2018-03-19 20-34-28.png) |
| victory is yours, you can now write to your board that respond with a 25 lenght string taxt that you wrote. | ![helloPutty](assets\img\week9\helloPutty.jpg) |


### Blink Helloboard !

Files : [hello.ftdi.44.blink.c](assets\files\helloboard\blinkHello\hello.ftdi.44.blink.c) / [hello.ftdi.44.blink.c.make](assets\files\helloboard\blinkHello\hello.ftdi.44.blink.c.make)

Let's play with this led ! I found a basic C file for the blink on a past student of the fabacademy - [Vincent Dupuis](http://archive.fabacademy.org/archives/2016/fablabdigiscope/students/456/) I had to change some button du to the fact that my board is a little bit different. My button broche is on the PA3 and not on the PB2 so I maid the correction on it. Let's see how it goes.


| Connecting your board the same | ![BlinkyBoard](assets\img\week9\20180319_201143.jpg) |
| --- | --- |
| make file | `make -f hello.ftdi.44.blink.c.make` |
| then push it on your board | `make -f hello.ftdi.44.blink.c.make program-usbtiny` |
| if everything work correctly you should have your led blinking | ![trih](assets\img\week9\20180319_201219.jpg) |


### HelloGame - Duel

[hello.ftdi.44.duel.c](assets\files\helloboard\helloGame\Duel\hello.ftdi.44.duel.c) / [hello.ftdi.44.duel.c.make](assets\files\helloboard\helloGame\Duel\hello.ftdi.44.duel.c.make)

This programme is made for the [helloGame board]()

I tryed to make a simple game with the thing I learned so far. Designing a board, using and reading datasheet, making my PCB, mount it, make my programme and hopefully download it on my helloGame board and play with it.

#### Duel- the game

Thinking gameprogramming is a really simple way to approche programming language using the oldest way we know about learning, play. Everything begin with some rules and consequence.

Let's break it down !

##### SET UP
```
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

```

> The led and button used on the ATtiny44. You have to setup them in differents register. The DDRA for the

##### VARIABLES USED BY THE GAME

```
// Variables used to play
int init = 1;
int score1 = 0; // for player 1
int score2 = 0; // for player 2
int scoreLimit = 10;

```
> init is for the initialisation activation / scores are for each score player / Score limite is the limite of point you get to win

##### RESET

```

if ((PINA & (1 << PA3)) == (1 << PA3) && (PINB & (1 << PB2)) == (1 << PB2)) {
  _delay_ms(500);
  if ((PINA & (1 << PA3)) == (1 << PA3) && (PINB & (1 << PB2)) == (1 << PB2)) {
    init = 1;
    return;
  }
}
```

> If the two button are pressed more than 5 sec the init goes back to active and the score will be araised.

##### Function to display points

```

// Display points
if(((PINA & (1 << PA3)) == (1 << PA3) || (PINB & (1 << PB2)) == (1 << PB2)) && !((PINA & (1 << PA3)) == (1 << PA3) && (PINB & (1 << PB2)) == (1 << PB2)) ) {
  _delay_ms( 200 );
  if( (PINA & (1 << PA3)) == (1 << PA3) ){

    // Blink once for a point
    int a;
    for( a = 0; a < score1; a = a + 1 ){
      PORTA &= ~( 1<<PA2 );
      _delay_ms( 250 );
      PORTA |= ( 1<<PA2 );
      _delay_ms( 250 );
      PORTA &= ~( 1<<PA2 );
    }
    return;

  }
  if( (PINB & (1 << PB2)) == (1 << PB2) ){

    // Blink once for a point
    int a;
    for( a = 0; a < score2; a = a + 1 ){
      PORTA &= ~( 1<<PA7 );
      _delay_ms( 250 );
      PORTA |= ( 1<<PA7 );
      _delay_ms( 250 );
      PORTA &= ~( 1<<PA7 );
    }
    return;

  }
}

```
> detecte if a button is pushed more than 2 seconde and then light his light for each point.

##### Trigger function : waiting for someone to push the button

```
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
    return;

  }
}

```

> Once it's called, the trigger function enter into a recurcive loop that call itself until a button is push.

##### WINNER  LOOP

```
// Winner State
void winner( char led ){
  PORTA &= ~( 1 << led );
  _delay_ms( 75 );
  PORTA |= ( 1 << led );
  _delay_ms( 75 );
  PORTA &= ~( 1 << led );
  _delay_ms( 75 );
  init = 1;
  if((PINA & (1 << PA3)) !== (1 << PA3) && (PINB & (1 << PB2)) !== (1 << PB2)){
    winner(led);
  }
  return;

}

```
> the loop continues until someone push a button

##### ROUND

```

// Round function
void round ( score1, score2 ) {
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
      int r = rand() % 1000;
      // random delay
      _delay_ms(r);
    }
  }
  trigger();
  if( score1 < scoreLimit && score2 < scoreLimit ){
    round();
  } else {
    if( score1 > 10 ){
      winner( PA2 );
    } else {
      winner( PA7 );
    }
  }
  return;

}
```
> The round function is called at each turn. This is the main core of the game that count turn and deal with victory states.

> The first loop is a count down that blink 3, 2 and 1 time until it's your turn to push. Inbetween each number their is a random amount of time to wait. This way you never know when the last light are gona blink.
