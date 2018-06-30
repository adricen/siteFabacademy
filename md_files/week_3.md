# Fabacademy : *Week 3* - **January 31/2018**


## Assignement - computer-aided design - [Schedule](http://academy.cba.mit.edu/classes/computer_design/index.html)

> * Model (raster, vector, 2D, 3D, render, animate, simulate, ...) a possible final project
post it on your class page

The goal is to make a prototype of my final project, wich is there : [Final Project Developpement](assignement.html?page=finalProject)

Let's work on the entire production chain and explore some soft I don't know. As a 3D artist, I am already used to Maya, 3Dsmax, Zbrush, Photoshop

## Model and raster a potentiel Final project

| | Description |
|---|---|
| **Final project V02** | Beatmachin doorbell |
| **What will it do?** | Allow users to composed and make a doorbell music, save it, play the next time you come, share it with friends around social networks |
| **Who's done what beforehand?** | links: [beatmachin music possibility](https://www.careersinmusic.com/beat-maker)</br>![ beatmachine music ](https://cdn.careersinmusic.com/wp-content/uploads/2017/07/beat-maker-boxes.jpg) |
| **What will you design?** | A beatmachin pad and a sound buffer. All the embed electronics |
| **What materials and components will be used?** | Silicon for buttons, machinning for beatmachin box. |
| **How much will they cost?** | 100€ for the electronics and use of machines |
| **What parts and systems will be made?** | The device, the electronic response, the interface |
| **What processes will be used?** | 3D printing for prototyping</br>Milling machin for molding the buttons</br>Milling machin for box of beatacin |
| **What questions need to be answered?** | How does bluetooth work?</br> How to translate accelerometre signale to something useable?</br> How to Embed electronic with 3D printed device?</br> How to programme with Python? |
|**How to use it?**| It have to be attached to the side of the door. People come by, compose a ringtone and then choose to save it, share it or just play it. |
| **What's it look?** | Made with Maya ![sketch](assets\img\finalProject\beatboxMachin.jpg) |


