#include "TinyWireS.h"                  // on inclus la lib I2C Slave pour ATTiny

#define I2C_SLAVE_ADDR  0x26            // On note l'adresse I2C
// #define LED_PIN        PB3             // On déclare l'adresse de la LED de debug sur la pin 2
// #define BTN_01         PB1             // On déclare l'adresse de la LED de debug sur la pin 2
// #define BTN_02         PB3             // On déclare l'adresse de la LED de debug sur la pin 2
// #define BTN_03         PB4             // On déclare l'adresse de la LED de debug sur la pin 2

byte byteRcvd;

// TinyWireS.send(uint8_t data){          // sends a requested byte to master

void setup(){
  // pinMode(LED_PIN,OUTPUT);              // on n'oublie pas de passer la pin relié a la LED en sortie
  TinyWireS.begin(I2C_SLAVE_ADDR);         // on rejoint le bus avec une adresse d'esclave (similaire a la lib wire)
  // TinyWireS.onRequest(requestEvent);
  byteRcvd = 0;
}

void loop(){
  if (TinyWireS.available()){           // si on revoit quelque chose sur le bus I2C
    // byteRcvd = TinyWireS.send();        // on l'enregistre
    // Blink(LED_PIN);                  // on blink un coup pour montrer que l'on est content
  }
}
