/*
 * Netrunr mDNS utility function
 *
 * Copyright(C) 2021 Axiomware Systems Inc..
 */
'use strict';
const mDnsSd = require('node-dns-sd');
const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = {}

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

console.log('Discover IP address of Netrunr Gateway using mDNS')
console.log('IP address of the local machine')
console.log(JSON.stringify(results, null, '  '))
console.log('-----------------------------------')

console.log('Starting discovery..')
console.log('Depending on your firewall setting, your OS may ask for permission.')
console.log('This utility will get mDNS informaton from port 5353 on your local machine ')
console.log('Use control-c to stop the program')
console.log('Starting discovery.. this may take several seconds')

mDnsSd.discover({
  name: '_http._tcp.local'
}).then((device_list) =>{
  device_list.forEach(dev => {
    //console.log(dev)
    if(dev['fqdn'] && dev['fqdn'].includes('NETRUNR-')){
      //console.log(JSON.stringify(dev, null, '  '));
      console.log(JSON.stringify({
        gateway: dev['fqdn'],
        address: dev['address']
      }, null, '  '));
    }
  })
  //console.log(JSON.stringify(device_list, null, '  '));
}).catch((error) => {
  console.error(error);
});