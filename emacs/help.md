# Emacs Help

<https://github.com/dse/cheat-sheets/blob/master/emacs/help.md>

## Commands

| Keys           | Command                          | Description                                                                                                                 |
|:---------------|:---------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| C‑h a PATTERN  | apropos‑command                  | Show commands whose name matches the PATTERN (a list of words or a regexp).  See also the ‘apropos’ command.                |
| C‑h F COMMAND  | Info‑goto‑emacs‑command‑node     | Show the Emacs manual’s section that describes the command.                                                                 |

## Functions and Variables

| Keys           | Command                          | Description                                                                                                                 |
|:---------------|:---------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| C‑h f FUNCTION | describe‑function                | Display documentation for the given function.                                                                               |
| C‑h o SYMBOL   | describe‑symbol                  | Display the given function or variable’s documentation and value.                                                           |
| C‑h v VARIABLE | describe‑variable                | Display the given variable’s documentation and value.                                                                       |

## Key Bindings

| Keys           | Command                          | Description                                                                                                                 |
|:---------------|:---------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| C‑h b          | describe‑bindings                | Display all key bindings.                                                                                                   |
| C‑h c KEYS     | describe‑key‑briefly             | Display the command name run by the given key sequence.                                                                     |
| C‑h k KEYS     | describe‑key                     | Display the full documentation for the key sequence.                                                                        |
| C‑h K KEYS     | Info‑goto‑emacs‑key‑command‑node | Show the Emacs manual’s section for the command bound to KEYS.                                                              |
| C‑h w COMMAND  | where‑is                         | Display which keystrokes invoke the given command (where-is).                                                               |

## All Documentation

| Keys           | Command                          | Description                                                                                                                 |
|:---------------|:---------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| C‑h d PATTERN  | apropos‑documentation            | Show a list of functions, variables, and other items whose documentation matches the PATTERN (a list of words or a regexp). |
| C‑h i          | info                             | Start the Info documentation reader: read included manuals.                                                                 |
| C‑h r          | info‑emacs‑manual                | Display the Emacs manual in Info mode.                                                                                      |
| C‑h t          | help‑with‑tutorial               | Start the Emacs learn-by-doing tutorial.                                                                                    |

## Packages

| Keys           | Command                          | Description                                                                                                                 |
|:---------------|:---------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| C‑h p TOPIC    | finder‑by‑keyword                | Find packages matching a given topic keyword.                                                                               |
| C‑h P PACKAGE  | describe‑package                 | Describe the given Emacs Lisp package.                                                                                      |

## Miscellaneous

| Keys           | Command                          | Description                                                                                                                 |
|:---------------|:---------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| C‑h C CODING   | describe‑coding‑system           | Describe the given coding system, or RET for current ones.                                                                  |
| C‑h I METHOD   | describe‑input‑method            | Describe a specific input method, or RET for current.                                                                       |
| C‑h L LANG‑ENV | describe‑language‑environment    | Describes a specific language environment, or RET for current.                                                              |
| C‑h s          | describe‑syntax                  | Display contents of current syntax table, plus explanations.                                                                |
| C‑h h          | view‑hello‑file                  | Display the HELLO file which illustrates various scripts.                                                                   |
| | | |
| C‑h m          | describe‑mode                    | Display documentation of current minor modes and current major mode, including their special commands.                      |
| | | |
| C‑h S SYMBOL   | info‑lookup‑symbol               | Show the section for the given symbol in the Info manual for the programming language used in this buffer.                  |
| C‑h .          | display‑local‑help               | Display any available local help at point in the echo area.                                                                 |
| | | |
| C‑h e          | view‑echo‑area‑messages          | Go to the \*Messages\* buffer which logs echo-area messages.                                                                |
| C‑h l          | view‑lossage                     | Show last 300 input keystrokes (lossage).                                                                                   |

## About Emacs

| Keys           | Command                          | Description                                                                                                                 |
|:---------------|:---------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| C‑h g          | describe‑gnu‑project             | Display information about the GNU project.                                                                                  |
| C‑h n          | view‑emacs‑news                  | Display news of recent Emacs changes.                                                                                       |
| C‑h C‑a        | about‑emacs                      | Information about Emacs.                                                                                                    |
| C‑h C‑c        | describe‑copying                 | Emacs copying permission (GNU General Public License).                                                                      |
| C‑h C‑d        | view‑emacs‑debugging             | Instructions for debugging GNU Emacs.                                                                                       |
| C‑h C‑e        | view‑external‑packages           | External packages and information about Emacs.                                                                              |
| C‑h C‑f        | view‑emacs‑FAQ                   | Emacs FAQ.                                                                                                                  |
| C‑h C‑m        | view‑order‑manuals               | How to order printed Emacs manuals.                                                                                         |
| C‑h C‑n        | view‑emacs‑news                  | News of recent Emacs changes.                                                                                               |
| C‑h C‑o        | describe‑distribution            | Emacs ordering and distribution information.                                                                                |
| C‑h C‑p        | view‑emacs‑problems              | Info about known Emacs problems.                                                                                            |
| C‑h C‑t        | view‑emacs‑todo                  | Emacs TODO list.                                                                                                            |
| C‑h C‑w        | describe‑no‑warranty             | Information on absence of warranty for GNU Emacs.                                                                           |

