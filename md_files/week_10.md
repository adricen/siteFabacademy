# Fabacademy : *Week 10* **March 21/2018**

## Assignements :

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

You should now have your two stl file than we are going to mill.
