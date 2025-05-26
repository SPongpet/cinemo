import { useTheme } from '@mui/material/styles'

import { layoutClasses } from '../core/classes'
import { LayoutSection } from '../core/layout-section'
import { MainSection } from '../core/main-section'
import { navData } from '../nav-config-main'

import { dashboardLayoutVars } from './css-vars'
import { NavDesktop } from './nav'

import type { HeaderSectionProps } from '../core/header-section'
import type { LayoutSectionProps } from '../core/layout-section'
import type { MainSectionProps } from '../core/main-section'
import type { Breakpoint } from '@mui/material/styles'

type LayoutBaseProps = Pick<LayoutSectionProps, 'sx' | 'children' | 'cssVars'>

export type DashboardLayoutProps = LayoutBaseProps & {
  layoutQuery?: Breakpoint
  slotProps?: {
    header?: HeaderSectionProps
    main?: MainSectionProps
  }
}

export function MainLayout({ sx, cssVars, children, slotProps, layoutQuery = 'lg' }: DashboardLayoutProps) {
  const theme = useTheme()

  const renderFooter = () => null

  const renderMain = () => <MainSection {...slotProps?.main}>{children}</MainSection>

  return (
    <LayoutSection
      sidebarSection={<NavDesktop data={navData} layoutQuery={layoutQuery} workspaces={[]} />}
      footerSection={renderFooter()}
      cssVars={{ ...dashboardLayoutVars(theme), ...cssVars }}
      sx={[
        {
          [`& .${layoutClasses.sidebarContainer}`]: {
            [theme.breakpoints.up(layoutQuery)]: {
              pl: 'var(--layout-nav-vertical-width)',
              transition: theme.transitions.create(['padding-left'], {
                easing: 'var(--layout-transition-easing)',
                duration: 'var(--layout-transition-duration)',
              }),
            },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {renderMain()}
    </LayoutSection>
  )
}
