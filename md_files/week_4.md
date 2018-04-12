# Fabacademy : *Week 4* - **February 07/2018**

## Assignement - computer-controlled cutting

> * I. Group assignment:
      characterize your lasercutter
      making test part(s) that vary cutting settings and dimensions
   II. Individual assignment:
      cut something on the vinylcutter
      design, make, and document a parametric press-fit construction kit,
         accounting for the lasercutter kerf,
         which can be assembled in multiple ways

## I. Design, make and document a parametric press-fit construction kit

### <u>1. Defining a parametric shape</u>

Starting by that question, what could look like a parametric shape, fabric or building. Fastest way I know *ask google*.
I had interessting point of view from my local instructor that pushes me always further. The last queston I had was, *how do you make it in 3D ?* and I finaly found the answer.

### <u>2. Fusion 360</u>

#### a. First Try

> <u>**Methods :**</u> Using reverse ingenering on the first `image`, I quickly made this design. To make it parametric and being able to bind elements with eachother, I am gona need of further tools.
* **Sketch dimension** => tap `D` or `sketch`>`sketch dimension`
* **Change parametres** => `Modify`>`change parametres`

With this simple two tools it's should be possible to construct a parametric design material.

| Starting By a simple shape. ![starting](assets\img\Week4\fusion360_00.jpg) | Then Trying to bind some edges together ![starting](assets\img\Week4\fusion360_01.jpg) |
| --- | --- |



I tryed to understand the concept of binding element together and how I could used it to my adventage.

#### b. A second test

> After few try on it, it came clear that I won't go far with my first sketch. I worked on a econd one, thinking symetry.

| Seing things from symetry point of view. ![starting](assets\img\Week4\fusion360_02.jpg) | The model work fine but something is wrong... ![starting](assets\img\Week4\fusion360_03.jpg) |
|--- | --- |

**I cant't editing it anymore** cause I had set the pivot point on the wrong side. Scaling it won't go well.

#### c. A last try



##### I finally made it through! I have a parametric design fabrics that adapte its shape to the weight of my material.

Everything is index on the height fabric so it adapte it shape to the height you configure. It allow me to deal with  press-fit property whatever the height of the fabric is.

| Shape 01 | Shape 02 |
| --- | --- |
| ![starting](assets\img\Week4\fusion360_06.jpg) | ![starting](assets\img\Week4\fusion360_05.jpg)  |
| ![fusion_6](assets\img\Week4\parametricDesign.png) | ![parametric end](assets\img\Week4\parametricDesign3.jpg) |

### <u>3. Then cutting some object and see how they work</u>

My paramettres for the cutter, directly came from the laser documentation of the Epilogue Fusion 75 watts.

Speed 20 / Power 100 / Frequencie 50


#### The cutting part :

##### Laser cutter security

Laser cuttng is a really efficient process, but as the machin is expensive, it come with security warant.

The CO2 laser is made to cut through wood or plastics, but you really need to be aware of the composition of your fabric because it could become really dangerous if you don't pay attention. It could reject chlore, fluor ou autres gaz/vapeurs toxiques.

**It can't go through metal** or you laser will come boack through lens and burn itself up.

Fiber laser is made to engrave or cut thin layer of soft metal like copper or alluminium.

Every user must stay next to the laser cutter until the end of the process to be sure everything goes fine and don't burn the machin.


#### Shape and forms

need parametres
![laser](assets/img/Week4/Parametric_wood_06.jpg)

| ![test02](assets\img\Week4\Parametric_wood_14.jpg) | ![test03](assets\img\Week4\Parametric_wood_15.jpg) | ![test04](assets\img\Week4\Parametric_wood_13.jpg) |
| --- | --- | --- |
| ![test05](assets\img\Week4\Parametric_wood_02.jpg) | ![test10](assets\img\Week4\Parametric_wood_01.jpg) | ![test06](assets\img\Week4\Parametric_wood_03.jpg) |
| ![test08](assets\img\Week4\Parametric_wood_05.jpg) | ![test09](assets\img\Week4\Parametric_wood_04.jpg) | ![test14](assets\img\Week4\Parametric_wood_16.jpg) |
|![test07](assets\img\Week4\Parametric_wood_07.jpg) | ![test11](assets\img\Week4\Parametric_wood_08.jpg) | ![test12](assets\img\Week4\Parametric_wood_09.jpg) |
| ![test13](assets\img\Week4\Parametric_wood_10.jpg) | ![test14](assets\img\Week4\Parametric_wood_11.jpg) | ![test15](assets\img\Week4\Parametric_wood_12.jpg) |


## II. Cut something on the vinylcutter.

<!-- Model of the vinyl cutter Knkmax hair  ![pics]()
Miss - pics of the software -->

Make something for your computer... hmm...
In order to use the maximum of color, I wanted to try to make a cool illustration of Hellboy. Mignola have a perfect sharp black and white style that will fit perfectly for the vinyl cutter.

 | Sketch including color we have on site ![goal](assets\img\Week4\photoshop screenshot.png) | File 01 - background ![svg](assets\img\Week4\vinyl_cut.svg) |
| --- | --- |
| File 02 - background  ![liz](assets\img\Week4\sap3.jpg) | File 03 - background ![a rajouter](assets\img\Week4\sapienShirt.jpg) |
| Parametre of the vinylcutter - parameters are speed 15 and force 63  | ![missed parametres](assets\img\Week4\vinyl_cut4.jpg) |
| Failure. I didn't let enougth roll on ![asee](assets\img\Week4\vinyl_cut5.jpg) | ![redsult](assets\img\Week4\vinyl_cut6.jpg) |
| I finally made it through, adding further layer, selecting the sapien character | ![black result](assets\img\Week4\vinyl_cut7.jpg) |
| ![result](assets\img\Week4\vinyl_cutref06.jpg) | ![result all](assets\img\Week4\finalVinylCutter.jpg) |
