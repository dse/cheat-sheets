# git submodules

http://git-scm.com/book/en/v2/Git-Tools-Submodules

Add another Git repository as a submodule of yours:

    git submodule add 'https://github.com/chaconinc/DbConnector'
    git submodule add 'https://github.com/chaconinc/DbConnector' DbConnector

Cloning a repository containing submodules:

    git clone <main-project-url>
    cd <main-project-dir>
    git submodule init
    git submodule update

or:

    git clone --recurse-submodules <main-project-url>

If you already cloned a project, just run:

    git submodule init
    git submodule update

or:

    git submodule update --init

To initialize, fetch, and checkout nested submodules:

    git submodule update --init --recursive
