#!/bin/bash

# Directory containing images
INPUT_DIR="."
OUTPUT_DIR="."

# Convert each image in the directory
for file in "$INPUT_DIR"/*.{png,jpeg,jpg}; do
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    extension="${filename##*.}"
    filename_no_ext="${filename%.*}"
    output_file="$OUTPUT_DIR/${filename_no_ext}.webp"
    
    # Convert image to WebP
    /opt/local/bin/cwebp "$file" -o "$output_file"
    
    # Check if conversion was successful
    if [ $? -eq 0 ]; then
      # Remove the original file
      rm "$file"
    else
      echo "Failed to convert $file"
    fi
  fi
done
