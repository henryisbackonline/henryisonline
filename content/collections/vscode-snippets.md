---
title: VSCodium snippets I use
---

# VSCodium snippets I use

I use [VSCodium](https://vscodium.com) to build this website. These are the snippets I include in the `.vscode` folder in the project root that make my life a little easier.

- [VSCodium snippets I use](#vscodium-snippets-i-use)
  - [HTML img and fig tags](#html-img-and-fig-tags)
  - [Markdown image tags](#markdown-image-tags)

- - -

## HTML img and fig tags
Insert a HTML `img` or `fig` tag and use the `TAB` key to navigate through the editable fields.
```
{
    "Insert image HTML": {
        "prefix": "/htimg",
        "body": [
            "<p><img src=\"$1\" alt=\"$2\"></p>"
        ],
        "description": "Insert an HTML <img> tag with an attachemnts path"
    },
    
    "Insert figure HTML": {
        "prefix": "/htfig",
        "body": [
            "<figure>",
            "    <img src=\"$1\" alt=\"$2\">",
            "    <figcaption>$3</figcaption>",
            "</figure>"
        ],
        "description": "Insert a <figue> tag with image source and description"
    }
}
``` 
- - -

## Markdown image tags
Insert a markdown image tag and use the `TAB` key to navigate the options.
```
{
    "Insert markdown image syntax": {
        "prefix": "/img",
        "body": [
            "![$2]($1)",
        ],
        "description": "Insert a markdown image string. ![alt text here](image path here)"
    },	
}
```