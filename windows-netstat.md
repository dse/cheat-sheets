```
netstat [<options> ...] [<interval>]

-a          display all connections and listening ports
-b          display executable involved
-e          display ethernet statistics; may be combined with -s
-f          display FQDNs for foreign addresses
-n          display addresses and port numbers in numeric form
-o          display owning process id
-p <proto>  show connections for: TCP, UDP, TCPv6, UDPv6
            with -s: TCP, UDP, TCPv6, UDPv6, IP, IPv6, ICMP, ICMPv6
-q          display all connections, listening ports, bound nonlistening TCP ports
-r          display routing table
-s          display per-protocol statistics
-t          display current connection offload state
-x          display NetworkDirect connections, listeners, and shared endpoints
-y          display TCP connection template; may not be combined with other options

<interval>  redisplay every <interval> seconds.  default: display once and exit
```
