import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [


  {
    text: '我的博客',
    link: '/blogs/index',
    activeMatch: '/blogs/'
  },
  {
    text: '导航',
    link: '/nav',
    activeMatch: '/nav'
  },
  {
    text: '我的标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '我的归档',
    link: '/archives',
    activeMatch: '/archives'
  },
  {
    text: '关于',
    link: '/about/me',
    activeMatch: '/about/me',// 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  }
]
