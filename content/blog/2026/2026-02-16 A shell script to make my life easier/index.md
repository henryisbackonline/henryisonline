---
title: A shell script to make my life easier
date: 2026-02-16
tags:
  - technology
  - development
  - blogging
---
I built a little shell script to make my life easier when I want to make a new post. After I finish typing this, I'll use this script to publish this very post that you're reading now.

Here is the script:
```
#!/bin/bash

# --- INFORMATION ---
# Simple shell script for automating my blog publication with eleventy.
#
# I use Obsidian to write and organise all my posts, then when I want
# to publish a post, I use this script to save me typing a bunch.
#
# This is simply aliased as "blog" in my termial. I can type "blog" in
# any termial window and publish a post.
#
PROJECT_DIR="" # I put my directory in here - I won't publish that.
# --- INFORMATION ---

# Colors for terminal output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "
#     # ####### #     #    ######   #####   #####  ####### 
##    # #       #  #  #    #     # #     # #     #    #    
# #   # #       #  #  #    #     # #     # #          #    
#  #  # #####   #  #  #    ######  #     #  #####     #    
#   # # #       #  #  #    #       #     #       #    #    
#    ## #       #  #  #    #       #     # #     #    #    
#     # #######  ## ##     #        #####   #####     #              
"

# Navigate to the project directory
if [ -d "$PROJECT_DIR" ]; then
  cd "$PROJECT_DIR"
else
  echo -e "${RED}Project directory not found at $PROJECT_DIR${NC}"
  exit 1
fi

# Delete the existing _site folder
if [ -d "_site" ]; then
  echo "Removing old _site directory..."
  rm -rf _site
  echo -e "${GREEN}✅ _site directory removed.${NC}"
fi

# Run my eleventy build command
echo "Running build..."
pnpm build-quiet

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✅ Build Success.${NC}"
  
  # Push all the changes to GitHub
  echo "Staging files..."
  git add .
  
  echo "Committing changes..."
  git commit -m "new post"
  
  echo "Pushing to repository..."
  git push
  
  if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Site successfully published and pushed to repository.${NC}"
  else
    echo -e "${RED}❌ Git push failed.${NC}"
  fi

else
  echo -e "${RED}❌ Build Failed. Aborting git push.${NC}"
  # If something is wrong with the build, I don't push any changes.
  exit 1
fi

```

I find this very useful. I hope that someone else might find it useful too.