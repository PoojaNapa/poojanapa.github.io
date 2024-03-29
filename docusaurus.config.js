// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Learn Everyday",
  favicon: '/learn_logo.png',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'PoojaNapa',
  projectName: 'poojanapa.github.io',
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // showLastUpdateTime: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          src: '/learn_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Notes/hello',
            position: 'left',
            label: 'Notes', // courses and notes
          },
          {
            type: 'doc',
            docId: 'Projects/project',
            position: 'left',
            label: 'Projects', // project descriptions and demo?
          },
          {
            type: 'doc',
            docId: 'Summaries/summary',
            position: 'left',
            label: 'Summaries', // Summarize arXiv papers
          },
          {
            type: 'doc',
            docId: 'Flowcharts/flowchart',
            position: 'left',
            label: 'Flowcharts', // Pictorial representation of articles/topics/concepts or in the form of flowcharts
          },
          {to: '/blog', label: 'Blog', position: 'left'}, // Write up about different topics
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/pooja-np/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PoojaNapa',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
