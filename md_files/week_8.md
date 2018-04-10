# Fabacademy : *Week 8* **March 07/2018**

### Assignement - Make something Big !


## group assignment
  test runout, alignment, speeds, feeds, and toolpaths for your machine
## individual assignment
  make something big - Working on a stool


![workStation](assets\img\week8\cnc00.jpg)

### Let's start by warm it up !

The milling procedure include a warm up routin to prepar material before cutting anithing. It allow us to prevent any issue due to the machinery.

| ![warm](assets\img\week8\warm01.png) | ![warmup](assets\img\week8\warm00.png) |
| --- | --- |

![warm0](assets\img\week8\warm00.jpg)

## Starting by testing

Before beginning my design, I wanted to try diferent assembling part to try, and succed, to reproduce exactly what I designed initialy. We have a Shopbot Desktop 2418 cnc with a surface of 600mm x 450mm x 800mm wich make difficulte to make some big pieces, but nothing is impossible :)

I started directly on VCarve using the vectorial software to design my first pieces.

| ![big00](assets\img\week8\big00.png) | ![big00](assets\img\week8\big01.png) | ![big00](assets\img\week8\big02.jpg) |
| --- | --- | --- |
| ![big00](assets\img\week8\big03.jpg) | ![big00](assets\img\week8\big04.jpg) | ![big00](assets\img\week8\big05.jpg) |
| ![big00](assets\img\week8\big08.jpg) | ![big00](assets\img\week8\big09.jpg) | ![big00](assets\img\week8\big10.jpg) |
| ![big00](assets\img\week8\big11.jpg) | ![big12](assets\img\week8\big10.jpg)|

I managed to make it worked perfectly, so let's scale it up!

### Meeting whit machine boundaries.

We try to scale it up a little bit and struggle with the machin boundaries. It append that the actual limitation is 600mm x ~450mm and < 800mmx2 for the Z axis. So knowing this we choose a block with this size and a mill of 100mm and that's were problem start. The total Z distance is 1600mm and we were at that max with the fabric that was 800mm height and our mill that were also 800mm. In the end we finished with a Z zero at the maximum Z level and as the machin is made to move 0.5in upper from the top of the fabric, our material experiencing difficultie to move and just stay blocked.


![moving Z](assets\img\week8\scale02.jpg)

> Changing the martyr by a thiner plastic layer made the difference and allow us to cut through

## Make something BIG !

Making a full human size object could be a long creative process. So I choose to use a tool that I know well, Maya, at least for the design and creative process. I will reproduss the same object back in fusion once I'll be sure of my shape and design. Let's breakdown the process a little bit.

| ![mayaConcept00](assets\img\week8\concept00.jpg) | ![mayaConcept00](assets\img\week8\concept01.jpg) |
| --- | --- |

### The making

Files I used : [footFile](assets\files\stool\pied03.obj) / [chair](assets\files\stool\assise06.obj)

I used an export format and then redraw some part in V-Carve

I used a down-cut spindle

| ![chair](assets\img\week8\chair00.jpg) | ![chair](assets\img\week8\chair01.jpg) |
| --- | --- |
| ![chair](assets\img\week8\chair03.jpg) | ![chair](assets\img\week8\chair04.jpg) |
| ![chair](assets\img\week8\chair05.jpg) | ![chair](assets\img\week8\chair07.jpg) |
| ![chair](assets\img\week8\chair06.jpg) | ![chair](assets\img\week8\chaire00.jpeg) |
| ![chair](assets\img\week8\chaire01.jpeg) | ![chair](assets\img\week8\chaire02.jpeg) |

### Maya wasn't the good choise

Due to the time I add, I choose to use maya to design my stool because I know it well and can design anything really quickly. I though tha t I could conceptualized it in maya and then pass it to Fusion, using the CAM tool of it. But it didn't happend this way. Maya is a greate tool and offer a lot of possibility, and one of them is parametric modelisation, wich work fine as far as you stay proper and clean and with simple shapes. But you can go really quickly to a non parametric object so you have to be really focus. You don't have a STL output, and you can't export it to fusion. I will let this kind of process for the futur for when I will have time. Fusion would have been more usefull on this exercice... I'll know it next time.
