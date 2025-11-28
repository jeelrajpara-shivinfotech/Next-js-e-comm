export const navbarConst = {
    cart : "Cart",
    menu : "Menu"
} as const

export const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/shop', label: 'Shop' },
] as const