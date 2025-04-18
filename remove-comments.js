// Script to remove comments from schema for more clarity
import fs from "fs";

const readFileLines = filename =>
    fs
      .readFileSync(filename)
      .toString('UTF8')
      .split('\n')
      .filter(l => !l.match("#"));

const createNewFile = (filename, data) => fs.writeFileSync(filename, data)

createNewFile("schema-no-comments.graphql", readFileLines("schema.graphql").join("\n"))