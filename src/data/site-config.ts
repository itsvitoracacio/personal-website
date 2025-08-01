export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string[];
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    active?: boolean;
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://vitoracacio.com',
    title: 'Vitor Acacio',
    description:
        'I share insights from leading international expansion at a tech startup, plus lessons from 10+ years in marketing across eCommerce, membership platforms, and B2B SaaS.',
    image: {
        src: '',
        alt: ''
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Work blog',
            href: '/blog'
        }
        // {
        //     text: 'Thoughts',
        //     href: '/thoughts'
        // },
        // {
        //     text: 'Now',
        //     href: '/now'
        // }
    ],
    footerNavLinks: [
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/vitoracacio'
        }
        // {
        //     text: 'YouTube',
        //     href: 'https://youtube.com/'
        // }
    ],
    subscribe: {
        active: false,
        title: '',
        text: '',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
