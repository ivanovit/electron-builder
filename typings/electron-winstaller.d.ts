declare module "electron-winstaller" {
  export function createWindowsInstaller(options: any): Promise<any>

  export function convertVersion(version: string): string
}