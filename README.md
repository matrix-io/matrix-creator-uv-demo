# matrix-creator-uv-demo

##Installation

###Installation of MALOS

Installation of Hardware abstraction layer for MATRIX Creator usable via 0MQ. 

```sh
sudo apt-get install matrix-creator-init matrix-creator-malos cmake g++ git
sudo shutdown -r now
```

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

## Initial set up
