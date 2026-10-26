import test from 'node:test';
import assert from 'node:assert/strict';
import { canUnlock } from '../dist/story.js';
import { canSearch, canAccuse, correctAccusation } from '../dist/blackthorn-data.js';
test('Case I requires all fragments in every discovery order',()=>{for(const order of ['ABC','ACB','BAC','BCA','CAB','CBA']){const clues={};for(const k of order){assert.equal(canUnlock(clues,'349'),false);clues[k]={A:3,B:4,C:9}[k]}assert.equal(canUnlock(clues,'349'),true);assert.equal(canUnlock(clues,'943'),false)}});
test('Case II search requires witness and marked financial evidence',()=>{assert.equal(canSearch({found:['gardener','finance'],rows:[]}),false);assert.equal(canSearch({found:['finance'],rows:[0]}),false);assert.equal(canSearch({found:['gardener','finance'],rows:[0]}),true)});
test('Case II accusation is gated by three deductions',()=>{assert.equal(canAccuse({deductions:['delay','door']}),false);assert.equal(canAccuse({deductions:['delay','door','lie']}),true)});
test('Accusation must identify culprit, method, motive and all supporting records',()=>{const a={suspect:'clara',method:'clock',motive:'fraud',proof:['clock','gardener','key','bell','finance','search']};assert.equal(correctAccusation(a),true);for(const bad of [{suspect:'ward'},{method:'poison'},{motive:'inheritance'},{proof:[]}])assert.equal(correctAccusation({...a,...bad}),false)});
