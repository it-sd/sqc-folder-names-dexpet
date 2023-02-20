const assert = require("assert")

const newFolderName = function (folders) {
  assert(Array.isArray(folders), 'Error, Expected an array of folder names')

  nthFolder = 0;

  for (i = 0; i < folders.length; i++) {
    if (folders.at(i) == 'New Folder' || folders.at(i) == 'New Folder(' + nthFolder + ')' || folders.at(i) == 'New Folder ' || folders.at(i) == 'New Folder (' + nthFolder + ')') {
      console.log(folders.at(i))
      nthFolder++
    }
  }
  console.log(folders.length)
  if (nthFolder == 0) {
    folders.push('New Folder')
    console.log(folders.length)
  } else if (nthFolder == folders.length) {
    nthFolder++
    folders.push('New Folder ('+nthFolder+')')
    console.log(folders.length)
  } else {
    folders.push('New Folder ('+nthFolder+')')
  }
  for (i = 0; i < folders.length; i++) {
    console.log(folders.at(i))
  }
}

folderz = [
  'New Folder (4)',
  'New Folder (2)',
  'New Folder',
  'New Folder (3)',
  'New Folder (6)'
]

newFolderName(folderz)