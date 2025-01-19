```json
[
   {
      "type": "folder",
      "dirname": "introduction",
      "title": "introduction",
      "items": [
         {
            "type": "file",
            "title": "Installation",
            "href": "docs/introduction/installation"
         },
         {
            "type": "file",
            "title": "Introduction",
            "href": "docs/introduction"
         }
      ]
   },
   {
      "type": "folder",
      "dirname": "customization",
      "title": "customization",
      "items": [
         {
            "type": "file",
            "title": "Colors",
            "href": "docs/customization/colors"
         },
         {
            "type": "file",
            "title": "Theming",
            "href": "docs/customization/theming"
         },
         {
            "order": 3,
            "type": "folder",
            "dirname": "advanced",
            "title": "advanced",
            "items": [
               {
                  "type": "file",
                  "title": "Advanced",
                  "href": "docs/customization/advanced"
               }
            ]
         }
      ]
   },
   {
      "type": "folder",
      "dirname": "hooks",
      "title": "hooks",
      "items": [
         {
            "type": "folder",
            "dirname": "hook-dir",
            "title": "hook-dir",
            "items": [
               {
                  "type": "file",
                  "title": "Hook Dir",
                  "href": "docs/hooks/hook-dir"
               }
            ]
         },
         {
            "type": "file",
            "title": "useHook1",
            "href": "docs/hooks/usehook1"
         },
         {
            "type": "file",
            "title": "useHook2",
            "href": "docs/hooks/usehook2"
         }
      ]
   },
   {
      "type": "folder",
      "dirname": "deep-menu",
      "title": "deep-menu",
      "items": [
         {
            "type": "folder",
            "dirname": "deeper",
            "title": "deeper",
            "items": [
               {
                  "type": "folder",
                  "dirname": "deepest",
                  "title": "deepest",
                  "items": [
                     {
                        "type": "file",
                        "title": "Deepest Menü",
                        "href": "docs/deep-menu/deeper/deepest"
                     }
                  ]
               }
            ]
         }
      ]
   },
   {
      "type": "folder",
      "dirname": "ignore-case",
      "title": "ignore-case",
      "items": [
         {
            "order": 1,
            "type": "folder",
            "dirname": "dir1",
            "title": "dir1",
            "items": []
         },
         {
            "order": 2,
            "type": "folder",
            "dirname": "dir2",
            "title": "dir2",
            "items": [
               {
                  "type": "file",
                  "title": "Gay 2",
                  "href": "docs/ignore-case/dir2/gay2"
               },
               {
                  "type": "file",
                  "title": "Gay 1",
                  "href": "docs/ignore-case/dir2/gay"
               }
            ]
         },
         {
            "type": "file",
            "title": "Ignore Case",
            "href": "docs/ignore-case"
         }
      ]
   }
]
```

Edit the order by creating a `directory.json` in the main directory for example:
```json
// contents/directory.json
{
  "introduction": {
    "order": 1
  },
  "customization": {
    "order": 2
  },
  "hooks": {
    "order": 3
  }
}
```