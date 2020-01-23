# Installing Emacs on Windows

1.  Visit <https://www.gnu.org/software/emacs/>, select Windows
    installation, and look for the appropriate `.zip` file for your
    platform and Emacs version.  I would not chose the `-no-deps`
    files, but that is up to you.

1.  Create a directory `c:\emacs` if there isn't one already.

1.  Extract that `.zip` file into a subdirectory of `c:\emacs`,
    `c:\emacs\emacs-26.3`.  (Adjust for whatever version number you're
    installing.)

1.  Your `c:\emacs\emacs-26.3` directory should contain the following,
    or close to it:

    -   `bin`
    -   `etc`
    -	`include`
    -	`lib`
    -	`libexec`
    -	`share`
    -	`ssl`

1.  Create or edit `c:\emacs\emacs.bat` with the following contents:

    ```
    @echo off

    rem ---------------------------------------------------------------------------
    rem Set your Emacs version here.
    rem ---------------------------------------------------------------------------
    set emacsdir=c:\emacs\emacs-26.3

    rem ---------------------------------------------------------------------------
    rem THERE IS NO NEED TO MAKE CHANGES BELOW THIS LINE.
    rem ---------------------------------------------------------------------------
    if [%1] == [] (
        "%emacsdir%\bin\emacsclientw.exe" -n -a "%emacsdir%\bin\runemacs.exe" ""
    ) else (
        "%emacsdir%\bin\emacsclientw.exe" -n -a "%emacsdir%\bin\runemacs.exe" %*
    )
    ```

    NOTE: Your Emacs configuration must contain and execute the
    following code at some point:

    ```
    (require 'server)
    (server-start)
    ```

## What's This `emacs.bat` Batch Script?

`emacs.bat` either starts a new Emacs instance, or opens any file you
specify in the existing Emacs instance for editing.  This allows you
to manage multiple files in one editing session.  Neither of the
binaries provided with GNU Emacs, `emacs.exe` and `runemacs.exe`, do
this for you.

`emacs.bat` is intended to be used as your editor of choice when
configuring another Windows program that invokes an external editor.

Whether you add the directory containing `emacs.bat` to your `PATH` is
entirely your choice.