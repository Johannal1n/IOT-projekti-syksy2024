#include <WiFiNINA.h>
/*

*/

void setup() {
  
  int status = WL_IDLE_STATUS;             // the Wi-Fi radio's status
  char ssid[] = "SAMK-GUEST";                // your network SSID (name)
  
  //Initialize serial and wait for port to open:
  Serial.begin(9600);
  while (!Serial);
 
  // set the LED as output
  pinMode(LED_BUILTIN, OUTPUT);
  
  // attempt to connect to Wi-Fi network:
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to network: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network:
    status = WiFi.begin(ssid);
   
    // wait 10 seconds for connection:
    delay(10000);
}

  // you're connected now, so print out the data:
  Serial.println("You're connected to the network");
  Serial.println("---------------------------------------");

}

void loop() {
    
}
//please enter your sensitive data in the Secret tab


// char pass[] = SECRET_PASS;                // your network password (use for WPA, or use as key for WEP)


// int ledState = LOW;                       //ledState used to set the LED
// unsigned long previousMillisInfo = 0;     //will store last time Wi-Fi information was updated
// unsigned long previousMillisLED = 0;      // will store the last time LED was updated
// const int intervalInfo = 5000;            // interval at which to update the board information