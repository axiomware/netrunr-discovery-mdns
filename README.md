# netrunr-discovery-mdns
Discovery tool for Netrunr gateways using [mDNS](https://en.wikipedia.org/wiki/Multicast_DNS){:target="_blank"}

## Requirements
- For Windows OS, an executable is provided in ./bin directory
- Nodejs (see [https://nodejs.org/en/](https://nodejs.org/en/) for download and installation instructions)
  - Nodejs version 8.x.x or higher is required due to the use of promises/async/await
- NPM (Node package manager - part of Nodejs)   

## Installation

Clone the repo

`git clone https://github.com/axiomware/netrunr-discovery-mdns.git`

or download as zip file to a local directory and unzip.

Install all module dependencies by running the following command inside the directory

```bash
cd netrunr-discovery-mdns

npm install
```
## Run Nodejs Utility: netrunr-discovery.js

This utility is used to discover the IP address of Netrunr gateway heartbeat on the same subnet as the computer on which this utility is running.

`node netrunr-discovery.js`

An example output:

```JSON
Discover IP address of Netrunr Gateway using mDNS
IP address of the local machine
{
  "Ethernet": [
    "192.168.10.229"
  ],
  "VirtualBox Host-Only Network": [
    "192.168.56.1"
  ],
  "Ethernet 2": [
    "192.168.8.128"
  ]
}
-----------------------------------
Starting discovery..
Depending on your firewall setting, your OS may ask for permission.
This utility will get mDNS informaton from port 5353 on your local machine
Use control-c to stop the program
Starting discovery.. this may take several seconds
{
  "gateway": "NETRUNR-78A35159EBEC._http._tcp.local",
  "address": "192.168.10.165"
}
{
  "gateway": "NETRUNR-78A35155F326._http._tcp.local",
  "address": "192.168.10.239"
}
```

## Utility: using Microsoft Windows EXE: netrunr-discovery-mdns-win.exe

This utility can be used without installing NodeJS. In a Windows command prompt, type the following command:

`netrunr-discovery-mdns-win.exe`

## Error conditions/Troubleshooting

- Your OS may require permissions to access port 5353. No data is sent outside the subnet and access is stopped when program completes execution
- For security reasons, Clients connected to LAN ports of Netrunr gateway have limited access to upstream network.
