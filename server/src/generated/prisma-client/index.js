"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Session",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Map",
    embedded: false
  },
  {
    name: "Geometry",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "Viewport",
    embedded: false
  },
  {
    name: "NorthEast",
    embedded: false
  },
  {
    name: "SouthWest",
    embedded: false
  },
  {
    name: "PlusCode",
    embedded: false
  },
  {
    name: "Feature",
    embedded: false
  },
  {
    name: "GeoPoint",
    embedded: false
  },
  {
    name: "Goal",
    embedded: false
  },
  {
    name: "Days",
    embedded: false
  },
  {
    name: "Progress",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/zareef-baksh/bcParks/dev`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
