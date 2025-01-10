import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JK StudyHouse',
  tagline: 'Always walking and thinking',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://programmer-jk.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/zora_story',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Programmer-JK', // Usually your GitHub org/user name.
  projectName: 'zora_story', // Usually your repo name.
  deploymentBranch : 'deploy-branch',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['en', 'ko'],
  },

  presets: [
    [      
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // editUrl: 'https://github.com/Programmer-JK/zora_story/tree/main/',
          
          remarkPlugins: [
            [require('remark-mdx'), { 
              commonmark: true,
              mdExtensions: ['.mdx', '.md']  // MDX와 MD 파일 모두 처리
            }]
          ],
          
          // MDX 파서 옵션, rehype는 HTML을 처리하는 도구
          rehypePlugins: [
            [require('@mapbox/rehype-prism'), { 
              ignoreMissing: true,  // 누락된 언어 하이라이팅 무시
            }]
          ],
          
          // 기본 플러그인 실행 전에 적용할 설정
          // beforeDefaultRemarkPlugins: [], //Markdown 처리 전에 실행할 플러그인
          // beforeDefaultRehypePlugins: [] // HTML 처리 전에 실행할 플러그인
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        // blog: {
        //   showReadingTime: true, //블로그 포스트에 예상 읽기 시간을 표시
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/Programmer-JK/zora_story',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        // theme: {
        //   customCss: './src/css/custom.css',
        // },
        // sitemap: {
        //   changefreq: 'weekly',
        //   priority: 0.5,
        //   ignorePatterns: ['/tags/**'],
        //   filename: 'sitemap.xml',
        // }
      } satisfies Preset.Options,
      
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'JK StudyHouse',
      logo: {
        alt: 'JK StudyHouse Site Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'studySidebar',
          position: 'left',
          label: 'Study',
        },
        {
          href: 'https://github.com/Programmer-JK',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://portfolio-programmer-jks-projects.vercel.app/',
          label: 'Portfolio',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Main',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Programmer-JK',
            },
            {
              label: 'Portfolio',
              href: 'https://portfolio-programmer-jks-projects.vercel.app/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ProjectJK. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'blog-sitemap',
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    ],
  ],
};

export default config;
