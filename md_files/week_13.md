# Fabacademy : *Week 13* **April 11/2018**

## Assignement - Interface and application programming - [schedule](http://academy.cba.mit.edu/classes/interface_application_programming/index.html)

Making a PCB with using input distance, oone input button and two speaker output

files : [fabGAMES files](assets\files\fabGame) (right clic + save target)

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
