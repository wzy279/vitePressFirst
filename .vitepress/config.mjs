import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '示例', link: '/markdown-examples' },
      { text: '322内容', link: '/JumpServer(开源堡垒机)' }
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '322内容',
        items: [
          { text: 'JumpServer(开源堡垒机)', link: '/JumpServer(开源堡垒机)' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wzy279' }
    ]
  }
})