<!-- [xnview](#xnview-by-softtonic-) / [Gimp 2.0](#gimp-2-) / [Fusion360](#fusion-360-free-autodesk-software-for-teacher-and-student) / [Solidworks](#solidworks) / [Antimony](#antimony) / [Antimony with Maya](#antimony-with-maya-and-other-soft) / [Rhino et Grasshoper](rinho-3d-and-grasshoper) -->

### Fusion 360 - free autodesk software for teacher and student

files : [base.stl](assets\files\final_project\base.stl) / [clapet.stl](assets\files\final_project\clapet.stl)

Fusion 360 have the adventage to be free for uses and seams to offert really good modelisation and design features.

I started to model differents project around fusion. I tryed to think about a final project, centered on electronic design to make a futur open source console.
![console box](assets\img\week3\main_box.jpg) ![](assets\img\week3\finalProjectPackshot.jpg)

#### Experienced the parametric designed with fusion 360

| Using sketch on different surfaces ![sketch parametre](assets\img\week3\parameters.jpg) | Using "components" in fusion allow you to work on multiple component will you work only on one. ![working in fusion](assets\img\week3\parametric_design_00.jpg) |
|---|---|
| ![working in fusion](assets\img\week3\parametric_design_01.jpg) | ![working in fusion](assets\img\week3\parametric_design_02.jpg) |
| ![working in fusion](assets\img\week3\parametric_design_03.jpg) | ![working in fusion](assets\img\week3\parametric_design_04.jpg) |
| ![working in fusion](assets\img\week3\parametric_design_05.jpg) | ![working in fusion](assets\img\week3\parametric_design_06.jpg) |
| ![working in fusion](assets\img\week3\parametric_design_07.jpg) | ![working in fusion](assets\img\week3\parametric_design_08.jpg) |
| ![working in fusion](assets\img\week3\parametric_design_09.jpg) | ![working in fusion](assets\img\week3\parametric_design_10.jpg) |
| ![working in fusion](assets\img\week3\parametric_design_11.jpg) | ![working in fusion](assets\img\week3\parametric_design_12.jpg) |
| ![working in fusion](assets\img\week3\parametric_design_13.jpg) | ![working in fusion](assets\img\week3\parametric_design_14.jpg) |

> I used fusion later for a middle project : [machin design](http://fab.academany.org/2018/labs/fablabdigiscope/group2018/)
![machin design](http://fab.academany.org/2018/labs/fablabdigiscope/group2018/files/Adricen/img/machinRender01.jpg)

### Antimony

I finally found a way to install Antimony on windows 10. Let's jump and detail the process a little bit. From now you are from 4 step to run it and have fun. but first...

#### a. Install the Ubuntu environment on you windows 10 --> [source here](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/)

![outside_pics_01](assets\img\week3\ubuntuPrez.png)
---
| <center><i class="fa fa-500px"></i></center> | <center><i class="fa fa-book"></i></center> |
| --- | --- |
| **1. Activate Windows developper mode** | ![outside_pics_02](assets\img\week3\updateandsecurity.png) |
| **2. Open Control Panel > Programs and activate `windows Subsystem for linux(Beta)`** |![ubuntu00](assets\img\week2\ubuntuBash00.jpg) |
| **3. Open Bash** | ![outside_pics_02](assets\img\week3\openBash.png) |
| **4. Update to Ubuntu Bash** | ![ubuntu02](assets\img\week3\bashshellinstall.png) |
| **5. Run Install** | `lxrun /install /y` |
| **6. Open Ubuntu Bash and tap `sudo apt-get upgrade`** | ![ubuntu03](assets\img\week2\ubuntuBash02.jpg) |


> Be Carefull ! This console seams to work fine so far but have a little defect. `You can't see your USB output`, `ls usb won't work` because for now they are not integrate t this environment so you won't be able to programme your favorites Atmel chips... So sad. Windows user were so cloth to have a fully ubuntu core environment !


#### b. Configure your root account and connect to it --> [source here](https://askubuntu.com/questions/772050/reset-the-password-in-linux-bash-in-windows)

You have two methods, wether you connect directly to your root account with your administrator user account like this :

```unix

sudo su

```

or you configure your root user account password that will allow to switch to your root account just tapping `su`. That's what I did and it work fine for me.

* a. Run bashand make a note of your Linux username (this need not match your Windows username), see How can I find out my user name?
* b. In Windows admin command prompt (Super+X, A) change the default user to root:
```
ubuntu config --default-user root
```

* c. Now Bash on Ubuntu on Windows logs you in as root without asking password
* d. Use passwd command in Bash to change the user password (the user whose password you want to reset):
```
passwd your_username
```

* e. Change the default user back to your normal user in Windows command prompt
```
ubuntu config --default-user  your_username
```

Once it's done, you should be able to connect to your `root` account, so do it!


#### c. install an Xming server --> [install here](https://sourceforge.net/projects/xming/)

You will need a display emulator to run the display of your application. Xming work fine so far so just install it and run it, default parametres are fine.

#### d. The last part ! Install Antimony --> [instructions](https://github.com/mkeeter/antimony/blob/master/BUILDING.md#linux)

You can now run the install procedure describe on the antimony github page, just be sure to be connected as `root` user and to do an `apt-get update`  just after you get dependencies. before running the application you have to had an export paramettre this way : `export DISPLAY=:0`

```
# Install dependencies
sudo apt install git build-essential libpng-dev python3-dev libboost-all-dev  libgl1-mesa-dev lemon flex qt5-default ninja-build cmake

# update dependencies
apt-get update

# Clone the repo
git clone https://github.com/mkeeter/antimony
cd antimony

# Make a build folder
mkdir build
cd build

# Build and launch the application
cmake -GNinja ..
ninja
export DISPLAY=:0
./app/antimony
```
And that's it, you can now run antimony directly into windows, without having to switch to a double linux boot...

You can get the files here ( rightClic + Save Target As ) : [fablab Logo antimony Scene](assets\files\antimony\fablabLogoScene.sb) / [fablabLogo.stl](assets\files\antimony\fablabLogo.stl)

![antimony](assets\img\week3\Antimony.jpg)

#### e. bonus - finding your file through windows

For now, I couldn't find home folder directories in windows, so let's reverse the process a little bit.
Instead of finding files inside windows, let's take files inside Ubuntu and copy them into windows directory.

My file is called fabLogo.stl so, once I navigate to my file in Ubuntu bash :

```
// We are gonna use cp command and /mnt for windows file directory
// cp [file name] [copy location]

cp fabLogo.stl /mnt/c/Users/[your user name]/Documents/

// Presse enter and that's it! Your file is now available in Documents directory or wherever you need.
```
<!--
### Gimp 2 :

Last Time I opened Gimp, it was like time traveling. The interface was look like the one of photoshop 6... Since the ux design and interface standart hagve moved on to a greater level and became central to app developpement.

So first impression is pretty cool regarding the progress they've done so far.

![openingGimp](assets\img\week3\gimpOpen.jpg) -->

#### f. Futur developpements :

Antimony give you an outpuy file that could be exploited via other software that use python as developpement bae language. I would like to be able to use something like that into a context like maya software wich is limited when it goes to parametric design if you want to have an insite into file history.

### Solidworks

#### From Dust to Rust

I installed my version of Solidwork, unpacking it with my personnal key that I fresshly recive, thank's to the Fabacademy. First Time I open this soft, First look at it, I can say that it doesn't look like any interface I know.

![interface](assets\img\week3\solid00.jpg)

Let's face it... I am not gonna became a fabulous user of this soft just at look at the interface and test radom button, there is too many of them and too many menus. So Let's try the "for beginners" tutoriel.

| state 01 | state 02 |
| --- | --- |
| ![tuto01](assets\img\week3\solid01.jpg) | ![tuto02](assets\img\week3\solid02.jpg) |
| ![tutoSolid3](assets\img\week3\solid03.jpg)| ![solid4](assets\img\week3\solid04.jpg)|
![solidResulta](assets\img\week3\PlateauDePression_04.JPG)


<!-- ### Antimony with maya

This is more one of a futur things I will try to do. I am a maya user for almost 15 years now, and the core of this soft is made with Python. It should be possible to make an integration of the shapes generated by antimony inside maya at minima, the must would be a full integration of it but let's be pragmatic and go step by step...

### Rinho 3d and Grasshoper -->
