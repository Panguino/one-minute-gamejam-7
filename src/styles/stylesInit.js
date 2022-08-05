import { theme } from './theme'

export const stylesInit = `
(function() {

    const root = document.documentElement;

    ${(function variables() {
        const { colors, easings } = theme
        let cssVars = ''
        for (const [color, value] of Object.entries(colors)) {
            cssVars += ` root.style.setProperty(
                '--color-${color}',
                '${value}'
              );  `
        }       
        for (const [easing, value] of Object.entries(easings)) {
            cssVars += `root.style.setProperty(
                '--ease-${easing}',
                '${value}'
              );`
        }
        return cssVars
    })()}

    root.style.setProperty('--font-primary', '${theme.fonts.primary}');
    root.style.setProperty('--font-secondary', '${theme.fonts.secondary}');                            

})()
`
