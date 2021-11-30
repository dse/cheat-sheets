# XDG

https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html

    env. var. name                  default value

    XDG_DATA_HOME                   $HOME/.local/share
        user-specific data files
    XDG_CONFIG_HOME                 $HOME/.config
        user-specific configuration files
    XDG_STATE_HOME                  $HOME/.local/state
        user-specific state files
    XDG_DATA_DIRS                   /usr/local/share/:/usr/share/
        in addition to XDG_DATA_HOME
    XDG_CONFIG_DIRS                 /etc/xdg
        in addition to XDG_CONFIG_HOME
    XDG_CACHE_HOME                  $HOME/.cache
    XDG_RUNTIME_DIR                 <replacement directory not specified>
