# Fabacademy : *Week 7* - **February 28/2018**


## Assignment - Electronics Design - [schedule](http://academy.cba.mit.edu/classes/electronics_design/index.html)

### group project:
   use the test equipment in your lab to observe the operation
      of a microcontroller circuit board

### individual project:
   redraw the echo hello-world board,
   add (at least) a button and LED (with current-limiting resistor)
   check the design rules, make it, and test it
   extra credit: simulate its operation
   extra credit: render it

## Production


### Lexique

ohm law : U = R * I

* Voltage / Tention :
  Resistance multiply by Intensity. It's unite is Voltage => V

* Resistance :
  Limitation of the current. it's unite is in ohm.

* Impedence :
  Equivalent to resistance for alternative current

* Capacitence :
  Stabilize current

* Intensity / Current :


### Redesign the HelloBoard on KiCAD

I started lately working on KiCAD trying to re-design the HelloBoard. As a beginner on this software, I found a documentation that someone made in the past [here](http://archive.fabacademy.org/2017/fablabnervecentre/students/401/assignment6.html). So I reproducte the schematiks.

| ![kiCad](assets\img\week7\kiCad-01.jpg) Starting Schematics | ![kiCad](assets\img\week7\kiCad-02.jpg)  Schematics done! | ![kiCad](assets/img/week7/kiCad-03.jpg) |
| --- | --- | --- |

> After a few test, I left KiCad for Eagle. The open source software seams to be quite good, but every device are not avalaible in the library for now and for now I am a beginner that try to understand what this is all about, so maybe I'll come to it further but for now I need a stable and effective software wich allow me to understand stuf clearly.

### Redesign the HelloBoard on Eagle - birth of the helloGame board

<u>EAGLES : </u> [Schaematics](assets\files\helloboard\helloGame\helloGame1.5.sch) / [board](assets\files\helloboard\helloGame\helloGame1.5.brd) / [resultBoard](assets\files\helloboard\helloGame\helloGameBoard.png)

I wanted to try to use every slot available on my ATtiny44, so I put 2 button and 2 led. With this I should be able to programme simple interaction to make a simple 2 player game.

Component :

* Attiny44A : ATTINY44-SSU
* AVRISPSMD
* FTDI
* RESONATOR 1uf 20mhz
* CAP-US1206FAB
* Resistor :  500ohm x 2 + 100ohm
* BUTTON x2
* Leds : LEDFAB1206 x 2

#### Eagle time

| Schematics using the list above and the clasic echohelloboard exemple I have been able to connect et design my own board | ![eagle0](assets\img\week7\helloGame0.png) |
| --- | --- |
| Board - To make the ground like this and spar some engrave time, create a squarre around your board using `Polygone` tool,then name it using the naming tool that I circle on this picture nad name your element `GND`. Once it's done you can clic on rastnet.  | ![eagle1](assets\img\week7\helloGame1.jpg) |
| To see if my design fit well with my engraving laser cutter, I made some test on wood to see if it work. | ![woodTest](assets\img\week7\woodTest.jpg) |
| ![](assets\img\week7\mount0.jpg) | ![](assets\img\week7\mount1.jpg) |

![mounted](assets\img\week7\mount2.jpg)

| After this first version when I tryed to flash it with my fabISP, it apears that I had conductivity issue probably so this board won't work after all. I made a cleaner version without the big ground plate.S the board look like that after all| ![resultBoard](assets\img\week9\P1070177.JPG) |
| --- | --- |

<iframe width="560" height="315" src="https://www.youtube.com/embed/H5XTcAKtRkw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/sn6Rr_OXa0k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

You can see it work in [week9 - embed programming]()
