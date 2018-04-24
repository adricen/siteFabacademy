# Fabacademy : *Week 13* **April 11/2018**

## Interface programming

Making a PCB with using input distance, oone input button and two speaker output

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
