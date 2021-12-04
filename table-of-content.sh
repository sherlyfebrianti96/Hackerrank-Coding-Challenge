#!/bin/bash

# File: tree-md


# Normal Tree View :
# tree=$(tree -tf --noreport -I '*~' --charset ascii $1 |
#         sed -e 's/| \+/  /g' -e 's/[|`]-\+/ */g' -e 's:\(* \)\(\(.*/\)\([^/]\+\)\):\1[\4](\2):g')

# printf "# Project tree\n\n${tree}\n\n"


# Tree View with Depth 2 :
# tree=$(tree -L 2 -tf --noreport -I '*~' --charset ascii $1 |
#         sed -e 's/| \+/  /g' -e 's/[|`]-\+/ */g' -e 's:\(* \)\(\(.*/\)\([^/]\+\)\):\1[\4](\2):g')

# printf "# Project tree\n\n${tree}\n\n"


# Tree View with Git Link :

IFS=$'\n'

fullTree=$(tree -L 2 -d -tf --noreport -I '*~' --charset ascii)

files=$(tree -L 2 -d -tf --noreport -I '*~' --charset ascii | grep -o '\./.*')

formattedTree=""

ITER=0

for item in $fullTree
do
    filesArr=($files)

    if [[ $ITER > 0 ]];
    then
        file=${filesArr[$ITER - 1]}
        filename=${file##*/}

        # Format the TreeView to List
        # Replace `├──` to `-`
        originalString1=$item
        expectedString1="-"
        filter1="${originalString1/|--/$expectedString1}"
        # Replace `└──` to `-`
        originalString2=$filter1
        expectedString2="-"
        filter2="${originalString2/\`--/$expectedString2}"
        # Replace `│` to ` `
        originalString3=$filter2
        expectedString3=""
        filter3="${originalString3/| /$expectedString3}"

        # Format the Paths to Github Link
        originalString=$filter3
        expectedString="[${filename}](${file})"
        result="${originalString/$file/$expectedString}"

        formattedTree+="\n$result\n";
    # else
    #     formattedTree+="$item\n";
    fi

    ITER=$(expr $ITER + 1)
done

printf "# Project tree\n\n${formattedTree}\n\n"
