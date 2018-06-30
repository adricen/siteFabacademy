# Fabacademy : *Week 13* **April 11/2018**

## Assignement - Interface and application programming - [schedule](http://academy.cba.mit.edu/classes/interface_application_programming/index.html)

Making a PCB with using input distance, oone input button and two speaker output

files : [fabGAMES files](assets\files\fabGame) (right clic + save target)

> I spend the week trying to make a special board for interface programming and communication but but I didn't succed making a good board at that time. so I made this assignement in my final project [here](#week_assignement)

# Processing with serial communication


### Mount electronic devices

|![cloth up](assets\img\finalProject\clothUp.jpg)| I used pull up resistors on this board. I made a design mistac missing to put pull up on the Vcc side of each button so tention could break down when pushing it. It did work well actually ![pull Up resistor](assets\img\finalProject\controler.jpg)|
|---|---|

![](assets\img\finalProject\board_controler_base.jpg)
### Using processing to program a base game

<iframe width="560" height="315" src="https://www.youtube.com/embed/HvcOcKd7MA0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


Simple conrtol with a scrolling effect on the background to simulate movement. For now it will be enought to try and test my buttun on it.


### Code breakdown

#### Controler programming

##### Setup

```java
/*
Controler PCB with ATtinny45
*/

//Pin names and function
//                              ISP   Inputs & Outputs
const byte S1 = 1; // pin6 PB1  MISO  S1
const byte S2 = 3; // pin2 PB3        S2
const byte S3 = 4; // pin3 PB4        S3
const byte SDA= 0; // pin5 PB0  MOSI  SDA
const byte SCL= 2; // pin7 PB2  SCK   SCL
//byte Test_pin = 5; // pin1-PB5-RESET Reserved for ISP Reset

//Variables
//                            
bool SW1=0; //Store read value of push button S1
bool SW2=0; //Store read value of push button S2
bool SW3=0; //Store read value of push button S3


// Setup preparation for every button
void setup()
{
  pinMode(S1, INPUT);
  pinMode(S2, INPUT);
  pinMode(S3, INPUT);
  pinMode(SDA, OUTPUT);
  pinMode(SCL, OUTPUT);
  digitalWrite(SDA, LOW);
  digitalWrite(SCL, LOW);
}

```

This configuration setup allow us to send digital output via `SDA / SCL` port communication.

##### Loop
```java


void loop()
{
  //Read inputs

  SW1 = digitalRead(S1);
  SW2 = digitalRead(S2);
  SW3 = digitalRead(S3);


  //Send inputs reading over SDA/SCL
  // When I flash with arduino IDE I used a 1mhz internal clock wich make
  // Using delay(1) is 8ms

  digitalWrite(SCL, HIGH);
  digitalWrite(SDA, SW1);
  delay(1);   //8ms delay
  digitalWrite(SCL, LOW);
  digitalWrite(SDA, LOW);
  delay(1);

  // Each clock we read another pin and read the signal and send a HIGH or LOW signal.
  digitalWrite(SCL, HIGH);
  digitalWrite(SDA, SW2);
  delay(1);
  digitalWrite(SCL, LOW);
  digitalWrite(SDA, LOW);
  delay(1);

  digitalWrite(SCL, HIGH);
  digitalWrite(SDA, SW3);
  delay(1);
  digitalWrite(SCL, LOW);
  digitalWrite(SDA, LOW);
  delay(1);

  delay(6); //6x8=48ms delay

}
```

Every delay we send another byte of information so the digital output is O or 1.


#### base programming

```java
/*
Base PCB with ATtinny44
*/

//Pin names and function
//                  
const byte RX = 0; // pin13 PA0 Tx Serial
const byte TX = 1; // pin12 PA1 Rx Serial

const byte SCL= 4; // pin9  PA4  SCL
const byte SDA= 6; // pin7  PA6  MOSI

const byte LED = 2; //pin11 PA2



//Variables
//
bool d=0; //store d-data and k-clock of custom com pipe
bool k=0;                          
bool SW1=0; //Store read value of push button S1
bool SW2=0; //Store read value of push button S2
bool SW3=0; //Store read value of push button S3
bool PSW1=0; //Store printed value of push button S1
bool PSW2=0; //Store printed value of push button S2
bool PSW3=0; //Store printed value of push button S3


#include <SoftwareSerial.h> //Tuto here: https://www.hackster.io/porrey/easy-serial-on-the-attiny-2676e6
//#define RX    0 // pin12 PA1 Rx Serial
//#define TX    1 // pin13 PA0 Tx Serial
SoftwareSerial Serial(RX, TX);

```

