#!/bin/bash

echo "The branch is:"
echo "$1"

#if [ "$1" == "refs/heads/release/v1" ]; then
if [ "$1" == "refs/heads/master" ]; then
  mkdir -p ~/.ssh
  echo "$ID_RSA" > ~/.ssh/id_rsa
  echo "$ID_RSA_PUB" > ~/.ssh/id_rsa.pub
  chmod 700 -R ~/.ssh
  ssh-keyscan -t rsa host.416.amsdfw.us >> ~/.ssh/known_hosts
  git remote add dokku dokku@host.416.amsdfw.us:stocksizer
  git push dokku release/v1:master --force
fi