/*
Base PCB with ATtinny44
*/

//Pin names and function
//                  
const byte RX = 0; // pin13 PA0 Tx Serial
const byte TX = 1; // pin12 PA1 Rx Serial

const byte SCL= 4; // pin9  PA4  SCL
const byte SDA= 6; // pin7  PA6  MOSI

const byte LED = 2; //pin11 PA2



//Variables
//
bool d=0; //store d-data and k-clock of custom com pipe
bool k=0;                          
bool SW1=0; //Store read value of push button S1
bool SW2=0; //Store read value of push button S2
bool SW3=0; //Store read value of push button S3
bool PSW1=0; //Store printed value of push button S1
bool PSW2=0; //Store printed value of push button S2
bool PSW3=0; //Store printed value of push button S3


#include <SoftwareSerial.h> //Tuto here: https://www.hackster.io/porrey/easy-serial-on-the-attiny-2676e6
//#define RX    0 // pin12 PA1 Rx Serial
//#define TX    1 // pin13 PA0 Tx Serial
SoftwareSerial Serial(RX, TX);



void setup()
{
  pinMode(SCL, INPUT);
  pinMode(SDA, INPUT);
  
  pinMode(LED, OUTPUT);
  digitalWrite(LED, LOW);

  digitalWrite(LED, HIGH);
  delay(1000); //1s delay
  digitalWrite(LED, LOW);
  delay(1000); //1s delay

  Serial.begin(9600);
  delay(10);
  Serial.println("Serial is awake at 9600");

  //Find beginning of transmission
  k=0;
  while(k==0){
    k=digitalRead(SCL);}
  delay(40);//data is sent at 2x48ms period
}


void loop()
{

  //Custom com Reading
  
  digitalWrite(LED, HIGH);

//  //Find beginning of transmission
//  k=0;
//  while(k==0){
//    k=digitalRead(SCL);}
//  digitalWrite(SDA, HIGH);
//  delay(40);//data is sent at 2x48ms period
//  digitalWrite(SDA, LOW);
//  digitalWrite(LED, LOW);
  
  k=0;
  while(k==0){
    k=digitalRead(SCL);}
  delay(1);
  SW1=digitalRead(SDA);
  delay(8);

  k=0;
  while(k==0){
    k=digitalRead(SCL);}
  delay(1);
  SW2=digitalRead(SDA);
  delay(8);

  k=0;
  while(k==0){
    k=digitalRead(SCL);}
  delay(1);
  SW3=digitalRead(SDA);
  delay(8);

  digitalWrite(LED, LOW);

  
  //Serial Print
  if ((PSW1!=SW1)|(PSW2!=SW2)|(PSW3!=SW3)) //print only if sth changed
  {
    // Serial.println(SW1);
    // Serial.println(SW2);
    // Serial.println(SW3);
    if(SW1 == 0){
      Serial.print("1");
    } 
    if(SW2 == 0){
      Serial.print("2");
      }
    if(SW3 == 0){
      Serial.print("3");
      }
      /*
    // Serial.print("SW1=");
    Serial.print(SW1,BIN);
    Serial.print(",");
    PSW1=SW1;
    // Serial.print("\tSW2=");
    Serial.print(SW2,BIN);
    Serial.print(",");
    PSW2=SW2;
    // Serial.print("\tSW3=");
    Serial.println(SW3  ,BIN);
    PSW3=SW3;
    */
  }
  //delay(10); //10ms delay

      
}



