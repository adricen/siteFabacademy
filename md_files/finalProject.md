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

### Prototyping

| ![printing base](assets\img\finalProject\printingBase.jpg) | ![printing top](assets\img\finalProject\20180523_111514.jpg) |
|---|---|
| ![printing object](assets\img\finalProject\20180523_112028.jpg) | !![printing object](assets\img\finalProject\20180523_112049.jpg)|

> I have a esign problem, my clips are too fit probably, I should have another try to make them better. Maybe by changing the printed orientation.

![printing problems](assets\img\finalProject\20180523_112054.jpg)

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

|![Schematics](assets\img\finalProject\controlerSchematics.jpg)|![Board](assets\img\finalProject\controlerBoard.jpg)|
|---|---|

Then used the eagle to fusionSync button (on the right of the screen...) and started to design my futur Pcb for my game controler.

![eagleToFusion](assets\img\finalProject\eagletoFusion.jpg)
