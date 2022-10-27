#!/usr/bin/env node

import { roll } from "../lib/roll.js";
import parseArgs from 'minimist';

const args = parseArgs(process.argv.slice(2));

const sides = args.sides;
const dice = args.dice;
const rolls = args.rolls;

const roll_list = roll(sides, dice, rolls);

const output = { "sides":sides, "dice":dice, "rolls":rolls, "results":roll_list};

console.log(JSON.stringify(output));
