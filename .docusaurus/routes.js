import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/portfolio/blog',
    component: ComponentCreator('/portfolio/blog', 'fce'),
    exact: true
  },
  {
    path: '/portfolio/blog/archive',
    component: ComponentCreator('/portfolio/blog/archive', '5f2'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors',
    component: ComponentCreator('/portfolio/blog/authors', '569'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/portfolio/blog/authors/all-sebastien-lorber-articles', '108'),
    exact: true
  },
  {
    path: '/portfolio/blog/authors/yangshun',
    component: ComponentCreator('/portfolio/blog/authors/yangshun', '5d5'),
    exact: true
  },
  {
    path: '/portfolio/blog/first-blog-post',
    component: ComponentCreator('/portfolio/blog/first-blog-post', '1a5'),
    exact: true
  },
  {
    path: '/portfolio/blog/long-blog-post',
    component: ComponentCreator('/portfolio/blog/long-blog-post', '946'),
    exact: true
  },
  {
    path: '/portfolio/blog/mdx-blog-post',
    component: ComponentCreator('/portfolio/blog/mdx-blog-post', 'dbe'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags',
    component: ComponentCreator('/portfolio/blog/tags', '921'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/docusaurus',
    component: ComponentCreator('/portfolio/blog/tags/docusaurus', '972'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/facebook',
    component: ComponentCreator('/portfolio/blog/tags/facebook', '66a'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/hello',
    component: ComponentCreator('/portfolio/blog/tags/hello', 'a5e'),
    exact: true
  },
  {
    path: '/portfolio/blog/tags/hola',
    component: ComponentCreator('/portfolio/blog/tags/hola', '372'),
    exact: true
  },
  {
    path: '/portfolio/blog/welcome',
    component: ComponentCreator('/portfolio/blog/welcome', 'f8c'),
    exact: true
  },
  {
    path: '/portfolio/markdown-page',
    component: ComponentCreator('/portfolio/markdown-page', '64b'),
    exact: true
  },
  {
    path: '/portfolio/docs',
    component: ComponentCreator('/portfolio/docs', '461'),
    routes: [
      {
        path: '/portfolio/docs',
        component: ComponentCreator('/portfolio/docs', '5a5'),
        routes: [
          {
            path: '/portfolio/docs',
            component: ComponentCreator('/portfolio/docs', 'c74'),
            routes: [
              {
                path: '/portfolio/docs/category/tutorial---basics',
                component: ComponentCreator('/portfolio/docs/category/tutorial---basics', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/category/tutorial---extras',
                component: ComponentCreator('/portfolio/docs/category/tutorial---extras', 'e1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/projects/electric-skateboard',
                component: ComponentCreator('/portfolio/docs/projects/electric-skateboard', 'b5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/projects/Indoor Mapping',
                component: ComponentCreator('/portfolio/docs/projects/Indoor Mapping', 'ff5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/projects/Modular Multi Buck Boost Converter',
                component: ComponentCreator('/portfolio/docs/projects/Modular Multi Buck Boost Converter', 'fc7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/projects/Nucleo H723-ZG Education Board',
                component: ComponentCreator('/portfolio/docs/projects/Nucleo H723-ZG Education Board', 'e5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/projects/portable-soldering-station',
                component: ComponentCreator('/portfolio/docs/projects/portable-soldering-station', '121'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/projects/SSL Robot',
                component: ComponentCreator('/portfolio/docs/projects/SSL Robot', '845'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/resume',
                component: ComponentCreator('/portfolio/docs/resume', '366'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/congratulations', '513'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/create-a-blog-post', 'f91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/create-a-document', 'e33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/create-a-page', 'f2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/deploy-your-site', 'e5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/portfolio/docs/tutorial-basics/markdown-features', '6f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/portfolio/docs/tutorial-extras/manage-docs-versions', '07f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/portfolio/docs/tutorial-extras/translate-your-site', 'fb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/portfolio/',
    component: ComponentCreator('/portfolio/', '467'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
