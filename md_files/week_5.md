# Fabacademy : *Week 5* - - **February 07/2018**



## Assignement - electronics production - [schedule](http://academy.cba.mit.edu/classes/electronics_production/index.html)

* ** group assignment: **
  - > characterize the specifications of your PCB production process
* ** individual assignment: **
  - > make an in-circuit programmer by milling the PCB,
  - > then optionally trying other processes
  - <u>ATtiny45</u>
    - [Brian](http://fab.cba.mit.edu/classes/863.16/doc/projects/ftsmin/index.html)
    - [Zerc](http://fabacademy.org/archives/2015/doc/projects/FabTinyStar/)
  - <u>ATtiny44</u>
    - [Ali](http://fab.cba.mit.edu/classes/863.16/doc/tutorials/FabISP/FabISP_Demystified.html)
    - [Valentin](http://fab.cba.mit.edu/classes/863.11/people/valentin.heun/2.htm)
    - [Andy](http://fab.cba.mit.edu/content/archive/projects/fabispkey/index.html)
    - [David](http://fab.cba.mit.edu/content/archive/projects/fabisp/)


## 1. **Personnal Assignement** -- Making a FabISP

I started to work on my fabISP before making the fabacademy. So I made it in two time.
It appears that I had a short circuit on this board and was inable to find it.

Then I made the fabOptimus. In the process of creating my board, I used a volmetre to be sure of the insulation of each eement before solder the pcb.


## I. **FabISP** *in-system-programmer*

### First, try and faile

As a first job, I had to work on the FabISP. An initial PCB that should allow me to programme futur PCB.
> I used this tutorial to fillfull  the board : [**FabISP, a fab-able in-system programmer**](http://fab.cba.mit.edu/content/archive/projects/fabisp/)

| def | pics |
| --- | --- |
| I started to work on my fabISP before making the fabacademy. So I made it in two time. It appears that I had a short circuit on this board and was inable to find it. Then I made the fabOptimus. In the process of creating my board, I used a volmetre to be sure of the insulation of each eement before solder the pcb.  | ![isp](assets/img/fabIsp/ISP.jpg) |

After different trial and on the advice of my instructor we choose an other board and make it.

I left the outline on the board, thinking it was better this way. But apparently it's not :smile:

### Then succeed

![mounted](assets/img/fabIsp/component.jpg)

> I choose the second blueprint of this otherone named `Fab Optimus` : [**Demystifying the FabISP and Designing the FabOptimus**](http://fab.cba.mit.edu/classes/863.16/doc/tutorials/FabISP/FabISP_Demystified.html)

**Files :**

Board : [<u>**board**</u>](assets/img/fabIsp/FabOptimus2.jpg), [<u>**component**</u>](assets/img/fabIsp/component.jpg), [<u>**trace**</u>](assets/img/fabIsp/FabOptimus_Traces2.jpg)

Files : [<u>**makefile**</u>](assets/img/fabIsp/programmFiles/Makefile), [<u>**main.hex**</u>](assets/img/fabIsp/programmFiles/main.hex), [<u>**main.c**</u>](assets/img/fabIsp/programmFiles/main.c), [<u>**main.elf**</u>](assets/img/fabIsp/programmFiles/main.elf), [<u>**main.o**</u>](assets/img/fabIsp/programmFiles/main.o)


the second blueprint offer to make this ship replacing the 1,5K resistor by a 1k + 0.5k but on site I didn't found it for now so I used a 499 ohm resistor with 1% margin of error (4,99 ohm) wich is great.

| Shape | CorelDraw Settings | Epilog Settings |
| --- | --- | --- |
| ![drawing](assets\img\week5\FabOptimus_Traces.jpg) | ![corel draw settings](assets/img/fabIsp/corel.jpg) | ![drawing](assets/img/fabIsp/paramEpilog.jpg) |
| In corel draw, select your blueprint layer. **Right clic** > <u>*make Haireline*</u>. Select all the white layer and delete them. Group your black layer if needed. | In the object manager you should have two object in the end, configured in `haireline` for the red part, and **filled with color and no outline** |  Print settings for the `Epilog Laser Fusion`. Don't forget to add the thickness of your fabric |
| ![print](assets/img/fabIsp/printedCard.jpg) | ![fabOptimusComponent](assets\img\week5\FabOptimus.jpg ) | ![mounted](assets/img/fabIsp/component.jpg) |



Once you have the Board and download the Makefile programme you need another FabISP already made, link the 2 board by the ISP output and start programming on your linux bash.

```
  USB power
  make clean
  make hex
  (sudo) make fuse (check programmer in Makefile, may need to repeat)
  (sudo) make program
  desolder SJ1 and SJ2
  make IDC ISP cable, connecting header pin 1 to pin 1, check wires
```

And normaly if you have done the job right, it should work correctly

> You can now program your own board freely


```
  _________                                ._.
 /   _____/__ __   ____  ____  ____   _____| |
 \_____  \|  |  \_/ ___\/ ___\/ __ \ /  ___/ |
 /        \  |  /\  \__\  \__\  ___/ \___ \ \|
/_______  /____/  \___  >___  >___  >____  >__
        \/            \/    \/    \/     \/ \/

```

<!-- ## II. **Hello-world Card** *echo hello-world* -->


> I don't have any picture of my fabISP at that state but it's fully fonctionnal
![fabisp fonctionnement](assets\img\week9\helloWire.jpg)

### Mesure your board activity with your fablab equipement

![mesurement activity](assets\img\week5\P1070193.JPG)

I mesured the signal in between MOSI pin and SCK pin.

<iframe width="560" height="315" src="https://www.youtube.com/embed/L_OLB3xKvfY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 2. **Group assignment :** -- Caracterize the specification of your PCB production process

### a. Fablab 503

Entering the fablab 503 was great, seing another space and another configuration.
It was highly equiped for electronics.

![fablab](assets\img\week5\fabLab503.jpg)
Here the process of making PCB is more by laser cutting than milling machin. **We choose, in accord with our local instructor, to make the milling sight on another assignement**.

#### <u>Making the sight</u>

> Machin : Trotek fiber laser 30 watts
> Parametres :
* **Cut** : puissance - 40% / speed - 0.5% / 20khz
* **Engrave** : puissance - 100% / speed - 20% / 20khz

**The Process**

| ![engrave5](assets\img\week5\mireEngrave4.jpg) laser Trotec fusion 75watt |![engrave6](assets\img\week5\mireEngrave5.jpg) gluing the pcb so it won't move | ![engrave7](assets\img\week5\mireEngrave6.jpg) setup focus |
| --- | --- | --- |
| ![focus](assets\img\week5\mireEngrave20.jpg) Setup and test Focus of the laser cut | ![engrave](assets\img\week5\mireEngrave.jpg) Engraving first sight - cut + engrave | ![engrave12](assets\img\week5\mireEngrave11.jpg) Few passes done cut + engrave |
| ![file](assets\img\week5\mireFile2.jpg) | ![file](assets\img\week5\mireFile1.jpg) | ![](assets\img\week5\MireFile.jpg) in the middle of the process we realized that we made a mistacs and suppressed the white shannel si it won't made two passes |
| ![engrave15](assets\img\week5\mireEngrave14.jpg) last passes |![engrave13](assets\img\week5\mireEngrave12.jpg) first sight done | ![engrave16](assets\img\week5\mireEngrave15.jpg) checking the laser |
| ![engrave11](assets\img\week5\mireEngrave10.jpg) second passe of fusion engrave | ![engrave10](assets\img\week5\mireEngrave9.jpg) Last passes | ![engrave4](assets\img\week5\mireEngrave3.jpg) cut holes passes |
| ![engrave1](assets\img\week5\mireEngrave0.jpg) Test of cut through - left 2 passes right 4 passes | ![engrave9](assets\img\week5\mireEngrave8.jpg) holes done |![engrave2](assets\img\week5\mireEngrave1.jpg) Result of the test Cut |
| ![clean](assets\img\week5\mireClean.jpg) | ![clean](assets\img\week5\mireClean2.jpg) | ![clean](assets\img\week5\mireTest.jpg) |
| ![clean](assets\img\week5\mireTest2.jpg) | ![clean](assets\img\week5\mireTest3.jpg) up : !cutx2 +engrave / bottom : engrave |

#### <u>Seeing through microscope</u>

| ![](assets\img\week5\microscopCam0.jpg) | ![](assets\img\week5\microscopCam1.jpg) | ![](assets\img\week5\microscopCam2.jpg) |
| --- | --- | --- |
| ![microscope](assets\img\week5\mireComparaison.jpg) | ![mire](assets\img\week5\mireGravex25.jpg) | ![microscope](assets\img\week5\mireCuteGravex32_2.jpg) |

| ![microscope](assets\img\week5\mireCuteGravex25.jpg) | ![](assets\img\week5\mireCuteGravex32.jpg) |
| --- | --- |
| ![microscope](assets\img\week5\mireGravex32_1.jpg) | ![microscope](assets\img\week5\mireGravex32_2.jpg) |

| ![clean](assets\img\week5\Mire.jpg) | ![clean](assets\img\week5\Mire2.jpg) |
| --- | --- |

### Trying to cut circuits with the vinyl cutter

After the computer controlled week, we tryed to make a fabIsp board with the vinyl cutter and some copper surface. In the time I had, I didn't found the good parametres for this purpuses, but I am sure it's something possible, I'll investigate later on this. Here is what it give
![vinyl cut test](assets\img\week5\copperLayer.jpg)
