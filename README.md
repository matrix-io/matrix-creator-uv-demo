# matrix-creator-uv-demo

##Installation

###Installation of MALOS

Installation of Hardware abstraction layer for MATRIX Creator usable via 0MQ. 

```sh
sudo apt-get install matrix-creator-init matrix-creator-malos cmake g++ git
sudo shutdown -r now
```

More information about MALOS: https://github.com/matrix-io/matrix-creator-malos

###Installation of nodeJS.

You can use NodeJS from another computer (not the Raspberry) or from the raspberry itself.
Check for the most recent version of Node.js, but today it is: https://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-armv7l.tar.xz

You can download it, uncompress it and then change the default `PATH`.

For instance (in the Raspberry):

    mkdir nodejs && cd nodejs
    wget -c https://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-armv7l.tar.xz
    xz -d node-v4.5.0-linux-armv7l.tar.xz
    tar xvf node-v4.5.0-linux-armv7l.tar
    export PATH=/home/pi/nodejs/node-v4.5.0-linux-armv7l/bin:$PATH

In this version the binary is called `node` and not `nodejs`. The IPs used in the examples are 127.0.0.1. Remember to edit them if you're accessing the Creator from another host and not from the Raspberry itself.

###Installation Dependencies

```sh
sudo apt install libzmq3-dev
```

###Running App
Make sure you have added Node.js directory in $PATH: 

```sh
git clone https://github.com/matrix-io/matrix-creator-uv-demo
cd matrix-creator-uv-demo
npm install
```
 
Then run MALOS with:

```sh
malos & 

MALOS starting
**************

You can query specific driver info using port 20012.
Registered driver IMU with port 20013.
Registered driver Humidity with port 20017.
Registered driver Everloop with port 20021.
Registered driver Pressure with port 20025.
Registered driver UV with port 20029.

```
Now run index.js with:

```sh
node index.js
Invalid configuration for UV driver.
Invalid configuration for UV driver.
New delay between updates for UV is 1000 ms.
New timeout after last ping for UV 6000 ms.
Sending pings every 5 secondslistening on *:5000
Message received: UV error: 0, Invalid configuration for UV driver.
Message received: UV error: 0, Invalid configuration for UV driver.
{ uv_index: 0.08567603677511215, oms_risk: 'Low' }
{ uv_index: 0.08567603677511215, oms_risk: 'Low' }
{ uv_index: 0.08567603677511215, oms_risk: 'Low' }
```


