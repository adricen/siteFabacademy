/*
Controler PCB with ATtinny45
*/

//Pin names and function
//                              ISP   Inputs & Outputs
const byte S1 = 1; // pin6 PB1  MISO  S1
const byte S2 = 3; // pin2 PB3        S2
const byte S3 = 4; // pin3 PB4        S3
const byte SDA= 0; // pin5 PB0  MOSI  SDA
const byte SCL= 2; // pin7 PB2  SCK   SCL
//byte Test_pin = 5; // pin1-PB5-RESET Reserved for ISP Reset

//Variables
//                            
bool SW1=0; //Store read value of push button S1
bool SW2=0; //Store read value of push button S2
bool SW3=0; //Store read value of push button S3



void setup()
{
  pinMode(S1, INPUT);
  pinMode(S2, INPUT);
  pinMode(S3, INPUT);
  pinMode(SDA, OUTPUT);
  pinMode(SCL, OUTPUT);
  digitalWrite(SDA, LOW);
  digitalWrite(SCL, LOW);
}


void loop()
{
  //Read inputs
  
  SW1 = digitalRead(S1);
  SW2 = digitalRead(S2);
  SW3 = digitalRead(S3);


  //Send inputs reading over SDA/SCL
  
  digitalWrite(SCL, HIGH);
  digitalWrite(SDA, SW1);
  delay(1);   //8ms delay
  digitalWrite(SCL, LOW);
  digitalWrite(SDA, LOW);
  delay(1);

  digitalWrite(SCL, HIGH);
  digitalWrite(SDA, SW2);
  delay(1);
  digitalWrite(SCL, LOW);
  digitalWrite(SDA, LOW);
  delay(1);

  digitalWrite(SCL, HIGH);
  digitalWrite(SDA, SW3);
  delay(1);
  digitalWrite(SCL, LOW);
  digitalWrite(SDA, LOW);
  delay(1);

  delay(6); //6x8=48ms delay
      
}



