# Fabacademy : *Week 15* **May 02/2018**

## Assignement - Mechanical design - [schedule](http://academy.cba.mit.edu/classes/mechanical_design/index.html)


# Multiple purpose machin

## Links:
* 3D files : [fabRack.f3d](group2018/files/Adricen/fabRack.f3d)

* Stocks Materials
  * 2 Delrin : 28€ / 500 mm² --> 12mm height
  * 1 DHCP : 26€ / 500 mm² --> 10mm height

---

###  Design thinking :
#### <a name="process"></a> Process
##### <a name="inspi"></a>**Inspiration :**

To begin with this machin we choose to take two machin as reference. The first one is the one from Hector and the second one came from Nadya.

|Nadia's machin</br>[Go to the page](http://mtm.cba.mit.edu/machines/mtm_snap-lock/index.html)| Jacob's machin</br>[Go to the page](http://archive.fabacademy.org/2017/fablabverket/students/100/index.html)| the Chamfer Rail from [fellesverkstedet](https://github.com/fellesverkstedet) repository |
|---|---|---|
|![nadia's machin](http://mtm.cba.mit.edu/machines/mtm_snap-lock/002/mtm_snap-lock.jpg) | ![jacob's machin](http://archive.fabacademy.org/2017/fablabverket/students/100/presentation.png) | ![rack and pinion metal](https://raw.githubusercontent.com/fellesverkstedet/fabricatable-machines/master/chamferrail/img/16detail.JPG) |


##### <a name="design"></a> **Designing :**
The main goal we wanted to succed in making this machin so that anybody who have access to a milling machin could do this. We choose to aboard this design with one main constrain, replace screws by japanese joinery and reduce the necessary supply you need to have for this kind of machine.

![Rack and pignion test](assets/img/week15/design01.png)

I made wood test to validate the rack format and the faisability on our CNC machin.

| ![rack and pinion mill](assets/img/week15/20180503_164839.jpg)  | ![wood rack](assets/img/week15/rackAndPinion.jpg)|
|---|---|

##### <a name="parametric"></a>Parametric design
I know that I would have to make a lot of back and forth to succed to make this machin so I worked on making the joinery parametricaly depending on my stock height and my the smaller mill I have that could go that deep.

After working in fusion on parametric joinery

|![joinery parametre](assets/img/week15/fusion360_parametric.png) | ![joinery param](assets/img/week15/img01.jpg) |
|---|---|
| ![joinery step](assets/img/week15/parametric.jpg) | ![joinery setup](assets/img/week15/fusion360_parametric01.png) |
| ![print emboitement piece](assets/img/week15/20180515_185442.jpg) | ![emboitement piece](assets/img/week15/20180515_185447.jpg)|
| ![first  piece](assets/img/week15/20180514_200025.jpg)|  ![print test emboitement](assets/img/week15/20180515_174213.jpg) |


##### <a name="stock"></a>**Think about the stock and your machin :**
There is two main constrain that you couldn't avoid when doing a machin like that it's your stock, what size and weight is it.

![stock](assets/img/week15/P1070191.JPG)

##### <a name="proto"></a> milling prototyping
In order to know more about rack and pinion, I made a first rack and minino with a junk of wood we had here in the lab.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vIJ1T7nT5JM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Then I wanted to be sure of the joinery I made, so I made a simple milling test on our shopbot.

|![milling test pom](assets/img/week15/20180514_193317.jpg)|![export setup](assets/img/week15/millingSetup.png)|
|---|---|
| ![ramp](assets/img/week15/20180518_181759.jpg) | ![conparatif](assets/img/week15/20180518_183448.jpg) |
| ![pocket](assets/img/week15/20180523_113920.jpg) | ![contour](assets/img/week15/20180523_120044.jpg) |
| ![contour](assets/img/week15/20180523_121440.jpg) | ![contour](assets/img/week15/20180523_134407.jpg) |
| ![contour](assets/img/week15/milling01.jpg) | ![contour](assets/img/week15/milling02.jpg) |
|![contour](assets/img/week15/milling03.jpg) | ![pocket](assets/img/week15/milling04.jpg) |

> On the testing phase, I break a ballnose mill cause I didn't made my pads high enough.
![broken mill](assets/img/week15/20180514_200010.jpg)

##### <a name="proto"></a>3D prototyping
To be sure about the join I used I made some rapid prototyping with the milling machin first, and then with the 3D printer.

|![parametric element](assets/img/week15/fusion360_parametric03.png)| ![parametric element](assets/img/week15/fusion360_parametric04.png)|
|---|---|
|![3D test](assets/img/week15/3dprintTesting.png)|![print test](assets/img/week15/20180515_174205.jpg)|
|![](assets/img/week15/20180601_105711.jpg)|![](assets/img/week15/20180601_105718.jpg)|
|![](assets/img/week15/20180601_141512.jpg)|


##### <a name="montage"></a>Montage

![contour](assets/img/week15/machinRender01.png)

| ![mounted machin](assets/img/week15/machinBack.png) | ![triptic machin](assets/img/week15/machinDetails01.png) | ![pocket](assets/img/week15/machinFront.png) |
|---|---|---|

#### Stock comparison, from the store to the lab

![](assets/img/week15/byingVsMaking.jpg)

In every design process, there is junk generated by your creative process that could be more or less important du to complexity of what you are trying to do. Here is everything we tryed and fale to do this machin.

![dhcp pocket](assets/img/week15/20180528_134348.jpg)

![](assets/img/week15/P1070182.JPG)

And here is the comparison of our product. On the left everything we didn't made ourselves, and on the right, what we made in the fablab, including electronics.

###  Milling :
#### <a name="prepa"></a>Preparation
![prepa cam](assets/img/week15/cam_preparation.jpg)

##### <a name="toolpath"></a>Toolpaths

<iframe width="560" height="315" src="https://www.youtube.com/embed/cokZ9sO8G2w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

##### <a name="parrallele"></a>Parrallel 3D

<!-- ![dhcp](assets/img/week15/20180528_120427.jpg) -->

![surfacing](assets/img/week15/20180529_142600.jpg)

!<iframe width="560" height="315" src="https://www.youtube.com/embed/vg7oynTzaWo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/HOccP-myo4Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/jmVsqawJwN0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/oTZpCow-cvA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

##### <a name="pocket"></a>2D Pocket
| ![pocket](assets/img/week15/20180516_135304.jpg) |![pocket milling](assets/img/week15/20180516_143619.jpg)|
|---|---|
|![pocket milling](assets/img/week15/20180516_143646.jpg)|![rack engraving](assets/img/week15/20180516_145224.jpg)|
|![ramp](assets/img/week15/20180518_170436.jpg)|![pocket](assets/img/week15/20180518_172723.jpg)|
|![pocket](assets/img/week15/20180518_173115.jpg) |

<iframe width="560" height="315" src="https://www.youtube.com/embed/tf47wLOfDjo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/tf47wLOfDjo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

##### <a name="contour"></a>2D contour

<iframe width="560" height="315" src="https://www.youtube.com/embed/7e7pZARDOyQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/jiSu64yq4qI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/rP6CF8rzEeM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/xMkin9PAwR8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/VEJRW8T76eg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<iframe src="http://fab.academany.org/2018/labs/fablabdigiscope/group2018/files/media/DigiMachine_A.mp4"></iframe>
