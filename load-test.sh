#!/bin/bash

URL=$1
wrk -d10m -c500 -t2 $URL