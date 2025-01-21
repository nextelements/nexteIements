```
├── customization
│   ├── advanced
│   │   └── index.mdx
│   ├── [colors]
│   │   └── index.mdx
│   ├── directory.json
│   └── [theming]
│       └── index.mdx
├── deep-menu
│   └── deeper
│       └── deepest
│           └── index.mdx
├── directory.json
├── hooks
│   ├── hook-dir
│   │   └── index.mdx
│   ├── useHook1.mdx
│   └── useHook2.mdx
├── iGnOrE-CaSe
│   ├── directory1
│   │   └── index.mdx
│   ├── directory2
│   │   ├── directory.json
│   │   ├── [sub1]
│   │   │   └── index.mdx
│   │   └── [sub2]
│   │       └── index.mdx
│   ├── directory.json
│   └── index.mdx
└── introduction
    ├── index.mdx
    └── [installation]
        └── index.mdx
```

```json
 [
  {
    "type": "folder",
    "folder": "introduction",
    "title": "introduction",
    "path": "docs/introduction/",
    "items": [
      {
        "type": "file",
        "file": "index",
        "title": "Introduction",
        "matter": {
          "title": "Introduction",
          "description": "",
          "keywords": [],
          "order": 1
        },
        "href": "/docs/introduction",
        "order": 1
      },
      {
        "type": "file",
        "file": "index",
        "title": "Installation",
        "matter": {
          "title": "Installation",
          "description": "",
          "keywords": [],
          "order": 2
        },
        "href": "/docs/introduction/installation",
        "order": 2
      }
    ],
    "order": 1
  },
  {
    "type": "folder",
    "folder": "customization",
    "title": "customization",
    "path": "docs/customization/",
    "items": [
      {
        "type": "file",
        "file": "index",
        "title": "Colors",
        "matter": {
          "title": "Colors",
          "description": "",
          "keywords": []
        },
        "href": "/docs/customization/colors"
      },
      {
        "type": "file",
        "file": "index",
        "title": "Theming",
        "matter": {
          "title": "Theming",
          "description": "",
          "keywords": []
        },
        "href": "/docs/customization/theming"
      },
      {
        "type": "folder",
        "folder": "advanced",
        "title": "advanced",
        "path": "docs/customization/advanced/",
        "items": [
          {
            "type": "file",
            "file": "index",
            "title": "Advanced",
            "matter": {
              "title": "Advanced",
              "description": "",
              "keywords": []
            },
            "href": "/docs/customization/advanced"
          }
        ],
        "order": 3
      },
      {
        "type": "json",
        "source": "/root/.apps/nextelements2/apps/next-docs/contents/customization/directory.json",
        "order": null
      }
    ],
    "order": 2
  },
  {
    "type": "folder",
    "folder": "hooks",
    "title": "hooks",
    "path": "docs/hooks/",
    "items": [
      {
        "type": "folder",
        "folder": "hook-dir",
        "title": "hook-dir",
        "path": "docs/hooks/hook-dir/",
        "items": [
          {
            "type": "file",
            "file": "index",
            "title": "Hook Dir",
            "matter": {
              "title": "Hook Dir",
              "description": "",
              "keywords": []
            },
            "href": "/docs/hooks/hook-dir"
          }
        ]
      },
      {
        "type": "file",
        "file": "usehook1",
        "title": "useHook1",
        "matter": {
          "title": "useHook1",
          "description": "",
          "keywords": []
        },
        "href": "/docs/hooks/usehook1"
      },
      {
        "type": "file",
        "file": "usehook2",
        "title": "useHook2",
        "matter": {
          "title": "useHook2",
          "description": "",
          "keywords": []
        },
        "href": "/docs/hooks/usehook2"
      }
    ],
    "order": 3
  },
  {
    "type": "folder",
    "folder": "deep-menu",
    "title": "deep-menu",
    "path": "docs/deep-menu/",
    "items": [
      {
        "type": "folder",
        "folder": "deeper",
        "title": "deeper",
        "path": "docs/deep-menu/deeper/",
        "items": [
          {
            "type": "folder",
            "folder": "deepest",
            "title": "deepest",
            "path": "docs/deep-menu/deeper/deepest/",
            "items": [
              {
                "type": "file",
                "file": "index",
                "title": "Deepest Menü",
                "matter": {
                  "title": "Deepest Menü",
                  "description": "",
                  "keywords": []
                },
                "href": "/docs/deep-menu/deeper/deepest"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "folder",
    "folder": "ignore-case",
    "title": "ignore-case",
    "path": "docs/ignore-case/",
    "items": [
      {
        "type": "folder",
        "folder": "directory1",
        "title": "Directory Z (Modified)",
        "path": "docs/ignore-case/directory1/",
        "items": [
          {
            "type": "file",
            "file": "index",
            "title": "index",
            "matter": {},
            "href": "/docs/ignore-case/directory1"
          }
        ],
        "order": 1
      },
      {
        "type": "folder",
        "folder": "directory2",
        "title": "Directory A (Modified)",
        "path": "docs/ignore-case/directory2/",
        "items": [
          {
            "type": "file",
            "file": "index",
            "title": "File Sub 1",
            "matter": {
              "title": "File Sub 1",
              "description": "",
              "keywords": []
            },
            "href": "/docs/ignore-case/directory2/sub1"
          },
          {
            "type": "file",
            "file": "index",
            "title": "File Sub 2",
            "matter": {
              "title": "File Sub 2",
              "description": "",
              "keywords": []
            },
            "href": "/docs/ignore-case/directory2/sub2"
          },
          {
            "type": "json",
            "source": "/root/.apps/nextelements2/apps/next-docs/contents/iGnOrE-CaSe/directory2/directory.json",
            "order": null
          }
        ],
        "order": 2
      },
      {
        "type": "json",
        "source": "/root/.apps/nextelements2/apps/next-docs/contents/iGnOrE-CaSe/directory.json",
        "order": null
      },
      {
        "type": "file",
        "file": "index",
        "title": "Ignore Case",
        "matter": {
          "title": "Ignore Case",
          "description": "",
          "keywords": []
        },
        "href": "/docs/ignore-case"
      }
    ]
  },
  {
    "type": "json",
    "source": "/root/.apps/nextelements2/apps/next-docs/contents/directory.json",
    "order": null
  }
]
```

Edit the order by creating a `directory.json` in the contents-root directory for example:
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

If you want to rename a directory, you can put `"title"` in your directory.json:
```json
// contents/iGnOrE-CaSe/directory.json
{
  "directory1": {
    "order": 1,
    "title": "Directory Z (Modified)"
  },
  "directory2": {
    "order": 2,
    "title": "Directory A (Modified)"
  }
}
```