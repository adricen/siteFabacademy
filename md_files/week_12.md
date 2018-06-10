# Fabacademy : *Week 12* **April 11/2018**

## assignment - Output devices - [schedule](http://academy.cba.mit.edu/classes/output_devices/index.html)

### individual assignment:

  add an output device to a microcontroller board you've designed,
     and program it to do something

### group assignment:

  measure the power consumption of an output device

## working

> Files links : [hello-speaker.sch](assets\files\Sound\hello.speaker.45.sch) / [hello-speaker.brd](assets\files\Sound\speakerSCH.brd) / [hello-speaker.png](assets\img\week12\speaker.phone.png)


For this assignement I choose to work on the speaker board, because I am probably going to need something like that.
![hello speaker schematic](assets\img\week12\hello-speaker-schematic.png)
![hello speaker pcb](assets\img\week12\hello-speaker-pcb.png)

![hello speaker pcb](assets\img\week12\hello-speaker-laserr-cut.jpg)
![hello speaker pcb](assets\img\week12\hello-speaker-engrave.jpg)

> I had a problem that I didn't detect during the engraving of the first PCB that made a lot of short circuit, for security I had engrave the hello-distance from the fabacademy. I was able to solder it and make it work.

| ![helloSpeak](assets\img\week12\hellospeaker1.jpg) | ![helloSpeak sodering](assets\img\week12\helloSpeaker.jpg) |
| --- | --- |
| ![helloSpeak](assets\img\week12\helloSpeakBranch.jpg) | ![hellospeak2](assets\img\week12\helloSpeakBranch2.jpg) |
| I begin to be used to fuse board. So, as usual, to make the file, I used the command line `make -f hello.speaker.45.make` and then `make -f hello.speaker.45.make program-usbtiny` | ![helloSpeak](assets\img\week12\speakerProgram.png) |

and ther it is, it seams to work fine. I managed to make it run his program. The next step is to add this speaker to the `step reponce` board.

<iframe width="560" height="315" src="https://www.youtube.com/embed/qMsBnkHDAOY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
