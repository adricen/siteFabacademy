# Final Project Developpement

## Game controler with connecting base

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
![arduino flash](assets\img\finalProject\arduinoFlashToISP.png)

Then I could work efficiently in testing programming and wirering in the same workflow.

|![arduino proto1](assets\img\finalProject\arduinoPrototyping2.jpg)|![arduino prototyping](assets\img\finalProject\prototyping2.jpg)|
|---|---|



Thanks to this wiring, now I can test my program quickly and modify my circuit structure really efficiently. I tryed different configuration. The goal was to test I2C protocole and being able to talk on a screen with processing. But the fact that it was interface with arduino, things I had done pretty lately on the fabacademy programme, gave me plenty of other problems like difficulty to have feedback from my ATtiny.

Once I tryed what I wanted, I designed my futur PCB on Eagle.

#### Electronic design

|![Schematics](assets\img\finalProject\controlerSchematics.jpg)|![Board](assets\img\finalProject\controlerBoard.jpg)|
|---|---|

Then used the eagle to fusionSync button (on the right of the screen...) and started to design my futur Pcb for my game controler. I didn't have the 3D package and don't have time to figure how it work for now, so I modelized my composente based on the composantes I had in the Fablab.

|![eagleToFusion](assets\img\finalProject\eagletoFusion.jpg) |![controleurModOpacity](assets\img\finalProject\controleurModOpacity.jpg)|
|---|---|

After this I wanted to rework on my controler design to have something more cloth from a classic controler.

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

|![camRamp](assets\img\finalProject\camRamp00.jpg)| ![](assets\img\finalProject\camRamp01.jpg)|![](assets\img\finalProject\camRamp02.jpg)|![](assets\img\finalProject\camRamp025.jpg)|![](assets\img\finalProject\camRamp03.jpg)|
|---|---|---|
||||

#### Engraving

|Preparation ![prepa](assets\img\finalProject\millingPreparation.jpg)|Pocket![pocket img](assets\img\finalProject\pocket.jpg)|Poliched Ramp![ramp](assets\img\finalProject\rampPolished.jpg)||
|---|---|---|

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


### Engraving PCB

![put parametres]() and ![PCB pochette avec infos](assets\img\finalProject\copperPCB.jpg)
10 passes of engraving, 20 of cutting parametres

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
