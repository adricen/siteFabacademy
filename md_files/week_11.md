# Fabacademy : *Week 11* **April 04/2018**

## Assignement

## result

It's time to work fully on my final project, so I choose two input device for now, the first one is the inductance table and the seconde one is the distance detector. The objective is to make a fully fonctionnal beatbox machin at the end using buttons and distance sonar to detect if someone is here.

### The sonar distance

For now I just took the initial board and craft them directly to see how they work.

| engraving | ![engrave1](assets\img\week11\engrave01.jpg) |
| --- | --- |
| piece collection | ![pcb](assets\img\week11\pcb_.jpg) |
| started the mounting | ![pcb](assets\img\week11\distancePCB01.jpg) |
| close up | ![pcb](assets\img\week11\distancePCB02.jpg) |
| final with distance detector | ![mount](assets\img\week11\distance pcb mount.jpg) |
| program the board | ![programming](assets\img\week11\distance program.png) |

Fuse is ok, I have the program that is fully loaded but now I am facing a probleme. I never run any python programm so before to go further I need to work on this. Looking for solution on internet I came across [this tutorial ](https://www.pythoncentral.io/execute-python-script-file-shell/) quite clear about what I need to do. Since I installed it previously to make Antimony work I don't need to install it again, if you haven't done that before, connect to your root account in your bash and type

```
apt-get install python

apt-get update

```

If I get it right in this thread, you have to cal python and bind your file in the call. something like

```
python myFile.py

```

for now I get this, I didn't change anything in the `.py` file so far, so I finaly get an internal file error message.

| ![error 1](assets\img\week11\goPython00.jpg) | ![error 2](assets\img\week11\goPython01.jpg) |
| --- | --- |

Nothing for now, I still missing a library, and thanks to [this thread](https://stackoverflow.com/questions/33267070/no-module-named-serial) I should get it right. The `serial` is avalaible in the package manager for python named `pip` for Python Package Index. Let's get this package manager.

```
sudo apt-get install python-pip

```

> I had a problem with the serial library since I installed bot `serial` and `pySerial`. Apparently the program need to load a class that is in the pySerial library and the other one, serial, is confusing python so, after uninstall the `serial` library with `pip uninstall serial`, load Xming to emulate display of ubuntu, then I get a first display of something

![python first success](assets\img\week11\goPython02.jpg)

For now, *the display freeze* and have only display one parametres so it seems that I have a communication probleme between my computer and my board. I am assuming that it is probably a bad bauderate configuration.
