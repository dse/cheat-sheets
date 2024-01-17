# tmux

## keybindings

\<prefixKey\> is C-b by default.

### Windows

```
&               Kill the current window.
'               Prompt for a window index to select.
,               Rename the current window.
.               Prompt for an index to move the current window.
0 to 9          Select windows 0 to 9.
c               Create a new window.
f               Prompt to search for text in open windows.
i               Display some information about the current window.
l               Move to the previously selected window.
n               Change to the next window.
p               Change to the previous window.
w               Choose the current window interactively.
M-n             Move to the next window with a bell or activity marker.
M-p             Move to the previous window with a bell or activity marker.
Space           Arrange the current window in the next preset layout.
```

### Panes

```
C-o, M-o        ROTATE the panes in the current window forwards/backwards.
", %            SPLIT the current pane into two, " top and bottom, % left and right
!               BREAK the current pane out of the window.
;               MOVE to the previously active pane.
o               Select the NEXT PANE in the current window.
q               Briefly display pane INDEXES.
m               MARK the current pane (see select-pane -m).
M               CLEAR the marked pane.
x               KILL the current pane.
z               Toggle ZOOM state of the current pane.
{ }             SWAP the current pane with the { previous, } next pane.
Left, Right     CHANGE to the pane above, below, to the left, or to the right of the current pane.
M-1 to M-5      Arrange panes in one of the five preset layouts: even-horizontal, even-vertical, main-horizontal, main-vertical, or tiled.
C-Up/Dn/Lt/Rt   Resize the current pane in steps of one cell.
M-Up/Dn/Lt/Rt   Resize the current pane in steps of five cells.
```

### Clipboard

```
#               List all paste buffers.
-               Delete the most recently copied buffer of text.
=               Choose which buffer to paste interactively from a list.
[               Enter copy mode to copy text or view the history.
]               Paste the most recently copied buffer of text.
PgUp, PgDn      Enter copy mode and scroll one page up.
```

### Sessions/Client

```
$               Rename the current session.
(               Switch the attached client to the previous session.
)               Switch the attached client to the next session.
L               Switch the attached client back to the last session.
s               Select a new session for the attached client interactively.
D               Choose a client to detach.
d               Detach the current client.
C-z             Suspend the tmux client.
r               Force redraw of the attached client.
```

### Miscellaneous

```
C-b             Send the prefix key (C-b) through to the application.
:               Enter the tmux command prompt.
?               List all key bindings.
t               Show the time.
~               Show previous messages from tmux, if any.
```

