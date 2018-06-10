# Fabacademy : *Week 15* **May 02/2018**

## Assignement - Mechanical design - [schedule](http://academy.cba.mit.edu/classes/mechanical_design/index.html)

<iframe src="http://fab.academany.org/2018/labs/fablabdigiscope/group2018/files/media/DigiMachine_A.mp4"></iframe>

# Multiple purpose machin

## Links:
* 3D files
( introduce a link from gitlab )

* Stocks Materials
  * 2 Delrin : 28€ / 500 mm² --> 12mm height
  * 1 DHCP : 26€ / 500 mm² --> 10mm height

* Electronics

###  Parametric 3D Model :
* [Process](#process)
  * [Inspiration](#inspi)
  * [Design Process](#design)
  * [Think about the stock](#stock)
  * [3D prototyping](#proto)
  * [Parametric design](#parametric)
* [Montage](#montage)
  * animated montage + video

###  Milling On the Shopbot OSB :
* [Preparation](#prepa)
  * [Create stock from reality](#stockCrea)
  * [Place elements](#places)
* [Setup](#setup)
  * [Stock](#stock)
  * [Orientation](#orientation)
  * [Zero point](#zero)
* [Tools](#tools)
  * [fablab speed and feeds calculators](#speedFeed)
  * [Setup your tools](#setTools)
* [Toolpaths](#toolpath)
  * [Parrallel 3D](#parrallele)
  * [Milling](#mill)
  * [2D Pocket](#pocket)
  * [2D contour](#contour)

### Machin Design


---

###  Design thinking :
#### <a name="process"></a> Process
##### <a name="inspi"></a>**Inspiration :**

To begin with this machin we choose to take two machin as reference. The first one is the one from Hector and the second one came from Nadya. ![put pictures]()  

##### <a name="design"></a> **Designing :**
The main goal we wanted to succed in making this machin so that anybody who have access to a milling machin could do this.

##### <a name="stock"></a>**Think about the stock and your machin :**
There is two main constrain that you couldn't avoid when doing a machin like that it's your stack, what size and weight is it.

##### <a name="proto"></a>milling prototyping
In order to know more about rack and minion, I made a first rack and minino with a junk of wood we had here in the lab.

Then I wanted to be sure of the joinery I made, so I made a simple milling test on our shopbot.

##### <a name="proto"></a>3D prototyping
To be sure about the join I used I made some rapid prototyping with the milling machin first, and then with the 3D printer.

##### <a name="parametric"></a>Parametric design
I know that I would have to make a lot of back and forth to succed to make this machin so I worked on making the joinery parametricaly depending on my stock height and my the smaller mill I have that could go that deep.

##### <a name="montage"></a>Montage
  ( animated montage + video )

###  Milling :
#### <a name="prepa"></a>Preparation
##### <a name="stockCrea"></a>Create stock from reality

Start by making a virtual reproducion of your stock. The Pom / Delerain we have make 500mmx501mm

##### <a name="places"></a>Place elements
##### <a name="setup"></a>Setup
##### <a name="stock"></a>Stock
##### <a name="orientation"></a>Orientation
##### <a name="zero"></a>Zero point
##### <a name="tools"></a>Tools
##### <a nae="speedFeed"></a>fablab speed and feeds calculators
##### <a name="setTools"></a>Setup your tools
##### <a name="toolpath"></a>Toolpaths
##### <a name="parrallele"></a>Parrallel 3D
##### <a name="mill"></a>Milling
##### <a name="pocket"></a>2D Pocket
##### <a name="contour"></a>2D contour

#### Mounting
* [Making the holes for ( les visses )](#holes)


Back in october 2017, the first session of Fabricademy started and the fablab digiscope was one of it's node. One of it's student, [Julie Taris](http://wiki.textile-academy.org/fabricademy2017/students/julie.taris/start) , started to work on a new and inovative subject, **soft robotic**. Through her experimentation, I saw an all new technologie rising from silicon and heat sealed vinyl.

Looking for solution to complete her project she found some really creative process of soft Robots made by a team of the MIT through the project [Aeromorph](https://tangible.media.mit.edu/project/aeromorph/). A machin is used to heat and seal material around a precise design wich, once inflated, will take another shape and could even be animated blowing some air or liquid passing through pockets. In their process, they blue some air.

### Design thinking

Starting machin design is a good oportunity to mobilized and concretise all the knowledge learn making the fabacademy. Through design thinking I'll try to answer serveral question about my futur machin, what's the purpose and how to do it. Let's break it down and answering some few questions :

#### What does the machin do ?

This machin leads a soldering iron mechanicaly under vinyl to creat some pattern to drive air through a path a be able to mold it's shape.

#### What size does it have ?

We would like to be able to work on some big area. In the fablab digicscope we have some big facom table wich would be perfect as a support for this futur machin. But thinking adaptability, we are gona think about this kind of support but about something that could be adaptable for any table or surfaces.


#### what kind of movements ?

We are speaking about a soldering iron that goes under some vinyl material, so it must be able to move X and Y and be pressed, or not, on the fabric. So it's X, Y and a false Z.

#### What kind of result ?

It must provide some fabric sealed, werable or not, strong enough to support strong air inside. The patern must come from a numeric format and

#### Etat de l'art ?

Further technics and exploration are on the run, so I'll focus on machins and things that I could use as reference to reverse ingenering and design this futur machin.

Here is a list of interesting project that I will use as inspiration and reference.

* [Aeromorph](https://tangible.media.mit.edu/project/aeromorph/)
* [Digital wax printer](https://vimeo.com/255549870?ref=fb-share&1)
  * [wax printer repo](https://github.com/eumorpurgo/TextileDrawingMachine)
* [Jake read's rack and pinion](http://fab.cba.mit.edu/classes/4.140/CBA/people/jakeread/index.html)
* [](https://github.com/fellesverkstedet/fabricatable-machines)

### Testing for thinking

I start to mill a simple rack and pinion to better visualize what it should look like and how it will work together.

![rack and pinion](assets\img\week15\rackAndPinion.jpg)

Then starting to design. My first objective was to adapte the machinery to the size of the Facom table we have here at **Fabaab Digiscope**.
So I tryed to adapte a rack ad pinion design from .. and made a quick sketch => ![machin design](assets\img\week15\design01.png)

I wasn't satisfied by the working surface and the quantity of material I would need to do it. I changed and start to work with another model, I choose to work from the basis of Jacob
