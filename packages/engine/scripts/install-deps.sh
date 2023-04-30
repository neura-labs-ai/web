#!/usr/bin/env bash

# Check if Python 3 is installed
if ! command -v python3 &> /dev/null; then
    echo "Python 3 is not installed on this system. Please install Python 3 and try again."
    exit 1
fi

# Download the Python script
curl -O https://raw.githubusercontent.com/guillaume-be/rust-bert/29dae0848b595835e4de97d395b839909aa03192/utils/download-dependencies_distilbert.py

# Run the Python script using Python 3
python3 download-dependencies_distilbert.py