# In Original Order

| Keys           | Command                          | Description                                                                                                                 |
|:---------------|:---------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| C‑h a PATTERN  | apropos‑command                  | Show commands whose name matches the PATTERN (a list of words or a regexp).  See also the ‘apropos’ command.                |
| C‑h b          | describe‑bindings                | Display all key bindings.                                                                                                   |
| C‑h c KEYS     | describe‑key‑briefly             | Display the command name run by the given key sequence.                                                                     |
| C‑h C CODING   | describe‑coding‑system           | Describe the given coding system, or RET for current ones.                                                                  |
| C‑h d PATTERN  | apropos‑documentation            | Show a list of functions, variables, and other items whose documentation matches the PATTERN (a list of words or a regexp). |
| C‑h e          | view‑echo‑area‑messages          | Go to the \*Messages\* buffer which logs echo-area messages.                                                                |
| C‑h f FUNCTION | describe‑function                | Display documentation for the given function.                                                                               |
| C‑h F COMMAND  | Info‑goto‑emacs‑command‑node     | Show the Emacs manual’s section that describes the command.                                                                 |
| C‑h g          | describe‑gnu‑project             | Display information about the GNU project.                                                                                  |
| C‑h h          | view‑hello‑file                  | Display the HELLO file which illustrates various scripts.                                                                   |
| C‑h i          | info                             | Start the Info documentation reader: read included manuals.                                                                 |
| C‑h I METHOD   | describe‑input‑method            | Describe a specific input method, or RET for current.                                                                       |
| C‑h k KEYS     | describe‑key                     | Display the full documentation for the key sequence.                                                                        |
| C‑h K KEYS     | Info‑goto‑emacs‑key‑command‑node | Show the Emacs manual’s section for the command bound to KEYS.                                                              |
| C‑h l          | view‑lossage                     | Show last 300 input keystrokes (lossage).                                                                                   |
| C‑h L LANG‑ENV | describe‑language‑environment    | Describes a specific language environment, or RET for current.                                                              |
| C‑h m          | describe‑mode                    | Display documentation of current minor modes and current major mode, including their special commands.                      |
| C‑h n          | view‑emacs‑news                  | Display news of recent Emacs changes.                                                                                       |
| C‑h o SYMBOL   | describe‑symbol                  | Display the given function or variable’s documentation and value.                                                           |
| C‑h p TOPIC    | finder‑by‑keyword                | Find packages matching a given topic keyword.                                                                               |
| C‑h P PACKAGE  | describe‑package                 | Describe the given Emacs Lisp package.                                                                                      |
| C‑h r          | info‑emacs‑manual                | Display the Emacs manual in Info mode.                                                                                      |
| C‑h s          | describe‑syntax                  | Display contents of current syntax table, plus explanations.                                                                |
| C‑h S SYMBOL   | info‑lookup‑symbol               | Show the section for the given symbol in the Info manual for the programming language used in this buffer.                  |
| C‑h t          | help‑with‑tutorial               | Start the Emacs learn-by-doing tutorial.                                                                                    |
| C‑h v VARIABLE | describe‑variable                | Display the given variable’s documentation and value.                                                                       |
| C‑h w COMMAND  | where‑is                         | Display which keystrokes invoke the given command (where-is).                                                               |
| C‑h .          | display‑local‑help               | Display any available local help at point in the echo area.                                                                 |
|                |                                  |                                                                                                                             |
| C‑h C‑a        | about‑emacs                      | Information about Emacs.                                                                                                    |
| C‑h C‑c        | describe‑copying                 | Emacs copying permission (GNU General Public License).                                                                      |
| C‑h C‑d        | view‑emacs‑debugging             | Instructions for debugging GNU Emacs.                                                                                       |
| C‑h C‑e        | view‑external‑packages           | External packages and information about Emacs.                                                                              |
| C‑h C‑f        | view‑emacs‑FAQ                   | Emacs FAQ.                                                                                                                  |
| C‑h C‑m        | view‑order‑manuals               | How to order printed Emacs manuals.                                                                                         |
| C‑h C‑n        | view‑emacs‑news                  | News of recent Emacs changes.                                                                                               |
| C‑h C‑o        | describe‑distribution            | Emacs ordering and distribution information.                                                                                |
| C‑h C‑p        | view‑emacs‑problems              | Info about known Emacs problems.                                                                                            |
| C‑h C‑t        | view‑emacs‑todo                  | Emacs TODO list.                                                                                                            |
| C‑h C‑w        | describe‑no‑warranty             | Information on absence of warranty for GNU Emacs.                                                                           |
