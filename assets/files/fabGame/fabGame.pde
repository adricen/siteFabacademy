import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;


AudioPlayer player;
Minim minim;//audio context

PImage player1, backg, idle;
PImage [] run = new PImage[4];
PImage [] jump = new PImage[4];
int cols, rows, lag, nb, imgSize;

void setup() {
  // Loading music
    minim = new Minim(this);
    player = minim.loadFile("Punk_Boy_2nd_Lvl_theme.mp3", 2048);
    player.play();
    
  //sizes;
    fullScreen();
    frameRate(8);
    imgSize = 200;
    nb = 0;

  // Loading Images
  backg = loadImage("background.png");
  idle = loadImage("stand.png");
  player1 = idle;
  player1.resize(player1.width + imgSize, player1.height + imgSize - 15);
  run[0] = loadImage("run_0.png");
  run[1] = loadImage("run_1.png");
  run[2] = loadImage("run_2.png");
  run[3] = loadImage("run_3.png");

  jump[0] = loadImage("jump_0.png");
  jump[1] = loadImage("jump_1.png");
  jump[2] = loadImage("jump_2.png");
  jump[3] = loadImage("jump_3.png");

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

void draw() {
  // background(backg);
  for (int y=0; y<rows; y++) {
    for (int x=0; x<cols; x++) {
      image(backg, x*backg.width + backg.width - lag, y*backg.height );
      image(backg, x*backg.width - lag, y*backg.height);
      /*
      if (lag<1921) {
       lag++;
       } else {
       lag = 0;
       }
       */
    }
  }
  image(player1, width*0.15, height*0.68);
}

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
          for(int j=0; j<10; j++){
            image(player1, width*0.15, height*0.70-(j*3));
          }          
        } else {
          for(int j=0; j<100; j++){
            image(player1, width*0.15, height*0.70+(j*3));
          }
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
