export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'shadcn-docs',
      description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
      ogImage: '/hero.png',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'shadcn-docs',
      showTitle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      darkModeToggle: true,
      nav: [
        {
          title: 'Docs',
          links: [{
            title: 'Getting Started',
            to: '/getting-started',
            description: 'Start building your document with shadcn-docs-nuxt',
          }, {
            title: 'API',
            to: '/api',
            description: 'Discover the configurations and exposed APIs.',
          }],
        },
        {
          title: 'Credits',
          links: [{
            title: 'shadcn-ui',
            to: 'https://ui.shadcn.com/',
            description: 'For the beautiful component design & docs design',
            target: '_blank',
          }, {
            title: 'shadcn-vue',
            to: 'https://www.shadcn-vue.com/',
            description: 'For the vue port of shadcn-ui & some docs component source',
            target: '_blank',
          }, {
            title: 'Docus',
            to: 'https://docus.dev/',
            description: 'For inspiration & some docs component source',
            target: '_blank',
          }, {
            title: 'Nuxt Content',
            to: 'https://content.nuxt.com/',
            description: 'Content made easy for Vue Developers',
            target: '_blank',
          }],
        },
        {
          title: 'Use This Template',
          to: '/getting-started/installation',
        },
      ],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeCopyToast: true,
      codeIcon: {
        'package.json': 'vscode-icons:file-type-node',
        'tsconfig.json': 'vscode-icons:file-type-tsconfig',
        '.npmrc': 'vscode-icons:file-type-npm',
        '.editorconfig': 'vscode-icons:file-type-editorconfig',
        '.eslintrc': 'vscode-icons:file-type-eslint',
        '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
        '.eslintignore': 'vscode-icons:file-type-eslint',
        'eslint.config.js': 'vscode-icons:file-type-eslint',
        'eslint.config.mjs': 'vscode-icons:file-type-eslint',
        'eslint.config.cjs': 'vscode-icons:file-type-eslint',
        '.gitignore': 'vscode-icons:file-type-git',
        'yarn.lock': 'vscode-icons:file-type-yarn',
        '.env': 'vscode-icons:file-type-dotenv',
        '.env.example': 'vscode-icons:file-type-dotenv',
        '.vscode/settings.json': 'vscode-icons:file-type-vscode',
        'nuxt': 'vscode-icons:file-type-nuxt',
        '.nuxtrc': 'vscode-icons:file-type-nuxt',
        '.nuxtignore': 'vscode-icons:file-type-nuxt',
        'nuxt.config.js': 'vscode-icons:file-type-nuxt',
        'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
        'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
        'tailwind.config.js': 'vscode-icons:file-type-tailwind',
        'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
        'vue': 'vscode-icons:file-type-vue',
        'ts': 'vscode-icons:file-type-typescript',
        'tsx': 'vscode-icons:file-type-typescript',
        'mjs': 'vscode-icons:file-type-js',
        'cjs': 'vscode-icons:file-type-js',
        'js': 'vscode-icons:file-type-js',
        'jsx': 'vscode-icons:file-type-js',
        'md': 'vscode-icons:file-type-markdown',
        'mdc': 'vscode-icons:file-type-markdown',
        'py': 'vscode-icons:file-type-python',
        'npm': 'vscode-icons:file-type-npm',
        'pnpm': 'vscode-icons:file-type-pnpm',
        'npx': 'vscode-icons:file-type-npm',
        'yarn': 'vscode-icons:file-type-yarn',
        'bun': 'vscode-icons:file-type-bun',
        'yml': 'vscode-icons:file-type-yaml',
        'json': 'vscode-icons:file-type-json',
        'terminal': 'lucide:terminal',
      },
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [
        {
          title: 'shadcn-vue',
          to: 'https://www.shadcn-vue.com/',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
