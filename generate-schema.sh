#!/bin/bash

folder="${1:-.}"

echo "[Start] generating"
for config_file in $(find "$folder" -name "*codegen.ts"); do

  config_path=$(dirname "$config_file")
  generated_folder="$config_path/../generated"

  echo "[Running] delete all generated files in $generated_folder"
  rm -rf "$generated_folder"/*

  echo "[Running] graphql-codegen for $config_file"
  graphql-codegen --config $config_file
done
echo "[Stop] generating"