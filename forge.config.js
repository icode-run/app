process.env.GITHUB_TOKEN = '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';
const packageJson = require('./package.json');
const { version } = packageJson;

module.exports = {
  packagerConfig: {
    icon: './assets/icon/icon' // no file extension required
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32'],
      config: (arch) => ({
        name: 'icode-run',
        authors: 'tianyanrong',
        exe: 'icode-run.exe',
        iconUrl:
          'https://raw.githubusercontent.com/electron/fiddle/0119f0ce697f5ff7dec4fe51f17620c78cfd488b/assets/icons/fiddle.ico',
        // loadingGif: './assets/loading.gif',
        noMsi: true,
        setupExe: `icode-run-${version}-win32-${arch}-setup.exe`,
        setupIcon: './assets/icon/icon.ico',
        // certificateFile: process.env['WINDOWS_CODESIGN_FILE'],
        // certificatePassword: process.env['WINDOWS_CODESIGN_PASSWORD'],
      }),
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
