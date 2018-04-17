import serial #Import Serial Library
from visual import * #Import all the vPython library

filt = 0
eps = 0.1

def readSerial():
   global filt,eps
   #
   # idle routine
   #
   byte2 = 0
   byte3 = 0
   byte4 = 0
   ser.flush()
   while 1:
      #
      # find framing
      #
      byte1 = byte2
      byte2 = byte3
      byte3 = byte4
      byte4 = ord(ser.read())
      if ((byte1 == 1) & (byte2 == 2) & (byte3 == 3) & (byte4 == 4)):
         break
   low = ord(ser.read())
   high = ord(ser.read())
   value = (256*high + low)
   filt = (1-eps)*filt+eps*value
   us = filt/8.0 # 8 MHz counter
   us = value/8.0
   cm = us/58.0
   return cm

#
#  check command line arguments
#
if (len(sys.argv) != 2):
   print "command line: hello.HC-SR04.py serial_port"
   sys.exit()
port = sys.argv[1]
#
# open serial port
#
ser = serial.Serial(port,9600)
ser.setDTR()


measuringRod = cylinder( radius= 2, length=10, color=color.yellow, pos=(-15,0,0))
lengthLabel = label(pos=(0,5,0), text='Target Distance is: ', box=false, height=20)
while (1==1):  #Create a loop that continues to read and display the data
    rate(100)#Tell vpython to run this loop 20 times a second
    distance = readSerial() #Read the distance
    distance = round(distance, 2)
    print distance #Print the measurement to confirm things are working
    measuringRod.length=distance #Change the length of your measuring rod to your last measurement
    myLabel= 'Target Distance is: ' + str(distance) #Create label by appending string myData to string
    lengthLabel.text = myLabel #display updated myLabel on your graphic