```java

void setup()
{
  pinMode(SCL, INPUT);
  pinMode(SDA, INPUT);

  pinMode(LED, OUTPUT);
  digitalWrite(LED, LOW);

  digitalWrite(LED, HIGH);
  delay(1000); //1s delay
  digitalWrite(LED, LOW);
  delay(1000); //1s delay

  Serial.begin(9600);
  delay(10);
  Serial.println("Serial is awake at 9600");

  //Find beginning of transmission
  k=0;
  while(k==0){
    k=digitalRead(SCL);}
  delay(40);//data is sent at 2x48ms period
}


void loop()
{

  //Custom com Reading

  digitalWrite(LED, HIGH);

//  //Find beginning of transmission
//  k=0;
//  while(k==0){
//    k=digitalRead(SCL);}
//  digitalWrite(SDA, HIGH);
//  delay(40);//data is sent at 2x48ms period
//  digitalWrite(SDA, LOW);
//  digitalWrite(LED, LOW);

  k=0;
  while(k==0){
    k=digitalRead(SCL);}
  delay(1);
  SW1=digitalRead(SDA);
  delay(8);

  k=0;
  while(k==0){
    k=digitalRead(SCL);}
  delay(1);
  SW2=digitalRead(SDA);
  delay(8);

  k=0;
  while(k==0){
    k=digitalRead(SCL);}
  delay(1);
  SW3=digitalRead(SDA);
  delay(8);

  digitalWrite(LED, LOW);
  //Serial Print
  if ((PSW1!=SW1)|(PSW2!=SW2)|(PSW3!=SW3)) //print only if sth changed
  {

    if(SW1 == 0){
      Serial.print("1");
    }
    if(SW2 == 0){
      Serial.print("2");
      }
    if(SW3 == 0){
      Serial.print("3");
      }

  }
  //delay(10); //10ms delay
}



```

Every byte we read one signal. Each time a signal is detect as low, we send a number on the serial data line. In my processing interface each time it read a 1, 2 or 3, we send a command of a movement.


### reading analog output with analogue discovery device

|![analog discovery device](assets\img\finalProject\analogOutput.jpg)|![analog discovery device](assets\img\finalProject\readingOutputdata.jpg)|
|---|---|

With the analogue discovery I was able to mesure and visualize the output of my signal electricaly.

### Serial communication Arduino IDE

<iframe width="560" height="315" src="https://www.youtube.com/embed/qqzZMudDFtg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Serial communication with processing

```java
Serial myPort;
String portName = Serial.list()[0];

void draw(){

  if ( myPort.available() > 0) {          // If data is available,

    val = myPort.readStringUntil('\n');   // read it and store it in val
  }
}

// Using serial reading I can si if it's a 1 / 2 /3 and then do something about it
void serialEvent(Serial p) {
  val = p.readString();

  String value =val;
   println(value);

  try {
  if ( value.equals("1" ) ) {

      player1 = run[nb];
      nb++;
      lag = lag +2;
      value = null;
      delay(100);
    } else if ( value.equals(  "2")) {

      player1 = run[nb];
      nb++;
      lag = lag - 2;
      value = null;
      delay(100);
    }  else if ( value.equals("3" ) ) {
      value = null;
      player1 = jump[2];
    }
    if (nb == 4) {
      nb = 0;
    }
  }  catch(RuntimeException e) {
    e.printStackTrace();
  }
}

```

![processing serial reading](assets\img\finalProject\serialReadingProcessing.jpg)

>This way of doing things allow me to have a simple reading and signal easy to cath and read.


<iframe width="560" height="315" src="https://www.youtube.com/embed/KHy-TuclZGc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

---

<a name="week_assignement">
### Working on it

On the precedent assignement, I just remake the board provided by Neil G. to dive little by little into circuit programming.

So to complete all assignement I made a new board, compiling input and output that I have done, on the same board. I choose to work with the ATtiny45 as this is the simplest microcontroler we have here, as far as I know. So to really understand microchip architecture, I wanted to overkill a chip. So I choose to put an distance detector, a button and a speaker on the same board.



#### First try...

I designed my pcb on eagle and choose to make a global ground.

| ![design](assets\img\week13\eagleSchem.png) | ![board](assets\img\week13\eagleBoard0.png)  |
| --- | --- |
| | ![result](assets\img\week13\inputOutput.png) | ![pcb](assets\img\week13\t45masterV1.jpg) |

Sadly when pluged it in, that board was full of short circuit and wasn't detected by the computer

#### Second try

I decided to do it again but this time without any ground mass

| ![design](assets\img\week13\eagleSchem.png) | ![board](assets\img\week13\eagleBoard.png)  |
| --- | --- |
| | ![result](assets\img\week13\t45Master-v2.png) | ![pcb](assets\img\week13\20180424_102024.jpg) |

This time, I was able to fuse programm it and load my pre-programme to check if it work. But it started to heat.

![programming](assets\img\week13\screenFuse.png)

