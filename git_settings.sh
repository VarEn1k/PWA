#!/bin/sh

dir=".git"
if [ -d "$dir" ]; then
  echo "Set git config"
  git config --local core.autocrlf input
  git config --local user.name "<VarEn1k>"
  git config --local user.email "<kola201510@gmail.com>"
  git config user.name
  git config user.email
else
    echo "Error: current directory is not project root"
fi