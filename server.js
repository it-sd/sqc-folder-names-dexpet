const assert = require("assert")

const newFolderName = function (folders) {
  let nthFolder = 0

  for (let i = 0; i < folders.length; i++) {
    console.log(folders.at(i))
    if (folders.at(i) === 'New Folder' || folders.at(i) === 'New Folder ') {
      nthFolder++
    } else if (folders.at(i) === 'New Folder (' + nthFolder + ')') {
      nthFolder++
    }
  }
  console.log(folders.length)
  if (nthFolder === 0) {
    folders.push('New Folder')
    console.log(folders.length)
  } else if (nthFolder === folders.length) {
    nthFolder++
    folders.push('New Folder (' + nthFolder + ')')
    console.log(folders.length)
  } else {
    folders.push('New Folder (' + nthFolder + ')')
    console.log(folders.length)
  }
  if (folders.length === 0) {
    folders.push('New Folder')
  }
  console.log(folders.length)
}

newFolderName([])
newFolderName(['a folder', 'new folder'])
newFolderName(['New Folder (1)', 'New Folder (2)', 'New Folder (3)'])
newFolderName(['Documents', 'New Folder (5)', 'New Folder'])
newFolderName(['New Folder (2)', 'New Folder'])

module.exports = { newFolderName }
