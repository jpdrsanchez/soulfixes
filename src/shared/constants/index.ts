interface MenuItem {
  name: string
  link: string
  hasItems: boolean
  items?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    name: 'Home',
    link: '/',
    hasItems: false
  },
  {
    name: 'Services',
    link: '/services',
    hasItems: true,
    items: [
      {
        name: 'Alternative Medicines',
        link: '/alternative-medicines',
        hasItems: false
      },
      {
        name: 'Esthetic',
        link: '/esthetic',
        hasItems: false
      }
    ]
  },
  {
    name: 'Favorites',
    link: '/favorites',
    hasItems: false
  },
  {
    name: 'History',
    link: '/history',
    hasItems: false
  }
]
