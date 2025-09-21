module.exports.readVersion = function (contents) {
  const match = contents.match(/versionName\s+"([^"]+)"/)
  if (!match) throw new Error('build.gradle versionName not found')
  return match[1]
}

module.exports.writeVersion = function (contents, version) {
  const codeMatch = contents.match(/versionCode\s+(\d+)/)
  if (!codeMatch) throw new Error('versionCode not found')
  const newVersionCode = codeMatch ? parseInt(codeMatch[1], 10) + 1 : 1

  return contents
    .replace(/versionCode\s+\d+/, `versionCode ${newVersionCode}`)
    .replace(/versionName\s+"[^"]+"/, `versionName "${version}"`)
}
