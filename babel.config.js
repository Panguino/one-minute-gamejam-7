module.exports = function (api) {
    const isServer = api.caller((caller) => caller?.isServer)
    const isCallerDevelopment = api.caller((caller) => caller?.isDev)

    const presets = [
        [
            'next/babel',
            {
                'preset-react': {
                    //set from classic to automatic because of storybook
                    runtime: 'automatic'
                }
            }
        ]
    ]
    const plugins = [['babel-plugin-styled-components', { ssr: true, displayName: true }]]

    return { presets, plugins }
}
