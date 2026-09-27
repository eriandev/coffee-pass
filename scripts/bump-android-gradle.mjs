import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { Plugin } from 'release-it'

const GRADLE_FILE = fileURLToPath(new URL('../android/app/build.gradle', import.meta.url))

// [ \t] rather than \s on purpose: \s also matches \r and \n, so it would swallow
// the \r of build.gradle's CRLF line endings and leave the file with mixed line endings.
const VERSION_CODE = /^(?<indent>[ \t]*)versionCode[ \t]+(?<code>\d+)[ \t]*$/m
const VERSION_NAME = /^(?<indent>[ \t]*)versionName[ \t]+"(?<name>[^"]*)"[ \t]*$/m

class BumpAndroidGradle extends Plugin {
  static isEnabled() {
    return true
  }

  bump(version) {
    const { isDryRun } = this.config
    this.log.exec(`Bumping ${GRADLE_FILE} to ${version}`, { isDryRun })
    if (isDryRun) return

    const data = readFileSync(GRADLE_FILE, 'utf8')

    if (!VERSION_CODE.test(data) || !VERSION_NAME.test(data))
      throw new Error(`Could not find versionCode/versionName in ${GRADLE_FILE}`)

    const nextCode = Number(data.match(VERSION_CODE).groups.code) + 1
    const next = data
      .replace(VERSION_CODE, (_match, ...args) => {
        const { indent } = args.at(-1)
        return `${indent}versionCode ${nextCode}`
      })
      .replace(VERSION_NAME, (_match, ...args) => {
        const { indent } = args.at(-1)
        return `${indent}versionName "${version}"`
      })

    writeFileSync(GRADLE_FILE, next)

    this.log.info(`versionCode -> ${nextCode}, versionName -> ${version}`)
  }
}

export default BumpAndroidGradle
