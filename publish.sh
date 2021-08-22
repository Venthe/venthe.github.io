#!/usr/bin/env bash

# set -x
set -e

# Github does not work with 4.x atm, so as a workaround I publish to static output
#  Eh.
#  Note: I will not hesitate to rewrite history :)
function jekyll() {
  # {build,serve,new}
  COMMAND="${@:-build}"
  JEKYLL_VERSION="4.2.0"
  # {jekyll/builder,jekyll/minimal,jekyll/jekyll}
  JEKYLL_IMAGE="jekyll/jekyll"

  docker run \
    --rm \
    --entrypoint bash \
    --volume "$PWD:/srv/jekyll" \
    --publish "4000:4000" \
    --interactive \
    --tty \
    "${JEKYLL_IMAGE}:${JEKYLL_VERSION}" \
    ${COMMAND}
}

jekyll jekyll build
git add --all
git commit -m "Publish update"
mv _site docs