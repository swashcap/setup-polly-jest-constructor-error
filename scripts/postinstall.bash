#!/bin/bash
set -eo pipefail

yarn install --cwd "$PWD/setup-polly-jest-0.5.2" --prefer-offline --silent &
yarn install --cwd "$PWD/setup-polly-jest-0.5.3-issue-5.2" --prefer-offline --silent &
wait

