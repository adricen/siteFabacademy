# Fabacademy : *Week 10* **March 21/2018**

## Assignements - Molding and Casting - [schedule](http://academy.cba.mit.edu/classes/molding_casting/index.html)

group assignment:
   review the safety data sheets for each of your molding and casting materials,
      then make and compare test casts with each of them
individual assignment:
  design a 3D mold around the stock and tooling that you'll be using,
  machine it, and use it to cast parts.

## Let's see

### Safety data :

#### Liquid Plastic

* Extremely toxic. Compose of two componante it is realy not recomandeed to touch it or inhale it during the process.
  * It may be the cause of multyple skin alergic  
  * It may be the cause of multyple breathing alergic reaction
* Exotherme réaction, so be aware of the conatiner you put it on.
* Life pot of 3 minutes, so be quick.

* *If inhale* take the person out for few minutes till she's fine.
* *if caught in the eyes* rince under water till it's fine. If not go to hospital.
* contact a poison centr ifsomething is wrong after contact.

**Use gloves for usage and let it away from childrens**

![warenty](assets\img\week9\warentyè_mesure.png)

#### Ecoflex

* Life pot of 45 minutes.
* Use with vacum machin to have a clear and nice result without bubbles.


#### Silicone


### Machining a mold

#### Test on wood

#### Test on Wax

I wanted to work with my tools on this one, looking for an efficient way to produce rapid prototyp with tools I actually mastered, So I used Maya for the parametric part and Z brush for his Bolean efficient function and his stl exporter. So let's break it down a little bit.

##### 1. Modeling a basic mesh with `Maya`

In order to machining my object, I have to work in the contrains of my material. I have a bloc of wax around 250x75x60 cm, so I choose to exploite the height of 75cm of the bloc to do a simple mold of a stickman to see how it goes.

###### a. Modeling with basic but parametric shapes.

Maya file : [moldCharacter2.mb](assets\files\stickman\moldCharacter.mb)
![maya Viewport result](assets/img/week10/mayaStickman.jpg)

> The goal is to have the good size of bloc so you can work in the rule of your final product. Then I will be free to do anything I want with Zbrush. It will allow me to work directly on the result.

Working in this contraint :

fabric size :
  * 250mm
  * 75mm
  * 60mm

the smalest mill I have is 0.125 in, so I have to keep that in mind. I wont be able to do smaller hole.

> Export in `.obj` to zbrush or use th GoZ plug-in.

###### b. Importing everything in Zbrush

Zbrush file : [mold.ZTL](assets\files\stickman\moldStickman.ZTL)

| Importe the .obj file in Zbrush | ![zbrush importing render](assets/img/week10/zbrushStickman01.jpg) |
| --- | --- |
| Thanks to the live bolean option ( **1** ), I can work separetly on each model within the result. The layer option allow you to select the state of each subtools ( **2** ) | ![zbrush importing render](assets/img/week10/zbrushStickman02.jpg) |
| Once your ok with your model, in subtool palette go to bolean menu and click on `create bolean model` | ![zbrush create bolean model](assets/img/week10/zbrushStickman03.jpg) |
| Select the newly created mesh, it should have a name like `UMesh_`. Go to `ZPlugin > 3D Printing Hub` and select `Export .stl` | ![zbrush create bolean model](assets/img/week10/zbrushStickman04.jpg) |

###### c. Machining your file

`.stl` file : [mold2_export1.ZTL](assets\files\stickman\mold2_export1.stl) / [mold2_export2.ZTL](assets\files\stickman\mold2_export2.stl)

You should now have your two `stl` file than we are going to mill. We work with `Shopbot` and `Vcarve` to make my mold.
![setup](assets\img\week10\setup.jpg)

| using the [feed and rate tool](missing link), Milling the mold using two passes with a end mill 1/16. | ![missing page](missing page) |
| --- | --- |
| `rought passe` and then a `clean passe` | ![gif milling](assets\img\week10\millingProcess.gif) |
| First time I cut my mold I didn't made any *contour*, so I had to make a leveling and do it again with a bigger mill. An 1/8 End-Mill.  | ![leveling](assets\img\week10\leveling.jpg)  |
| Second time I mill my mold and there it is, I have my job done! | ![mold](assets\img\week10\mold.jpg) |

###### d. Molding with **liquid plastic**

| Working with liquid plastic was a bit touchy. It heated more than I expected and had a really short potlife so it brings some issue on my process. | ![mold suite](assets\img\week10\moldSuit.jpg) |
| --- | --- |
| filling the mold wwith product was fine ut bubbles were slow to come out | ![mold suite fill](assets\img\week10\moldSuiteFill.jpg) |
| It gives Bubbles on the foot at the end, no matter how quick I get to fill the mold. | ![mold filled bubble issue](assets\img\week10\moldMistake.jpg) |
| it give a character at the end with short legs. | ![perso plastic](assets\img\week10\perso_plastic.jpg)|
| here is the result | ![hero shot](assets\img\week10\heroShotPlastic.jpg) |

###### e. Molding some Ecoflex

| Starting by fill the mold up with Ecoflex after melting product A and B. | ![mold](assets\img\week10\moldFilledSilicone.jpg) |
| --- | --- |
| Working with ecoflex was fine. I used the vacum machin to pull out bubbles | ![vacum machine](assets\img\week10\vacumMachine.jpg) |
| unmold was fine | ![anime unmold](assets\img\week10\unmold.gif) |
| And here come the stickman | ![stickman](assets\img\week10\stickman.jpg) |

![hero shot](assets\img\week10\heroSilicone.jpg)

> the result is quite good but it may be need a more sticky material to be a real stickman, and the shape is a little bit to large to function correctly on the window. Need improvement in the future.

---
