# Final Project Developpement

## Game controler with connecting base

### Files

* Controler Board : [controler_sch](assets\files\final_project\board\controlerV2.sch) / [controler_brd](assets\files\final_project\board\controlerV2.brd)
* Base Board : [base_sch](assets\files\final_project\board\StartBase.sch) / [base_brd](assets\files\final_project\board\StartBase.brd)
* program : [base_Loop.ino](assets\files\final_project\developpement\Base_loop\Base_loop.ino) / [controler_Loop.ino](assets\files\final_project\developpement\Controler_loop\Controler_loop.ino)
* Processing : [fabGameFolder](assets\files\fabGame)
* 3D files : [box_file](assets\files\final_project\controler\Base.f3d) / [Controler+button](assets\files\final_project\controler\controlerButton.f3d)
* STL files : [controlerExt.stl](assets\files\final_project\controler\coqueExterne1.stl) /  [clapet.stl](assets\files\final_project\controler\Clapet1.stl)
* Base : [Base model](assets\files\final_project\base.stl)
* Gcodes : [base1](assets\files\final_project\base1.gcode) - ultimaker 2 / [controler](assets\files\final_project\controlerPrint2.gcode.gz) - ultimaker 3

### Result

![Presentation](presenation.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/KHy-TuclZGc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Concept

This project have the goal to extend game controlers for computer to be able to try and design differents input and output through game design. It's design to become a console extension for computers. A plug and play device
![scene2](assets\img\finalProject\finalProjectPackshot.jpg)

### the Base

The base is the master of all the system. It allow the user to plug his controler and play to the game he selected. In the end the controler could as the user want it to be. I want to be able to experiment with controlers.
![scene](assets\img\finalProject\Base_scene.jpg)

I designed a simple base for now, exploiting the japonize join I learned on the machin design assignements.

#### <a name="what"></a>What will it do ?

The Game controler is a little dock station where you can plug-in differents controlers. The main idea is to be able to plug-in some simple and more complex controlers to play with games like unity or web.

#### <a name="who"></a>Who's done what beforehand ?

*Thomas Laubach* - [LEDmePLAY](http://archive.fabacademy.org/archives/2016/fablabkamplintfort/students/125/project_result.html) - video game system

#### <a name="design"></a>What will you design ?

##### main Base
* cardboard
* 3D package

##### Game controler
* cardboard
* 3D package

#### <a name="component"></a>What materials and components will be used ?

* ATMega32 --> on the mother box
* ATtiny45 on game controler
* I2C as communication protocole
* Processing interface or web interface HTML / CSS / Javascript

#### <a name="come"></a>Where will it come from ?

This project come from a desire to explore electronic through a well known subject. The embed electronic are designed to be the simple as possible to fully understand what's up under the hood and to play with it in designing new and other game controler. It must be fully interfaced with internet so that it could interacte with web content.

#### <a name="cost"></a> How much will they cost ?

I still need to investigate on the price it could cost at the end but so far, but it would be something around 10€ in printing and less than 10€ in electronics. Everything else is coding and web content so it don't have any direct costs.

#### <a name="made"></a>What parts and systems will be made?

I have to do everything, from product packaging to web developpement passing by electronics. But when I though about this project I wanted it simple enough to be able to work on each part and succed to a good degree of comprehension of what I did.

#### <a name="process"></a>What processes will be used ?

* 3D printer --> Packaging
* Laser cutter --> PCB engraving
* ATMega32 --> on the mother box
* ATtiny45 on game controler
* I2C as communication protocole
* Web interface HTML / CSS / Javascript

#### <a name="question"></a>What questions need to be answered ?

* How can I make it scalable, having unlimited amount of controler
* How do I make My game controler communicate with a website ? --> protocole souris / web
* Will communication process will be quick enought to be playable ?

#### <a name="evaluated"></a>How will it be evaluated?

* The fina product must be fully fonctionnal
* Capable of interact with web content
* Being open source and fully reproductible


### Circuit prototyping

I started prototying stuf with an arduino kit. I already know make basical stuff with arduino so let's jump directly to working with I2C programmed chips. First I need two ATtiny45 programmed for I2C protocole. Searching for information, My starting point was the wikipedia file of I2C protocole that are pretty well documented. [See it here](https://en.wikipedia.org/wiki/I²C)

I started to do this with a bread board and a Pomona soic-clip.
![prototyping first](assets\img\finalProject\breadboardPrototyping.jpg)

After this I wanted to try to use my Arduino as an ISP. As I wont have my fabISP on me all the time, I wanted to try other way to work with ATtiny. I used the ArduinoISP exemple to transforma my board in an ISP programmer.
![arduino flash](assets\img\finalProject\arduinoFlashToISP.jpg)

Then I could work efficiently in testing programming and wirering in the same workflow.

|![arduino proto1](assets\img\finalProject\arduinoPrototyping2.jpg)|![arduino prototyping](assets\img\finalProject\prototyping2.jpg)|
|---|---|



Thanks to this wiring, now I can test my program quickly and modify my circuit structure really efficiently. I tryed different configuration. The goal was to test I2C protocole and being able to talk on a screen with processing. But the fact that it was interface with arduino, things I had done pretty lately on the fabacademy programme, gave me plenty of other problems like difficulty to have feedback from my ATtiny.

Once I tryed what I wanted, I designed my futur PCB on Eagle.

### Mid term presentation

![presentation old](assets\files\presentation-old.png)

<video controls src="assets\files\presentation-old.mp4">Presentation and validationn project temporary</video>


#### Electronic design

|![Schematics](assets\img\finalProject\controlerSchematics.jpg)|![Board](assets\img\finalProject\controlerBoard.jpg)|
|---|---|

Then used the eagle to fusionSync button (on the right of the screen...) and started to design my futur Pcb for my game controler. I didn't have the 3D package and don't have time to figure how it work for now, so I modelized my composente based on the composantes I had in the Fablab.

|![eagleToFusion](assets\img\finalProject\eagletoFusion.jpg) |![controleurModOpacity](assets\img\finalProject\controleurModOpacity.jpg)|
|---|---|

After this I wanted to rework on my controler design to have something more cloth from a classic controler.

> After testing and working with those board, it appears that one button on the controlers are on the wrong pin, the scl, and concerning the base it simply doesn't work. So I made some other and worked with thems.

| ![schematics Base](assets\img\finalProject\schematicsBase.jpg) | ![board base](assets\img\finalProject\boardBase.jpg) |
|---|---|
| ![schematics controlers](assets\img\finalProject\schematicsControler.jpg) | ![board controler](assets\img\finalProject\boardControler.jpg) |

### Engraving PCB

|![parametres](assets\img\finalProject\parametre.jpg) | ![PCB pochette avec infos](assets\img\finalProject\copperPCB.jpg)|
|---|---|

With this copper, it appears that it need 6 passes at 600 dpi and 2 more at 1200dpi. for the cutting it's 40 passes on a contour.

| ![](assets\img\finalProject\engraving.JPG) | ![pcb layout](assets\img\finalProject\combinedPCB.JPG) | ![engravedPCB](assets\img\finalProject\engravedPCB.JPG)|
|---|---|---|


So far, I have engraving problem with this copper. It appears that the previous tests done in the past was on another style of copper coming from another store, so parameters I had won't work with this one. At the end the engraved side is fully conductive, so my circuit won't work at all, whatever I'll do. After investigating the good parameters for the copper presented before, It finally worked (see the parameters at the beginning of this paragraph).

![](assets\img\finalProject\newEngraved.JPG)

### Soldering

|Fab Console BOM :|Controler BOM :|
|---|---|
|10k resistor x1</br>500ohm resistor x1</br>1uf capacitor x1</br>1x red LED x1</br>20 mhz resonator x1</br>ISP connector x1</br>button x1</br>FTDI connector x1|Button x3</br>ATtiny45 x1</br>10k resistor</br>1uf capacitor |

![solderedCircuits](assets\img\finalProject\solderedCircuits.JPG)

|![left controler](assets\img\finalProject\leftControler.JPG)|![base center](assets\img\finalProject\BaseControler.JPG)|![rightControler](assets\img\finalProject\RightControler.JPG)|
|---|---|---|

> I wasn't able to program my base control board. So I decided to make another one. For my controlers I realized that I had made an error on my wirering, One button was plug-in on the wrong pin.

Here come the new designs :

| ![](assets\img\finalProject\newControler.jpg) | ![](assets\img\finalProject\baseBoardFinal.jpg) |
|---|---|

and this time they fuses all three of them!!

### Designing controlers

|![controler](assets\img\finalProject\controleurMode.jpg)|![goingOn](assets\img\finalProject\controleurModOpacity2.jpg)|
|---|---|


### Milling a mold

To have my button nice and smooth, I wanted to use a mold and cast them with silicones. I had a small piece of wax accessible with the perfect size for this mold.

![mold](assets\img\finalProject\mold.jpg)

#### Setting Up CAM module for Fusion360

##### Setup Stock

Once I had my mold, I modeled a block the size of my stock of wax, the same that I used for my model mold.  

|On your tool palette clique on new setp up| Stock panel, dropdown list, select `from solid` and select your the stock you previously modeled | Once it's done, in the first panel, you have to select the good orientation of your job. The Z axis have to go by the top and X on the right so your job will begin from the lower left corner. Set it up correctly and press ok |
|---|---|
|![CAM setup](assets\img\finalProject\camSetup00.jpg)| ![camSetup02](assets\img\finalProject\camSetup02.jpg)| ![camSetup01](assets\img\finalProject\camSetup01.jpg)  |

##### Pockets

| 2D panel > 2D pocket</br>Select your tool for your pocket job. I'll use a 1/8in endmill with two flutes, it's kind of a basic on that every mill have I think. | Geometry Panel</br>Select your stock contour and  | In this panel you can deal with the `maximum rough preparation`. This way you can control the height of the first passes. As it's some wax I putted 4mm so it will make the hole in two passes |Press `Ok`, you should have something like that. If not, you probably have a different setting of mine so try to adapt it.|
|---|---|---|
|![pocket](assets\img\finalProject\camPocket00.jpg)| ![geometry pocket](assets\img\finalProject\camPocket01.jpg) | ![pocket](assets\img\finalProject\camPocket02.jpg) | ![](assets\img\finalProject\camPocket03.jpg) |

##### Polished Ramp

| 3D Panel > Ramp</br>Select your tool. As it's a rounded pocket I'am going to use an 1/8 ball nose. | Geometry Panel</br>Select the faces you want to mill this shape. | Once you have select the face you want shape, elect faces you want to avoid to touch. This way Fusion will take car of them in his toolpath | Passes Panel</br>Here you can deal with the stepover parametre. As it's a rounded regulary hole, I wanted a smooth surface so I putted a 0.5 mm stepover. This way even if my mill is quite weight I'll have a nice render| PRess OK</br>You should have a toolpath that look like this.|
|---|---|---|---|---|
|![camRamp](assets\img\finalProject\camRamp00.jpg)| ![](assets\img\finalProject\camRamp01.jpg)|![](assets\img\finalProject\camRamp02.jpg)|![](assets\img\finalProject\camRamp025.jpg)|![](assets\img\finalProject\camRamp03.jpg)|
||||

#### Milling

| Preparation ![prepa](assets\img\finalProject\millingPreparation.jpg) | Pocket ![pocket img](assets\img\finalProject\pocket.jpg)|Poliched Ramp ![ramp](assets\img\finalProject\rampPolished.jpg) |
|---|---|

![mold](assets\img\finalProject\heroShot.JPG)

#### Casting my buttons

For the cast I used a blue Platinium Silicone Rubber ![silicone reference](assets\img\finalProject\platiniumSilicone.JPG)

<iframe width="560" height="315" src="https://www.youtube.com/embed/6-iJfJ_2hyI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

|![cast](assets\img\finalProject\cast.JPG)|![hero shot](assets\img\finalProject\heroSilicone.JPG)|
|---|---|

### 3D print

### Prototyping

| ![printing base](assets\img\finalProject\printingBase.jpg) | ![printing top](assets\img\finalProject\20180523_111514.jpg) |
|---|---|
| ![printing object](assets\img\finalProject\20180523_112028.jpg) | !![printing object](assets\img\finalProject\20180523_112049.jpg)|

> I have a esign problem, my clips are too fit probably, I should have another try to make them better. Maybe by changing the printed orientation.

![printing problems](assets\img\finalProject\20180523_112054.jpg)

After a while I started to 3D print my controlers. I wanted to have two controlers to take care of an I2C communication protocole for my controler. I still don't know if the signal is going to be effective enought to have a good responsive feeling for a game controler.

* Material : PLA Dark Green Transparent
* Scene parametre :
* Bed temperature : 70°
* Wall thikness : 1.6
* Other are defaults

|![printing Bed](assets\img\finalProject\printingBed.JPG)|![33dPrinting](assets\img\finalProject\3DprintControler.jpg)|
|---|---|
|![controler](assets\img\finalProject\printedControler.JPG)|![controler And Cast](assets\img\finalProject\controlerAndCast.JPG)|

### Mount electronic devices

|![cloth up](assets\img\finalProject\clothUp.jpg)| I used pull up resistors on this board. I made a design mistac missing to put pull up on the Vcc side of each button so tention could break down when pushing it. It did work well actually ![pull Up resistor](assets\img\finalProject\controler.jpg)|
|---|---|

![](assets\img\finalProject\board_controler_base.jpg)
### Using processing to program a base game

files : [link to project](https://gitlab.fabcloud.org/academany/fabacademy/2018/labs/fablabdigiscope/students/adrien-centonze/tree/master/assets/files/fabGame)

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

| ![](assets\img\finalProject\programming_reading.jpg) |![](assets\img\finalProject\programming_reading01.jpg)| ![](assets\img\finalProject\programming_reading02.jpg) |
|---|---|---|
|![analog discovery device](assets\img\finalProject\analogOutput.jpg)|![analog discovery device](assets\img\finalProject\readingOutputdata.jpg)|

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
<!--
##### Designing a fabduino with a controler

| ![Base Board](assets\img\finalProject\boardBaseV03.jpg) | ![Base Schema](assets\img\finalProject\schemaBaseV03.jpg) |
|---|---|
| ![Board Controler](assets\img\finalProject\boardControlerV03.jpg) | ![Controler Schema](assets\img\finalProject\schemaControlerV03.jpg) |

With this board, the goal is to have my game controler directly mounted on my board. So I choose to make a fabduino with button on it. I used a 6 pin connector to talk to them using the Arduino IDE.

### And then go Backward


I finally decided to came back to my previous design, after making my own arduiino
-->