I was finally able to programm it, but it steal heated a lot. So I started to remove composante part by part. First, speakers... still heated

---

> I finaly made this assignement for my final projects. The goal was to make a simple graphic interface with a classic character on it controled with my fresh made controler.

I sarted to work on what I was calling FabGAME, a simple interface with a controlabe character. Three action are possible, run foward, backward, jump and wait. These are basic controle to start most of game that have 2D scroliing character.

|Idle![idle](../assets\img\week13\interfaceFinal00.jpg)|Run![run](../assets\img\week13\interfaceFinal02.jpg)|Jump![jump](../assets\img\week13\interfaceFinal01.jpg)|
|---|---|---|

Everything is done within Processing3, I used differents code exemple to start, taken from processing exemples. It took me a big hour to understand it and go through this game. Really cloth from the canvas in web context, I'll come to it later to try to make a futuristic intefaces.

In order to complete this interface I used some old ressources I had made in a precedent project. I designed a little scene like that in order to teach javascritp to beginners. You can found the project [here](https://thimble.mozilla.org/fr/user/lepoles/1568657/).

So I already had the files, just needed to adapt it on processing.

I used a background image, made of composed image, the goal was to have a background image that could scroll infinitly so I had some clouds. For futur developpement I could had a sun.

Here is how code is organize :

#### Library
```java
  import ddf.minim.*;
  import ddf.minim.analysis.*;
  import ddf.minim.effects.*;
  import ddf.minim.signals.*;
  import ddf.minim.spi.*;
  import ddf.minim.ugens.*;
```

#### variables declaration

```java
  AudioPlayer player;
  Minim minim;//audio context

  PImage player1, backg, idle;
  PImage [] run = new PImage[4];
  PImage [] jump = new PImage[4];
  int cols, rows, lag, nb, imgSize;
```

#### Setup and initialisation

```java
void setup() {
  // Loading music
  minim = new Minim(this);
  player = minim.loadFile("Punk_Boy_2nd_Lvl_theme.mp3", 2048);
  player.play();

  //general sizing;
  fullScreen();
  frameRate(8);
  imgSize = 200;
  nb = 0;

  // Images implementation
  backg = loadImage("background.png");
  idle = loadImage("stand.png");
  player1 = idle;
  player1.resize(player1.width + imgSize, player1.height + imgSize - 15);
  // run and jump animation is charge in a array so I'll call them simply and in the good order for futur animation
  run[0] = loadImage("run_0.png");
  run[1] = loadImage("run_1.png");
  run[2] = loadImage("run_2.png");
  run[3] = loadImage("run_3.png");

  jump[0] = loadImage("jump_0.png");
  jump[1] = loadImage("jump_1.png");
  jump[2] = loadImage("jump_2.png");
  jump[3] = loadImage("jump_3.png");

  // Resize every image so they fit better to the screen using imgSize so I can resize everything in a clic.
  for (int i=0; i < run.length; i++) {
    run[i].resize(run[i].width + imgSize, run[i].height + imgSize- 15);
    // println(run[i].height);
    jump[i].resize(jump[i].width + imgSize, jump[i].height + imgSize);
  }

  // Background Logic
  cols = width/backg.width;
  rows = height/backg.height;
  if ( backg.width%width > 0) {
    cols++;
  }
  if ( backg.height%height > 0) {
    rows++;
  }
  println(cols);
  lag = 0;
}

```

#### Main loop

```java
void draw() {
  // background(backg);
  for (int y=0; y<rows; y++) {
    for (int x=0; x<cols; x++) {
      // The background image position is display two time so it can loop and is calculated each oop to be able to move
      image(backg, x*backg.width + backg.width - lag, y*backg.height );
      image(backg, x*backg.width - lag, y*backg.height);

    }
  }
  // Creation of the main character and is position in the screen
  image(player1, width*0.15, height*0.68);
}
```

#### Interactive logic

> Each function that follow allow processing to execute other function while the loop is going on. You have further preformated function you can call. Here I used some of them that where perfectly adapted to my purpose.

```java
void stop()
{
  player.close();
  minim.stop();
  super.stop();
}

void keyPressed() {
  if (key  == CODED) {
    if (keyCode == RIGHT) {
      player1 = run[nb];
      lag = lag +2;
      nb++;
      println(lag);
    } else if (keyCode == LEFT) {
      player1 = run[nb];
      lag = lag - 2;
      nb++;
      println(lag);
    }  else if (keyCode == UP) {
      player1 = jump[2];
      for(int i=0; i<jump.length; i++) {
        if( i<2){
          image(player1, width*0.15, height*0.60-(i*3));         
        } else {
          image(player1, width*0.15, height*0.60+(i*3));
        }
      }
    }
    if (nb == 4) {
      nb = 0;
    }
  }
}

void keyReleased() {
  player1 = idle;
}

```
