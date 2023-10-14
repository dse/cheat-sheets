# Tramp - Transparent Remote Access, Multiple Protocol

## Filenames

To visit a file remotely, use `C-x C-f` (just like visiting a local
file) and specify one of the following syntaxes:

| Syntax | Description |
|:---|:---|
| `/ssh:hostname:.emacs`           | Log in to `hostname`.  Starts at remote home directory. |
| `/ssh:hostname:~/.emacs`         | Explicitly start at remote home directory. |
| `/ssh:hostname:~user/.emacs`     | Open another user's file, as you. |
| `/ssh:hostname:/etc/squid.conf`  | Use an absolute path.       |
| `/ssh:user@hostname:.emacs`      | Log in as another user.  Starts at their home directory. |
| `/ssh:hostname#port:.emacs`      | Use a custom port number.   |
| `/ftp:user@hostname#port:.emacs`      | User another protocol.      |
| `/su::/etc/passwd`               | Local privilege escalation. |
| `/sudo::/etc/passwd`             | Local privilege escalation.

## Variables

`tramp-default-method`, a string, specifies the default method (or
protocol).  It is likely one of the following:

-   `"scp"`
-   `"pscp"` (Windows PuTTY pageant)
-   `"ftp"` (if neither `pscp` nor `scp` are installed)

`tramp-default-method-alist`, an alist, is used to choose a custom
method based on regular expressions against which the host name and
user name are matched.

## Methods

### Inline Methods

Inline methods use the same connections for authentication and file
transfer.

-   `rsh`
-   `ssh`
-   `telnet`
-   `su` - for editing as another user via `su`
-   `sudo` - for editing as another user via `sudo`
-   `doas` - OpenBSD's analogue to `sudo`
-   `sg` - for editing as another group; specify the group name as the
    user name
-   `sshx` - `ssh` without login shell questions
-   `krlogin`
-   `ksu`
-   `plink`
-   `plinkx` - `plink` with session names instead of host names

### External Methods

External methods use dedicated connections for authentication and file
transfer.  External methods are better for large files, though most
TRAMP users transfer small files.

-   `rcp` - use `rsh` to connect and `rcp` to transfer
-   `remcp` - use `remsh` to connect and `rcp` to transfer
-   `scp` - use `ssh` to connect and `scp` to transfer
-   `rsync` - use `ssh` to connect and `rsync` to transfer; good for
    when files exist on both hosts
-   `scpx` - `scp` without login shell questions
-   `pscp` - use `plink` to connect and `pscp` to transfer
-   `psftp` - use `plink` to connect and `psftp` to transfer
-   `fcp` - use `fsh` to connect and `fcp` to transfer
-   `nc` - use `telnet` to connect and `nc` to transfer
-   `ftp` - forwards to Ange FTP specified FTP program
-   `smb`
-   `adb` - Android Debug Bridge

### GVFS Based External Methods

GVFS is the Gnome Desktop's virtual file system.

-   `afp` - Apple Filing Protocol
-   `dav` - WebDAV
-   `davs` - WebDAV with SSL encryption
-   `gdrive` - Google Drive online storage
-   `obex` - file access protocol for cellphones over Bluetooth
-   `sftp` - secure option to connect to hosts refusing `ssh` connections
-   `synce` - connections to Windows Mobile devices
