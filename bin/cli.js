#!/usr/bin/env node

import { roll } from "../lib/roll.js";
import parseArgs from 'minimist';

const args = parseArgs(process.argv.slice(2));

const sides = args.sides;
const dice = args.dice;
const rolls = args.rolls;
const output = roll(sides, dice, rolls);

console.log(JSON.stringify(output));
