# Fabacademy : *Week 9* **March 14/2018**

## assignment
* individual assignment:
  * read a microcontroller data sheet
  * program your board to do something,
    * with as many different programming languages
    * and programming environments as possible
* group assignment:
  * experiment with other architectures

## Work out

### Read a microcontroler data sheet : ATtiny44A

| Feature | Explaination |
| --- | --- |
| VCC | Supply Voltage / + |
| GND | Ground Voltage / - |
| Port B | Port B Have 4 bit analogic Input/Output on the ITtiny44A. PB3 = RESET. It also have specific possibility. |
| RESET | The reset Input allow you to  |
|  |  |

### Echo Helloboard !

Files : [hello.ftdi.44.echo.c](assets\files\helloboard\echoHello\hello.ftdi.44.echo.c) / [hello.ftdi.44.echo.c.make](assets\files\helloboard\echoHello\hello.ftdi.44.echo.c.make)

We are gonna make contact with our helloboard. You can download the file provided by neil gershenfeld on the fabacademy site here :


![starting](assets\img\week9\20180316_150430.jpg)

To connect to your board and read your data, you need to download putty if you don't have it. In your linux bash, tap this :

```

sudo apt-get install putty

```

| plug your board in and be carefull to the GND pin of your ftdi wire. It appears that the ISP connector send current so you don't necessarly need to plug your ftdi to see it work. | ![wirePics](assets\img\week9\helloWire.jpg) |
| --- | --- |
| navigate to the folder where you have your files and start by make file | ![helloboard](assets\img\week9\helloScreen.png) |
| To program your board, you need to preprocess your files. the `-f` option is to indicate file to the make process. Inside this the path to your C file is allrady writen | `make -f hello.ftdi.44.echo.c.make |
| two new file in `.hex` and `.out` have been done from the `.c` file, you can now send it to your board using `program-usbtiny` | `make -f hello.ftdi.44.echo.c.make program-usbtiny |
| Now connect your board to Putty | ![putty](assets\img\week9\Screenshot from 2018-03-19 20-34-28.png) |
| victory is yours, you can now write to your board that respond with a 25 lenght string taxt that you wrote. | ![helloPutty](assets\img\week9\helloPutty.jpg) |

### Blink Helloboard !

Files : [hello.ftdi.44.blink.c](assets\files\helloboard\blinkHello\hello.ftdi.44.blink.c) / [hello.ftdi.44.blink.c.make](assets\files\helloboard\blinkHello\hello.ftdi.44.blink.c.make)

Let's play with this led ! I found a basic C file for the blink on a past student of the fabacademy - [Vincent Dupuis](http://archive.fabacademy.org/archives/2016/fablabdigiscope/students/456/) I had to change some button du to the fact that my board is a little bit different. My button broche is on the PA3 and not on the PB2 so I maid the correction on it. Let's see how it goes.


| Connecting your board the same | ![BlinkyBoard](assets\img\week9\20180319_201143.jpg) |
| --- | --- |
| make file | `make -f hello.ftdi.44.blink.c.make` |
| then push it on your board | `make -f hello.ftdi.44.blink.c.make program-usbtiny` |
| if everything work correctly you should have your led blinking | ![trih](assets\img\week9\20180319_201219.jpg) |
