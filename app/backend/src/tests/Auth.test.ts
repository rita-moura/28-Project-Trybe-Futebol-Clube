import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
const { expect } = chai;

import {generateToken} from '../utils/auth';
import * as Token from 'jsonwebtoken';

chai.use(chaiHttp);

describe('Testa a função generateToken', () => {
  it('Deve retornar o token gerado com sucesso', () => {
    // @ts-ignore
    sinon.stub(Token, 'sign').returns('token');

    expect(generateToken(1)).to.be.equal('token');
  });
});