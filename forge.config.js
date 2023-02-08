process.env.GITHUB_TOKEN = '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';
module.exports = {
  packagerConfig: {
    icon: './assets/icon/icon' // no file extension required
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        iconUrl: 'https://raw.githubusercontent.com/electron/fiddle/0119f0ce697f5ff7dec4fe51f17620c78cfd488b/assets/icons/fiddle.ico',
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: './assets/icon/icon.ico',


        name: 'icode-run',
        authors: 'tianyanrong',
        // exe: 'electron-fiddle.exe',
        // loadingGif: './assets/loading.gif',
        noMsi: true,
        // setupExe: `electron-fiddle-${version}-win32-${arch}-setup.exe`,
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        format: 'ULFO',
        icon: './assets/icon/icon.icns'
      }
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'icode-run',
          name: 'app',
        },
        prerelease: true,
        //draft: true,
      },
    },
    
  ],
};
