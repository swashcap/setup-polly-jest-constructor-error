#!/bin/bash
set -eo pipefail

for dir in setup-polly-jest*/; do
  yarn install --cwd "$dir" --prefer-offline --silent &
done

wait

