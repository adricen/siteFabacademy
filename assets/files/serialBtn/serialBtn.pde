import processing.serial.*;

Serial myPort; // Create object from Serial class
String val;    // Data received from the serial port
String[] list = {" ", " "};

void setup()

{
  String portName = Serial.list()[0];
  myPort = new Serial( this, portName, 9600 );
  myPort.clear();
  
  //val = myPort.readStringUntil(lf);
  //val = null;
}

void draw()
{
  if ( myPort.available() > 0) {          // If data is available,
    
    val = myPort.readStringUntil('\n');   // read it and store it in val

    if( val != null) {
      print(val);
    }
  } 
}
