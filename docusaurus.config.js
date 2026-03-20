// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Microrrede UFTM',
  tagline: 'Plataforma técnica de documentação da microrrede experimental',
  favicon: 'img/logo-nepsel.jpeg',

  future: {
    v4: true,
  },

  url: 'https://gabrielfbot.github.io',
  baseUrl: '/microrrede-uftm/',

  organizationName: 'gabrielfbot',
  projectName: 'microrrede-uftm',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo-nepsel.jpeg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Microrrede UFTM',
      logo: {
        alt: 'Logo NEPSEL',
        src: 'img/logo-nepsel.jpeg',
      },
      items: [
        {
          to: '/',
          label: 'Início',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          href: 'https://github.com/gabrielfbot/microrrede-uftm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Visão Geral',
              to: '/docs/Microrrede/visao-geral',
            },
            {
              label: 'Arquitetura',
              to: '/docs/Microrrede/arquitetura',
            },
            {
              label: 'Fotovoltaico',
              to: '/docs/Microrrede/Subsistemas/fotovoltaico',
            },
            {
              label: 'Baterias',
              to: '/docs/Microrrede/Subsistemas/baterias',
            },
            {
              label: 'Supervisório',
              to: '/docs/Microrrede/Subsistemas/supervisorio',
            },
          ],
        },
        {
          title: 'Projeto',
          items: [
            {
              label: 'Repositório GitHub',
              href: 'https://github.com/gabrielfbot/microrrede-uftm',
            },
          ],
        },
        {
          title: 'Institucional',
          items: [
            {
              label: 'UFTM',
              href: 'https://uftm.edu.br',
            },
            {
              label: 'ICTE',
              href: '#',
            },
            {
              label: 'NEPSEL',
              href: '#',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Microrrede UFTM | ICTE | NEPSEL`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;