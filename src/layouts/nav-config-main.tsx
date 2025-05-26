import { Label } from '@components/label'
import { SvgColor } from '@components/svg-color'

// ----------------------------------------------------------------------

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} />

export type NavItem = {
  title: string
  path: string
  icon: React.ReactNode
  info?: React.ReactNode
}

export const navData = [
  {
    title: 'Movie Finder',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'My Favorite',
    path: '/my-favorite',
    icon: icon('ic-blog'),
  },
]
