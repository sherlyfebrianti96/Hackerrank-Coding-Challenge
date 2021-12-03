#!/bin/bash

# File: tree-md

# Normal Tree View :
# tree=$(tree -tf --noreport -I '*~' --charset ascii $1 |
#        sed -e 's/| \+/  /g' -e 's/[|`]-\+/ */g' -e 's:\(* \)\(\(.*/\)\([^/]\+\)\):\1[\4](\2):g')

# Tree View with Depth 2 :
tree=$(tree -L 2 -tf --noreport -I '*~' --charset ascii $1 |
       sed -e 's/| \+/  /g' -e 's/[|`]-\+/ */g' -e 's:\(* \)\(\(.*/\)\([^/]\+\)\):\1[\4](\2):g')

printf "# Project tree\n\n${tree}\n\n"
