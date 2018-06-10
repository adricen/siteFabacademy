# Fabacademy : *Week 18* **May 23 2018**

## Assignment - Applications and implications - [schedule](http://academy.cba.mit.edu/classes/applications_implications/index.html)
### Propose a final project that integrates the range of units covered
* answering:
  * [What will it do?](#what)
  * [Who's done what beforehand?](#who)
  * [What will you design?](#design)
  * [What materials and components will be used?](#component)
  * [Where will it come from?](#come)
  * [How much will they cost?](#cost)
  * [What parts and systems will be made?](#made)
  * [What processes will be used?](#process)
  * [What questions need to be answered?](#question)
  * [How will it be evaluated?](#evaluated)
* Your project should incorporate 2D and 3D design,
  * additive and subtractive fabrication processes,
  * electronics design and production,
  * microcontroller interfacing and programming,
  * system integration and packaging
* Where possible, you should make rather than buy
  * the parts of your project
* Projects can be separate or joint, but need to show individual
  * mastery of the skills, and be independently operable

---

## The Game Controler

![gameControler](assets/img/week18/finalProjectPackshot.jpg)

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

##### web interface

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
* How do I make My game controler communicate with a website ? --> protocole mouse / web
* Will communication process will be quick enought to be playable ?

#### <a name="evaluated"></a>How will it be evaluated?

* The fina product must be fully fonctionnal
* Capable of interact with web content
* Being open source and fully reproductible
