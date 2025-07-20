# Starting/Stopping Services in Linux

## The Really Old Way: System V init scripts

    /etc/init.d/apache2 start|stop|status|...
    
## `service`, a Wrapper Around System V init scripts
    
    service apache2 start|stop|status|...
    service --status-all

## systemctl, the new hotness.  It's a part of systemd.

### systemd

-   System and service manager.
-   Runs as PID 1, acting as `/sbin/init`.
-   Provides a dependency system for **units**.
    -   Units are objects relevant to system boot and maint.
        -   See `systemd.unit(5)` regarding configuration of most units.
    -   Unit states:
        -   active
        -   inactive
        -   activating
        -   deactivating
        -   failed
        -   additional substates
    -   Types of UNITS:
        -   service units `systemd.service(5)`
        -   socket units, for socket-based activation `systemd.socket(5)`, `daemon(7)`
        -   target units `systemd.target(5)`
        -   device units, for device-based activation `systemd.device(5)`
        -   mount units, for mount points `systemd.mount(5)`
        -   automount units, `systemd.automount(5)`
        -   timer units, which activate other units `systemd.timer(5)`
        -   swap units, similar to mount units `systemd.swap(5)`
        -   path units, which activate units based on filesystem modifications, `systemd.path(5)`
        -   slice units `systemd.slice(5)`
        -   scope units `systemd.scope(5)`
    -   Invokes System V init scripts, supports `/etc/fstab`, etc.
    -   Original Design Document[2]
    -   D-Bus: `org.freedesktop.systemd1(5)`, `org.freedesktop.LogControl1(5)`

### systemctl

    systemctl list-units [<pattern> ...]                list units in memory
    systemctl list-sockets [<pattern> ...]                  sockets
    systemctl list-timers [<pattern> ...]                   timers
    systemctl is-active <pattern> ...
    systemctl is-failed <pattern> ...
    systemctl status [<pattern> ... | <pid> ...]        or system status
    systemctl show [<pattern> ... | <job> ...]          or the manager itself
    systemctl start <pattern> ...
    systemctl stop <pattern> ...
    systemctl reload <pattern> ...
    systemctl restart <pattern> ...
    
    systemctl enable <unit> ...                         starts if --now specfd
    systemctl disable <unit> ...
    systemctl reenable <unit> ...                       disables then reenables
    systemctl preset <unit> ...                         reset to policy defaults
    systemctl preset-all
    systemctl is-enabled <unit> ...

### also
    
    journalctl

-   list units in memory: `systemctl list-units [<pattern> ...]`
-   list socket units in memory: `systemctl list-sockets [<pattern> ...]`
-   list timer units in memory: `systemctl list-timers [<pattern> ...]`


### journalctl
